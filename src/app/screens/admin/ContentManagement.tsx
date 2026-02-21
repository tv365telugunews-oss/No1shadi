import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Video,
  FileEdit,
  Trash2,
  Plus,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export default function ContentManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("banners");

  const banners = [
    {
      id: 1,
      title: "Valentines Day Special Offer",
      image: "Banner 1",
      status: "active",
      clicks: 1245,
      startDate: "Feb 1, 2026",
      endDate: "Feb 28, 2026",
    },
    {
      id: 2,
      title: "Premium Membership Discount",
      image: "Banner 2",
      status: "active",
      clicks: 892,
      startDate: "Feb 10, 2026",
      endDate: "Mar 10, 2026",
    },
    {
      id: 3,
      title: "Success Stories Feature",
      image: "Banner 3",
      status: "inactive",
      clicks: 456,
      startDate: "Jan 15, 2026",
      endDate: "Jan 31, 2026",
    },
  ];

  const successStories = [
    {
      id: 1,
      couple: "Priya & Rajesh",
      date: "Jan 2026",
      status: "published",
      views: 3245,
    },
    {
      id: 2,
      couple: "Lakshmi & Venkat",
      date: "Dec 2025",
      status: "published",
      views: 2876,
    },
    {
      id: 3,
      couple: "Sai & Krishna",
      date: "Feb 2026",
      status: "draft",
      views: 0,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "New Feature Launch",
      message: "Video call feature is now available for Diamond & Platinum users",
      type: "feature",
      sentTo: "All Users",
      date: "Feb 20, 2026",
    },
    {
      id: 2,
      title: "Subscription Expiry Reminder",
      message: "Your subscription will expire in 7 days. Renew now!",
      type: "reminder",
      sentTo: "Expiring Subscriptions",
      date: "Feb 19, 2026",
    },
    {
      id: 3,
      title: "New Matches Available",
      message: "5 new compatible matches found for you!",
      type: "match",
      sentTo: "Active Users",
      date: "Feb 18, 2026",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Creating the Perfect Profile",
      author: "Admin Team",
      category: "Tips & Advice",
      status: "published",
      views: 4567,
      date: "Feb 15, 2026",
    },
    {
      id: 2,
      title: "Understanding Horoscope Matching in Telugu Weddings",
      author: "Cultural Expert",
      category: "Culture",
      status: "published",
      views: 3892,
      date: "Feb 10, 2026",
    },
    {
      id: 3,
      title: "Safety Tips for Online Matrimony",
      author: "Safety Team",
      category: "Safety",
      status: "draft",
      views: 0,
      date: "Feb 18, 2026",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "published":
        return "bg-green-100 text-green-700";
      case "inactive":
      case "draft":
        return "bg-gray-100 text-gray-700";
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Header */}
      <div className="bg-white border-b-2 border-[#D4AF37]/20 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="p-2 rounded-lg hover:bg-[#7B1E3A]/5"
            >
              <ArrowLeft className="w-6 h-6 text-[#7B1E3A]" />
            </button>
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                }}
              >
                <FileText className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#7B1E3A" }}
                >
                  Content Management
                </h1>
                <p className="text-sm text-[#004953]/60">Manage app content and media</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("banners")}
            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeTab === "banners"
                ? "bg-[#7B1E3A] text-white"
                : "bg-white text-[#004953] border-2 border-[#D4AF37]/20"
            }`}
          >
            <ImageIcon className="w-5 h-5 inline mr-2" />
            Banners
          </button>
          <button
            onClick={() => setActiveTab("stories")}
            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeTab === "stories"
                ? "bg-[#7B1E3A] text-white"
                : "bg-white text-[#004953] border-2 border-[#D4AF37]/20"
            }`}
          >
            <Video className="w-5 h-5 inline mr-2" />
            Success Stories
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeTab === "notifications"
                ? "bg-[#7B1E3A] text-white"
                : "bg-white text-[#004953] border-2 border-[#D4AF37]/20"
            }`}
          >
            <FileText className="w-5 h-5 inline mr-2" />
            Notifications
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeTab === "blog"
                ? "bg-[#7B1E3A] text-white"
                : "bg-white text-[#004953] border-2 border-[#D4AF37]/20"
            }`}
          >
            <FileEdit className="w-5 h-5 inline mr-2" />
            Blog Posts
          </button>
        </div>

        {/* Add New Button */}
        <div className="mb-6">
          <Button
            className="h-12 px-6 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF",
            }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New {activeTab === "banners" ? "Banner" : activeTab === "stories" ? "Story" : activeTab === "notifications" ? "Notification" : "Post"}
          </Button>
        </div>

        {/* Banners Tab */}
        {activeTab === "banners" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {banners.map((banner) => (
              <div key={banner.id} className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-32 bg-gradient-to-br from-[#7B1E3A] to-[#A0002A] rounded-xl flex items-center justify-center text-white font-bold">
                    {banner.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#7B1E3A] mb-2">{banner.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(banner.status)}`}>
                          {banner.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]">
                          <FileEdit className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-[#004953]/60">Clicks</p>
                        <p className="font-bold text-[#7B1E3A]">{banner.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-[#004953]/60">Start Date</p>
                        <p className="font-semibold text-[#004953]">{banner.startDate}</p>
                      </div>
                      <div>
                        <p className="text-[#004953]/60">End Date</p>
                        <p className="font-semibold text-[#004953]">{banner.endDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Success Stories Tab */}
        {activeTab === "stories" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                <div className="aspect-video bg-gradient-to-br from-[#C41E3A] to-[#E03B52] rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {story.couple}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#7B1E3A]">{story.couple}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(story.status)}`}>
                      {story.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#004953]/60">{story.date}</span>
                    <span className="font-semibold text-[#7B1E3A]">{story.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 h-10 rounded-lg border-2 border-[#D4AF37]/30 text-[#004953] hover:bg-[#FFF8E7] font-semibold transition-colors">
                      Edit
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#7B1E3A] mb-2">{notif.title}</h3>
                    <p className="text-[#004953]/70 mb-3">{notif.message}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-[#7B1E3A]/10 text-[#7B1E3A] font-semibold">
                        {notif.type}
                      </span>
                      <span className="text-[#004953]/60">Sent to: <span className="font-semibold text-[#004953]">{notif.sentTo}</span></span>
                      <span className="text-[#004953]/60">{notif.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]">
                      <FileEdit className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Blog Posts Tab */}
        {activeTab === "blog" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl border-2 border-[#D4AF37]/20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#7B1E3A]">{post.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[#004953]/70">
                      <span>By: <span className="font-semibold text-[#004953]">{post.author}</span></span>
                      <span>Category: <span className="font-semibold text-[#004953]">{post.category}</span></span>
                      <span>{post.date}</span>
                      {post.views > 0 && <span className="font-semibold text-[#7B1E3A]">{post.views.toLocaleString()} views</span>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-[#7B1E3A]/5 text-[#004953]">
                      <FileEdit className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
