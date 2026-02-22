import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Settings,
  Mail,
  Bell,
  Shield,
  DollarSign,
  Globe,
  Save,
  Database,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function AdminSettings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");

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
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Admin Settings
                </h1>
                <p className="text-sm text-[#004953]/60">Configure system settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-4 space-y-2">
              <button
                onClick={() => setActiveTab("general")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "general"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span className="font-semibold">General</span>
              </button>
              <button
                onClick={() => setActiveTab("email")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "email"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email/SMS</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "notifications"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <Bell className="w-5 h-5" />
                <span className="font-semibold">Notifications</span>
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "payment"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Payment Gateway</span>
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "security"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Security</span>
              </button>
              <button
                onClick={() => setActiveTab("backup")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  activeTab === "backup"
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953] hover:bg-[#FFF8E7]"
                }`}
              >
                <Database className="w-5 h-5" />
                <span className="font-semibold">Backup & Data</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* General Settings */}
            {activeTab === "general" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
              >
                <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">General Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      App Name
                    </label>
                    <Input
                      type="text"
                      defaultValue="No1 shadi.com – Safe & Secure"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Support Email
                    </label>
                    <Input
                      type="email"
                      defaultValue="support@no1shadi.com"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Support Phone
                    </label>
                    <Input
                      type="tel"
                      defaultValue="+91 9182536475"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Maintenance Mode
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Disabled</option>
                      <option>Enabled</option>
                    </select>
                  </div>
                  <Button
                    className="h-12 px-8 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Email/SMS Settings */}
            {activeTab === "email" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                  <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">SMTP Configuration</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        SMTP Host
                      </label>
                      <Input
                        type="text"
                        defaultValue="smtp.gmail.com"
                        className="h-12 rounded-xl border-[#D4AF37]/30"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-[#004953] mb-2 block">
                          SMTP Port
                        </label>
                        <Input
                          type="text"
                          defaultValue="587"
                          className="h-12 rounded-xl border-[#D4AF37]/30"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-[#004953] mb-2 block">
                          Encryption
                        </label>
                        <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                          <option>TLS</option>
                          <option>SSL</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        SMTP Username
                      </label>
                      <Input
                        type="text"
                        defaultValue="noreply@no1shadi.com"
                        className="h-12 rounded-xl border-[#D4AF37]/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        SMTP Password
                      </label>
                      <Input
                        type="password"
                        defaultValue="••••••••••"
                        className="h-12 rounded-xl border-[#D4AF37]/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                  <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">SMS Gateway</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        Gateway Provider
                      </label>
                      <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                        <option>MSG91</option>
                        <option>Twilio</option>
                        <option>AWS SNS</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        API Key
                      </label>
                      <Input
                        type="text"
                        defaultValue="msg91_api_key_here"
                        className="h-12 rounded-xl border-[#D4AF37]/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#004953] mb-2 block">
                        Sender ID
                      </label>
                      <Input
                        type="text"
                        defaultValue="NO1SHD"
                        className="h-12 rounded-xl border-[#D4AF37]/30"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  className="h-12 px-8 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                    color: "#FFFFFF",
                  }}
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Email/SMS Settings
                </Button>
              </motion.div>
            )}

            {/* Payment Gateway Settings */}
            {activeTab === "payment" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
              >
                <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">Payment Gateway Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Payment Gateway
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Razorpay</option>
                      <option>Paytm</option>
                      <option>PayU</option>
                      <option>Stripe</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Razorpay Key ID
                    </label>
                    <Input
                      type="text"
                      defaultValue="rzp_live_xxxxxxxxxxxxx"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Razorpay Secret Key
                    </label>
                    <Input
                      type="password"
                      defaultValue="••••••••••••••••••"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Test Mode
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Disabled (Live)</option>
                      <option>Enabled (Test)</option>
                    </select>
                  </div>
                  <Button
                    className="h-12 px-8 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Payment Settings
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
              >
                <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Two-Factor Authentication
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Enabled for Admin</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Password Policy
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Strong (8+ chars, uppercase, lowercase, numbers, special)</option>
                      <option>Medium (8+ chars, mixed case)</option>
                      <option>Basic (6+ chars)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Session Timeout (minutes)
                    </label>
                    <Input
                      type="number"
                      defaultValue="30"
                      className="h-12 rounded-xl border-[#D4AF37]/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Auto Profile Verification
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Manual Review Required</option>
                      <option>Automatic (AI-based)</option>
                    </select>
                  </div>
                  <Button
                    className="h-12 px-8 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Security Settings
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Backup Settings */}
            {activeTab === "backup" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6"
              >
                <h2 className="text-2xl font-bold text-[#7B1E3A] mb-6">Backup & Data Management</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Auto Backup Frequency
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border-2 border-[#D4AF37]/30 bg-white">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#004953] mb-2 block">
                      Last Backup
                    </label>
                    <Input
                      type="text"
                      value="Feb 20, 2026 02:00 AM"
                      disabled
                      className="h-12 rounded-xl border-[#D4AF37]/30 bg-gray-50"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      className="h-12 px-8 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #004953 0%, #006B7D 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      <Database className="w-5 h-5 mr-2" />
                      Backup Now
                    </Button>
                    <Button
                      className="h-12 px-8 rounded-xl border-2 border-[#D4AF37]/30 bg-white text-[#004953]"
                    >
                      <Database className="w-5 h-5 mr-2" />
                      Restore Backup
                    </Button>
                  </div>
                  <div className="mt-6 p-4 bg-[#FFF8E7] rounded-xl border-2 border-[#D4AF37]/30">
                    <h3 className="font-bold text-[#7B1E3A] mb-2">Database Statistics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#004953]/70">Total Users</span>
                        <span className="font-semibold text-[#004953]">15,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#004953]/70">Total Profiles</span>
                        <span className="font-semibold text-[#004953]">14,987</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#004953]/70">Database Size</span>
                        <span className="font-semibold text-[#004953]">2.4 GB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
