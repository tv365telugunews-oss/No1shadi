import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Check, Crown, Star, Sparkles, ChevronLeft } from "lucide-react";
import { subscriptionPlans } from "../data/mockData";
import { Button } from "../components/ui/button";

export default function Subscription() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-[#D4AF37]/20 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Premium Plans
            </h2>
            <p className="text-sm text-[#004953]/60">Upgrade to find your perfect match faster</p>
          </div>
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="p-6 m-4 rounded-2xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="premium-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#premium-pattern)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="w-6 h-6 text-[#F4C430]" />
            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Why Go Premium?
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <BenefitItem text="3x More Matches" />
            <BenefitItem text="Priority Support" />
            <BenefitItem text="Verified Badge" />
            <BenefitItem text="Video Calls" />
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="px-4 space-y-4">
        {subscriptionPlans.map((plan, index) => (
          <PlanCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-8 px-4">
        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#004953]">100% Safe</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#004953]">Verified Profiles</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#004953]">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-6 text-center px-4">
        <p className="text-sm text-[#004953]/60 mb-2">
          Need help choosing the right plan?
        </p>
        <Button 
          variant="outline" 
          className="border-[#D4AF37] text-[#7B1E3A]"
          onClick={() => navigate("/contact-support")}
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
}

interface PlanCardProps {
  plan: typeof subscriptionPlans[0];
  index: number;
}

function PlanCard({ plan, index }: PlanCardProps) {
  const navigate = useNavigate();
  const isCustomPricing = plan.price === "Contact Us";

  const handleSubscribe = () => {
    if (isCustomPricing) {
      // Show contact form or call support
<<<<<<< HEAD
      window.location.href = "tel:+919100810606";
=======
      alert("Please contact our support team for custom pricing");
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
    } else {
      // Save selected plan to localStorage for payment screen
      localStorage.setItem('selectedPlanForPayment', JSON.stringify({
        id: plan.id,
        name: plan.name,
        duration: plan.duration,
        price: plan.price
      }));
      navigate("/payment");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden ${
        plan.recommended
          ? "border-2 border-[#D4AF37] bg-gradient-to-br from-white to-[#FFF8E7]"
          : "border border-[#D4AF37]/20 bg-white"
      }`}
      style={plan.recommended ? { boxShadow: "0 8px 24px rgba(212, 175, 55, 0.2)" } : {}}
    >
      {/* Recommended Badge */}
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-white px-4 py-1 rounded-bl-2xl flex items-center gap-1">
          <Star className="w-4 h-4" fill="white" />
          <span className="text-xs font-bold">RECOMMENDED</span>
        </div>
      )}

      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-[#7B1E3A] text-white px-4 py-1 rounded-bl-2xl flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-bold">MOST POPULAR</span>
        </div>
      )}

      <div className="p-6">
        {/* Plan Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {getPlanIcon(plan.name)}
            <h3 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              {plan.name}
            </h3>
          </div>
          <p className="text-sm text-[#004953]/60">{plan.duration}</p>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          {!isCustomPricing ? (
            <>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-[#7B1E3A]">{plan.price}</span>
                {plan.discount && (
                  <span className="px-2 py-1 rounded-full bg-[#A0002A] text-white text-xs font-bold">
                    {plan.discount}
                  </span>
                )}
              </div>
              {plan.originalPrice && (
                <p className="text-sm text-[#004953]/60 line-through">{plan.originalPrice}</p>
              )}
            </>
          ) : (
            <div className="text-2xl font-bold text-[#7B1E3A]">Custom Pricing</div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#004953]">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleSubscribe}
          className={`w-full h-12 rounded-xl ${
            plan.recommended
              ? "bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
              : "border-2 border-[#D4AF37] bg-white text-[#7B1E3A] hover:bg-[#D4AF37]/10"
          }`}
        >
          {isCustomPricing ? "Contact Us" : "Subscribe Now"}
        </Button>
      </div>
    </motion.div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function getPlanIcon(planName: string) {
  switch (planName.toLowerCase()) {
    case "silver":
      return <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <Star className="w-5 h-5 text-gray-600" />
      </div>;
    case "gold":
      return <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
        <Star className="w-5 h-5 text-white" fill="white" />
      </div>;
    case "diamond":
      return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B9F2FF] to-[#99E5F5] flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-[#004953]" />
      </div>;
    case "platinum":
      return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#E5E7EB] to-[#D1D5DB] flex items-center justify-center">
        <Crown className="w-5 h-5 text-[#6B7280]" />
      </div>;
    case "prime":
    case "super prime":
      return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] flex items-center justify-center">
        <Crown className="w-5 h-5 text-[#D4AF37]" />
      </div>;
    default:
      return <Star className="w-8 h-8 text-[#D4AF37]" />;
  }
}