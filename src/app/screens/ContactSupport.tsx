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
            </div>
          </a>

          <button
            onClick={() => navigate("/chat")}
            className="bg-white rounded-xl border-2 border-[#D4AF37] p-4 flex items-center gap-3 hover:bg-[#FFF8E7] transition-colors shadow-md"
          >
            <div className="p-3 bg-[#FFF8E7] rounded-full">
              <MessageCircle className="w-5 h-5 text-[#7B1E3A]" />
            </div>
            <div>
              <p className="font-semibold text-[#7B1E3A] text-sm">Live Chat</p>
              <p className="text-xs text-[#004953]/60">Chat with us</p>
            </div>
          </button>
        </div>

        {/* Support Form */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Send us a Message
            </h3>
            <p className="text-sm text-[#004953]/60">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Your Name *</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Email Address *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Phone Number (Optional)</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Issue Category *</label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white ${
                errors.category ? "border-red-500" : ""
              }`}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {issueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Subject *</label>
            <Input
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white ${
                errors.subject ? "border-red-500" : ""
              }`}
              placeholder="Brief description of your issue"
            />
            {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Message *</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`min-h-[150px] rounded-xl border-[#D4AF37]/30 bg-white ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Please provide details about your issue..."
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-12 rounded-xl font-semibold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)",
              color: "#FFFFFF"
            }}
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Support Hours
          </h3>
          <div className="space-y-2 text-sm text-[#004953]/70">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="font-semibold text-[#004953]">9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span className="font-semibold text-[#004953]">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span className="font-semibold text-[#004953]">10:00 AM - 4:00 PM</span>
            </div>
          </div>
          <p className="text-xs text-[#004953]/50 mt-3">
            * All times are in Indian Standard Time (IST)
          </p>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Message Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Thank you for contacting us. Our support team will get back to you within 24 hours.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center py-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}