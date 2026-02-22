import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, MapPin, Star, Heart, ChevronRight, Camera, Utensils, Music, Palette, Gift, Car, Home, Phone, X } from "lucide-react";
import { Input } from "../components/ui/input";

export default function WeddingMarketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Hyderabad, Telangana");
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Major Indian cities organized by state
  const indianCities = [
    // Telangana
    { city: "Hyderabad", state: "Telangana" },
    { city: "Warangal", state: "Telangana" },
    { city: "Nizamabad", state: "Telangana" },
    { city: "Karimnagar", state: "Telangana" },
    { city: "Khammam", state: "Telangana" },
    
    // Andhra Pradesh
    { city: "Visakhapatnam", state: "Andhra Pradesh" },
    { city: "Vijayawada", state: "Andhra Pradesh" },
    { city: "Guntur", state: "Andhra Pradesh" },
    { city: "Tirupati", state: "Andhra Pradesh" },
    { city: "Kakinada", state: "Andhra Pradesh" },
    { city: "Nellore", state: "Andhra Pradesh" },
    
    // Tamil Nadu
    { city: "Chennai", state: "Tamil Nadu" },
    { city: "Coimbatore", state: "Tamil Nadu" },
    { city: "Madurai", state: "Tamil Nadu" },
    { city: "Tiruchirappalli", state: "Tamil Nadu" },
    { city: "Salem", state: "Tamil Nadu" },
    { city: "Tirunelveli", state: "Tamil Nadu" },
    
    // Karnataka
    { city: "Bengaluru", state: "Karnataka" },
    { city: "Mysuru", state: "Karnataka" },
    { city: "Mangaluru", state: "Karnataka" },
    { city: "Hubballi", state: "Karnataka" },
    { city: "Belagavi", state: "Karnataka" },
    
    // Kerala
    { city: "Kochi", state: "Kerala" },
    { city: "Thiruvananthapuram", state: "Kerala" },
    { city: "Kozhikode", state: "Kerala" },
    { city: "Thrissur", state: "Kerala" },
    { city: "Kannur", state: "Kerala" },
    
    // Maharashtra
    { city: "Mumbai", state: "Maharashtra" },
    { city: "Pune", state: "Maharashtra" },
    { city: "Nagpur", state: "Maharashtra" },
    { city: "Nashik", state: "Maharashtra" },
    { city: "Aurangabad", state: "Maharashtra" },
    
    // Delhi & NCR
    { city: "New Delhi", state: "Delhi" },
    { city: "Gurugram", state: "Haryana" },
    { city: "Noida", state: "Uttar Pradesh" },
    { city: "Ghaziabad", state: "Uttar Pradesh" },
    { city: "Faridabad", state: "Haryana" },
    
    // Gujarat
    { city: "Ahmedabad", state: "Gujarat" },
    { city: "Surat", state: "Gujarat" },
    { city: "Vadodara", state: "Gujarat" },
    { city: "Rajkot", state: "Gujarat" },
    
    // Rajasthan
    { city: "Jaipur", state: "Rajasthan" },
    { city: "Jodhpur", state: "Rajasthan" },
    { city: "Udaipur", state: "Rajasthan" },
    { city: "Kota", state: "Rajasthan" },
    
    // West Bengal
    { city: "Kolkata", state: "West Bengal" },
    { city: "Howrah", state: "West Bengal" },
    { city: "Durgapur", state: "West Bengal" },
    { city: "Siliguri", state: "West Bengal" },
    
    // Uttar Pradesh
    { city: "Lucknow", state: "Uttar Pradesh" },
    { city: "Kanpur", state: "Uttar Pradesh" },
    { city: "Agra", state: "Uttar Pradesh" },
    { city: "Varanasi", state: "Uttar Pradesh" },
    { city: "Prayagraj", state: "Uttar Pradesh" },
    
    // Punjab
    { city: "Chandigarh", state: "Punjab" },
    { city: "Ludhiana", state: "Punjab" },
    { city: "Amritsar", state: "Punjab" },
    { city: "Jalandhar", state: "Punjab" },
    
    // Madhya Pradesh
    { city: "Indore", state: "Madhya Pradesh" },
    { city: "Bhopal", state: "Madhya Pradesh" },
    { city: "Jabalpur", state: "Madhya Pradesh" },
    { city: "Gwalior", state: "Madhya Pradesh" },
    
    // Bihar
    { city: "Patna", state: "Bihar" },
    { city: "Gaya", state: "Bihar" },
    { city: "Bhagalpur", state: "Bihar" },
    
    // Odisha
    { city: "Bhubaneswar", state: "Odisha" },
    { city: "Cuttack", state: "Odisha" },
    { city: "Rourkela", state: "Odisha" },
    
    // Jharkhand
    { city: "Ranchi", state: "Jharkhand" },
    { city: "Jamshedpur", state: "Jharkhand" },
    { city: "Dhanbad", state: "Jharkhand" },
    
    // Assam & Northeast
    { city: "Guwahati", state: "Assam" },
    { city: "Shillong", state: "Meghalaya" },
    { city: "Imphal", state: "Manipur" },
    
    // Goa
    { city: "Panaji", state: "Goa" },
    { city: "Margao", state: "Goa" },
    
    // Himachal Pradesh
    { city: "Shimla", state: "Himachal Pradesh" },
    { city: "Dharamshala", state: "Himachal Pradesh" },
    
    // Uttarakhand
    { city: "Dehradun", state: "Uttarakhand" },
    { city: "Haridwar", state: "Uttarakhand" },
  ];

  const handleLocationSelect = (city: string, state: string) => {
    setSelectedLocation(`${city}, ${state}`);
    setShowLocationModal(false);
  };

  const categories = [
    { id: "venues", name: "Venues", icon: <Home />, color: "from-purple-500 to-purple-600", count: 150 },
    { id: "catering", name: "Catering", icon: <Utensils />, color: "from-orange-500 to-orange-600", count: 200 },
    { id: "photography", name: "Photography", icon: <Camera />, color: "from-blue-500 to-blue-600", count: 120 },
    { id: "decoration", name: "Decoration", icon: <Palette />, color: "from-pink-500 to-pink-600", count: 180 },
    { id: "makeup", name: "Makeup Artists", icon: <Palette />, color: "from-red-500 to-red-600", count: 90 },
    { id: "entertainment", name: "Entertainment", icon: <Music />, color: "from-green-500 to-green-600", count: 75 },
    { id: "invitations", name: "Invitations", icon: <Gift />, color: "from-yellow-500 to-yellow-600", count: 50 },
    { id: "transport", name: "Transport", icon: <Car />, color: "from-indigo-500 to-indigo-600", count: 40 }
  ];

  const handleCallVendor = (phoneNumber: string) => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-6 shadow-lg">
        <button
          onClick={() => navigate("/home")}
          className="mb-4 text-white/90 hover:text-white flex items-center gap-2"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Home</span>
        </button>
        
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Wedding Marketplace
        </h1>
        <p className="text-sm text-white/80 mb-4">Everything you need for your perfect wedding</p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vendors, venues, services..."
            className="h-12 pl-10 rounded-xl border-none bg-white"
          />
        </div>
      </div>

      {/* Location Banner */}
      <div className="mx-4 mt-4 p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#7B1E3A]" />
          <div>
            <p className="text-sm font-semibold text-[#004953]">{selectedLocation}</p>
            <p className="text-xs text-[#004953]/60">Showing vendors in your area</p>
          </div>
        </div>
        <button className="text-sm font-semibold text-[#7B1E3A] hover:underline" onClick={() => setShowLocationModal(true)}>
          Change
        </button>
      </div>

      {/* Quick Actions */}
      <div className="mx-4 mt-4 grid grid-cols-3 gap-3">
        <QuickAction icon={<Heart />} label="Saved" count={12} />
        <QuickAction icon={<Star />} label="Top Rated" count={50} />
        <QuickAction icon={<Gift />} label="Offers" count={8} />
      </div>

      {/* Categories */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => navigate(`/wedding-vendors/${category.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Wedding Planning CTA */}
      <div className="mx-4 mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white">
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Need Help Planning?
        </h3>
        <p className="text-sm text-white/80 mb-4">
          Let our AI wedding planner create a customized checklist and budget for your big day!
        </p>
        <button
          onClick={() => navigate("/wedding-planner")}
          className="w-full h-12 bg-white text-[#7B1E3A] rounded-xl font-semibold hover:bg-white/90 transition-colors"
        >
          Start Planning Now
        </button>
      </div>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#7B1E3A]">Select Location</h3>
              <button className="text-[#7B1E3A] hover:text-[#A0002A]" onClick={() => setShowLocationModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-60 overflow-y-auto">
              {indianCities.map((city) => (
                <button
                  key={city.city}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleLocationSelect(city.city, city.state)}
                >
                  {city.city}, {city.state}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Category Card Component
interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    count: number;
  };
  onClick: () => void;
}

function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-4 hover:border-[#D4AF37] hover:shadow-lg transition-all text-left"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 text-white`}>
        {category.icon}
      </div>
      <h3 className="font-bold text-[#004953] mb-1">{category.name}</h3>
      <p className="text-xs text-[#004953]/60">{category.count}+ vendors</p>
    </button>
  );
}

