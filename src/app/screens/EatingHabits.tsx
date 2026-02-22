import { useState } from "react";
import { ArrowLeft, UtensilsCrossed, Check } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function EatingHabits() {
  const navigate = useNavigate();
  const [selectedHabit, setSelectedHabit] = useState<string>("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const eatingHabits = [
    {
      id: "vegetarian",
      label: "Vegetarian",
      description: "Plant-based diet, no meat or seafood"
    },
    {
      id: "non-vegetarian",
      label: "Non-Vegetarian",
      description: "Includes meat, poultry, and seafood"
    },
    {
      id: "eggetarian",
      label: "Eggetarian",
      description: "Vegetarian diet with eggs"
    }
  ];

  const handleSubmit = () => {
    if (selectedHabit) {
      localStorage.setItem('userEatingHabit', selectedHabit);
      setShowSuccessDialog(true);
      setTimeout(() => {
        setShowSuccessDialog(false);
        navigate('/home');
      }, 1500);
    }
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
                Select Eating Habit
              </h1>
              <p className="text-sm text-white/80">Choose your dietary preference</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/home')}
            className="text-sm font-semibold text-[#FFD700] hover:text-white transition-colors"
          >
            Skip for now →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-2xl mx-auto flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="w-full">
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-8 shadow-xl">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E6F7F8] to-[#B8E6E8] flex items-center justify-center border-4 border-[#4A9DA5]">
                <UtensilsCrossed className="w-12 h-12 text-[#4A9DA5]" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#004953] text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Select eating habit
            </h2>
            <p className="text-sm text-[#004953]/60 text-center mb-8">
              This helps us match you with compatible profiles
            </p>

            {/* Options */}
            <div className="space-y-4">
              {eatingHabits.map((habit) => (
                <button
                  key={habit.id}
                  onClick={() => setSelectedHabit(habit.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left relative ${
                    selectedHabit === habit.id
                      ? "bg-[#7B1E3A] text-white border-[#7B1E3A] shadow-lg"
                      : "bg-white text-[#004953] border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FFF8E7]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-lg mb-1">{habit.label}</p>
                      <p className={`text-sm ${
                        selectedHabit === habit.id ? "text-white/80" : "text-[#004953]/60"
                      }`}>
                        {habit.description}
                      </p>
                    </div>
                    {selectedHabit === habit.id && (
                      <div className="ml-4">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#7B1E3A]" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <Button
              onClick={handleSubmit}
              disabled={!selectedHabit}
              className="w-full h-14 rounded-xl text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: selectedHabit 
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

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#4CAF50] flex items-center justify-center">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Preference Saved!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Your eating habit preference has been saved successfully.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

