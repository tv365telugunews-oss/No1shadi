import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CreditCard,
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  Award,
} from "lucide-react";

export default function SubscriptionManagement() {
  const navigate = useNavigate();

  const subscriptionStats = [
    {
      plan: "Silver",
      activeUsers: 2456,
      revenue: "₹6.1L",
      growth: "+8.2%",
      color: "#9CA3AF",
    },
    {
      plan: "Gold",
      activeUsers: 3845,
      revenue: "₹15.4L",
      growth: "+12.5%",
      color: "#D4AF37",
    },
    {
      plan: "Diamond",
      activeUsers: 1834,
      revenue: "₹9.2L",
      growth: "+18.7%",
      color: "#3B82F6",
    },
    {
      plan: "Platinum",
      activeUsers: 1210,
      revenue: "₹7.3L",
      growth: "+22.3%",
      color: "#9333EA",
    },
  ];

  const recentSubscriptions = [
    {
      id: 1,
      user: "Priya Sharma",
      plan: "Platinum",
      amount: "₹5,999",
      date: "Feb 20, 2026",
      duration: "12 Months",
      status: "active",
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      plan: "Gold",
      amount: "₹3,999",
      date: "Feb 20, 2026",
      duration: "6 Months",
      status: "active",
    },
    {
      id: 3,
      user: "Lakshmi Reddy",
      plan: "Diamond",
      amount: "₹4,999",
      date: "Feb 19, 2026",
      duration: "12 Months",
      status: "active",
    },
    {
      id: 4,
      user: "Venkat Rao",
      plan: "Silver",
      amount: "₹2,499",
      date: "Feb 19, 2026",
      duration: "3 Months",
      status: "expiring",
    },
    {
      id: 5,
      user: "Sai Priya",
      plan: "Gold",
      amount: "₹3,999",
      date: "Feb 18, 2026",
      duration: "6 Months",
      status: "active",
    },
  ];

  const expiringSubscriptions = [
    {
      user: "Krishna Murthy",
      plan: "Platinum",
      expiryDate: "Feb 25, 2026",
      daysLeft: 5,
    },
    {
      user: "Divya Lakshmi",
      plan: "Gold",
      expiryDate: "Feb 28, 2026",
      daysLeft: 8,
    },
    {
      user: "Srinivas Rao",
      plan: "Diamond",
      expiryDate: "Mar 2, 2026",
      daysLeft: 10,
    },
  ];

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Platinum":
        return "bg-purple-100 text-purple-700";
      case "Diamond":
        return "bg-blue-100 text-blue-700";
      case "Gold":
        return "bg-yellow-100 text-yellow-700";
      case "Silver":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "expiring":
        return "bg-orange-100 text-orange-700";
      case "expired":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Header */}
      <div className="bg-white border-b-2 border-[#D4AF37]/20 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="p-2 rounded-lg hover:bg-[#7B1E3A]/5"
            >
              <ArrowLeft className="w-6 h-6 text-[#7B1E3A]" />
            </button>
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #FFC700 100%)",
                }}
              >
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Subscription Management
                </h1>
                <p className="text-sm text-[#004953]/60">Manage plans and subscriptions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "#7B1E3A" }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-[#7B1E3A] mb-1">8,945</h3>
            <p className="text-sm text-[#004953]/70">Total Active Subscribers</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "#00A86B" }}
              >
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-1">₹45.6L</h3>
            <p className="text-sm text-[#004953]/70">Monthly Revenue</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "#FFA500" }}
              >
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold text-orange-600">Urgent</span>
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-1">234</h3>
            <p className="text-sm text-[#004953]/70">Expiring This Month</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <Award className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-[#D4AF37] mb-1">78%</h3>
            <p className="text-sm text-[#004953]/70">Renewal Rate</p>
          </div>
        </div>

        {/* Plan-wise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Plan-wise Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subscriptionStats.map((stat, index) => (
              <motion.div
                key={stat.plan}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold" style={{ color: stat.color }}>
                    {stat.plan}
                  </h4>
                  <span className="text-sm font-bold text-green-600">{stat.growth}</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-[#004953]/60">Active Users</p>
                    <p className="text-2xl font-bold text-[#7B1E3A]">{stat.activeUsers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#004953]/60">Revenue</p>
                    <p className="text-xl font-bold" style={{ color: stat.color }}>
                      {stat.revenue}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Subscriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Recent Subscriptions
          </h3>
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#7B1E3A]/5 border-b-2 border-[#D4AF37]/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">User</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Plan</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4AF37]/10">
                  {recentSubscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-[#FFF8E7] transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-[#004953]">{sub.user}</p>
                        <p className="text-xs text-[#004953]/60">ID: {sub.id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlanColor(sub.plan)}`}>
                          {sub.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-[#00A86B]">{sub.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#004953]/70">{sub.duration}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#004953]/70">{sub.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(sub.status)}`}>
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Expiring Subscriptions Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Expiring Soon
            </h3>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              Renewal Reminder Needed
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {expiringSubscriptions.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 border-2 border-orange-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-[#7B1E3A] mb-1">{sub.user}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPlanColor(sub.plan)}`}>
                      {sub.plan}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="px-2 py-1 rounded-lg bg-orange-100">
                      <p className="text-2xl font-bold text-orange-700">{sub.daysLeft}</p>
                      <p className="text-xs text-orange-600">days left</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#004953]/70">
                  Expires on: <span className="font-semibold text-[#004953]">{sub.expiryDate}</span>
                </p>
                <button className="w-full mt-4 h-10 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold transition-colors">
                  Send Renewal Reminder
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

