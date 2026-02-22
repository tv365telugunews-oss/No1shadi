import { useState } from "react";
import { Heart, Star, MapPin, Briefcase, GraduationCap, Calendar, X } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { useNavigate } from "react-router";

export default function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      height: "5'5\"",
      location: "Hyderabad, Telangana",
      education: "MBA",
      profession: "Software Engineer",
      compatibility: 92,
      image: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=400&h=500&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "Anjali Reddy",
      age: 25,
      height: "5'4\"",
      location: "Warangal, Telangana",
      education: "B.Tech",
      profession: "Data Analyst",
      compatibility: 88,
      image: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?w=400&h=500&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "Divya Krishna",
      age: 27,
      height: "5'6\"",
      location: "Vijayawada, Andhra Pradesh",
      education: "M.Tech",
      profession: "Project Manager",
      compatibility: 90,
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&h=500&fit=crop",
      verified: true
    },
    {
      id: 4,
      name: "Sneha Patel",
      age: 24,
      height: "5'3\"",
      location: "Hyderabad, Telangana",
      education: "B.Com",
      profession: "Business Analyst",
      compatibility: 85,
      image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=400&h=500&fit=crop",
      verified: true
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Favorites
            </h1>
            <p className="text-white/80 text-sm">
              {favorites.length} {favorites.length === 1 ? 'profile' : 'profiles'} saved
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Heart className="w-7 h-7 fill-white text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white/50 rounded-full mb-4">
              <Heart className="w-16 h-16 text-[#7B1E3A]/30" />
            </div>
            <h2 className="text-2xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              No Favorites Yet
            </h2>
            <p className="text-[#004953]/60 mb-6">
              Start exploring profiles and add them to your favorites
            </p>
            <button
              onClick={() => navigate("/search")}
              className="px-6 py-3 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white rounded-xl font-semibold shadow-lg"
            >
              Browse Profiles
            </button>
          </div>
        ) : (
          favorites.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex gap-4 p-4">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="w-28 h-28 rounded-xl overflow-hidden border-2 border-[#D4AF37] cursor-pointer"
                    onClick={() => navigate(`/profile/${profile.id}`)}
                  >
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {profile.verified && (
                    <div className="absolute -top-1 -right-1 bg-[#1E90FF] rounded-full p-1">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  )}
                  {/* Compatibility Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {profile.compatibility}% Match
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div 
                      className="cursor-pointer"
                      onClick={() => navigate(`/profile/${profile.id}`)}
                    >
                      <h3 className="text-lg font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                        {profile.name}
                      </h3>
                      <p className="text-sm text-[#004953]/60">
                        {profile.age} years, {profile.height}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFavorite(profile.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-colors"
                      aria-label="Remove from favorites"
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-[#004953]/80">
                      <MapPin className="w-4 h-4 text-[#7B1E3A]" />
                      <span className="truncate">{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#004953]/80">
                      <GraduationCap className="w-4 h-4 text-[#7B1E3A]" />
                      <span className="truncate">{profile.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#004953]/80">
                      <Briefcase className="w-4 h-4 text-[#7B1E3A]" />
                      <span className="truncate">{profile.profession}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex border-t border-[#D4AF37]/30">
                <button
                  onClick={() => navigate(`/profile/${profile.id}`)}
                  className="flex-1 py-3 text-center text-[#7B1E3A] font-semibold hover:bg-[#FFF8E7] transition-colors"
                >
                  View Profile
                </button>
                <div className="w-px bg-[#D4AF37]/30" />
                <button
                  onClick={() => navigate("/chat")}
                  className="flex-1 py-3 text-center text-[#7B1E3A] font-semibold hover:bg-[#FFF8E7] transition-colors"
                >
                  Send Interest
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav />
    </div>
  );
}