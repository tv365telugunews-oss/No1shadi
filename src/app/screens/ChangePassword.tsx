import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Lock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const newErrors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    let isValid = true;

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
      isValid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must contain uppercase, lowercase, and number";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "New password must be different from current password";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // In a real app, you would make an API call here
      localStorage.setItem("userPassword", formData.newPassword);
      
      setShowSuccessDialog(true);
      
      setTimeout(() => {
        setShowSuccessDialog(false);
        navigate(-1);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Change Password
            </h1>
            <p className="text-sm text-white/80">Update your account password</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* Security Info */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <div className="flex gap-4">
            <div className="p-3 bg-[#FFF8E7] rounded-full h-fit">
              <Lock className="w-6 h-6 text-[#7B1E3A]" />
            </div>
            <div>
              <h3 className="font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Password Security Tips
              </h3>
              <ul className="space-y-1 text-sm text-[#004953]/70">
                <li>• Use at least 8 characters</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Add numbers and special characters</li>
                <li>• Don't reuse old passwords</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Password Form */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg space-y-4">
          {/* Current Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Current Password *</label>
            <div className="relative">
              <Input
                type={showCurrentPassword ? "text" : "password"}
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white pr-12 ${
                  errors.currentPassword ? "border-red-500" : ""
                }`}
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#004953]/50 hover:text-[#004953]"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-sm text-red-500">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">New Password *</label>
            <div className="relative">
              <Input
                type={showNewPassword ? "text" : "password"}
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white pr-12 ${
                  errors.newPassword ? "border-red-500" : ""
                }`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#004953]/50 hover:text-[#004953]"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Confirm New Password *</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={`h-12 rounded-xl border-[#D4AF37]/30 bg-white pr-12 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="Re-enter new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#004953]/50 hover:text-[#004953]"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="sticky bottom-4">
          <Button
            onClick={handleSubmit}
            className="w-full h-14 rounded-xl text-lg font-bold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF"
            }}
          >
            <Lock className="w-5 h-5 mr-2" />
            Update Password
          </Button>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#D4AF37]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Password Updated</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Your password has been successfully changed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
