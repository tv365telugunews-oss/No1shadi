import { useState } from "react";
import { ArrowLeft, UserX, Unlock } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Avatar } from "../components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

interface BlockedUser {
  id: string;
  name: string;
  photo: string;
  age: number;
  location: string;
  blockedDate: string;
}

const initialBlockedUsers: BlockedUser[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    age: 32,
    location: "Hyderabad",
    blockedDate: "Feb 10, 2026"
  },
  {
    id: "2",
    name: "Suresh Reddy",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    age: 29,
    location: "Bangalore",
    blockedDate: "Feb 8, 2026"
  }
];

export default function BlockedUsers() {
  const navigate = useNavigate();
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>(() => {
    const saved = localStorage.getItem("blockedUsers");
    return saved ? JSON.parse(saved) : initialBlockedUsers;
  });
  const [showUnblockDialog, setShowUnblockDialog] = useState(false);
  const [userToUnblock, setUserToUnblock] = useState<BlockedUser | null>(null);

  const handleUnblockClick = (user: BlockedUser) => {
    setUserToUnblock(user);
    setShowUnblockDialog(true);
  };

  const handleUnblockConfirm = () => {
    if (userToUnblock) {
      const updatedUsers = blockedUsers.filter(u => u.id !== userToUnblock.id);
      setBlockedUsers(updatedUsers);
      localStorage.setItem("blockedUsers", JSON.stringify(updatedUsers));
      setShowUnblockDialog(false);
      setUserToUnblock(null);
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
              Blocked Users
            </h1>
            <p className="text-sm text-white/80">
              {blockedUsers.length} {blockedUsers.length === 1 ? "user" : "users"} blocked
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {blockedUsers.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-12 text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#FFF8E7] rounded-full">
                <UserX className="w-12 h-12 text-[#7B1E3A]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              No Blocked Users
            </h3>
            <p className="text-[#004953]/60">
              You haven't blocked anyone yet. Blocked users won't be able to contact you.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {blockedUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl border-2 border-[#D4AF37] p-4 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-[#D4AF37]">
                    <img src={user.photo} alt={user.name} className="object-cover" />
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#7B1E3A] text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                      {user.name}
                    </h3>
                    <p className="text-sm text-[#004953]/70">
                      {user.age} years • {user.location}
                    </p>
                    <p className="text-xs text-[#004953]/50 mt-1">
                      Blocked on {user.blockedDate}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleUnblockClick(user)}
                    variant="outline"
                    className="border-2 border-[#7B1E3A] text-[#7B1E3A] hover:bg-[#7B1E3A] hover:text-white font-semibold"
                  >
                    <Unlock className="w-4 h-4 mr-2" />
                    Unblock
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Card */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            About Blocking
          </h3>
          <ul className="space-y-2 text-sm text-[#004953]/70">
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] mt-0.5">•</span>
              <span>Blocked users won't be able to view your profile or contact you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] mt-0.5">•</span>
              <span>You won't see their profiles in search results or recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] mt-0.5">•</span>
              <span>You can unblock users anytime from this page</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Unblock Confirmation Dialog */}
      <AlertDialog open={showUnblockDialog} onOpenChange={setShowUnblockDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37] max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#7B1E3A]/10 rounded-full">
                <Unlock className="w-8 h-8 text-[#7B1E3A]" />
              </div>
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-[#7B1E3A] text-center" style={{ fontFamily: "var(--font-heading)" }}>
              Unblock {userToUnblock?.name}?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[#004953]/70 pt-2">
              This user will be able to view your profile and contact you again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-4">
            <AlertDialogCancel 
              className="w-full sm:w-auto border-2 border-[#D4AF37] bg-white hover:bg-[#FFF8E7] text-[#004953] font-semibold"
              onClick={() => setShowUnblockDialog(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="w-full sm:w-auto font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)",
              }}
              onClick={handleUnblockConfirm}
            >
              Yes, Unblock
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
