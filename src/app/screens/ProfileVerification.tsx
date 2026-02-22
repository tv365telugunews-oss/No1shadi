import { useState } from "react";
<<<<<<< HEAD
import { ArrowLeft, Camera, Shield, CheckCircle, CreditCard, Scan } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
=======
import { ArrowLeft, Camera, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function ProfileVerification() {
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
<<<<<<< HEAD
  const [panNumber, setPanNumber] = useState("");
  const [panPhoto, setPanPhoto] = useState<File | null>(null);
  const [selfiePhoto, setSelfiePhoto] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState<'select' | 'pan' | 'selfie'>('select');

  const handlePANVerification = () => {
    setCurrentStep('pan');
  };

  const handleSelfieVerification = () => {
    setCurrentStep('selfie');
  };

  const handlePANPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPanPhoto(file);
    }
  };

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelfiePhoto(file);
    }
  };

  const handleSubmitVerification = () => {
    // In a real app, this would upload to server
=======

  const handleSelfieVerification = () => {
    // In a real app, this would open camera/selfie capture
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
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
<<<<<<< HEAD
              onClick={() => {
                if (currentStep !== 'select') {
                  setCurrentStep('select');
                } else {
                  navigate(-1);
                }
              }}
=======
              onClick={() => navigate(-1)}
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
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
<<<<<<< HEAD
        {currentStep === 'select' && (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center border-2 border-[#4A9DA5]">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-[#4A9DA5] flex items-center justify-center">
                      <Shield className="w-12 h-12 text-[#4A9DA5]" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center border-4 border-white">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#004953] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Verify your profile using:
                </h2>

                {/* PAN Verification Option */}
                <button
                  onClick={handlePANVerification}
                  className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 mb-3 hover:bg-[#FFF8E7] hover:border-[#C41E3A] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-[#4A9DA5]" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-[#004953] text-lg">PAN Card Verification</p>
                        <p className="text-sm text-[#004953]/60">Upload your PAN card for ID verification</p>
                      </div>
                    </div>
                    <div className="text-[#C41E3A] group-hover:translate-x-1 transition-transform">
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </div>
                  </div>
                </button>

                {/* AI Face Match Option */}
                <button
                  onClick={handleSelfieVerification}
                  className="w-full bg-white border-2 border-[#D4AF37] rounded-xl p-4 hover:bg-[#FFF8E7] hover:border-[#C41E3A] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center">
                        <Scan className="w-6 h-6 text-[#4A9DA5]" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-[#004953] text-lg">AI Face Match & Liveness Check</p>
                        <p className="text-sm text-[#004953]/60">Take a live selfie for AI-powered verification</p>
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
=======
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
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        )}

        {/* PAN Verification Step */}
        {currentStep === 'pan' && (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#004953]" style={{ fontFamily: "var(--font-heading)" }}>
                PAN Card Verification
              </h2>
            </div>

            {/* PAN Number Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">PAN Card Number</label>
              <Input
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                placeholder="ABCDE1234F"
                maxLength={10}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white text-lg font-mono tracking-wider"
              />
              <p className="text-xs text-[#004953]/60">Enter your 10-digit PAN number</p>
            </div>

            {/* PAN Photo Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Upload PAN Card Photo</label>
              <div className="border-2 border-dashed border-[#D4AF37]/50 rounded-xl p-6 text-center">
                {panPhoto ? (
                  <div className="space-y-3">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="text-sm font-semibold text-[#004953]">{panPhoto.name}</p>
                    <Button
                      variant="outline"
                      className="border-[#D4AF37]"
                      onClick={() => setPanPhoto(null)}
                    >
                      Change Photo
                    </Button>
                  </div>
                ) : (
                  <>
                    <CreditCard className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                    <p className="text-sm font-semibold text-[#004953] mb-2">Upload PAN Card Image</p>
                    <label htmlFor="pan-upload">
                      <Button
                        variant="outline"
                        className="border-[#D4AF37]"
                        type="button"
                        onClick={() => document.getElementById('pan-upload')?.click()}
                      >
                        Choose File
                      </Button>
                    </label>
                    <input
                      id="pan-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePANPhotoUpload}
                      className="hidden"
                    />
                    <p className="text-xs text-[#004953]/60 mt-2">JPG, PNG (Max 5MB)</p>
                  </>
                )}
              </div>
            </div>

            <Button
              onClick={handleSubmitVerification}
              disabled={!panNumber || !panPhoto}
              className="w-full h-12 rounded-xl"
              style={{
                background: panNumber && panPhoto ? "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)" : "#ccc",
                color: "#FFFFFF"
              }}
            >
              Submit PAN Verification
            </Button>
          </div>
        )}

        {/* AI Face Match & Liveness Check Step */}
        {currentStep === 'selfie' && (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#004953]" style={{ fontFamily: "var(--font-heading)" }}>
                AI Face Match & Liveness Check
              </h2>
            </div>

            <div className="bg-gradient-to-br from-[#E6F7F8] to-[#FFF8E7] rounded-xl p-6 border border-[#D4AF37]/30">
              <h3 className="font-bold text-[#004953] mb-3 flex items-center gap-2">
                <Scan className="w-5 h-5 text-[#4A9DA5]" />
                AI-Powered Verification Process
              </h3>
              <ul className="space-y-2 text-sm text-[#004953]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Liveness Detection:</strong> Ensures you're a real person, not a photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Face Matching:</strong> AI compares with your profile photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Anti-Spoof Technology:</strong> Prevents fake attempts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Instant Results:</strong> Get verified within seconds</span>
                </li>
              </ul>
            </div>

            {/* Selfie Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Take Live Selfie</label>
              <div className="border-2 border-dashed border-[#D4AF37]/50 rounded-xl p-6 text-center">
                {selfiePhoto ? (
                  <div className="space-y-3">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="text-sm font-semibold text-[#004953]">{selfiePhoto.name}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-700 flex items-center gap-2 justify-center">
                        <Scan className="w-4 h-4" />
                        AI Liveness Check: Passed ✓
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#D4AF37]"
                      onClick={() => setSelfiePhoto(null)}
                    >
                      Retake Selfie
                    </Button>
                  </div>
                ) : (
                  <>
                    <Camera className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                    <p className="text-sm font-semibold text-[#004953] mb-2">Capture Live Selfie</p>
                    <label htmlFor="selfie-upload">
                      <Button
                        variant="outline"
                        className="border-[#D4AF37]"
                        type="button"
                        onClick={() => document.getElementById('selfie-upload')?.click()}
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Take Selfie
                      </Button>
                    </label>
                    <input
                      id="selfie-upload"
                      type="file"
                      accept="image/*"
                      capture="user"
                      onChange={handleSelfieUpload}
                      className="hidden"
                    />
                    <p className="text-xs text-[#004953]/60 mt-2">Look directly at camera with good lighting</p>
                  </>
                )}
              </div>
            </div>

            <Button
              onClick={handleSubmitVerification}
              disabled={!selfiePhoto}
              className="w-full h-12 rounded-xl"
              style={{
                background: selfiePhoto ? "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)" : "#ccc",
                color: "#FFFFFF"
              }}
            >
              Complete AI Verification
            </Button>
          </div>
        )}
=======

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
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883

        {/* Info Card */}
        <div className="mt-6 bg-gradient-to-r from-[#E6F7F8] to-[#FFF8E7] rounded-xl p-4 border-2 border-[#D4AF37]/30">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-[#4A9DA5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#004953] mb-1">Safe & Secure Verification</h3>
              <p className="text-sm text-[#004953]/70">
<<<<<<< HEAD
                Your documents and photos are encrypted and used only for verification purposes. 
=======
                Your selfie is used only for verification purposes and is processed securely. 
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
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
<<<<<<< HEAD
}
=======
}
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
