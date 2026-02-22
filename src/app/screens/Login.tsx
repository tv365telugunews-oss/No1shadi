import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Heart, Phone, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type LoginMethod = "email" | "mobile" | "google" | null;

export default function Login() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<LoginMethod>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = () => {
    if (email && password) {
      navigate("/welcome-back");
    }
  };

  const handleSendOTP = () => {
    if (mobile) {
      // Navigate to OTP verification screen with phone number
      navigate("/otp-verification", { state: { phoneNumber: `+91 ${mobile}`, from: "login" } });
    }
  };

  const handleMobileLogin = () => {
    if (mobile && otp) {
      navigate("/welcome-back");
    }
  };

  const handleGoogleLogin = () => {
    // In real app, integrate Google OAuth
    navigate("/welcome-back");
  };

  // Initial login method selection screen
  if (!loginMethod) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12 mb-16"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              boxShadow: "0 8px 24px rgba(123, 30, 58, 0.3)",
            }}
          >
            <Heart className="w-10 h-10 text-[#D4AF37]" fill="#D4AF37" />
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
          >
            Welcome to<br />
            No<span className="text-5xl">1</span> shadi.com
          </h1>
          <p className="text-[#004953]/70">Choose your login method</p>
        </motion.div>

        {/* Login Method Selection */}
        <div className="flex-1 space-y-4">
          <LoginMethodCard
            icon={<Mail className="w-8 h-8" />}
            title="Login with Email"
            description="Use your email address and password"
            onClick={() => setLoginMethod("email")}
            delay={0.1}
          />
          <LoginMethodCard
            icon={<Phone className="w-8 h-8" />}
            title="Login with Mobile"
            description="Get OTP on your mobile number"
            onClick={() => setLoginMethod("mobile")}
            delay={0.2}
          />
          <LoginMethodCard
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            title="Login with Google"
            description="Quick login with your Google account"
            onClick={() => setLoginMethod("google")}
            delay={0.3}
          />
        </div>

        {/* Register Link */}
        <div className="text-center pt-6 pb-4">
          <p className="text-sm text-[#004953]/70">
            Don't have an account?{" "}
            <span 
              onClick={() => navigate("/phone-number-entry")}
              className="font-semibold text-[#7B1E3A] cursor-pointer"
            >
              Register Now
            </span>
          </p>
        </div>

        {/* Admin Access Link */}
        <div className="text-center pb-4">
          <span 
            onClick={() => navigate("/admin/login")}
            className="text-xs text-[#004953]/40 hover:text-[#7B1E3A] transition-colors cursor-pointer"
          >
            Admin Access
          </span>
        </div>
      </div>
    );
  }

  // Email Login Screen
  if (loginMethod === "email") {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col p-6">
        {/* Back Button */}
        <button
          onClick={() => setLoginMethod(null)}
          className="flex items-center gap-2 text-[#7B1E3A] mb-8 mt-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back</span>
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              boxShadow: "0 8px 24px rgba(123, 30, 58, 0.3)",
            }}
          >
            <Mail className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
          >
            Login with Email
          </h1>
          <p className="text-[#004953]/70">Enter your email and password</p>
        </motion.div>

        {/* Email Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
              <Input
                type="email"
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 pl-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">
              Password
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 pl-12 pr-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#004953]/40"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button className="text-sm font-semibold text-[#7B1E3A]">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleEmailLogin}
            className="w-full h-14 text-lg rounded-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF",
              boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
            }}
          >
            Login
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Admin Access Link */}
          <div className="text-center pt-4">
            <span 
              onClick={() => navigate("/admin/login")}
              className="text-xs text-[#004953]/40 hover:text-[#7B1E3A] transition-colors cursor-pointer"
            >
              Admin Access
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  // Mobile Login Screen
  if (loginMethod === "mobile") {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col p-6">
        {/* Back Button */}
        <button
          onClick={() => {
            setLoginMethod(null);
            setOtpSent(false);
          }}
          className="flex items-center gap-2 text-[#7B1E3A] mb-8 mt-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back</span>
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              boxShadow: "0 8px 24px rgba(123, 30, 58, 0.3)",
            }}
          >
            <Phone className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
          >
            Login with Mobile
          </h1>
          <p className="text-[#004953]/70">
            {otpSent ? "Enter the OTP sent to your mobile" : "Enter your mobile number"}
          </p>
        </motion.div>

        {/* Mobile Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          {/* Mobile Number Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">
              Mobile Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
              <Input
                type="tel"
                placeholder="98765 43210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                disabled={otpSent}
                className="h-14 pl-12 rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white disabled:opacity-60"
              />
            </div>
          </div>

          {/* OTP Input (shown after OTP is sent) */}
          {otpSent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-[#004953]">
                Enter OTP
              </label>
              <div className="flex gap-3">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={otp[index] || ""}
                    onChange={(e) => {
                      const newOtp = otp.split("");
                      newOtp[index] = e.target.value;
                      setOtp(newOtp.join(""));
                      // Auto-focus next input
                      if (e.target.value && index < 5) {
                        const nextInput = e.target.parentElement?.nextElementSibling?.querySelector("input");
                        nextInput?.focus();
                      }
                    }}
                    className="h-14 w-full text-center text-xl font-bold rounded-xl border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-3">
                <button className="text-sm font-semibold text-[#7B1E3A]">
                  Resend OTP
                </button>
                <button
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                  }}
                  className="text-sm font-semibold text-[#004953]/60"
                >
                  Change Number
                </button>
              </div>
            </motion.div>
          )}

          {/* Action Button */}
          {!otpSent ? (
            <Button
              onClick={handleSendOTP}
              className="w-full h-14 text-lg rounded-xl font-bold"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
              }}
            >
              Send OTP
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleMobileLogin}
              className="w-full h-14 text-lg rounded-xl font-bold"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
              }}
            >
              Verify & Login
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}

          {/* Admin Access Link */}
          <div className="text-center pt-4">
            <span 
              onClick={() => navigate("/admin/login")}
              className="text-xs text-[#004953]/40 hover:text-[#7B1E3A] transition-colors cursor-pointer"
            >
              Admin Access
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  // Google Login Screen
  if (loginMethod === "google") {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col items-center justify-center p-6">
        {/* Back Button */}
        <button
          onClick={() => setLoginMethod(null)}
          className="absolute top-8 left-6 flex items-center gap-2 text-[#7B1E3A]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back</span>
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-white shadow-lg">
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          <h1
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
          >
            Login with Google
          </h1>
          <p className="text-[#004953]/70 mb-8 max-w-sm">
            You'll be redirected to Google to securely login with your account
          </p>
          <Button
            onClick={handleGoogleLogin}
            className="h-14 px-8 text-lg rounded-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF",
              boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
            }}
          >
            Continue with Google
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          {/* Admin Access Link */}
          <div className="mt-8">
            <span 
              onClick={() => navigate("/admin/login")}
              className="text-xs text-[#004953]/40 hover:text-[#7B1E3A] transition-colors cursor-pointer"
            >
              Admin Access
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}

interface LoginMethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}

function LoginMethodCard({
  icon,
  title,
  description,
  onClick,
  delay,
}: LoginMethodCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className="w-full p-6 rounded-2xl bg-white text-left hover:scale-[1.02] transition-transform"
      style={{
        border: "2px solid rgba(212, 175, 55, 0.2)",
        boxShadow: "0 4px 12px rgba(123, 30, 58, 0.08)",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
          }}
        >
          <div className="text-[#D4AF37]">{icon}</div>
        </div>
        <div className="flex-1">
          <h3
            className="text-xl font-bold text-[#7B1E3A] mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
          <p className="text-sm text-[#004953]/70">{description}</p>
        </div>
        <ArrowRight className="w-6 h-6 text-[#D4AF37]" />
      </div>
    </motion.button>
  );
}