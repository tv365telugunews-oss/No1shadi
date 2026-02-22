import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Camera, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function SelfieUpload() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selfieImage, setSelfieImage] = useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please select a valid image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfieImage(reader.result as string);
        setErrorMessage("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRetake = () => {
    setSelfieImage(null);
    setErrorMessage("");
  };

  const handleContinue = () => {
    if (!selfieImage) {
      setErrorMessage("Please upload your selfie to continue");
      return;
    }

    // Save selfie to localStorage or state
    const registrationData = location.state || {};
    const updatedData = {
      ...registrationData,
      selfiePhoto: selfieImage,
    };

    // Show success message
    setShowSuccessDialog(true);

    // Navigate to registration after a short delay
    setTimeout(() => {
      setShowSuccessDialog(false);
      navigate("/registration", { state: updatedData });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Upload Selfie Photo
            </h1>
            <p className="text-sm text-white/80">Required for verification</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Instructions */}
          <div className="mb-8 p-6 bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Selfie Guidelines
            </h3>
            <ul className="space-y-2 text-sm text-[#004953]/80">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Take a clear front-facing photo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ensure good lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>No sunglasses or face coverings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Only you should be in the photo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>File size should be less than 5MB</span>
              </li>
            </ul>
          </div>

          {/* Upload Area */}
          <div className="mb-6">
            {!selfieImage ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-[3/4] bg-gradient-to-br from-[#FFF8E7] to-white border-4 border-dashed border-[#D4AF37] rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-[#7B1E3A] hover:bg-[#FFF8E7] transition-all group"
              >
                <div className="p-8 bg-white/80 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-16 h-16 text-[#7B1E3A]" />
                </div>
                <p className="text-lg font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Upload Your Selfie
                </p>
                <p className="text-sm text-[#004953]/60 mb-4">
                  Click to select from gallery
                </p>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#7B1E3A] text-white rounded-full font-semibold">
                  <Upload className="w-4 h-4" />
                  Choose Photo
                </div>
              </div>
            ) : (
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
                <img
                  src={selfieImage}
                  alt="Selfie preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-2 rounded-xl bg-green-500 text-white flex items-center gap-2 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Uploaded</span>
                  </div>
                </div>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700 font-medium">{errorMessage}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {selfieImage && (
              <Button
                onClick={handleRetake}
                variant="outline"
                className="w-full h-14 rounded-xl text-lg font-bold border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10"
              >
                <Camera className="w-5 h-5 mr-2" />
                Retake Selfie
              </Button>
            )}
            
            <Button
              onClick={handleContinue}
              disabled={!selfieImage}
              className="w-full h-14 rounded-xl text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: selfieImage ? "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)" : "#ccc",
                color: "#FFFFFF"
              }}
            >
              Continue to Registration
            </Button>
          </div>

          {/* Important Note */}
          <div className="mt-8 p-4 bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#7B1E3A] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#7B1E3A] mb-1">
                  Why do we need your selfie?
                </p>
                <p className="text-xs text-[#004953]/70">
                  Your selfie helps us verify your identity and ensures a safe & secure experience for all members. It will be used for profile verification purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Selfie Uploaded Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[#004953]">
              Your selfie has been uploaded. Proceeding to registration...
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center py-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

