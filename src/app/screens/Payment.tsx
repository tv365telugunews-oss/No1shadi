import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, CheckCircle, CreditCard, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { checkoutSubscription, formatCurrency, type SubscriptionPlan } from "../config/api";
import { saveUserSubscription } from "../utils/subscriptionManager";

export default function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>("upi");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlanForPayment');
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    } else {
      // Default to Gold plan if nothing selected
      setSelectedPlan({
        id: 'gold',
        name: 'Gold',
        duration: '6 Months',
        durationMonths: 6,
        price: 3999,
        originalPrice: 6999,
        discount: '43% OFF',
        features: [],
        popular: true,
        recommended: false,
      });
    }
  }, []);

  const planPrice = selectedPlan?.price ?? 0;
  const gstRate = 0.18;
  const gstAmount = Math.round(planPrice * gstRate);
  const totalAmount = planPrice + gstAmount;

  const handleConfirm = async () => {
    if (!selectedPlan) return;

    try {
      setProcessing(true);
      setError("");
      const subscription = await checkoutSubscription({ planId: selectedPlan.id });
      saveUserSubscription({
        planId: subscription.planId,
        planName: subscription.planName,
        startDate: subscription.startDate,
        endDate: subscription.endDate,
        durationMonths: subscription.durationMonths,
        status: subscription.status as "active" | "expiring-soon" | "expired",
        autoRenew: subscription.autoRenew,
      });
      setShowSuccess(true);
      setTimeout(() => navigate('/subscription'), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
        <button onClick={() => navigate(-1)} className="mb-4 text-sm text-[#7B1E3A]">Back</button>
        <h2 className="text-xl font-bold text-[#7B1E3A] mb-2">Confirm Payment</h2>
        {selectedPlan && (
          <div className="mb-4">
            <p className="font-semibold">{selectedPlan.name} • {selectedPlan.duration}</p>
            <p className="text-sm text-[#004953]/60">Price: {formatCurrency(selectedPlan.price)}</p>
            <p className="text-sm text-[#004953]/60">GST (18%): ₹{gstAmount}</p>
            <p className="text-lg font-bold mt-2">Total: ₹{totalAmount}</p>
          </div>
        )}

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <div className="space-y-3 mb-4">
          <label className="flex items-center gap-2">
            <input type="radio" checked={selectedMethod === 'upi'} onChange={() => setSelectedMethod('upi')} />
            <span>UPI</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" checked={selectedMethod === 'card'} onChange={() => setSelectedMethod('card')} />
            <span>Card</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" checked={selectedMethod === 'wallet'} onChange={() => setSelectedMethod('wallet')} />
            <span>Wallet</span>
          </label>
        </div>

        <Button onClick={handleConfirm} className="w-full" disabled={processing || !selectedPlan}>
          {processing ? "Processing..." : `Pay ₹${totalAmount}`}
        </Button>

        {showSuccess && (
          <div className="mt-4 text-center text-green-600">Payment successful! Redirecting...</div>
        )}
      </div>
    </div>
  );

}


