import { useNavigate } from "react-router";
import { 
  ChevronLeft, ChevronRight, User, Shield, Bell, Lock, 
  HelpCircle, LogOut, Eye, Globe, Heart, FileText, Scale, AlertTriangle, UtensilsCrossed, GraduationCap
} from "lucide-react";
import { Switch } from "../components/ui/switch";
import { BottomNav } from "../components/BottomNav";
import { useState } from "react";
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

export default function Settings() {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showComingSoonDialog, setShowComingSoonDialog] = useState(false);
  const [comingSoonFeature, setComingSoonFeature] = useState("");

  const handleLogout = () => {
    // Clear any stored user data (localStorage, sessionStorage, etc.)
    localStorage.clear();
    sessionStorage.clear();
    
    // Navigate to welcome screen
    navigate("/", { replace: true });
  };

  const handleComingSoon = (feature: string) => {
    setComingSoonFeature(feature);
    setShowComingSoonDialog(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#D4AF37]/20 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <h2 className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
            Settings
          </h2>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <button 
          onClick={() => navigate("/profile")}
          className="w-full p-6 rounded-2xl bg-white border border-[#D4AF37]/20 mb-6 hover:border-[#D4AF37] hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-[#D4AF37]"
            />
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                Ramesh Kumar
              </h3>
              <p className="text-sm text-[#004953]/60 mb-2">Profile ID: MM123456</p>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-[#FFF8E7] rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-[#7B1E3A] to-[#D4AF37] rounded-full" />
                </div>
                <span className="text-xs font-semibold text-[#7B1E3A]">85%</span>
              </div>
            </div>
            <div className="p-2">
              <ChevronRight className="w-5 h-5 text-[#004953]" />
            </div>
          </div>
        </button>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Settings */}
          <Section title="Account Settings">
            <SettingItem
              icon={<User className="w-5 h-5" />}
              label="Edit Profile"
              onClick={() => navigate("/edit-profile")}
            />
            <SettingItem
              icon={<Shield className="w-5 h-5" />}
              label="Profile Verification"
              description="Get verified with a selfie"
              onClick={() => navigate("/profile-verification")}
            />
            <SettingItem
              icon={<GraduationCap className="w-5 h-5" />}
              label="Education & Work Details"
              description="Add institution and organization"
              onClick={() => navigate("/education-details")}
            />
            <SettingItem
              icon={<Heart className="w-5 h-5" />}
              label="Hobbies & Interests"
              onClick={() => navigate("/hobbies")}
            />
            <SettingItem
              icon={<UtensilsCrossed className="w-5 h-5" />}
              label="Eating Habits"
              onClick={() => navigate("/eating-habits")}
            />
            <SettingItem
              icon={<Heart className="w-5 h-5" />}
              label="Partner Preferences"
              onClick={() => handleComingSoon("Partner Preferences")}
            />
            <SettingItem
              icon={<Globe className="w-5 h-5" />}
              label="Language"
              value="English"
              onClick={() => navigate("/language")}
            />
          </Section>

          {/* Privacy & Security */}
          <Section title="Privacy & Security">
            <SettingToggle
              icon={<Eye className="w-5 h-5" />}
              label="Photo Privacy"
              description="Blur photos for non-members"
              defaultChecked={true}
            />
            <SettingToggle
              icon={<Shield className="w-5 h-5" />}
              label="Screenshot Alert"
              description="Get notified when someone screenshots your profile"
              defaultChecked={true}
            />
            <SettingItem
              icon={<Lock className="w-5 h-5" />}
              label="Blocked Users"
              onClick={() => navigate("/blocked-users")}
            />
            <SettingItem
              icon={<Lock className="w-5 h-5" />}
              label="Change Password"
              onClick={() => navigate("/change-password")}
            />
          </Section>

          {/* Notifications */}
          <Section title="Notifications">
            <SettingToggle
              icon={<Bell className="w-5 h-5" />}
              label="New Matches"
              description="Get notified about new compatible matches"
              defaultChecked={true}
            />
            <SettingToggle
              icon={<Bell className="w-5 h-5" />}
              label="Messages"
              description="Receive notifications for new messages"
              defaultChecked={true}
            />
            <SettingToggle
              icon={<Bell className="w-5 h-5" />}
              label="Interests"
              description="Get notified when someone sends interest"
              defaultChecked={true}
            />
          </Section>

          {/* Support */}
          <Section title="Support">
            <SettingItem
              icon={<HelpCircle className="w-5 h-5" />}
              label="Help & FAQ"
              onClick={() => navigate("/help-faq")}
            />
            <SettingItem
              icon={<HelpCircle className="w-5 h-5" />}
              label="Contact Support"
              onClick={() => navigate("/contact-support")}
            />
          </Section>

          {/* Legal & Policies */}
          <Section title="Legal & Policies">
            <SettingItem
              icon={<FileText className="w-5 h-5" />}
              label="Terms & Conditions"
              onClick={() => navigate("/terms")}
            />
            <SettingItem
              icon={<Shield className="w-5 h-5" />}
              label="Privacy Policy"
              onClick={() => navigate("/privacy")}
            />
            <SettingItem
              icon={<AlertTriangle className="w-5 h-5" />}
              label="Legal Disclaimer"
              onClick={() => navigate("/disclaimer")}
            />
          </Section>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutDialog(true)}
          className="w-full mt-6 p-4 rounded-2xl bg-white border-2 border-[#A0002A] hover:bg-[#A0002A]/5 transition-colors flex items-center justify-center gap-3 shadow-md"
        >
          <LogOut className="w-5 h-5 text-[#A0002A]" />
          <span className="font-bold text-[#A0002A]" style={{ fontFamily: "var(--font-heading)" }}>
            Logout
          </span>
        </button>

        {/* App Version */}
        <div className="text-center mt-8 pb-4">
          <p className="text-sm text-[#004953]/40">
            No1 shadi.com v1.0.0
          </p>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37] max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#A0002A]/10 rounded-full">
                <LogOut className="w-8 h-8 text-[#A0002A]" />
              </div>
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-[#7B1E3A] text-center" style={{ fontFamily: "var(--font-heading)" }}>
              Logout from No1 shadi.com?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[#004953]/70 pt-2">
              Are you sure you want to logout? You'll need to login again to access your profile and matches.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-4">
            <AlertDialogCancel 
              className="w-full sm:w-auto border-2 border-[#D4AF37] bg-white hover:bg-[#FFF8E7] text-[#004953] font-semibold"
              onClick={() => setShowLogoutDialog(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="w-full sm:w-auto font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #A0002A 0%, #7B1E3A 100%)",
              }}
              onClick={handleLogout}
            >
              Yes, Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Coming Soon Dialog */}
      <AlertDialog open={showComingSoonDialog} onOpenChange={setShowComingSoonDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37] max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#A0002A]/10 rounded-full">
                <AlertTriangle className="w-8 h-8 text-[#A0002A]" />
              </div>
            </div>
            <AlertDialogTitle className="text-2xl font-bold text-[#7B1E3A] text-center" style={{ fontFamily: "var(--font-heading)" }}>
              Coming Soon!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[#004953]/70 pt-2">
              The {comingSoonFeature} feature is coming soon. Stay tuned!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-3 mt-4">
            <AlertDialogCancel 
              className="w-full sm:w-auto border-2 border-[#D4AF37] bg-white hover:bg-[#FFF8E7] text-[#004953] font-semibold"
              onClick={() => setShowComingSoonDialog(false)}
            >
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <BottomNav />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#7B1E3A] mb-3 px-2" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h3>
      <div className="rounded-2xl bg-white border border-[#D4AF37]/20 overflow-hidden divide-y divide-[#D4AF37]/10">
        {children}
      </div>
    </div>
  );
}

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  onClick: () => void;
  description?: string;
}

function SettingItem({ icon, label, value, onClick, description }: SettingItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 flex items-center gap-3 hover:bg-[#FFF8E7] transition-colors"
    >
      <div className="text-[#D4AF37]">{icon}</div>
      <div className="flex-1 text-left">
        <p className="font-medium text-[#004953]">{label}</p>
        {description && <p className="text-xs text-[#004953]/60 mt-0.5">{description}</p>}
      </div>
      {value && <span className="text-sm text-[#004953]/60">{value}</span>}
      <ChevronRight className="w-5 h-5 text-[#004953]/40" />
    </button>
  );
}

interface SettingToggleProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  defaultChecked?: boolean;
}

function SettingToggle({ icon, label, description, defaultChecked }: SettingToggleProps) {
  return (
    <div className="p-4 flex items-start gap-3">
      <div className="text-[#D4AF37] mt-1">{icon}</div>
      <div className="flex-1">
        <p className="font-medium text-[#004953] mb-1">{label}</p>
        <p className="text-sm text-[#004953]/60">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}