import { useState } from "react";
import { ArrowLeft, Camera, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function ProfileVerification() {
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSelfieVerification = () => {
    // In a real app, this would open camera/selfie capture
    setShowSuccessDialog(true);
    setTimeout(() => {
      setShowSuccessDialog(false);
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Verify Profile
              </h1>
              <p className="text-sm text-white/80">Increase your profile credibility</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className="text-sm font-semibold text-[#FFD700] hover:text-white transition-colors"
          >
            Skip for now →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center border-2 border-[#4A9DA5]">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-[#4A9DA5] flex items-center justify-center">
                    <Camera className="w-12 h-12 text-[#4A9DA5]" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center border-4 border-white">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#004953] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Verify the profile using the below option:
              </h2>

              {/* Verification Option */}
              <button
                onClick={handleSelfieVerification}
                className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 hover:bg-[#FFF8E7] hover:border-[#C41E3A] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center">
                      <Camera className="w-6 h-6 text-[#4A9DA5]" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[#004953] text-lg">Verify with a live selfie</p>
                      <p className="text-sm text-[#004953]/60">Take a selfie and verify yourself</p>
                    </div>
                  </div>
                  <div className="text-[#C41E3A] group-hover:translate-x-1 transition-transform">
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </div>
                </div>
              </button>

              {/* Benefits */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#004953]">
                    Get a <span className="font-bold text-[#7B1E3A]">Verified Badge</span> on your profile
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#004953]">
                    Verified profiles get <span className="font-bold text-[#7B1E3A]">5x more responses</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#004953]">
                    Build <span className="font-bold text-[#7B1E3A]">trust and credibility</span> with matches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-gradient-to-r from-[#E6F7F8] to-[#FFF8E7] rounded-xl p-4 border-2 border-[#D4AF37]/30">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-[#4A9DA5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#004953] mb-1">Safe & Secure Verification</h3>
              <p className="text-sm text-[#004953]/70">
                Your selfie is used only for verification purposes and is processed securely. 
                We respect your privacy and follow strict data protection guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Verification Submitted!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Your profile verification is under review. You'll receive a notification once verified.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
