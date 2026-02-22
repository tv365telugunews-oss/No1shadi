import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "motion/react";

export default function PhoneNumberEntry() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    // Validate phone number
    if (!phoneNumber.trim()) {
      setError("Please enter your phone number");
      return;
    }

    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Phone number should contain only digits");
      return;
    }

    // Navigate to OTP verification with phone number
    navigate("/otp-verification", { 
      state: { 
        phoneNumber: `+91 ${phoneNumber}`,
        from: "registration" 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Create Account
            </h1>
            <p className="text-sm text-white/80">Start your journey with us</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] rounded-full flex items-center justify-center shadow-xl">
              <Phone className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Verify Your Phone Number
            </h2>
            <p className="text-[#004953]/70">
              We'll send you an OTP to verify your number
            </p>
          </motion.div>

          {/* Phone Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <label className="text-sm font-semibold text-[#004953] mb-2 block">
              Mobile Number *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#004953]/40" />
                <span className="text-[#004953] font-semibold">+91</span>
                <div className="w-px h-6 bg-[#004953]/20"></div>
              </div>
              <Input
                type="tel"
                placeholder="98765 43210"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setError("");
                }}
                maxLength={10}
                className="h-14 pl-24 pr-4 rounded-xl border-2 border-[#D4AF37]/30 focus:border-[#7B1E3A] bg-white text-lg"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </p>
            )}
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={handleContinue}
              disabled={!phoneNumber}
              className="w-full h-14 rounded-xl text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: phoneNumber ? "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)" : "#ccc",
                color: "#FFFFFF"
              }}
            >
              Send OTP
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            {/* Registration Steps */}
            <div className="p-4 bg-white border border-[#D4AF37]/30 rounded-xl">
              <h3 className="text-sm font-bold text-[#7B1E3A] mb-3">
                Registration Steps:
              </h3>
              <div className="space-y-2 text-sm text-[#004953]/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#7B1E3A] text-white flex items-center justify-center text-xs font-bold">1</div>
                  <span>Verify phone number with OTP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#7B1E3A] flex items-center justify-center text-xs font-bold">2</div>
                  <span>Upload your selfie photo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#7B1E3A] flex items-center justify-center text-xs font-bold">3</div>
                  <span>Complete profile details (7 steps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#7B1E3A] flex items-center justify-center text-xs font-bold">4</div>
                  <span>Start finding matches!</span>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-4 bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl">
              <p className="text-xs text-[#004953]/70">
                <strong className="text-[#7B1E3A]">Privacy Note:</strong> Your phone number will be kept private and used only for account verification and important notifications. It will not be shared with other members.
              </p>
            </div>
          </motion.div>

          {/* Already have account */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#004953]/70">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#7B1E3A] font-semibold hover:underline"
              >
                Login Here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

