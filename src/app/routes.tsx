import { createBrowserRouter } from "react-router-dom";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import WelcomeBack from "./screens/WelcomeBack";
import PhoneNumberEntry from "./screens/PhoneNumberEntry";
import Registration from "./screens/Registration";
import OTPVerification from "./screens/OTPVerification";
import SelfieUpload from "./screens/SelfieUpload";
import Home from "./screens/Home";
import Search from "./screens/Search";
import ProfileDetail from "./screens/ProfileDetail";
import Subscription from "./screens/Subscription";
import Settings from "./screens/Settings";
import Payment from "./screens/Payment";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";
import Favorites from "./screens/Favorites";
import Notifications from "./screens/Notifications";
import EditProfile from "./screens/EditProfile";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import LegalDisclaimer from "./screens/LegalDisclaimer";
import Language from "./screens/Language";
import ChangePassword from "./screens/ChangePassword";
import HelpFAQ from "./screens/HelpFAQ";
import ContactSupport from "./screens/ContactSupport";
import Hobbies from "./screens/Hobbies";
import ProfileVerification from "./screens/ProfileVerification";
import EatingHabits from "./screens/EatingHabits";
import EducationDetails from "./screens/EducationDetails";

/* Phase 1 Advanced Features */
import HoroscopeMatching from "./screens/HoroscopeMatching";
import VideoCall from "./screens/VideoCall";
import ParentLogin from "./screens/ParentLogin";
import ParentDashboard from "./screens/ParentDashboard";

/* Phase 2 Wedding Marketplace */
import WeddingMarketplace from "./screens/WeddingMarketplace";
import WeddingVendors from "./screens/WeddingVendors";
import VendorDetail from "./screens/VendorDetail";
import VendorBooking from "./screens/VendorBooking";

/* Phase 3 AI Wedding Planner */
import WeddingPlanner from "./screens/WeddingPlanner";
import BudgetManager from "./screens/BudgetManager";
import GuestManager from "./screens/GuestManager";

/* Admin */
import AdminLogin from "./screens/admin/AdminLogin";
import AdminDashboard from "./screens/admin/AdminDashboard";
import UserManagement from "./screens/admin/UserManagement";
import VerificationQueue from "./screens/admin/VerificationQueue";
import SubscriptionManagement from "./screens/admin/SubscriptionManagement";
import Analytics from "./screens/admin/Analytics";
import SupportTickets from "./screens/admin/SupportTickets";
import ContentManagement from "./screens/admin/ContentManagement";
import AdminSettings from "./screens/admin/AdminSettings";

/* 404 Page */
function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#7B1E3A] mb-4">404</h1>
        <p className="text-xl text-[#004953] mb-6">Page Not Found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white rounded-xl"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  { path: "/", Component: Welcome },
  { path: "/login", Component: Login },
  { path: "/welcome-back", Component: WelcomeBack },
  { path: "/phone-number-entry", Component: PhoneNumberEntry },
  { path: "/registration", Component: Registration },
  { path: "/otp-verification", Component: OTPVerification },
  { path: "/selfie-upload", Component: SelfieUpload },
  { path: "/home", Component: Home },
  { path: "/search", Component: Search },
  { path: "/profile/:id", Component: ProfileDetail },
  { path: "/subscription", Component: Subscription },
  { path: "/settings", Component: Settings },
  { path: "/payment", Component: Payment },
  { path: "/chat", Component: Chat },
  { path: "/profile", Component: Profile },
  { path: "/favorites", Component: Favorites },
  { path: "/notifications", Component: Notifications },
  { path: "/edit-profile", Component: EditProfile },
  { path: "/terms", Component: TermsAndConditions },
  { path: "/privacy", Component: PrivacyPolicy },
  { path: "/disclaimer", Component: LegalDisclaimer },
  { path: "/language", Component: Language },
  { path: "/blocked-users", lazy: async () => { const m = await import("./screens/BlockedUsers"); return { Component: (m && (m as any).default) ? (m as any).default : ((m && (m as any).BlockedUsers) ? (m as any).BlockedUsers : m) }; } },
  { path: "/change-password", Component: ChangePassword },
  { path: "/help-faq", Component: HelpFAQ },
  { path: "/contact-support", Component: ContactSupport },
  { path: "/hobbies", Component: Hobbies },
  { path: "/profile-verification", Component: ProfileVerification },
  { path: "/eating-habits", Component: EatingHabits },
  { path: "/education-details", Component: EducationDetails },

  /* Advanced Features */
  { path: "/horoscope-matching", Component: HoroscopeMatching },
  { path: "/video-call", Component: VideoCall },
  { path: "/parent-login", Component: ParentLogin },
  { path: "/parent-dashboard", Component: ParentDashboard },

  /* Wedding Marketplace */
  { path: "/wedding-marketplace", Component: WeddingMarketplace },
  { path: "/wedding-vendors/:category", Component: WeddingVendors },
  { path: "/vendor-detail/:id", Component: VendorDetail },
  { path: "/vendor-booking/:id", Component: VendorBooking },

  /* AI Planner */
  { path: "/wedding-planner", Component: WeddingPlanner },
  { path: "/budget-manager", Component: BudgetManager },
  { path: "/guest-manager", Component: GuestManager },

  /* Admin */
  { path: "/admin/login", Component: AdminLogin },
  { path: "/admin/dashboard", Component: AdminDashboard },
  { path: "/admin/user-management", Component: UserManagement },
  { path: "/admin/verification-queue", Component: VerificationQueue },
  { path: "/admin/subscription-management", Component: SubscriptionManagement },
  { path: "/admin/analytics", Component: Analytics },
  { path: "/admin/support-tickets", Component: SupportTickets },
  { path: "/admin/content-management", Component: ContentManagement },
  { path: "/admin/settings", Component: AdminSettings },

  { path: "*", Component: NotFound },
]);
