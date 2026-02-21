import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, CheckCircle, CreditCard, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { createSubscription } from "../utils/subscriptionManager";

export default function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>("upi");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  useEffect(() => {
    // Get selected plan from localStorage or use default
    const storedPlan = localStorage.getItem('selectedPlanForPayment');
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    } else {
      // Default to Gold plan if nothing selected
      setSelectedPlan({
        id: 'gold',
        name: 'Gold',
        duration: '6 Months',
        price: '₹3,999'
      });
    }
  }, []);

  const handlePayment = () => {
    // Create subscription when payment is successful
    if (selectedPlan) {
      createSubscription(selectedPlan.id, selectedPlan.name, false);
      // Clear the selected plan from storage
      localStorage.removeItem('selectedPlanForPayment');
    }
    
    // Simulate payment processing
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Payment Successful!
          </h2>
          <p className="text-[#004953]/70 mb-6">
            Your premium subscription has been activated
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#7B1E3A]">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-semibold">Redirecting to home...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#D4AF37]/20 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Complete Payment
            </h2>
            <p className="text-sm text-[#004953]/60">Secure payment gateway</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Order Summary */}
        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Order Summary
          </h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-[#004953]/70">Gold Plan - 6 Months</span>
              <span className="font-semibold text-[#004953]">₹3,999</span>
            </div>
            <div className="flex justify-between text-[#D4AF37]">
              <span>Discount (43% OFF)</span>
              <span className="font-semibold">-₹3,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#004953]/70">GST (18%)</span>
              <span className="font-semibold text-[#004953]">₹720</span>
            </div>
            <div className="pt-3 border-t-2 border-[#D4AF37]/20 flex justify-between">
              <span className="text-lg font-bold text-[#7B1E3A]">Total Amount</span>
              <span className="text-2xl font-bold text-[#7B1E3A]">₹4,719</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#D4AF37]/10 flex items-start gap-2">
            <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-[#004953]">
              You're saving ₹3,000 with this plan! Limited time offer.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Select Payment Method
          </h3>

          <div className="space-y-3">
            {/* UPI */}
            <PaymentMethod
              id="upi"
              icon={<Smartphone className="w-6 h-6" />}
              title="UPI"
              description="Google Pay, PhonePe, Paytm, etc."
              selected={selectedMethod === "upi"}
              onSelect={() => setSelectedMethod("upi")}
            />

            {/* Cards */}
            <PaymentMethod
              id="card"
              icon={<CreditCard className="w-6 h-6" />}
              title="Credit/Debit Card"
              description="Visa, Mastercard, Rupay"
              selected={selectedMethod === "card"}
              onSelect={() => setSelectedMethod("card")}
            />

            {/* Net Banking */}
            <PaymentMethod
              id="netbanking"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Net Banking"
              description="All major banks supported"
              selected={selectedMethod === "netbanking"}
              onSelect={() => setSelectedMethod("netbanking")}
            />

            {/* Wallets */}
            <PaymentMethod
              id="wallet"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
              title="Wallets"
              description="Paytm, Mobikwik, Freecharge"
              selected={selectedMethod === "wallet"}
              onSelect={() => setSelectedMethod("wallet")}
            />
          </div>
        </div>

        {/* Payment Input */}
        {selectedMethod === "upi" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20"
          >
            <label className="text-sm font-semibold text-[#004953] mb-2 block">
              Enter UPI ID
            </label>
            <Input
              type="text"
              placeholder="yourname@upi"
              className="h-12 rounded-xl border-[#D4AF37]/30"
            />
          </motion.div>
        )}

        {selectedMethod === "card" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-white border border-[#D4AF37]/20 space-y-4"
          >
            <div>
              <label className="text-sm font-semibold text-[#004953] mb-2 block">
                Card Number
              </label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="h-12 rounded-xl border-[#D4AF37]/30"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#004953] mb-2 block">
                  Expiry Date
                </label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  className="h-12 rounded-xl border-[#D4AF37]/30"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#004953] mb-2 block">
                  CVV
                </label>
                <Input
                  type="text"
                  placeholder="123"
                  className="h-12 rounded-xl border-[#D4AF37]/30"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="flex items-center gap-2 text-[#004953]/60">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">256-bit SSL Secured</span>
          </div>
          <div className="w-px h-4 bg-[#004953]/20" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Razorpay_logo.svg"
            alt="Razorpay"
            className="h-6 opacity-60"
          />
        </div>

        {/* Pay Button */}
        <Button
          onClick={handlePayment}
          className="w-full h-14 text-lg rounded-xl"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)"
          }}
        >
          Pay ₹4,719
        </Button>

        {/* Terms */}
        <p className="text-xs text-center text-[#004953]/60 px-4">
          By proceeding, you agree to our{" "}
          <button className="text-[#7B1E3A] font-semibold">Terms & Conditions</button>
          {" "}and{" "}
          <button className="text-[#7B1E3A] font-semibold">Refund Policy</button>
        </p>
      </div>
    </div>
  );
}

interface PaymentMethodProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

function PaymentMethod({ icon, title, description, selected, onSelect }: PaymentMethodProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
        selected
          ? "border-[#7B1E3A] bg-[#7B1E3A]/5"
          : "border-[#D4AF37]/20 bg-white hover:border-[#D4AF37]"
      }`}
    >
      <div className={`${selected ? "text-[#7B1E3A]" : "text-[#D4AF37]"}`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className="font-semibold text-[#004953]">{title}</p>
        <p className="text-sm text-[#004953]/60">{description}</p>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        selected ? "border-[#7B1E3A]" : "border-[#D4AF37]/30"
      }`}>
        {selected && <div className="w-3 h-3 rounded-full bg-[#7B1E3A]" />}
      </div>
    </button>
  );
}