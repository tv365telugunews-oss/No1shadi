import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Star, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";

export default function HoroscopeMatching() {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state?.profile;

  // Kundali matching scores
  const [matchingData] = useState({
    totalScore: 28,
    maxScore: 36,
    percentage: 78,
    compatibility: "Excellent",
    gunas: [
      { name: "Varna (Varna Kuta)", points: 1, maxPoints: 1, status: "match", description: "Spiritual compatibility" },
      { name: "Vashya (Vashya Kuta)", points: 2, maxPoints: 2, status: "match", description: "Mutual attraction" },
      { name: "Tara (Tara Kuta)", points: 3, maxPoints: 3, status: "match", description: "Health & well-being" },
      { name: "Yoni (Yoni Kuta)", points: 3, maxPoints: 4, status: "partial", description: "Physical compatibility" },
      { name: "Graha Maitri (Graha Maitri)", points: 5, maxPoints: 5, status: "match", description: "Mental compatibility" },
      { name: "Gana (Gana Kuta)", points: 5, maxPoints: 6, status: "partial", description: "Temperament match" },
      { name: "Bhakoot (Bhakoot Kuta)", points: 6, maxPoints: 7, status: "partial", description: "Love & affection" },
      { name: "Nadi (Nadi Kuta)", points: 3, maxPoints: 8, status: "partial", description: "Health of progeny" }
    ],
    doshaAnalysis: {
      mangalDosha: { user: false, match: false, compatible: true },
      kalsarpaDosha: { user: false, match: false, compatible: true },
      pitruDosha: { user: false, match: true, compatible: false }
    },
    recommendations: [
      "Excellent compatibility for long-term relationship",
      "Strong emotional and mental connection",
      "Perform Grah Shanti Puja before marriage for Nadi dosha",
      "Consult family astrologer for final confirmation"
    ]
  });

  const getCompatibilityColor = (percentage: number) => {
    if (percentage >= 75) return "#4CAF50"; // Green
    if (percentage >= 60) return "#FF9800"; // Orange
    if (percentage >= 50) return "#FFC107"; // Yellow
    return "#F44336"; // Red
  };

  const getCompatibilityLabel = (percentage: number) => {
    if (percentage >= 75) return "Excellent Match";
    if (percentage >= 60) return "Good Match";
    if (percentage >= 50) return "Average Match";
    return "Poor Match";
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Kundali Matching
            </h1>
            <p className="text-sm text-white/80">Ashtakoot Guna Milan</p>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      {profile && (
        <div className="m-4 p-4 bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src={profile.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"}
              alt={profile.name}
              className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#7B1E3A]">{profile.name || "Profile Name"}</h3>
              <p className="text-sm text-[#004953]/70">
                {profile.age || "25"} yrs, {profile.height || "5'6\""} | {profile.profession || "Software Engineer"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Overall Compatibility Score */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-[#004953]">Overall Compatibility</h3>
            </div>
            
            {/* Circular Progress */}
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke={getCompatibilityColor(matchingData.percentage)}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * (1 - matchingData.percentage / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#7B1E3A]">{matchingData.percentage}%</span>
                <span className="text-sm text-[#004953]/60">
                  {matchingData.totalScore}/{matchingData.maxScore} Gunas
                </span>
              </div>
            </div>

            <div
              className="inline-block px-6 py-2 rounded-full text-white font-bold"
              style={{ backgroundColor: getCompatibilityColor(matchingData.percentage) }}
            >
              {getCompatibilityLabel(matchingData.percentage)}
            </div>
          </div>
        </div>
      </div>

      {/* Ashtakoot Guna Analysis */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-[#D4AF37]" />
            Ashtakoot Guna Milan (8 Aspects)
          </h3>

          <div className="space-y-3">
            {matchingData.gunas.map((guna, index) => (
              <div key={index} className="border border-[#D4AF37]/20 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#004953]">{guna.name}</h4>
                    <p className="text-xs text-[#004953]/60 mt-1">{guna.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {guna.status === "match" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : guna.status === "partial" ? (
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="text-lg font-bold text-[#7B1E3A]">
                      {guna.points}/{guna.maxPoints}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${(guna.points / guna.maxPoints) * 100}%`,
                      backgroundColor: guna.status === "match" ? "#4CAF50" : guna.status === "partial" ? "#FF9800" : "#F44336"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dosha Analysis */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Dosha Analysis</h3>

          <div className="space-y-3">
            <DoshaItem
              name="Mangal Dosha (Mars)"
              userStatus={matchingData.doshaAnalysis.mangalDosha.user}
              matchStatus={matchingData.doshaAnalysis.mangalDosha.match}
              compatible={matchingData.doshaAnalysis.mangalDosha.compatible}
            />
            <DoshaItem
              name="Kalsarpa Dosha"
              userStatus={matchingData.doshaAnalysis.kalsarpaDosha.user}
              matchStatus={matchingData.doshaAnalysis.kalsarpaDosha.match}
              compatible={matchingData.doshaAnalysis.kalsarpaDosha.compatible}
            />
            <DoshaItem
              name="Pitru Dosha"
              userStatus={matchingData.doshaAnalysis.pitruDosha.user}
              matchStatus={matchingData.doshaAnalysis.pitruDosha.match}
              compatible={matchingData.doshaAnalysis.pitruDosha.compatible}
            />
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mx-4 mb-4">
        <div className="bg-gradient-to-br from-[#E6F7F8] to-[#FFF8E7] rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-lg font-bold text-[#7B1E3A] mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            Astrologer Recommendations
          </h3>

          <ul className="space-y-3">
            {matchingData.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#004953]">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mx-4 space-y-3">
        <Button
          onClick={() => window.location.href = "tel:+919100810606"}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
        >
          Consult Expert Astrologer
        </Button>
        
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="w-full h-12 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A]"
        >
          Back to Profile
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="mx-4 mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
        <p className="text-xs text-yellow-800">
          <strong>Disclaimer:</strong> Kundali matching is based on traditional Vedic astrology principles. 
          Results are for guidance only. Please consult a certified astrologer for detailed analysis.
        </p>
      </div>
    </div>
  );
}

interface DoshaItemProps {
  name: string;
  userStatus: boolean;
  matchStatus: boolean;
  compatible: boolean;
}

function DoshaItem({ name, userStatus, matchStatus, compatible }: DoshaItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-[#FFF8E7] rounded-lg">
      <div>
        <p className="font-semibold text-[#004953]">{name}</p>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-xs text-[#004953]/60">
            You: {userStatus ? "Present" : "Absent"}
          </span>
          <span className="text-xs text-[#004953]/60">
            Match: {matchStatus ? "Present" : "Absent"}
          </span>
        </div>
      </div>
      {compatible ? (
        <div className="flex items-center gap-1 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">Compatible</span>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-orange-600">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">Consult</span>
        </div>
      )}
    </div>
  );
}
