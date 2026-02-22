import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Demo credentials
    if (email === "admin@no1shadi.com" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Use admin@no1shadi.com / admin123");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7B1E3A] via-[#A0002A] to-[#004953] flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="mandala-bg h-full w-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#D4AF37]/30">
          {/* Logo/Icon */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                boxShadow: "0 8px 24px rgba(123, 30, 58, 0.4)",
              }}
            >
              <Shield className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
            >
              Admin Panel
            </h1>
            <p className="text-[#004953]/70">No<span className="text-2xl">1</span> shadi.com</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <div className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
                <Input
                  type="email"
                  placeholder="admin@no1shadi.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="h-14 pl-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  className="h-14 pl-12 pr-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#004953]/40"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full h-14 text-lg rounded-xl font-bold mt-6"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
              }}
            >
              Login to Admin Panel
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-[#FFF8E7] rounded-lg border border-[#D4AF37]/30">
            <p className="text-xs text-[#004953]/70 text-center">
              <strong className="text-[#7B1E3A]">Demo Credentials:</strong><br />
              Email: admin@no1shadi.com<br />
              Password: admin123
            </p>
          </div>
        </div>

        {/* Back to App Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-white/80 hover:text-white font-semibold text-sm"
          >
            ← Back to App
          </button>
        </div>
      </motion.div>
    </div>
  );
}

