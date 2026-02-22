import { useState } from "react";
import { useNavigate } from "react-router";
import { Users, Heart, MessageSquare, Settings, Bell, Star, Crown, Shield, Plus } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("children");

  // Mock data for children profiles
  const children = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      profession: "Software Engineer",
      newMatches: 12,
      pendingRequests: 5,
      verified: true
    },
    {
      id: 2,
      name: "Rahul Sharma",
      age: 28,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      profession: "Business Analyst",
      newMatches: 8,
      pendingRequests: 3,
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Parent Dashboard
            </h1>
            <p className="text-sm text-white/80">Manage family profiles</p>
          </div>
          <button onClick={() => navigate("/settings")} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={<Heart />} value="25" label="New Matches" color="bg-red-500" />
          <StatCard icon={<MessageSquare />} value="8" label="Messages" color="bg-blue-500" />
          <StatCard icon={<Star />} value="3" label="Interests" color="bg-yellow-500" />
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#D4AF37]/20 px-4 py-2">
        <div className="flex gap-2">
          <TabButton
            active={activeTab === "children"}
            onClick={() => setActiveTab("children")}
            label="My Children"
          />
          <TabButton
            active={activeTab === "matches"}
            onClick={() => setActiveTab("matches")}
            label="Matches"
          />
          <TabButton
            active={activeTab === "requests"}
            onClick={() => setActiveTab("requests")}
            label="Requests"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "children" && (
          <div className="space-y-4">
            {/* Add New Profile Button */}
            <button
              onClick={() => navigate("/registration")}
              className="w-full p-4 rounded-2xl border-2 border-dashed border-[#D4AF37] bg-white hover:bg-[#FFF8E7] transition-colors flex items-center justify-center gap-2 text-[#7B1E3A]"
            >
              <Plus className="w-5 h-5" />
              <span className="font-semibold">Add Another Child's Profile</span>
            </button>

            {/* Children Profiles */}
            {children.map((child) => (
              <ChildProfileCard key={child.id} child={child} />
            ))}
          </div>
        )}

        {activeTab === "matches" && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-2">New Matches</h3>
            <p className="text-[#004953]/60">Select a child's profile to view their matches</p>
          </div>
        )}

        {activeTab === "requests" && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-2">Interest Requests</h3>
            <p className="text-[#004953]/60">Select a child's profile to view their requests</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D4AF37]/20 px-6 py-3 shadow-lg">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <NavButton icon={<Users />} label="Profiles" active />
          <NavButton icon={<Heart />} label="Matches" />
          <NavButton icon={<MessageSquare />} label="Chat" />
          <NavButton icon={<Bell />} label="Alerts" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center mb-2`}>
        <div className="text-white">{icon}</div>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-white/80">{label}</p>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
        active
          ? "bg-[#7B1E3A] text-white"
          : "text-[#004953]/60 hover:bg-[#FFF8E7]"
      }`}
    >
      {label}
    </button>
  );
}

interface ChildProfile {
  id: number;
  name: string;
  age: number;
  photo: string;
  profession: string;
  newMatches: number;
  pendingRequests: number;
  verified: boolean;
}

function ChildProfileCard({ child }: { child: ChildProfile }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-4 shadow-lg">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={child.photo}
            alt={child.name}
            className="w-20 h-20 rounded-full border-2 border-[#D4AF37]"
          />
          {child.verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <Shield className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#7B1E3A]">{child.name}</h3>
          <p className="text-sm text-[#004953]/70">{child.age} yrs | {child.profession}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#7B1E3A] text-xs font-semibold">
              Premium Active
            </div>
          </div>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-xs text-red-700 font-semibold">New Matches</span>
          </div>
          <p className="text-2xl font-bold text-red-600">{child.newMatches}</p>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-blue-700 font-semibold">Requests</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{child.pendingRequests}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          onClick={() => navigate("/home", { state: { childId: child.id } })}
          className="flex-1 h-10 rounded-xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
        >
          View Matches
        </Button>
        <Button
          onClick={() => navigate("/profile", { state: { childId: child.id } })}
          variant="outline"
          className="flex-1 h-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A]"
        >
          Manage Profile
        </Button>
      </div>
    </div>
  );
}

function NavButton({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <div className={active ? "text-[#7B1E3A]" : "text-[#004953]/40"}>{icon}</div>
      <span className={`text-xs font-semibold ${active ? "text-[#7B1E3A]" : "text-[#004953]/40"}`}>
        {label}
      </span>
    </button>
  );
}

