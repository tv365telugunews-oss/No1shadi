import { motion } from "motion/react";
import { ArrowLeft, Heart, MessageCircle, CheckCircle, Star, Eye, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { Avatar } from "../components/ui/avatar";

// Mock notifications data
const notifications = [
  {
    id: 1,
    type: "interest",
    title: "New Interest Received",
    message: "Rajesh Kumar has shown interest in your profile",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    message: "Priya Sharma sent you a message",
    photo: "https://images.unsplash.com/photo-1619895092538-128341789043?w=150&h=150&fit=crop",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "match",
    title: "New Match Found",
    message: "You have a new AI-matched profile with 95% compatibility",
    photo: "https://images.unsplash.com/photo-1598550487692-a9c0c5d0b5f5?w=150&h=150&fit=crop",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "view",
    title: "Profile Viewed",
    message: "Srinivas Reddy viewed your profile",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    time: "1 day ago",
    read: true,
  },
  {
    id: 5,
    type: "interest",
    title: "Interest Accepted",
    message: "Divya Krishna accepted your interest request",
    photo: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=150&h=150&fit=crop",
    time: "2 days ago",
    read: true,
  },
  {
    id: 6,
    type: "premium",
    title: "Premium Feature Unlocked",
    message: "Your premium membership has been activated successfully",
    photo: null,
    time: "3 days ago",
    read: true,
  },
  {
    id: 7,
    type: "message",
    title: "New Message",
    message: "Anil Kumar sent you a message",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    time: "3 days ago",
    read: true,
  },
];

export default function Notifications() {
  const navigate = useNavigate();

  const getIcon = (type: string) => {
    switch (type) {
      case "interest":
        return <Heart className="w-5 h-5 text-[#A0002A]" fill="currentColor" />;
      case "message":
        return <MessageCircle className="w-5 h-5 text-[#7B1E3A]" />;
      case "match":
        return <CheckCircle className="w-5 h-5 text-[#D4AF37]" fill="currentColor" />;
      case "view":
        return <Eye className="w-5 h-5 text-[#004953]" />;
      case "premium":
        return <Star className="w-5 h-5 text-[#D4AF37]" fill="currentColor" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#004953]" />;
    }
  };

  const getBackgroundColor = (type: string, read: boolean) => {
    if (!read) return "bg-[#FFF8E7]";
    return "bg-white";
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
              Notifications
            </h1>
            <p className="text-sm text-white/80">
              {notifications.filter(n => !n.read).length} unread notifications
            </p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="p-4 space-y-3">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`${getBackgroundColor(
              notification.type,
              notification.read
            )} rounded-2xl border-2 ${
              notification.read ? "border-[#D4AF37]/20" : "border-[#D4AF37]"
            } p-4 shadow-md hover:shadow-lg transition-all cursor-pointer`}
            onClick={() => {
              // Handle notification click based on type
              if (notification.type === "message") {
                navigate("/chat");
              } else if (notification.type === "interest" || notification.type === "match" || notification.type === "view") {
                navigate("/search");
              } else if (notification.type === "premium") {
                navigate("/subscription");
              }
            }}
          >
            <div className="flex gap-4">
              {/* Icon or Photo */}
              <div className="flex-shrink-0">
                {notification.photo ? (
                  <div className="relative">
                    <Avatar className="w-14 h-14 border-2 border-[#D4AF37]">
                      <img src={notification.photo} alt="Profile" className="object-cover" />
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                      {getIcon(notification.type)}
                    </div>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] flex items-center justify-center">
                    {getIcon(notification.type)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-[#7B1E3A] text-sm">
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-[#A0002A] rounded-full flex-shrink-0 mt-1"></div>
                  )}
                </div>
                <p className="text-sm text-[#004953] mb-2 line-clamp-2">
                  {notification.message}
                </p>
                <div className="flex items-center gap-1 text-xs text-[#004953]/60">
                  <Clock className="w-3 h-3" />
                  {notification.time}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (if no notifications) */}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <div className="w-32 h-32 rounded-full bg-[#FFF8E7] border-4 border-[#D4AF37]/30 flex items-center justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-[#D4AF37]/50" />
          </div>
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            No Notifications
          </h3>
          <p className="text-center text-[#004953]/60">
            You're all caught up! We'll notify you when something new happens.
          </p>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