// Quick Action Component
function QuickAction({ icon, label, count }: { icon: React.ReactNode; label: string; count: number }) {
  return (
    <button className="bg-white rounded-xl border border-[#D4AF37]/20 p-3 hover:shadow-md transition-all">
      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#7B1E3A]">
        {icon}
      </div>
      <p className="text-xs font-semibold text-[#004953] mb-1">{label}</p>
      <p className="text-xs text-[#004953]/60">{count}</p>
    </button>
  );
}

// Vendor Card Component
interface VendorCardProps {
  name: string;
  description: string;
  image: string;
  phoneNumber: string;
  onCall: (phoneNumber: string) => void;
}

function VendorCard({ name, description, image, phoneNumber, onCall }: VendorCardProps) {
  return (
    <div className="w-full bg-white rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37] hover:shadow-lg transition-all">
      {/* Image Section */}
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop';
          }}
        />
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white text-xs font-bold rounded-full">
          FEATURED
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-all"
        >
          <Heart className="w-4 h-4 text-[#7B1E3A]" />
        </button>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
            {name}
          </h3>
          <p className="text-sm text-[#004953]/70">{description}</p>
        </div>

        {/* Phone Number Display */}
        <div className="flex items-center gap-2 mb-3 p-3 bg-[#FFF8E7] rounded-lg">
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm font-semibold text-[#004953]">+91 {phoneNumber}</span>
        </div>

        {/* Call Now Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCall(phoneNumber);
          }}
          className="w-full h-11 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all active:scale-95"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </button>
      </div>
    </div>
  );
}