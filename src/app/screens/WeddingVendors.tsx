import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, MapPin, Star, TrendingUp, Filter, Heart, Share2, Phone, MessageCircle, IndianRupee, SlidersHorizontal, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import venueImage from "../../assets/1.png";
import cateringImage from "../../assets/2.png";
import photographyImage from "../../assets/3.png";
import decorationImage from "../../assets/4.png";
import makeupImage from "../../assets/5.png";
import entertainmentImage from "../../assets/6.png";
import invitationImage from "../../assets/7.png";
import transportImage from "../../assets/8.png";

export default function WeddingVendors() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const currentCategory = category || "venues";
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [savedVendors, setSavedVendors] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const vendors = [
    {
      id: 1,
      name: "Grand Palace Banquet & Convention Hall",
      category: "venues",
      rating: 4.8,
      reviews: 245,
      price: "₹2,50,000 onwards",
      capacity: "500-1000 guests",
      location: "Banjara Hills, Hyderabad",
      description: "Spacious AC halls with modern amenities, royal décor, and ample parking",
      image: venueImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 2,
      name: "Royal Taste Caterers & Banquet Services",
      category: "catering",
      rating: 4.9,
      reviews: 312,
      price: "₹800-1200/plate",
      capacity: "100-2000 guests",
      location: "Jubilee Hills, Hyderabad",
      description: "Authentic Telugu cuisine with traditional recipes, live counters, and customized menus",
      image: cateringImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 3,
      name: "Capture Moments - Wedding Photography Studio",
      category: "photography",
      rating: 4.7,
      reviews: 189,
      price: "₹75,000 onwards",
      capacity: "Photo + Video",
      location: "Madhapur, Hyderabad",
      description: "Cinematic wedding films, candid photography, drone coverage, albums",
      image: photographyImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 4,
      name: "Floral Dreams - Mandapam Decorators",
      category: "decoration",
      rating: 4.6,
      reviews: 156,
      price: "₹1,50,000 onwards",
      capacity: "Full Venue Decor",
      location: "Gachibowli, Hyderabad",
      description: "Traditional & contemporary designs, fresh flowers, lighting arrangements",
      image: decorationImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 5,
      name: "Bridal Glow - Makeup & Beauty Studio",
      category: "makeup",
      rating: 4.9,
      reviews: 203,
      price: "₹35,000 onwards",
      capacity: "Bridal Package",
      location: "Begumpet, Hyderabad",
      description: "HD bridal makeup, hairstyling, saree draping, pre-wedding packages",
      image: makeupImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 6,
      name: "Rhythm & Beats - Wedding Entertainers",
      category: "entertainment",
      rating: 4.8,
      reviews: 167,
      price: "₹50,000 onwards",
      capacity: "Live Performances",
      location: "Ameerpet, Hyderabad",
      description: "Live bands, DJ services, traditional nadaswaram, dance troupes",
      image: entertainmentImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 7,
      name: "Elegant Prints - Wedding Invitation Designers",
      category: "invitations",
      rating: 4.7,
      reviews: 134,
      price: "₹15,000 onwards",
      capacity: "Custom Designs",
      location: "Dilsukhnagar, Hyderabad",
      description: "Traditional & modern designs, scrolls, e-invites, premium printing",
      image: invitationImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    },
    {
      id: 8,
      name: "Elite Travels - Wedding Transport Services",
      category: "transport",
      rating: 4.5,
      reviews: 98,
      price: "₹15,000/day onwards",
      capacity: "Luxury Buses & Cars",
      location: "Secunderabad, Hyderabad",
      description: "AC luxury buses, vintage cars, decorated vehicles, guest transport",
      image: transportImage,
      phoneNumber: "9100810606",
      featured: true,
      verified: true
    }
  ];

  const categoryNames: Record<string, string> = {
    venues: "Venues & Banquet Halls",
    catering: "Catering Services",
    photography: "Photography & Videography",
    decoration: "Decoration & Planning",
    makeup: "Makeup Artists",
    entertainment: "Entertainment",
    invitations: "Invitations & Cards",
    transport: "Transport & Travel"
  };

  const toggleSave = (id: number) => {
    setSavedVendors(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  // Filter vendors by category first
  const categoryFilteredVendors = vendors.filter(vendor => vendor.category === currentCategory);

  // Apply additional filters
  const filteredVendors = categoryFilteredVendors.filter(vendor => {
    // Search filter
    if (searchQuery && !vendor.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Active filter logic
    if (activeFilter === "Verified") {
      return vendor.verified;
    } else if (activeFilter === "Top Rated") {
      return vendor.rating >= 4.8;
    } else if (activeFilter === "Budget Friendly") {
      // Extract numeric value from price string for comparison
      const priceMatch = vendor.price.match(/₹([\d,]+)/);
      if (priceMatch) {
        const price = parseInt(priceMatch[1].replace(/,/g, ''));
        return price <= 50000;
      }
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              {categoryNames[currentCategory]}
            </h1>
            <p className="text-sm text-white/80">{filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''} available</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vendors..."
            className="h-12 pl-10 rounded-xl border-none bg-white"
          />
        </div>
      </div>

      {/* Filters Bar */}
      {/* Filter buttons removed as per user request */}

      {/* Vendor List */}
      <div className="p-4 space-y-3">
        {filteredVendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            isSaved={savedVendors.includes(vendor.id)}
            onToggleSave={() => toggleSave(vendor.id)}
            onClick={() => navigate(`/vendor-detail/${vendor.id}`)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent">
        <Button
          onClick={() => window.location.href = "tel:+919100810606"}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
        >
          Need Help? Contact Us
        </Button>
      </div>
    </div>
  );
}

interface VendorCardProps {
  vendor: any;
  isSaved: boolean;
  onToggleSave: () => void;
  onClick: () => void;
}

function VendorCard({ vendor, isSaved, onToggleSave, onClick }: VendorCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48">
        <ImageWithFallback
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        {vendor.featured && (
          <div className="absolute top-2 left-2 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-white text-xs font-bold rounded-full">
            FEATURED
          </div>
        )}
        {vendor.verified && (
          <div className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave();
          }}
          className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Heart
            className={`w-5 h-5 ${isSaved ? "fill-red-500 text-red-500" : "text-[#7B1E3A]"}`}
          />
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-1">{vendor.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-[#004953]">{vendor.rating}</span>
              </div>
              <span className="text-sm text-[#004953]/60">({vendor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm text-[#004953]/70">{vendor.location}</span>
        </div>

        {/* Phone Number Display */}
        <div className="flex items-center gap-2 mb-3 p-2.5 bg-[#FFF8E7] rounded-lg">
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-semibold text-[#004953]">+91 {vendor.phoneNumber}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#D4AF37]/20">
          <div>
            <p className="text-xs text-[#004953]/60">{vendor.capacity}</p>
            <p className="text-lg font-bold text-[#7B1E3A]">{vendor.price}</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `tel:+91${vendor.phoneNumber}`;
              }}
              className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white flex items-center gap-1.5 px-4"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, active = false, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
        active
          ? "bg-[#7B1E3A] text-white"
          : "bg-white border border-[#D4AF37]/30 text-[#004953] hover:border-[#D4AF37]"
      }`}
    >
      {label}
    </button>
  );
}