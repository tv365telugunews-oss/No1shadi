import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
  Filter,
  Users,
  Ban,
  CheckCircle,
  XCircle,
  Eye,
  Mail,
  Phone,
  MoreVertical,
  Download,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function UserManagement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);

  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      subscription: "Platinum",
      status: "active",
      verified: true,
      joinDate: "Jan 15, 2026",
      matches: 45,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      phone: "+91 98765 43211",
      subscription: "Gold",
      status: "active",
      verified: true,
      joinDate: "Jan 12, 2026",
      matches: 32,
    },
    {
      id: 3,
      name: "Lakshmi Reddy",
      email: "lakshmi.r@email.com",
      phone: "+91 98765 43212",
      subscription: "Diamond",
      status: "active",
      verified: false,
      joinDate: "Jan 10, 2026",
      matches: 28,
    },
    {
      id: 4,
      name: "Venkat Rao",
      email: "venkat.rao@email.com",
      phone: "+91 98765 43213",
      subscription: "Silver",
      status: "suspended",
      verified: true,
      joinDate: "Jan 8, 2026",
      matches: 15,
    },
    {
      id: 5,
      name: "Sai Priya",
      email: "sai.priya@email.com",
      phone: "+91 98765 43214",
      subscription: "Gold",
      status: "active",
      verified: true,
      joinDate: "Jan 5, 2026",
      matches: 38,
    },
    {
      id: 6,
      name: "Krishna Murthy",
      email: "krishna.m@email.com",
      phone: "+91 98765 43215",
      subscription: "Platinum",
      status: "inactive",
      verified: true,
      joinDate: "Dec 28, 2025",
      matches: 52,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "inactive":
        return "bg-gray-100 text-gray-700";
      case "suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
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
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                }}
              >
                <Users className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  User Management
                </h1>
                <p className="text-sm text-[#004953]/60">Manage all registered users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Total Users</p>
                <p className="text-2xl font-bold text-[#7B1E3A]">15,234</p>
              </div>
              <Users className="w-8 h-8 text-[#7B1E3A]/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Active</p>
                <p className="text-2xl font-bold text-green-600">12,456</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Inactive</p>
                <p className="text-2xl font-bold text-gray-600">2,456</p>
              </div>
              <XCircle className="w-8 h-8 text-gray-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Suspended</p>
                <p className="text-2xl font-bold text-red-600">322</p>
              </div>
              <Ban className="w-8 h-8 text-red-600/30" />
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
              <Input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A]"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white text-[#004953] focus:border-[#7B1E3A] outline-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
              <Button
                className="h-12 px-6 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  color: "#FFFFFF",
                }}
              >
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
              <Button
                className="h-12 px-6 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #004953 0%, #006B7D 100%)",
                  color: "#FFFFFF",
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#7B1E3A]/5 border-b-2 border-[#D4AF37]/20">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">User</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Subscription</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Verified</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Join Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#7B1E3A]">Matches</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-[#7B1E3A]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/10">
                {users.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-[#FFF8E7] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B1E3A] to-[#A0002A] flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-[#004953]">{user.name}</p>
                          <p className="text-xs text-[#004953]/60">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-[#004953]/70">
                          <Mail className="w-4 h-4" />
                          <span className="text-xs">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#004953]/70">
                          <Phone className="w-4 h-4" />
                          <span className="text-xs">{user.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getSubscriptionColor(
                          user.subscription
                        )}`}
                      >
                        {user.subscription}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {user.verified ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#004953]/70">{user.joinDate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-[#7B1E3A]">{user.matches}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]">
                          <Eye className="w-5 h-5" />
                        </button>
                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowActionMenu(showActionMenu === user.id ? null : user.id)
                            }
                            className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]"
                          >
                            <MoreVertical className="w-5 h-5" />
                          </button>
                          {showActionMenu === user.id && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border-2 border-[#D4AF37]/20 py-2 z-50">
                              <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#FFF8E7] text-[#004953]">
                                View Profile
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#FFF8E7] text-[#004953]">
                                Edit User
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm hover:bg-[#FFF8E7] text-[#004953]">
                                Send Message
                              </button>
                              <hr className="my-2 border-[#D4AF37]/20" />
                              <button className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 text-red-600">
                                Suspend User
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 text-red-600">
                                Delete User
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t-2 border-[#D4AF37]/20 flex items-center justify-between">
            <p className="text-sm text-[#004953]/70">Showing 1 to 6 of 15,234 users</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#7B1E3A] hover:text-white transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#7B1E3A] text-white">1</button>
              <button className="px-4 py-2 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#7B1E3A] hover:text-white transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#7B1E3A] hover:text-white transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#7B1E3A] hover:text-white transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

