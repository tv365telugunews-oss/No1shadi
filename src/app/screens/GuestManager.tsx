import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Plus, Search, Users, CheckCircle, Clock, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function GuestManager() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const guests = [
    { id: 1, name: "Rajesh Kumar & Family", category: "Groom Side", status: "confirmed", guests: 4 },
    { id: 2, name: "Priya Sharma & Family", category: "Bride Side", status: "confirmed", guests: 5 },
    { id: 3, name: "Amit Reddy", category: "Friends", status: "pending", guests: 2 },
    { id: 4, name: "Sai Krishna", category: "Groom Side", status: "confirmed", guests: 3 },
    { id: 5, name: "Divya Rao", category: "Bride Side", status: "pending", guests: 2 },
    { id: 6, name: "Ravi Teja", category: "Friends", status: "declined", guests: 0 }
  ];

  const stats = {
    total: 450,
    confirmed: 380,
    pending: 50,
    declined: 20
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-white/10">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Guest Manager</h1>
            <p className="text-sm text-white/80">Manage wedding invitations</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guests..."
            className="h-12 pl-10 rounded-xl border-none bg-white"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          <StatCard icon={<Users />} value={stats.total} label="Total" color="bg-blue-500" />
          <StatCard icon={<CheckCircle />} value={stats.confirmed} label="Confirmed" color="bg-green-500" />
          <StatCard icon={<Clock />} value={stats.pending} label="Pending" color="bg-yellow-500" />
          <StatCard icon={<X />} value={stats.declined} label="Declined" color="bg-red-500" />
        </div>

        <Button className="w-full h-12 rounded-xl border-2 border-dashed border-[#D4AF37] bg-white text-[#7B1E3A]">
          <Plus className="w-5 h-5 mr-2" />
          Add Guest
        </Button>

        <div className="space-y-3">
          {guests.map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, color }: any) {
  return (
    <div className={`${color} rounded-xl p-3 text-white text-center`}>
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs opacity-90">{label}</p>
    </div>
  );
}

function GuestCard({ guest }: any) {
  const statusColors: any = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    declined: "bg-red-100 text-red-700"
  };

  return (
    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-[#004953]">{guest.name}</h4>
        <span className={`px-3 py-1 ${statusColors[guest.status]} text-xs font-bold rounded-full uppercase`}>
          {guest.status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#004953]/60">{guest.category}</span>
        <span className="text-sm font-semibold text-[#7B1E3A]">{guest.guests} guests</span>
      </div>
    </div>
  );
}