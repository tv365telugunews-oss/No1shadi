<<<<<<< HEAD
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, X, MapPin, Briefcase, GraduationCap, ShieldCheck, Sparkles, CheckCircle, MessageCircle, Info } from "lucide-react";
=======
import { useNavigate, Link } from "react-router";
import { Heart, MapPin, Briefcase, GraduationCap, MessageCircle, Info, CheckCircle } from "lucide-react";
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    height: string;
    location: string;
    education: string;
    profession: string;
    income: string;
    image: string;
    verified?: boolean;
    compatibility?: number;
  };
  variant?: "default" | "horizontal";
}

export default function ProfileCard({ profile, variant = "default" }: ProfileCardProps) {
  const navigate = useNavigate();

  const handleSendInterest = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Interest sent to ${profile.name}! They will be notified.`);
    // In a real app, you would make an API call here
    // Example: await sendInterest(profile.id);
  };

  // Horizontal variant for search/list view
  if (variant === "horizontal") {
    return (
<<<<<<< HEAD
      <div 
        onClick={() => navigate(`/profile/${profile.id}`)}
        className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all flex"
      >
        {/* Profile Image */}
        <div className="relative overflow-hidden w-32 flex-shrink-0">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {profile.verified && (
            <div className="absolute top-2 right-2">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#004953] text-base truncate">
=======
      <Link to={`/profile/${profile.id}`}>
        <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all flex">
          {/* Profile Image */}
          <div className="relative overflow-hidden w-32 flex-shrink-0">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {profile.verified && (
              <div className="absolute top-2 right-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="p-4 flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#004953] text-base truncate">
                  {profile.name}
                </h3>
                <p className="text-sm text-[#004953]/60">
                  {profile.age} yrs, {profile.height}
                </p>
              </div>
              {profile.compatibility && (
                <div className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-[#D4AF37]/10">
                  <span className="text-sm font-bold text-[#7B1E3A]">{profile.compatibility}%</span>
                </div>
              )}
            </div>

            <div className="space-y-1 mb-3">
              <p className="text-xs text-[#004953]/80 truncate">{profile.profession}</p>
              <p className="text-xs text-[#004953]/80 truncate">{profile.location}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleSendInterest}
                className="flex-1 h-8 rounded-lg bg-[#7B1E3A] text-white text-sm font-semibold hover:bg-[#A0002A] transition-colors flex items-center justify-center gap-1"
              >
                <Heart className="w-3 h-3" />
                Interest
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/chat");
                }}
                className="h-8 w-8 rounded-lg border border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant
  return (
    <Link to={`/profile/${profile.id}`}>
      <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all">
        {/* Profile Image */}
        <div className="relative overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Verification Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {profile.verified && (
              <div className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#004953]">Verified</span>
              </div>
            )}
          </div>

          {/* AI Compatibility Badge */}
          <div className="absolute top-3 left-3">
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="4"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeDasharray={`${profile.compatibility * 1.76} 176`}
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-white drop-shadow-lg">
                    {profile.compatibility}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#004953] text-lg truncate">
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
                {profile.name}
              </h3>
              <p className="text-sm text-[#004953]/60">
                {profile.age} yrs, {profile.height}
              </p>
            </div>
<<<<<<< HEAD
            {profile.compatibility && (
              <div className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-[#D4AF37]/10">
                <span className="text-sm font-bold text-[#7B1E3A]">{profile.compatibility}%</span>
              </div>
            )}
          </div>

          <div className="space-y-1 mb-3">
            <p className="text-xs text-[#004953]/80 truncate">{profile.profession}</p>
            <p className="text-xs text-[#004953]/80 truncate">{profile.location}</p>
=======
          </div>

          <div className="space-y-1 mb-3">
            <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.profession}
            </p>
            <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </p>
            <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {profile.income}
            </p>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleSendInterest}
<<<<<<< HEAD
              className="flex-1 h-8 rounded-lg bg-[#7B1E3A] text-white text-sm font-semibold hover:bg-[#A0002A] transition-colors flex items-center justify-center gap-1"
            >
              <Heart className="w-3 h-3" />
              Interest
=======
              className="flex-1 h-10 rounded-xl bg-[#7B1E3A] text-white font-semibold hover:bg-[#A0002A] transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Send Interest
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/chat");
              }}
<<<<<<< HEAD
              className="h-8 w-8 rounded-lg border border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4" />
=======
              className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
            >
              <Info className="w-5 h-5" />
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
  }

  // Default card variant
  return (
    <div 
      onClick={() => navigate(`/profile/${profile.id}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all"
    >
      {/* Profile Image */}
      <div className="relative overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Verification Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {profile.verified && (
            <div className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#004953]">Verified</span>
            </div>
          )}
        </div>

        {/* AI Compatibility Badge */}
        <div className="absolute top-3 left-3">
          <div className="relative">
            <svg className="w-16 h-16" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="4"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeDasharray={`${profile.compatibility * 1.76} 176`}
                strokeLinecap="round"
                transform="rotate(-90 32 32)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-white drop-shadow-lg">
                  {profile.compatibility}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-[#004953] text-lg truncate">
              {profile.name}
            </h3>
            <p className="text-sm text-[#004953]/60">
              {profile.age} yrs, {profile.height}
            </p>
          </div>
        </div>

        <div className="space-y-1 mb-3">
          <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.profession}
          </p>
          <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </p>
          <p className="text-sm text-[#004953]/80 truncate flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {profile.income}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleSendInterest}
            className="flex-1 h-10 rounded-xl bg-[#7B1E3A] text-white font-semibold hover:bg-[#A0002A] transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Send Interest
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/chat");
            }}
            className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
=======
    </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
  );
}