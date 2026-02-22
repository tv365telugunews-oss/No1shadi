import { useState } from "react";
import { ArrowLeft, Mail, Phone, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

const issueCategories = [
  "Account & Login",
  "Profile Issues",
  "Payment & Subscription",
  "Privacy & Security",
  "Matching & Search",
  "Messaging",
  "Technical Issues",
  "Other"
];

export default function ContactSupport() {
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      category: "",
      subject: "",
      message: ""
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.category) {
      newErrors.category = "Please select an issue category";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // In a real app, you would send this to your API
      console.log("Support request submitted:", formData);
      
      setShowSuccessDialog(true);
      
      setTimeout(() => {
        setShowSuccessDialog(false);
        navigate(-1);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Support
            </h1>
            <p className="text-sm text-white/80">We're here to help you</p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a
            href="mailto:no1shadi.com@gmail.com"
            className="bg-white rounded-xl border-2 border-[#D4AF37] p-4 flex items-center gap-3 hover:bg-[#FFF8E7] transition-colors shadow-md"
          >
            <div className="p-3 bg-[#FFF8E7] rounded-full">
              <Mail className="w-5 h-5 text-[#7B1E3A]" />
            </div>
            <div>
              <p className="font-semibold text-[#7B1E3A] text-sm">Email</p>
              <p className="text-xs text-[#004953]/60">no1shadi.com@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919100810606"
            className="bg-white rounded-xl border-2 border-[#D4AF37] p-4 flex items-center gap-3 hover:bg-[#FFF8E7] transition-colors shadow-md"
          >
            <div className="p-3 bg-[#7B1E3A] rounded-full">
              <Phone className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-semibold text-[#7B1E3A] text-sm">Phone</p>
              <p className="text-xs text-[#004953]/60">9100810606</p>

