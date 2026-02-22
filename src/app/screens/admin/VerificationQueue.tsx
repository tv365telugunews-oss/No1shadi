import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  UserCheck,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Download,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function VerificationQueue() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const pendingVerifications = [
    {
      id: 1,
      name: "Ananya Reddy",
      age: 26,
      email: "ananya.r@email.com",
      phone: "+91 98765 43210",
      submittedDate: "Feb 20, 2026",
      documents: ["Aadhaar Card", "Selfie", "Income Proof"],
      status: "pending",
      rashi: "Kumbha",
      nakshatram: "Satabhisha",
      gothram: "Bharadwaja",
    },
    {
      id: 2,
      name: "Karthik Krishna",
      age: 29,
      email: "karthik.k@email.com",
      phone: "+91 98765 43211",
      submittedDate: "Feb 20, 2026",
      documents: ["Aadhaar Card", "Selfie"],
      status: "pending",
      rashi: "Mesha",
      nakshatram: "Ashwini",
      gothram: "Kasyapa",
    },
    {
      id: 3,
      name: "Divya Lakshmi",
      age: 24,
      email: "divya.l@email.com",
      phone: "+91 98765 43212",
      submittedDate: "Feb 19, 2026",
      documents: ["Aadhaar Card", "Selfie", "Income Proof", "Education Certificate"],
      status: "pending",
      rashi: "Vrishabha",
      nakshatram: "Rohini",
      gothram: "Atri",
    },
    {
      id: 4,
      name: "Srinivas Rao",
      age: 31,
      email: "srini.rao@email.com",
      phone: "+91 98765 43213",
      submittedDate: "Feb 19, 2026",
      documents: ["Aadhaar Card", "Selfie"],
      status: "reviewing",
      rashi: "Mithuna",
      nakshatram: "Punarvasu",
      gothram: "Vishwamitra",
    },
  ];

  const handleApprove = (id: number) => {
    alert(`User ${id} approved successfully!`);
  };

  const handleReject = (id: number) => {
    alert(`User ${id} rejected. Reason will be sent via email.`);
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
                  background: "linear-gradient(135deg, #00A86B 0%, #00C851 100%)",
                }}
              >
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Verification Queue
                </h1>
                <p className="text-sm text-[#004953]/60">Review and approve pending verifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Pending</p>
                <p className="text-2xl font-bold text-orange-600">124</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Approved Today</p>
                <p className="text-2xl font-bold text-green-600">45</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/30" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-[#D4AF37]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#004953]/70">Rejected Today</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600/30" />
            </div>
          </div>
        </div>

        {/* Verification Cards */}
        <div className="space-y-4">
          {pendingVerifications.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B1E3A] to-[#A0002A] flex items-center justify-center text-white font-bold text-xl">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                            {user.name}
                          </h3>
                          <p className="text-sm text-[#004953]/70">{user.age} years • ID: {user.id}</p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.status === "pending" ? "Pending Review" : "Under Review"}
                      </span>
                    </div>

                    {/* Contact & Cultural Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-[#004953]/60 mb-1">Contact Information</p>
                        <p className="text-sm text-[#004953]">{user.email}</p>
                        <p className="text-sm text-[#004953]">{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#004953]/60 mb-1">Cultural Details</p>
                        <p className="text-sm text-[#004953]">
                          <span className="font-semibold">Rashi:</span> {user.rashi}
                        </p>
                        <p className="text-sm text-[#004953]">
                          <span className="font-semibold">Nakshatram:</span> {user.nakshatram}
                        </p>
                        <p className="text-sm text-[#004953]">
                          <span className="font-semibold">Gothram:</span> {user.gothram}
                        </p>
                      </div>
                    </div>

                    {/* Documents */}
                    <div>
                      <p className="text-xs text-[#004953]/60 mb-2">Submitted Documents</p>
                      <div className="flex flex-wrap gap-2">
                        {user.documents.map((doc) => (
                          <span
                            key={doc}
                            className="px-3 py-1 rounded-lg bg-[#7B1E3A]/10 text-xs font-semibold text-[#7B1E3A] flex items-center gap-2"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Submitted Date */}
                    <div className="mt-4">
                      <p className="text-xs text-[#004953]/60">
                        Submitted on: <span className="font-semibold">{user.submittedDate}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:w-64 flex flex-col gap-3">
                    <Button
                      onClick={() => setSelectedUser(user.id)}
                      className="w-full h-12 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #004953 0%, #006B7D 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      View Documents
                    </Button>
                    <Button
                      onClick={() => handleApprove(user.id)}
                      className="w-full h-12 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #00A86B 0%, #00C851 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Approve Profile
                    </Button>
                    <Button
                      onClick={() => handleReject(user.id)}
                      className="w-full h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Reject Profile
                    </Button>
                    <button className="w-full h-12 rounded-xl border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#FFF8E7] transition-colors flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Request More Info
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no pending) */}
        {pendingVerifications.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-12 text-center">
            <UserCheck className="w-16 h-16 text-[#004953]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-2">All Caught Up!</h3>
            <p className="text-[#004953]/70">No pending verifications at the moment.</p>
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="sticky top-0 bg-white border-b-2 border-[#D4AF37]/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                Verification Documents
              </h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 rounded-lg hover:bg-[#7B1E3A]/5"
              >
                <XCircle className="w-6 h-6 text-[#004953]" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Document previews would go here */}
              <div className="aspect-video bg-[#FFF8E7] rounded-xl border-2 border-[#D4AF37]/30 flex items-center justify-center">
                <div className="text-center">
                  <Download className="w-12 h-12 text-[#004953]/30 mx-auto mb-2" />
                  <p className="text-[#004953]/70">Document Preview</p>
                  <p className="text-sm text-[#004953]/50">Click to download and view</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

