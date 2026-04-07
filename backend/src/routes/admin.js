import { Router } from "express";

import { asyncHandler } from "../lib/asyncHandler.js";
import { getDb } from "../lib/database.js";
import { requireAuth, requireRole } from "../middleware/authenticate.js";

const router = Router();

router.use(requireAuth, requireRole("admin"));

function toDateKey(isoDate) {
  return String(isoDate || "").slice(0, 10);
}

function buildDateSeries(days) {
  const labels = [];
  const now = new Date();

  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    labels.push(d.toISOString().slice(0, 10));
  }

  return labels;
}

router.get(
  "/dashboard",
  asyncHandler(async (req, res) => {
    const db = await getDb();
    const daysParam = Number(req.query.days || 7);
    const chartDays = Number.isFinite(daysParam) && daysParam > 0 ? Math.min(daysParam, 90) : 7;

    const [
      { count: totalUsers },
      { count: activeSubscriptions },
      { revenue },
      { count: pendingVerifications },
      { count: verifiedProfiles },
      { count: supportTicketCount },
      { count: openTicketCount },
    ] = await Promise.all([
      db.get("SELECT COUNT(*) AS count FROM users WHERE role = 'user'"),
      db.get("SELECT COUNT(*) AS count FROM subscriptions WHERE status = 'active'"),
      db.get("SELECT COALESCE(SUM(amount), 0) AS revenue FROM subscriptions"),
      db.get("SELECT COUNT(*) AS count FROM profiles WHERE verified = 0"),
      db.get("SELECT COUNT(*) AS count FROM profiles WHERE verified = 1"),
      db.get("SELECT COUNT(*) AS count FROM support_tickets"),
      db.get("SELECT COUNT(*) AS count FROM support_tickets WHERE LOWER(status) IN ('open', 'pending')"),
    ]);

    const [recentUsers, recentSubscriptions, recentTickets, usersByDateRows, ticketsByStatusRows, revenueByPlanRows] = await Promise.all([
      db.all(`SELECT id, name, email, created_at FROM users WHERE role = 'user' ORDER BY created_at DESC LIMIT 5`),
      db.all(`SELECT id, plan_name, amount, status, created_at FROM subscriptions ORDER BY created_at DESC LIMIT 5`),
      db.all(`SELECT id, subject, status, created_at FROM support_tickets ORDER BY created_at DESC LIMIT 5`),
      db.all(
        `SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS count
         FROM users
         WHERE role = 'user' AND date(created_at) >= date('now', ?)
         GROUP BY substr(created_at, 1, 10)
         ORDER BY day ASC`,
        [`-${chartDays - 1} days`],
      ),
      db.all(
        `SELECT COALESCE(NULLIF(status, ''), 'unknown') AS status, COUNT(*) AS count
         FROM support_tickets
         GROUP BY COALESCE(NULLIF(status, ''), 'unknown')
         ORDER BY count DESC`,
      ),
      db.all(
        `SELECT COALESCE(NULLIF(plan_name, ''), 'Unknown Plan') AS planName,
                COUNT(*) AS subscriptions,
                COALESCE(SUM(amount), 0) AS revenue
         FROM subscriptions
         GROUP BY COALESCE(NULLIF(plan_name, ''), 'Unknown Plan')
         ORDER BY revenue DESC`,
      ),
    ]);

    const userCountByDate = new Map(usersByDateRows.map((row) => [toDateKey(row.day), Number(row.count)]));
    const labels = buildDateSeries(chartDays);
    const userGrowthSeries = labels.map((day) => ({ day, users: userCountByDate.get(day) || 0 }));

    const recentActivities = [
      ...recentUsers.map((item) => ({ type: "user", message: `New user registration: ${item.name}`, time: item.created_at })),
      ...recentSubscriptions.map((item) => ({ type: "payment", message: `Payment received: ₹${item.amount ?? 0} (${item.plan_name} Plan)`, time: item.created_at })),
      ...recentTickets.map((item) => ({ type: "support", message: `Support ticket created: ${item.subject}`, time: item.created_at })),
    ]
      .sort((a, b) => String(b.time).localeCompare(String(a.time)))
      .slice(0, 10);

    const totalRevenueNumber = Number(revenue) || 0;

    res.json({
      success: true,
      data: {
        stats: [
          { title: "Total Users", value: totalUsers, change: "+0%" },
          { title: "Active Subscriptions", value: activeSubscriptions, change: "+0%" },
          { title: "Revenue (Total)", value: `₹${totalRevenueNumber.toLocaleString("en-IN")}`, change: "+0%" },
          { title: "Pending Verifications", value: pendingVerifications, change: "+0%" },
        ],
        kpis: {
          totalUsers,
          activeSubscriptions,
          totalRevenue: totalRevenueNumber,
          pendingVerifications,
          verifiedProfiles,
          supportTicketCount,
          openTicketCount,
        },
        charts: {
          userGrowth: {
            days: chartDays,
            series: userGrowthSeries,
          },
          ticketsByStatus: ticketsByStatusRows.map((row) => ({
            status: row.status,
            count: Number(row.count),
          })),
          revenueByPlan: revenueByPlanRows.map((row) => ({
            planName: row.planName,
            subscriptions: Number(row.subscriptions),
            revenue: Number(row.revenue),
          })),
        },
        recent: {
          users: recentUsers,
          subscriptions: recentSubscriptions,
          tickets: recentTickets,
        },
        recentActivities,
        supportTicketCount,
      },
    });
  }),
);

router.get(
  "/users",
  asyncHandler(async (_req, res) => {
    const db = await getDb();
    const rows = await db.all(
      `SELECT u.id, u.name, u.email, u.phone, p.city, p.state, p.verified,
              COALESCE(s.plan_name, 'Free') AS subscription
       FROM users u
       LEFT JOIN profiles p ON p.user_id = u.id
       LEFT JOIN subscriptions s ON s.id = (
         SELECT s2.id FROM subscriptions s2 WHERE s2.user_id = u.id ORDER BY s2.created_at DESC LIMIT 1
       )
       WHERE u.role = 'user'
       ORDER BY u.created_at DESC`,
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows.map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        city: row.city,
        state: row.state,
        verified: Boolean(row.verified),
        subscription: row.subscription,
      })),
    });
  }),
);

router.get(
  "/verifications",
  asyncHandler(async (_req, res) => {
    const db = await getDb();
    const rows = await db.all(
      `SELECT id, user_id, name, city, state FROM profiles WHERE verified = 0 ORDER BY updated_at DESC`,
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows.map((row) => ({
        id: `vq-${row.id}`,
        profileId: row.id,
        userId: row.user_id,
        name: row.name,
        city: row.city,
        state: row.state,
        type: "Profile verification",
        status: "pending",
      })),
    });
  }),
);

export default router;