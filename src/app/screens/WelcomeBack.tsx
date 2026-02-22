import { motion } from "motion/react";
import { Heart, Sparkles, ArrowRight, User, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

export default function WelcomeBack() {
  const navigate = useNavigate();

  const handleContinueToHome = () => {
    // Check if user has completed profile
    const hasCompletedProfile = localStorage.getItem("profileCompleted");
    
    if (hasCompletedProfile === "true") {
      navigate("/home");
    } else {
      // If profile not completed, go to registration/profile setup
      navigate("/registration");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col items-center justify-center p-6">
      {/* Animated Welcome Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 relative"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            boxShadow: "0 12px 32px rgba(123, 30, 58, 0.4)",
          }}
        >
          <CheckCircle className="w-16 h-16 text-[#D4AF37]" fill="#D4AF37" />
          
          {/* Sparkle Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="w-8 h-8 text-[#FFC700]" fill="#FFC700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-2 -left-2"
          >
            <Sparkles className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
          </motion.div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
          >
            Welcome to<br />
            No1 shadi.com
          </h1>
          <p className="text-lg text-[#004953]/70 mb-2">
            Login Successful
          </p>
          <p className="text-[#004953]/60 max-w-md mx-auto">
            We're happy to see you again. Let's continue your journey to find your perfect match.
          </p>
        </motion.div>
      </motion.div>

      {/* Action Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-md space-y-4 mb-8"
      >
        {/* New User - Complete Profile */}
        <div className="p-6 rounded-2xl bg-white border-2 border-[#D4AF37]/30 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="p-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              }}
            >
              <User className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="flex-1">
              <h3
                className="text-xl font-bold text-[#7B1E3A] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Complete Your Profile
              </h3>
              <p className="text-sm text-[#004953]/70">
                Set up your profile step by step to get better matches
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7B1E3A]/5 to-[#D4AF37]/5 border border-[#D4AF37]/20">
          <h4 className="font-bold text-[#7B1E3A] mb-3">What's Waiting for You:</h4>
          <ul className="space-y-2 text-sm text-[#004953]/80">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#7B1E3A]" />
              <span>AI-powered compatible matches</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#7B1E3A]" />
              <span>Verified profiles from Telugu community</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#7B1E3A]" />
              <span>Safe & secure platform</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#7B1E3A]" />
              <span>Advanced search with cultural preferences</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-md"
      >
        <Button
          onClick={handleContinueToHome}
          className="w-full h-16 text-lg rounded-xl font-bold"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
          }}
        >
          Continue
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute top-20 right-10"
      >
        <Heart className="w-16 h-16 text-[#C41E3A]" fill="#C41E3A" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-32 left-10"
      >
        <Heart className="w-12 h-12 text-[#D4AF37]" fill="#D4AF37" />
      </motion.div>
    </div>
  );
}
