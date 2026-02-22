import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Home, Search, Heart, MessageCircle, User } from "lucide-react";

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Heart, label: "Favorites", path: "/favorites" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#D4AF37]/20 px-4 py-3 z-20"
      style={{
        boxShadow: "0 -4px 12px rgba(123, 30, 58, 0.08)"
      }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#7B1E3A] text-white"
                    : "text-[#004953]/60 hover:bg-[#FFF8E7]"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs font-semibold ${
                  isActive ? "text-[#7B1E3A]" : "text-[#004953]/60"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}