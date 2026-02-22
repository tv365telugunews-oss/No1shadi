import { useState } from "react";
import { ArrowLeft, GraduationCap, Building2 } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function EducationDetails() {
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Load saved data or use defaults
  const loadSavedData = () => {
    const saved = localStorage.getItem('educationDetails');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      collegeName: "",
      organizationName: "",
      degree: "M.E. - Master of Engineering",
      profession: "Software Professional"
    };
  };

  const [formData, setFormData] = useState(loadSavedData());

  const handleSubmit = () => {
    if (!formData.collegeName || !formData.organizationName) {
      alert("Please fill in all required fields");
      return;
    }

    localStorage.setItem('educationDetails', JSON.stringify(formData));
    setShowSuccessDialog(true);
    
    setTimeout(() => {
      setShowSuccessDialog(false);
      navigate('/home');
    }, 1500);
  };

  const handleSkip = () => {
    navigate('/home');
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
                Education & Work
              </h1>
              <p className="text-sm text-white/80">Add your institution and organization</p>
            </div>
          </div>
          <button 
            onClick={handleSkip}
            className="text-sm font-semibold text-[#FFD700] hover:text-white transition-colors"
          >
            Skip for now →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#004953] mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Add college/institution and organization details
          </h2>

          <div className="space-y-6">
            {/* College Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center border-2 border-[#4A9DA5]">
                  <GraduationCap className="w-10 h-10 text-[#4A9DA5]" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">
                  College where you studied
                </label>
                <p className="text-sm text-[#4CAF50] font-medium">{formData.degree}</p>
                <Input
                  placeholder="Enter institution name"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white focus:border-[#7B1E3A]"
                />
              </div>
            </div>

            {/* Organization Section */}
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">
                  Organization where you work
                </label>
                <p className="text-sm text-[#4CAF50] font-medium">{formData.profession}</p>
                <Input
                  placeholder="Enter organization name"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white focus:border-[#7B1E3A]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                onClick={handleSubmit}
                disabled={!formData.collegeName || !formData.organizationName}
                className="w-full h-14 rounded-xl text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: formData.collegeName && formData.organizationName
                    ? "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)"
                    : "#ccc",
                  color: "#FFFFFF"
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-gradient-to-r from-[#E6F7F8] to-[#FFF8E7] rounded-xl p-4 border-2 border-[#D4AF37]/30">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-[#4A9DA5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#004953] mb-1">Why add these details?</h3>
              <p className="text-sm text-[#004953]/70">
                Adding your institution and organization helps you connect with alumni and 
                colleagues. Profiles with complete details get 3x more matches!
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
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Details Saved!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Your education and work details have been saved successfully.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

