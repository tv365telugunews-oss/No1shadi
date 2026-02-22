import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Mail,
  Eye,
  EyeOff,
  Heart,
  Phone,
  ArrowRight,
} from "lucide-react";

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
      navigate("/otp-verification", {
        state: { phoneNumber: `+91 ${mobile}`, from: "login" },
      });
    }
  };

  const handleMobileLogin = () => {
    if (mobile && otp) {
      navigate("/welcome-back");
    }
  };

  const handleGoogleLogin = () => {
    navigate("/welcome-back");
  };

  /* ===========================
     LOGIN METHOD SELECTION
  =========================== */
  if (!loginMethod) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12 mb-16"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
            style={{
              background:
                "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
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

          <p className="text-[#004953]/70">
            Choose your login method
          </p>
        </motion.div>

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
            icon={<Heart className="w-8 h-8" />}
            title="Login with Google"
            description="Quick login with Google account"
            onClick={() => setLoginMethod("google")}
            delay={0.3}
          />
        </div>

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

        <div className="text-center pb-4">
          <span
            onClick={() => navigate("/admin/login")}
            className="text-xs text-[#004953]/40 hover:text-[#7B1E3A] cursor-pointer"
          >
            Admin Access
          </span>
        </div>
      </div>
    );
  }

  /* ===========================
     EMAIL LOGIN
  =========================== */
  if (loginMethod === "email") {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex flex-col p-6">
        <button
          onClick={() => setLoginMethod(null)}
          className="flex items-center gap-2 text-[#7B1E3A] mb-8 mt-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <Button onClick={handleEmailLogin} className="w-full h-14">
            Login <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  /* ===========================
     MOBILE LOGIN
  =========================== */
  if (loginMethod === "mobile") {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex flex-col p-6">
        <button
          onClick={() => setLoginMethod(null)}
          className="flex items-center gap-2 text-[#7B1E3A]"
        >
          <ArrowLeft /> Back
        </button>

        <div className="space-y-6 mt-8">
          <Input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          {!otpSent ? (
            <Button onClick={handleSendOTP}>
              Send OTP <ArrowRight className="ml-2" />
            </Button>
          ) : (
            <Button onClick={handleMobileLogin}>
              Verify & Login <ArrowRight className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  /* ===========================
     GOOGLE LOGIN
  =========================== */
  if (loginMethod === "google") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Button onClick={handleGoogleLogin}>
          Continue with Google
        </Button>
      </div>
    );
  }

  return null;
}

/* ===========================
   CARD COMPONENT
=========================== */

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
      className="w-full p-6 rounded-2xl bg-white text-left"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h3 className="font-bold text-[#7B1E3A]">{title}</h3>
          <p className="text-sm text-[#004953]/70">{description}</p>
        </div>
      </div>
    </motion.button>
  );
}
