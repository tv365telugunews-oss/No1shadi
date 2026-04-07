import type { ComponentType } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { getAuthSession } from "./config/api";

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
type AppRole = "user" | "parent" | "admin";

function getDefaultPathForRole(role: AppRole) {
  if (role === "admin") {
    return "/admin/dashboard";
  }

  if (role === "parent") {
    return "/parent-dashboard";
  }

  return "/home";
}

function withAuthGuard(Screen: ComponentType, allowedRoles?: AppRole[]) {
  return function GuardedScreen() {
    const session = getAuthSession();

    if (!session) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(session.user.role)) {
      return <Navigate to={getDefaultPathForRole(session.user.role)} replace />;
    }

    return <Screen />;
  };
}

function withPublicOnlyGuard(Screen: ComponentType) {
  return function PublicOnlyScreen() {
    const session = getAuthSession();

    if (session) {
      return <Navigate to={getDefaultPathForRole(session.user.role)} replace />;
    }

    return <Screen />;
  };
}

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
  { path: "/login", Component: withPublicOnlyGuard(Login) },
  { path: "/welcome-back", Component: WelcomeBack },
  { path: "/phone-number-entry", Component: PhoneNumberEntry },
  { path: "/registration", Component: Registration },
  { path: "/otp-verification", Component: OTPVerification },
  { path: "/selfie-upload", Component: SelfieUpload },
  { path: "/home", Component: withAuthGuard(Home, ["user"]) },
  { path: "/search", Component: withAuthGuard(Search, ["user"]) },
  { path: "/profile/:id", Component: withAuthGuard(ProfileDetail, ["user"]) },
  { path: "/subscription", Component: withAuthGuard(Subscription, ["user"]) },
  { path: "/settings", Component: withAuthGuard(Settings, ["user", "parent", "admin"]) },
  { path: "/payment", Component: withAuthGuard(Payment, ["user"]) },
  { path: "/chat", Component: withAuthGuard(Chat, ["user"]) },
  { path: "/profile", Component: withAuthGuard(Profile, ["user"]) },
  { path: "/favorites", Component: withAuthGuard(Favorites, ["user"]) },
  { path: "/notifications", Component: withAuthGuard(Notifications, ["user"]) },
  { path: "/edit-profile", Component: withAuthGuard(EditProfile, ["user"]) },
  { path: "/terms", Component: TermsAndConditions },
  { path: "/privacy", Component: PrivacyPolicy },
  { path: "/disclaimer", Component: LegalDisclaimer },
  { path: "/language", Component: withAuthGuard(Language, ["user", "parent", "admin"]) },
  {
    path: "/blocked-users",
    lazy: async () => {
      const m = await import("./screens/BlockedUsers");
      const Screen = (m && (m as any).default) ? (m as any).default : ((m && (m as any).BlockedUsers) ? (m as any).BlockedUsers : m);
      return { Component: withAuthGuard(Screen, ["user"]) };
    },
  },
  { path: "/change-password", Component: withAuthGuard(ChangePassword, ["user", "parent", "admin"]) },
  { path: "/help-faq", Component: HelpFAQ },
  { path: "/contact-support", Component: withAuthGuard(ContactSupport, ["user", "parent"]) },
  { path: "/hobbies", Component: withAuthGuard(Hobbies, ["user"]) },
  { path: "/profile-verification", Component: withAuthGuard(ProfileVerification, ["user"]) },
  { path: "/eating-habits", Component: withAuthGuard(EatingHabits, ["user"]) },
  { path: "/education-details", Component: withAuthGuard(EducationDetails, ["user"]) },

  /* Advanced Features */
  { path: "/horoscope-matching", Component: withAuthGuard(HoroscopeMatching, ["user"]) },
  { path: "/video-call", Component: withAuthGuard(VideoCall, ["user"]) },
  { path: "/parent-login", Component: withPublicOnlyGuard(ParentLogin) },
  { path: "/parent-dashboard", Component: withAuthGuard(ParentDashboard, ["parent"]) },

  /* Wedding Marketplace */
  { path: "/wedding-marketplace", Component: WeddingMarketplace },
  { path: "/wedding-vendors/:category", Component: WeddingVendors },
  { path: "/vendor-detail/:id", Component: VendorDetail },
  { path: "/vendor-booking/:id", Component: VendorBooking },

  /* AI Planner */
  { path: "/wedding-planner", Component: withAuthGuard(WeddingPlanner, ["user", "parent"]) },
  { path: "/budget-manager", Component: withAuthGuard(BudgetManager, ["user", "parent"]) },
  { path: "/guest-manager", Component: withAuthGuard(GuestManager, ["user", "parent"]) },

  /* Admin */
  { path: "/admin/login", Component: withPublicOnlyGuard(AdminLogin) },
  { path: "/admin/dashboard", Component: withAuthGuard(AdminDashboard, ["admin"]) },
  { path: "/admin/user-management", Component: withAuthGuard(UserManagement, ["admin"]) },
  { path: "/admin/verification-queue", Component: withAuthGuard(VerificationQueue, ["admin"]) },
  { path: "/admin/subscription-management", Component: withAuthGuard(SubscriptionManagement, ["admin"]) },
  { path: "/admin/analytics", Component: withAuthGuard(Analytics, ["admin"]) },
  { path: "/admin/support-tickets", Component: withAuthGuard(SupportTickets, ["admin"]) },
  { path: "/admin/content-management", Component: withAuthGuard(ContentManagement, ["admin"]) },
  { path: "/admin/settings", Component: withAuthGuard(AdminSettings, ["admin"]) },

  { path: "*", Component: NotFound },
]);
