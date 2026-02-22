<<<<<<< HEAD
import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Bell, Search, SlidersHorizontal, Sparkles, MapPin, Shield, Heart, MessageCircle, Star, ShoppingBag, Calendar } from "lucide-react";
=======
import { motion } from "motion/react";
import { Heart, Sparkles, Shield, CheckCircle, TrendingUp, Bell, Search } from "lucide-react";
import { Link } from "react-router";
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
import { mockProfiles } from "../data/mockData";
import ProfileCard from "../components/ProfileCard";
import { BottomNav } from "../components/BottomNav";
import { SubscriptionReminder } from "../components/SubscriptionReminder";

export default function Home() {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
  const aiMatches = mockProfiles.filter(p => p.aiCompatibility >= 90);
  const recentlyJoined = mockProfiles.slice(0, 3);
  const premiumMatches = mockProfiles.filter(p => p.premium);

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b border-[#D4AF37]/20 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
            />
            <div>
              <h2 className="font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                Welcome, Ramesh
              </h2>
              <p className="text-xs text-[#004953]/60">Find your perfect match</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
<<<<<<< HEAD
            <button 
              onClick={() => navigate("/notifications")}
              className="p-2 rounded-full hover:bg-[#FFF8E7] transition-colors relative"
            >
              <Bell className="w-6 h-6 text-[#7B1E3A]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#A0002A] rounded-full"></span>
            </button>
=======
            <Link to="/notifications">
              <button className="p-2 rounded-full hover:bg-[#FFF8E7] transition-colors relative">
                <Bell className="w-6 h-6 text-[#7B1E3A]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#A0002A] rounded-full"></span>
              </button>
            </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
          </div>
        </div>

        {/* Search Bar */}
<<<<<<< HEAD
        <div onClick={() => navigate("/search")} className="cursor-pointer">
=======
        <Link to="/search">
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
            <input
              type="text"
              placeholder="Search by name, profession, location..."
              className="w-full h-12 pl-12 pr-12 rounded-xl border border-[#D4AF37]/30 bg-[#FFF8E7] focus:outline-none focus:border-[#7B1E3A] transition-colors"
              readOnly
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#7B1E3A] text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
<<<<<<< HEAD
        </div>
=======
        </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* AI Match Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            boxShadow: "0 8px 24px rgba(123, 30, 58, 0.3)"
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="stars" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                  <circle cx="5" cy="10" r="0.5" fill="white" />
                  <circle cx="35" cy="15" r="0.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stars)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-[#F4C430]" />
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                AI Compatibility Score
              </h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Our AI analyzed {mockProfiles.length} profiles and found your perfect matches
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#F4C430]">
                    {aiMatches.length}
                  </span>
                  <span className="text-white/80">High Matches</span>
                </div>
                <p className="text-xs text-white/60 mt-1">90%+ Compatibility</p>
              </div>
<<<<<<< HEAD
              <button 
                onClick={() => navigate("/search")}
                className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#7B1E3A] font-semibold hover:bg-[#F4C430] transition-colors"
              >
                View All
              </button>
=======
              <Link to="/search">
                <button className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#7B1E3A] font-semibold hover:bg-[#F4C430] transition-colors">
                  View All
                </button>
              </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
            </div>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Quick Access - New Features */}
        <div>
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Explore Features
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div onClick={() => navigate("/horoscope-matching")} className="cursor-pointer">
              <div className="p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#004953] text-sm mb-1">Kundali Match</h4>
                <p className="text-xs text-[#004953]/60">Check horoscope compatibility</p>
              </div>
            </div>

            <div onClick={() => navigate("/wedding-marketplace")} className="cursor-pointer">
              <div className="p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#004953] text-sm mb-1">Wedding Services</h4>
                <p className="text-xs text-[#004953]/60">Venues, catering & more</p>
              </div>
            </div>

            <div onClick={() => navigate("/wedding-planner")} className="cursor-pointer">
              <div className="p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#004953] text-sm mb-1">AI Wedding Planner</h4>
                <p className="text-xs text-[#004953]/60">Plan your perfect wedding</p>
              </div>
            </div>

            <div onClick={() => navigate("/parent-login")} className="cursor-pointer">
              <div className="p-4 bg-white rounded-xl border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#004953] text-sm mb-1">Parent Account</h4>
                <p className="text-xs text-[#004953]/60">Manage family profiles</p>
              </div>
            </div>
          </div>
        </div>

=======
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
        {/* Daily Matches */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Daily Matches
            </h3>
<<<<<<< HEAD
            <span 
              onClick={() => navigate("/search")}
              className="text-sm font-semibold text-[#7B1E3A] cursor-pointer"
            >
              See All →
            </span>
=======
            <Link to="/search" className="text-sm font-semibold text-[#7B1E3A]">
              See All →
            </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {aiMatches.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-72"
              >
                <ProfileCard profile={profile} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recently Joined */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Recently Joined
            </h3>
<<<<<<< HEAD
            <span 
              onClick={() => navigate("/search")}
              className="text-sm font-semibold text-[#7B1E3A] cursor-pointer"
            >
              See All →
            </span>
=======
            <Link to="/search" className="text-sm font-semibold text-[#7B1E3A]">
              See All →
            </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
          </div>

          <div className="space-y-4">
            {recentlyJoined.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProfileCard profile={profile} variant="horizontal" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Matches */}
        <div className="p-6 rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-br from-[#FFF8E7] to-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-[#D4AF37]/20">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Premium Verified Matches
            </h3>
          </div>
          <p className="text-sm text-[#004953]/70 mb-4">
            These profiles are verified and trusted by our team
          </p>

          <div className="grid grid-cols-2 gap-4">
            {premiumMatches.slice(0, 2).map((profile) => (
<<<<<<< HEAD
              <div 
                key={profile.id} 
                onClick={() => navigate(`/profile/${profile.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative mb-2 overflow-hidden rounded-xl">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-[#004953] text-sm mb-1">{profile.name}</h4>
                <p className="text-xs text-[#004953]/60">{profile.profession}</p>
                <p className="text-xs text-[#004953]/60">{profile.location}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate("/subscription")}
            className="w-full mt-4 h-12 rounded-xl border-2 border-[#D4AF37] bg-white text-[#7B1E3A] font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors"
          >
            Upgrade to Premium
          </button>
=======
              <Link key={profile.id} to={`/profile/${profile.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative mb-2 overflow-hidden rounded-xl">
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <span className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#004953] text-sm mb-1">{profile.name}</h4>
                  <p className="text-xs text-[#004953]/60">{profile.profession}</p>
                  <p className="text-xs text-[#004953]/60">{profile.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/subscription">
            <button className="w-full mt-4 h-12 rounded-xl border-2 border-[#D4AF37] bg-white text-[#7B1E3A] font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors">
              Upgrade to Premium
            </button>
          </Link>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
      <SubscriptionReminder />
    </div>
  );
}