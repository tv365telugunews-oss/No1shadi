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


