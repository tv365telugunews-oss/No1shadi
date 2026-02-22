import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
];

export default function Language() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("appLanguage") || "en";
  });

  const handleSave = () => {
    localStorage.setItem("appLanguage", selectedLanguage);
    navigate(-1);
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
              Language
            </h1>
            <p className="text-sm text-white/80">Select your preferred language</p>
          </div>
        </div>
      </div>

      {/* Language List */}
      <div className="p-4 space-y-3 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-lg divide-y divide-[#D4AF37]/10">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => setSelectedLanguage(language.code)}
              className={`w-full p-4 flex items-center justify-between hover:bg-[#FFF8E7] transition-colors ${
                selectedLanguage === language.code ? "bg-[#FFF8E7]" : ""
              }`}
            >
              <div className="text-left">
                <p className="font-semibold text-[#004953]">{language.name}</p>
                <p className="text-lg text-[#7B1E3A]">{language.nativeName}</p>
              </div>
              {selectedLanguage === language.code && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Save Button */}
        <div className="sticky bottom-4 pt-4">
          <Button
            onClick={handleSave}
            className="w-full h-14 rounded-xl text-lg font-bold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF"
            }}
          >
            Save Language
          </Button>
        </div>
      </div>
    </div>
  );
}

