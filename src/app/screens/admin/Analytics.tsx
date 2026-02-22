import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Users,
  Heart,
  DollarSign,
  Calendar,
} from "lucide-react";

export default function Analytics() {
  const navigate = useNavigate();

  const analyticsData = [
    {
      title: "User Growth",
      current: "15,234",
      previous: "13,567",
      change: "+12.3%",
      icon: Users,
      color: "#7B1E3A",
    },
    {
      title: "Revenue",
      current: "₹45.6L",
      previous: "₹39.5L",
      change: "+15.4%",
      icon: DollarSign,
      color: "#00A86B",
    },
    {
      title: "Matches Made",
      current: "8,945",
      previous: "7,432",
      change: "+20.4%",
      icon: Heart,
      color: "#C41E3A",
    },
    {
      title: "Active Users",
      current: "12,456",
      previous: "11,234",
      change: "+10.9%",
      icon: TrendingUp,
      color: "#D4AF37",
    },
  ];

  const monthlyData = [
    { month: "Jan", users: 1200, revenue: 380000, matches: 450 },
    { month: "Feb", users: 1500, revenue: 456000, matches: 520 },
    { month: "Mar", users: 1800, revenue: 512000, matches: 640 },
    { month: "Apr", users: 2100, revenue: 598000, matches: 780 },
    { month: "May", users: 2400, revenue: 645000, matches: 890 },
    { month: "Jun", users: 2800, revenue: 723000, matches: 1020 },
  ];

  const userDemographics = [
    { ageGroup: "21-25", percentage: 25, count: 3809 },
    { ageGroup: "26-30", percentage: 35, count: 5332 },
    { ageGroup: "31-35", percentage: 22, count: 3351 },
    { ageGroup: "36-40", percentage: 12, count: 1828 },
    { ageGroup: "41+", percentage: 6, count: 914 },
  ];

  const topCities = [
    { city: "Hyderabad", users: 4256, percentage: 28 },
    { city: "Vijayawada", users: 3142, percentage: 21 },
    { city: "Visakhapatnam", users: 2834, percentage: 19 },
    { city: "Guntur", users: 1876, percentage: 12 },
    { city: "Tirupati", users: 1523, percentage: 10 },
    { city: "Others", users: 1603, percentage: 10 },
  ];

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
                  background: "linear-gradient(135deg, #004953 0%, #006B7D 100%)",
                }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Analytics & Reports
                </h1>
                <p className="text-sm text-[#004953]/60">Detailed insights and metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {analyticsData.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: metric.color }}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-green-600">{metric.change}</span>
              </div>
              <h3 className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                {metric.current}
              </h3>
              <p className="text-sm text-[#004953]/70">{metric.title}</p>
              <p className="text-xs text-[#004953]/50 mt-2">Previous: {metric.previous}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Monthly Trends
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#7B1E3A] text-white text-sm font-semibold">
                6 Months
              </button>
              <button className="px-4 py-2 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] text-sm font-semibold">
                1 Year
              </button>
            </div>
          </div>
          
          {/* Simple Bar Chart Visualization */}
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#004953] w-12">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-8 bg-[#FFF8E7] rounded-lg overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.users / 3000) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="h-full rounded-lg"
                        style={{
                          background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#7B1E3A]">{data.users.toLocaleString()}</p>
                    <p className="text-xs text-[#004953]/60">users</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Demographics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
          >
            <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              User Demographics by Age
            </h3>
            <div className="space-y-4">
              {userDemographics.map((demo, index) => (
                <div key={demo.ageGroup} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#004953]">{demo.ageGroup} years</span>
                    <span className="text-sm text-[#004953]/70">{demo.count.toLocaleString()} users ({demo.percentage}%)</span>
                  </div>
                  <div className="h-3 bg-[#FFF8E7] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${demo.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${
                          index === 0 ? "#7B1E3A" :
                          index === 1 ? "#D4AF37" :
                          index === 2 ? "#00A86B" :
                          index === 3 ? "#004953" :
                          "#C41E3A"
                        } 0%, ${
                          index === 0 ? "#A0002A" :
                          index === 1 ? "#FFC700" :
                          index === 2 ? "#00C851" :
                          index === 3 ? "#006B7D" :
                          "#E03B52"
                        } 100%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Cities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
          >
            <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Top Cities
            </h3>
            <div className="space-y-4">
              {topCities.map((city, index) => (
                <div key={city.city} className="flex items-center justify-between p-4 rounded-xl bg-[#FFF8E7] hover:bg-[#D4AF37]/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B1E3A] to-[#A0002A] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#004953]">{city.city}</p>
                      <p className="text-xs text-[#004953]/60">{city.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 rounded-full bg-[#7B1E3A]/10">
                      <p className="text-sm font-bold text-[#7B1E3A]">{city.percentage}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-[#7B1E3A]" />
              <h4 className="font-bold text-[#7B1E3A]">Today's Stats</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">New Registrations</span>
                <span className="font-bold text-[#7B1E3A]">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">Matches Made</span>
                <span className="font-bold text-[#C41E3A]">128</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">Revenue</span>
                <span className="font-bold text-[#00A86B]">₹1.8L</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#C41E3A]" />
              <h4 className="font-bold text-[#7B1E3A]">Success Stories</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">This Month</span>
                <span className="font-bold text-[#C41E3A]">234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">This Year</span>
                <span className="font-bold text-[#C41E3A]">2,456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">All Time</span>
                <span className="font-bold text-[#C41E3A]">8,932</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-[#00A86B]" />
              <h4 className="font-bold text-[#7B1E3A]">Engagement Rate</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">Daily Active Users</span>
                <span className="font-bold text-[#00A86B]">8,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">Avg. Session Time</span>
                <span className="font-bold text-[#00A86B]">18 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#004953]/70">Messages Sent</span>
                <span className="font-bold text-[#00A86B]">12.5K</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

