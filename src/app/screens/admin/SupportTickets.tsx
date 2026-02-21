import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
} from "lucide-react";
import { Input } from "../../components/ui/input";

export default function SupportTickets() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const tickets = [
    {
      id: "TKT-1234",
      user: "Priya Sharma",
      subject: "Cannot upload profile photo",
      category: "Technical",
      status: "open",
      priority: "high",
      created: "Feb 20, 2026 10:30 AM",
      lastReply: "2 hours ago",
    },
    {
      id: "TKT-1233",
      user: "Rajesh Kumar",
      subject: "Payment issue with Platinum plan",
      category: "Billing",
      status: "in-progress",
      priority: "urgent",
      created: "Feb 20, 2026 09:15 AM",
      lastReply: "30 minutes ago",
    },
    {
      id: "TKT-1232",
      user: "Lakshmi Reddy",
      subject: "How to verify my profile?",
      category: "General",
      status: "open",
      priority: "medium",
      created: "Feb 19, 2026 04:45 PM",
      lastReply: "5 hours ago",
    },
    {
      id: "TKT-1231",
      user: "Venkat Rao",
      subject: "Account suspension appeal",
      category: "Account",
      status: "in-progress",
      priority: "high",
      created: "Feb 19, 2026 02:20 PM",
      lastReply: "1 hour ago",
    },
    {
      id: "TKT-1230",
      user: "Sai Priya",
      subject: "Request for refund",
      category: "Billing",
      status: "resolved",
      priority: "medium",
      created: "Feb 19, 2026 11:00 AM",
      lastReply: "Yesterday",
    },
    {
      id: "TKT-1229",
      user: "Krishna Murthy",
      subject: "Chat feature not working",
      category: "Technical",
      status: "closed",
      priority: "low",
      created: "Feb 18, 2026 03:30 PM",
      lastReply: "2 days ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-700";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700";
      case "resolved":
        return "bg-green-100 text-green-700";
      case "closed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-700";
      case "high":
        return "bg-orange-100 text-orange-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical":
        return "bg-purple-100 text-purple-700";
      case "Billing":
        return "bg-blue-100 text-blue-700";
      case "Account":
        return "bg-orange-100 text-orange-700";
      case "General":
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
                  background: "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
                }}
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Support Tickets
                </h1>
                <p className="text-sm text-[#004953]/60">Manage customer support requests</p>
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
                <p className="text-sm text-[#004953]/70">Open Tickets</p>
                <p className="text-2xl font-bold text-blue-600">38</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">15</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Resolved Today</p>
                <p className="text-2xl font-bold text-green-600">27</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Avg Response Time</p>
                <p className="text-2xl font-bold text-[#7B1E3A]">2.5h</p>
              </div>
              <MessageSquare className="w-8 h-8 text-[#7B1E3A]/30" />
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
                placeholder="Search tickets..."
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
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
              <button className="h-12 px-6 rounded-xl bg-[#7B1E3A] text-white flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Ticket Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-[#7B1E3A]">{ticket.subject}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#004953]/70">
                        <span className="font-semibold text-[#004953]">{ticket.user}</span>
                        <span>•</span>
                        <span>{ticket.id}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace("-", " ")}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(ticket.category)}`}>
                      {ticket.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-[#004953]/60">
                    <span>Created: {ticket.created}</span>
                    <span>Last reply: {ticket.lastReply}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:w-48 flex flex-col gap-2">
                  <button className="h-10 rounded-lg bg-[#7B1E3A] hover:bg-[#A0002A] text-white font-semibold transition-colors">
                    View Details
                  </button>
                  <button className="h-10 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#FFF8E7] font-semibold transition-colors">
                    Quick Reply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-[#004953]/70">Showing 1 to 6 of 156 tickets</p>
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
  );
}
