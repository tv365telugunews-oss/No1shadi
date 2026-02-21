import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "+91 98765 43210";
  
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (timer > 0 && !canResend) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [timer, canResend]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    
    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const newOtp = pastedData.split("").concat(Array(4 - pastedData.length).fill(""));
    setOtp(newOtp);

    const nextEmptyIndex = newOtp.findIndex((digit) => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs[nextEmptyIndex].current?.focus();
    } else {
      inputRefs[3].current?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(["", "", "", ""]);
    inputRefs[0].current?.focus();
    
    // Mock OTP send
    console.log("OTP resent to:", phoneNumber);
    alert(`New OTP sent to ${phoneNumber}`);
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 4) {
      setErrorMessage("Please enter complete 4-digit OTP");
      setShowErrorDialog(true);
      return;
    }

    setIsVerifying(true);

    // Mock verification - In real app, verify with backend
    setTimeout(() => {
      setIsVerifying(false);
      
      // For demo, accept "1234" as valid OTP
      if (otpString === "1234") {
        // OTP verified successfully
        const fromPage = location.state?.from;
        
        if (fromPage === "login") {
          // If coming from login, go to welcome-back
          navigate("/welcome-back");
        } else {
          // If coming from registration, go to selfie upload
          navigate("/selfie-upload", { state: location.state });
        }
      } else {
        setErrorMessage("Invalid OTP. Please try again.");
        setShowErrorDialog(true);
        setOtp(["", "", "", ""]);
        inputRefs[0].current?.focus();
      }
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
              Enter OTP
            </h1>
            <p className="text-sm text-white/80">Verify your phone number</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* OTP Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-[#004953] mb-2">
              Please enter the 4-digit code sent to
            </p>
            <p className="text-[#7B1E3A] font-bold text-lg">
              {phoneNumber}
            </p>
          </div>

          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-4 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-16 h-16 text-center text-2xl font-bold border-2 border-[#D4AF37] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B1E3A] focus:border-[#7B1E3A] bg-white text-[#7B1E3A] transition-all"
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="text-center mb-8">
            {!canResend ? (
              <p className="text-sm text-[#004953]/60">
                Didn't receive the OTP?{" "}
                <span className="text-[#7B1E3A] font-semibold">
                  Resend OTP in {timer} sec
                </span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-sm text-[#7B1E3A] font-semibold hover:underline flex items-center justify-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Resend OTP
              </button>
            )}
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleSubmit}
            disabled={isVerifying || otp.join("").length !== 4}
            className="w-full h-14 rounded-xl text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF"
            }}
          >
            {isVerifying ? "Verifying..." : "Verify & Continue"}
          </Button>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl">
            <p className="text-xs text-[#004953]/60 text-center">
              <strong className="text-[#7B1E3A]">For Demo:</strong> Enter OTP as <span className="font-mono font-bold">1234</span> to continue
            </p>
          </div>

          {/* Contact Support */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#004953]/60">
              Need help?{" "}
              <button
                onClick={() => navigate("/contact-support")}
                className="text-[#7B1E3A] font-semibold hover:underline"
              >
                Contact Support
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl font-bold text-[#C41E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Verification Failed
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-[#004953]">
              {errorMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowErrorDialog(false)}
              className="bg-[#7B1E3A] text-white hover:bg-[#A0002A]"
            >
              Try Again
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}