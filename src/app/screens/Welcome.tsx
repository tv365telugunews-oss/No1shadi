import { motion } from "motion/react";
import { Heart, Shield, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import logoImage from "../../assets/welcome.png.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <img
                src={logoImage}
                alt="No1 Shadi.com Logo"
                className="w-64 h-auto mx-auto"
              />
            </motion.div>
          </div>

          {/* App Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold mb-2 sr-only"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#7B1E3A",
            }}
          >
            No1 shadi.com
          </motion.h1>

          {/* Secure Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <p className="text-lg font-semibold text-[#004953]">
              Safe & Secure
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base text-[#004953]/70 mb-8 max-w-sm mx-auto"
          >
            Find your perfect life partner from verified Telugu profiles with AI-powered matching
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1587271449604-04bb40332709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Telugu Indian Wedding"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              style={{
                boxShadow: "0 20px 50px rgba(123, 30, 58, 0.25)",
              }}
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto"
          >
            <div onClick={() => navigate("/login")}>
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Verified Profiles"
                delay={1.0}
              />
            </div>

            <div onClick={() => navigate("/login")}>
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI Matching"
                delay={1.1}
              />
            </div>

            <div onClick={() => navigate("/login")}>
              <FeatureCard
                icon={<Heart className="w-6 h-6" />}
                title="100% Safe"
                delay={1.2}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="px-6 pb-8 space-y-3"
      >
        <Button
          onClick={() => navigate("/login")}
          className="w-full h-14 text-lg rounded-xl"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)",
          }}
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-center text-sm text-[#004953]/60">
          By continuing, you agree to our{" "}
          <span
            onClick={() => navigate("/terms")}
            className="text-[#7B1E3A] underline font-semibold cursor-pointer"
          >
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span
            onClick={() => navigate("/privacy")}
            className="text-[#7B1E3A] underline font-semibold cursor-pointer"
          >
            Privacy Policy
          </span>
        </p>
      </motion.div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

function FeatureCard({ icon, title, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/60 backdrop-blur-sm cursor-pointer hover:bg-white hover:shadow-lg transition-all active:scale-95"
      style={{
        border: "1px solid rgba(212, 175, 55, 0.2)",
        boxShadow: "0 2px 8px rgba(123, 30, 58, 0.08)",
      }}
    >
      <div className="text-[#D4AF37]">{icon}</div>
      <p className="text-xs font-semibold text-[#004953] text-center">
        {title}
      </p>
    </motion.div>
  );
}
