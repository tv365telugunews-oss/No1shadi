import { createBrowserRouter } from "react-router";
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
import Notifications from "./screens/Notifications";
import EditProfile from "./screens/EditProfile";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import LegalDisclaimer from "./screens/LegalDisclaimer";
import Language from "./screens/Language";
import BlockedUsers from "./screens/BlockedUsers";
import ChangePassword from "./screens/ChangePassword";
import HelpFAQ from "./screens/HelpFAQ";
import ContactSupport from "./screens/ContactSupport";
import Hobbies from "./screens/Hobbies";
import ProfileVerification from "./screens/ProfileVerification";
import EatingHabits from "./screens/EatingHabits";
import EducationDetails from "./screens/EducationDetails";
import AdminLogin from "./screens/admin/AdminLogin";
import AdminDashboard from "./screens/admin/AdminDashboard";
import UserManagement from "./screens/admin/UserManagement";
import VerificationQueue from "./screens/admin/VerificationQueue";
import SubscriptionManagement from "./screens/admin/SubscriptionManagement";
import Analytics from "./screens/admin/Analytics";
import SupportTickets from "./screens/admin/SupportTickets";
import ContentManagement from "./screens/admin/ContentManagement";
import AdminSettings from "./screens/admin/AdminSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/welcome-back",
    Component: WelcomeBack,
  },
  {
    path: "/phone-number-entry",
    Component: PhoneNumberEntry,
  },
  {
    path: "/registration",
    Component: Registration,
  },
  {
    path: "/otp-verification",
    Component: OTPVerification,
  },
  {
    path: "/selfie-upload",
    Component: SelfieUpload,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/search",
    Component: Search,
  },
  {
    path: "/profile/:id",
    Component: ProfileDetail,
  },
  {
    path: "/subscription",
    Component: Subscription,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/chat",
    Component: Chat,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/notifications",
    Component: Notifications,
  },
  {
    path: "/edit-profile",
    Component: EditProfile,
  },
  {
    path: "/terms",
    Component: TermsAndConditions,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/disclaimer",
    Component: LegalDisclaimer,
  },
  {
    path: "/language",
    Component: Language,
  },
  {
    path: "/blocked-users",
    Component: BlockedUsers,
  },
  {
    path: "/change-password",
    Component: ChangePassword,
  },
  {
    path: "/help-faq",
    Component: HelpFAQ,
  },
  {
    path: "/contact-support",
    Component: ContactSupport,
  },
  {
    path: "/hobbies",
    Component: Hobbies,
  },
  {
    path: "/profile-verification",
    Component: ProfileVerification,
  },
  {
    path: "/eating-habits",
    Component: EatingHabits,
  },
  {
    path: "/education-details",
    Component: EducationDetails,
  },
  // Admin Routes
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/users",
    Component: UserManagement,
  },
  {
    path: "/admin/verifications",
    Component: VerificationQueue,
  },
  {
    path: "/admin/subscriptions",
    Component: SubscriptionManagement,
  },
  {
    path: "/admin/analytics",
    Component: Analytics,
  },
  {
    path: "/admin/support",
    Component: SupportTickets,
  },
  {
    path: "/admin/content",
    Component: ContentManagement,
  },
  {
    path: "/admin/settings",
    Component: AdminSettings,
  },
]);