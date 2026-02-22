import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Users, Lock, Mail, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function ParentLogin() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // In real app, authenticate parent account
    localStorage.setItem("userRole", "parent");
    navigate("/parent-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Parent/Family Login
            </h1>
            <p className="text-sm text-white/80">Manage your child's profile</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-md mx-auto">
        {/* Info Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-[#E6F7F8] to-[#FFF8E7] rounded-2xl border-2 border-[#D4AF37]/30">
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-[#7B1E3A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#004953] mb-1">Family Account Access</h3>
              <p className="text-sm text-[#004953]/70">
                Login with your family account to manage your son's or daughter's matrimony profile, 
                view matches, and communicate on their behalf.
              </p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7B1E3A] flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#7B1E3A]">Welcome Back</h2>
              <p className="text-sm text-[#004953]/60">Login to your parent account</p>
            </div>
          </div>

          {/* Login Method Toggle */}
          <div className="flex gap-2 mb-6 p-1 bg-[#FFF8E7] rounded-xl">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                loginMethod === "email"
                  ? "bg-white text-[#7B1E3A] shadow-md"
                  : "text-[#004953]/60"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                loginMethod === "phone"
                  ? "bg-white text-[#7B1E3A] shadow-md"
                  : "text-[#004953]/60"
              }`}
            >
              Phone
            </button>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {loginMethod === "email" ? (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="h-12 pl-10 rounded-xl border-[#D4AF37]/30"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Phone Number</label>
                <div className="flex gap-2">
                  <div className="w-16">
                    <Input
                      value="+91"
                      disabled
                      className="h-12 rounded-xl border-[#D4AF37]/30 text-center font-semibold"
                    />
                  </div>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    maxLength={10}
                    className="h-12 rounded-xl border-[#D4AF37]/30"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="h-12 pl-10 rounded-xl border-[#D4AF37]/30"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#D4AF37]" />
                <span className="text-sm text-[#004953]/70">Remember me</span>
              </label>
              <button className="text-sm font-semibold text-[#7B1E3A] hover:underline">
                Forgot Password?
              </button>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full h-12 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                color: "#FFFFFF"
              }}
            >
              Login as Parent
            </Button>
          </div>
        </div>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#004953]/70">
            Don't have a parent account?{" "}
            <button
              onClick={() => navigate("/parent-registration")}
              className="font-semibold text-[#7B1E3A] hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-[#D4AF37]/20 shadow-md">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Parent Account Features</h3>
          <ul className="space-y-3">
            <Feature text="Manage multiple children profiles" />
            <Feature text="View and respond to match requests" />
            <Feature text="Chat with potential matches' families" />
            <Feature text="Access Kundali matching reports" />
            <Feature text="Control privacy settings" />
            <Feature text="Track subscription status" />
          </ul>
        </div>

        {/* Support */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#004953]/60 mb-2">Need help?</p>
          <button
            onClick={() => window.location.href = "tel:+919100810606"}
            className="text-sm font-semibold text-[#7B1E3A] hover:underline"
          >
            Contact Support: +91 9100810606
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <div className="w-5 h-5 rounded-full bg-[#4CAF50] flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-[#004953]">{text}</span>
    </li>
  );
}
