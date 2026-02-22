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

  // Helper function to extract numeric price
  const getNumericPrice = (priceString: string): number => {
    if (!priceString || priceString === "Contact Us") return 0;
    return parseInt(priceString.replace(/[₹,]/g, ''), 10) || 0;
  };

  // Calculate GST and total
  const planPrice = selectedPlan ? getNumericPrice(selectedPlan.price) : 0;
  const gstRate = 0.18;
  const gstAmount = Math.round(planPrice * gstRate);
  const totalAmount = planPrice + gstAmount;

  const handleConfirm = async () => {
    if (!selectedPlan) return;
    // Simulate creating subscription
    try {
      await createSubscription({ planId: selectedPlan.id, amount: totalAmount });
      setShowSuccess(true);
      setTimeout(() => navigate('/subscription'), 1500);
    } catch (err) {
      console.error(err);
      alert('Payment failed. Please try again.');
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
            <p className="text-sm text-[#004953]/60">Price: {selectedPlan.price}</p>
            <p className="text-sm text-[#004953]/60">GST (18%): ₹{gstAmount}</p>
            <p className="text-lg font-bold mt-2">Total: ₹{totalAmount}</p>
          </div>
        )}

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

        <Button onClick={handleConfirm} className="w-full">Pay ₹{totalAmount}</Button>

        {showSuccess && (
          <div className="mt-4 text-center text-green-600">Payment successful! Redirecting...</div>
        )}
      </div>
    </div>
  );

}


