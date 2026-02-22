import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Users,
  UserCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Heart,
  Shield,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart3,
  FileText,
  MessageSquare,
  Flag,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  const stats = [
    {
      title: "Total Users",
      value: "15,234",
      change: "+12.5%",
      icon: Users,
      color: "#7B1E3A",
      bgColor: "bg-[#7B1E3A]/10",
    },
    {
      title: "Active Subscriptions",
      value: "8,945",
      change: "+8.2%",
      icon: CheckCircle,
      color: "#00A86B",
      bgColor: "bg-[#00A86B]/10",
    },
    {
      title: "Revenue (This Month)",
      value: "₹45.6L",
      change: "+15.3%",
      icon: DollarSign,
      color: "#D4AF37",
      bgColor: "bg-[#D4AF37]/10",
    },
    {
      title: "Pending Verifications",
      value: "124",
      change: "-5.4%",
      icon: AlertCircle,
      color: "#FFA500",
      bgColor: "bg-[#FFA500]/10",
    },
    {
      title: "Success Stories",
      value: "2,456",
      change: "+20.1%",
      icon: Heart,
      color: "#C41E3A",
      bgColor: "bg-[#C41E3A]/10",
    },
    {
      title: "Reports Filed",
      value: "38",
      change: "-12.8%",
      icon: Flag,
      color: "#FF4444",
      bgColor: "bg-[#FF4444]/10",
    },
  ];

  const quickActions = [
    {
      title: "User Management",
      description: "View and manage all users",
      icon: Users,
      route: "/admin/users",
      color: "#7B1E3A",
    },
    {
      title: "Verification Queue",
      description: "Approve pending profiles",
      icon: UserCheck,
      route: "/admin/verifications",
      color: "#00A86B",
    },
    {
      title: "Subscriptions",
      description: "Manage plans & payments",
      icon: CreditCard,
      route: "/admin/subscriptions",
      color: "#D4AF37",
    },
    {
      title: "Analytics",
      description: "View detailed reports",
      icon: BarChart3,
      route: "/admin/analytics",
      color: "#004953",
    },
    {
      title: "Content Management",
      description: "Manage app content",
      icon: FileText,
      route: "/admin/content",
      color: "#7B1E3A",
    },
    {
      title: "Support Tickets",
      description: "Handle user queries",
      icon: MessageSquare,
      route: "/admin/support",
      color: "#FFA500",
    },
  ];

  const recentActivities = [
    {
      type: "user",
      message: "New user registration: Priya Sharma",
      time: "2 minutes ago",
      icon: Users,
      color: "#7B1E3A",
    },
    {
      type: "payment",
      message: "Payment received: ₹5,999 (Platinum Plan)",
      time: "15 minutes ago",
      icon: DollarSign,
      color: "#00A86B",
    },
    {
      type: "verification",
      message: "Profile verified: Rajesh Kumar",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "#00A86B",
    },
    {
      type: "report",
      message: "New report filed against profile ID: 12345",
      time: "2 hours ago",
      icon: Flag,
      color: "#FF4444",
    },
    {
      type: "subscription",
      message: "Subscription renewed: Gold Plan",
      time: "3 hours ago",
      icon: CreditCard,
      color: "#D4AF37",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#D4AF37]/20 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#7B1E3A]/5"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  }}
                >
                  <Shield className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h1
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                  >
                    Admin Panel
                  </h1>
                  <p className="text-xs text-[#004953]/60">No<span className="text-sm">1</span> shadi.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/admin/settings")}
                className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7B1E3A] text-white hover:bg-[#A0002A] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Welcome back, Admin
          </h2>
          <p className="text-[#004953]/70">Here's what's happening with No1 shadi.com today</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`${stat.bgColor} rounded-2xl p-6 border-2 border-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-sm font-bold ${
                    stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </h3>
              <p className="text-sm text-[#004953]/70">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => navigate(action.route)}
                className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-lg transition-all text-left group"
              >
                <div
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <action.icon className="w-6 h-6" style={{ color: action.color }} />
                </div>
                <h4 className="text-lg font-bold text-[#7B1E3A] mb-1 group-hover:text-[#A0002A] transition-colors">
                  {action.title}
                </h4>
                <p className="text-sm text-[#004953]/70">{action.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Recent Activities
          </h3>
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 divide-y divide-[#D4AF37]/10">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="p-4 hover:bg-[#FFF8E7] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <activity.icon className="w-5 h-5" style={{ color: activity.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#004953]">{activity.message}</p>
                    <p className="text-xs text-[#004953]/60 mt-1">{activity.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

