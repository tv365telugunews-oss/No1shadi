import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle, IndianRupee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function VendorBooking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitEnquiry = () => {
    // In real app, submit to backend
    setShowSuccess(true);
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Enquiry Submitted!
          </h2>
          <p className="text-[#004953]/70 mb-6">
            The vendor will contact you shortly to confirm the booking
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Book Vendor
            </h1>
            <p className="text-sm text-white/80">Send enquiry to vendor</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Vendor Info Card */}
        <div className="p-4 bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29da8c83a?w=100&h=100&fit=crop"
              alt="Vendor"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-[#7B1E3A]">Grand Palace Banquet Hall</h3>
              <p className="text-sm text-[#004953]/60">Venue • ₹2,50,000 onwards</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6 bg-white rounded-2xl border-2 border-[#D4AF37]/20 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Event Details</h3>

          <div className="space-y-4">
            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                Event Date
              </label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-12 rounded-xl border-[#D4AF37]/30"
              />
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                Event Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full h-12 rounded-xl border border-[#D4AF37]/30 px-4 bg-white"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 12 AM)</option>
                <option value="full-day">Full Day</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                Expected Guests
              </label>
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="e.g., 500"
                className="h-12 rounded-xl border-[#D4AF37]/30"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6 bg-white rounded-2xl border-2 border-[#D4AF37]/20 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Your Contact Information</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Full Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-12 rounded-xl border-[#D4AF37]/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Phone Number
              </label>
              <div className="flex gap-2">
                <Input value="+91" disabled className="w-16 h-12 rounded-xl border-[#D4AF37]/30 text-center" />
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  maxLength={10}
                  className="flex-1 h-12 rounded-xl border-[#D4AF37]/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 rounded-xl border-[#D4AF37]/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Additional Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific requirements..."
                rows={4}
                className="w-full p-4 rounded-xl border border-[#D4AF37]/30 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Package Selection (Optional) */}
        <div className="p-6 bg-white rounded-2xl border-2 border-[#D4AF37]/20 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Select Package (Optional)</h3>
          <div className="space-y-3">
            <PackageOption name="Silver Package" price="₹2,50,000" />
            <PackageOption name="Gold Package" price="₹4,00,000" />
            <PackageOption name="Platinum Package" price="₹6,50,000" />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmitEnquiry}
          disabled={!selectedDate || !selectedTime || !name || !phone}
          className="w-full h-14 rounded-xl text-lg font-bold"
          style={{
            background:
              selectedDate && selectedTime && name && phone
                ? "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)"
                : "#ccc",
            color: "#FFFFFF"
          }}
        >
          Send Enquiry
        </Button>

        {/* Info Note */}
        <div className="p-4 bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl">
          <p className="text-sm text-[#004953]/70">
            <strong className="text-[#7B1E3A]">Note:</strong> The vendor will contact you within 24 hours to
            confirm availability and discuss further details. No payment is required at this stage.
          </p>
        </div>
      </div>
    </div>
  );
}

function PackageOption({ name, price }: { name: string; price: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
        selected
          ? "border-[#7B1E3A] bg-[#7B1E3A]/5"
          : "border-[#D4AF37]/20 bg-white hover:border-[#D4AF37]"
      }`}
    >
      <div className="text-left">
        <p className="font-semibold text-[#004953]">{name}</p>
        <p className="text-sm text-[#004953]/60">{price}</p>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-[#7B1E3A]" : "border-[#D4AF37]/30"
        }`}
      >
        {selected && <div className="w-3 h-3 rounded-full bg-[#7B1E3A]" />}
      </div>
    </button>
  );
}