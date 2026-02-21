import { useState } from "react";
import { ArrowLeft, Send, MoreVertical, Phone, Video, Image as ImageIcon, Smile } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar } from "../components/ui/avatar";
import { mockProfiles } from "../data/mockData";

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isRead: boolean;
}

interface Conversation {
  id: string;
  profileId: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
}

// Mock conversations
const mockConversations: Conversation[] = [
  {
    id: "1",
    profileId: "1",
    lastMessage: "Thank you for connecting! I'd love to know more about you.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
    unreadCount: 2,
  },
  {
    id: "2",
    profileId: "2",
    lastMessage: "That sounds wonderful! When would be a good time to talk?",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unreadCount: 0,
  },
  {
    id: "3",
    profileId: "3",
    lastMessage: "My family would like to meet yours soon.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unreadCount: 1,
  },
];

// Mock messages
const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderId: "1",
      text: "Namaste! Thank you for showing interest in my profile.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isRead: true,
    },
    {
      id: "2",
      senderId: "me",
      text: "Namaste! I'm glad we matched. I really liked your profile.",
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      isRead: true,
    },
    {
      id: "3",
      senderId: "1",
      text: "Thank you! I'd love to know more about you and your family.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    },
    {
      id: "4",
      senderId: "1",
      text: "What are your thoughts on traditional values?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isRead: false,
    },
  ],
};

export default function Chat() {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedConversation) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "me",
      text: messageText,
      timestamp: new Date(),
      isRead: true,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedConversation]: [...(prev[selectedConversation] || []), newMessage],
    }));
    setMessageText("");
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return "Just now";
  };

  const getProfile = (profileId: string) => {
    return mockProfiles.find((p) => p.id === profileId);
  };

  if (selectedConversation) {
    const conversation = mockConversations.find((c) => c.id === selectedConversation);
    const profile = conversation ? getProfile(conversation.profileId) : null;
    const conversationMessages = messages[selectedConversation] || [];

    return (
      <div className="flex flex-col h-screen bg-[#FFF8E7]">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSelectedConversation(null)} className="p-1">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <Avatar className="w-10 h-10 border-2 border-[#D4AF37]">
                <img src={profile?.photo} alt={profile?.name} className="object-cover" />
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                  {profile?.name}
                </h3>
                <p className="text-xs text-white/80">{profile?.profession}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {conversationMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.senderId === "me"
                    ? "bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white"
                    : "bg-white border-2 border-[#D4AF37] text-[#004953]"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.senderId === "me" ? "text-white/70" : "text-[#004953]/50"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t-2 border-[#D4AF37] px-4 py-3">
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#7B1E3A]">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-[#7B1E3A]">
              <Smile className="w-5 h-5" />
            </button>
            <Input
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 border-2 border-[#D4AF37] rounded-full px-4 focus:border-[#7B1E3A]"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white rounded-full shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Conversations List View
  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Messages
            </h1>
            <p className="text-sm text-white/80 mt-1">
              {mockConversations.filter((c) => c.unreadCount > 0).length} unread conversations
            </p>
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="px-4 py-4 space-y-3">
        {mockConversations.map((conversation) => {
          const profile = getProfile(conversation.profileId);
          if (!profile) return null;

          return (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className="w-full bg-white rounded-2xl border-2 border-[#D4AF37] p-4 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-14 h-14 border-2 border-[#D4AF37]">
                    <img src={profile.photo} alt={profile.name} className="object-cover" />
                  </Avatar>
                  {profile.verified && (
                    <div className="absolute -top-1 -right-1 bg-[#D4AF37] rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                      {profile.name}
                    </h3>
                    <span className="text-xs text-[#004953]/50">{formatTime(conversation.lastMessageTime)}</span>
                  </div>
                  <p className="text-sm text-[#004953]/70">{profile.profession}</p>
                  <p className="text-sm text-[#004953]/60 mt-1 line-clamp-1">{conversation.lastMessage}</p>
                </div>

                {conversation.unreadCount > 0 && (
                  <div className="bg-[#C41E3A] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                    {conversation.unreadCount}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Premium Upgrade CTA */}
      <div className="mx-4 my-6 bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] rounded-2xl p-6 text-white gold-border shadow-lg">
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Unlock Unlimited Chats
        </h3>
        <p className="text-sm text-white/90 mb-4">
          Upgrade to Premium to chat with all your matches and access exclusive features
        </p>
        <Button
          onClick={() => navigate("/subscription")}
          className="w-full bg-[#D4AF37] text-[#7B1E3A] hover:bg-[#FFD700] font-semibold"
        >
          View Plans
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
