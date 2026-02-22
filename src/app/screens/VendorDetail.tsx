import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, MapPin, Phone, Mail, Globe, Heart, Share2, Calendar, CheckCircle, Clock, Users, IndianRupee } from "lucide-react";
import { Button } from "../components/ui/button";

export default function VendorDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "gallery" | "reviews">("overview");

  // Mock vendor data
  const vendor = {
    id: 1,
    name: "Grand Palace Banquet Hall",
    category: "Venue",
    rating: 4.8,
    reviewCount: 245,
    price: "₹2,50,000 onwards",
    capacity: "500-1000 guests",
    location: "Road No. 12, Banjara Hills, Hyderabad - 500034",
    phone: "+91 9100810606",
    email: "grandpalace@weddings.com",
    verified: true,
    established: "2015",
    events: "500+ Events",
    description:
      "Grand Palace Banquet Hall is one of the most premium wedding venues in Hyderabad. With elegant architecture, world-class amenities, and exceptional service, we make your special day truly memorable.",
    features: [
      "AC Banquet Hall",
      "Valet Parking for 500+ cars",
      "In-house Catering Available",
      "Stage & Decoration Setup",
      "Bridal Room",
      "Generator Backup",
      "Sound & Lighting",
      "24/7 Security"
    ],
    packages: [
      {
        name: "Silver Package",
        price: "₹2,50,000",
        includes: ["Venue for 6 hours", "Basic Decoration", "Sound System"]
      },
      {
        name: "Gold Package",
        price: "₹4,00,000",
        includes: [
          "Venue for 12 hours",
          "Premium Decoration",
          "Sound & Lighting",
          "Valet Parking"
        ]
      },
      {
        name: "Platinum Package",
        price: "₹6,50,000",
        includes: [
          "Full Day Venue",
          "Luxury Decoration",
          "Professional Sound & Lighting",
          "Valet Parking",
          "In-house Catering"
        ]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f29da8c83a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
    ],
    reviews: [
      {
        id: 1,
        name: "Priya & Rahul",
        rating: 5,
        date: "Dec 2023",
        comment:
          "Absolutely wonderful experience! The venue was beautiful and the staff was very cooperative. Highly recommended!",
        verified: true
      },
      {
        id: 2,
        name: "Ananya Reddy",
        rating: 4.5,
        date: "Nov 2023",
        comment: "Great venue with excellent facilities. The food was amazing and the decoration was top-notch.",
        verified: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-[#D4AF37]/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-[#FFF8E7] transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="p-2 rounded-full hover:bg-[#FFF8E7] transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${
                  isSaved ? "fill-red-500 text-red-500" : "text-[#7B1E3A]"
                }`}
              />
            </button>
            <button className="p-2 rounded-full hover:bg-[#FFF8E7] transition-colors">
              <Share2 className="w-6 h-6 text-[#7B1E3A]" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={vendor.images[0]}
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        {vendor.verified && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-full flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-bold">Verified</span>
          </div>
        )}
      </div>

      {/* Vendor Info */}
      <div className="p-6 bg-white border-b border-[#D4AF37]/20">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#7B1E3A] mb-1">{vendor.name}</h1>
            <p className="text-sm text-[#004953]/60 mb-2">{vendor.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-bold text-[#004953]">{vendor.rating}</span>
            <span className="text-sm text-[#004953]/60">({vendor.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-sm text-[#004953]">{vendor.location}</span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <StatBox icon={<Calendar />} label="Since" value={vendor.established} />
          <StatBox icon={<Users />} label="Capacity" value={vendor.capacity.split("-")[1]} />
          <StatBox icon={<Globe />} label="Events" value={vendor.events} />
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[65px] z-10 bg-white border-b border-[#D4AF37]/20 px-4 py-2">
        <div className="flex gap-2">
          <TabButton
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            label="Overview"
          />
          <TabButton
            active={activeTab === "gallery"}
            onClick={() => setActiveTab("gallery")}
            label="Gallery"
          />
          <TabButton
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
            label={`Reviews (${vendor.reviewCount})`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-[#7B1E3A] mb-3">About</h3>
              <p className="text-sm text-[#004953]/80 leading-relaxed">{vendor.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-[#7B1E3A] mb-3">Amenities & Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {vendor.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-[#004953]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-lg font-bold text-[#7B1E3A] mb-3">Packages</h3>
              <div className="space-y-3">
                {vendor.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 shadow-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-[#004953]">{pkg.name}</h4>
                      <span className="text-lg font-bold text-[#7B1E3A]">{pkg.price}</span>
                    </div>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="text-sm text-[#004953]/70 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-2 gap-3">
            {vendor.images.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {vendor.reviews.map((review) => (
              <div key={review.id} className="p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#004953]">{review.name}</span>
                    {review.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <span className="text-xs text-[#004953]/60">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(review.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[#004953]/80">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#D4AF37]/20 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-[#004953]/60">Starting from</p>
          <p className="text-xl font-bold text-[#7B1E3A]">{vendor.price}</p>
        </div>
        <Button
          onClick={() => window.location.href = `tel:${vendor.phone}`}
          variant="outline"
          className="border-2 border-[#D4AF37] text-[#7B1E3A] flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Call
        </Button>
        <Button
          onClick={() => navigate(`/vendor-booking/${id}`)}
          className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-3 bg-[#FFF8E7] rounded-xl text-center">
      <div className="flex justify-center mb-1 text-[#7B1E3A]">{icon}</div>
      <p className="text-xs text-[#004953]/60 mb-1">{label}</p>
      <p className="text-sm font-bold text-[#004953]">{value}</p>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
        active ? "bg-[#7B1E3A] text-white" : "text-[#004953]/60 hover:bg-[#FFF8E7]"
      }`}
    >
      {label}
    </button>
  );
}
