import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { 
  ChevronLeft, Heart, MessageCircle, Phone, Video, Share2, MoreVertical,
  CheckCircle, Star, Shield, MapPin, Briefcase, GraduationCap, Home as HomeIcon,
  Users, Sparkles
} from "lucide-react";
import { mockProfiles } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function ProfileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const profile = mockProfiles.find(p => p.id === id);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const images = [profile.photo, profile.photo, profile.photo]; // Mock multiple images

  const handleSendInterest = () => {
    alert(`Interest sent to ${profile.name}! They will be notified.`);
    // In a real app, you would make an API call here
    // Example: await sendInterest(profile.id);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#D4AF37]/20 p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <h2 className="text-lg font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
            Profile Details
          </h2>
          <button className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <MoreVertical className="w-6 h-6 text-[#7B1E3A]" />
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="relative h-[450px] overflow-hidden">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={images[currentImageIndex]}
            alt={profile.name}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Verification Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {profile.verified && (
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#004953]">Verified</span>
              </div>
            )}
            {profile.premium && (
              <div className="px-3 py-2 rounded-xl bg-[#7B1E3A]/95 backdrop-blur-sm flex items-center gap-2">
                <Star className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />
                <span className="text-sm font-semibold text-white">Premium</span>
              </div>
            )}
            {profile.trusted && (
              <div className="px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#004953]">Trusted</span>
              </div>
            )}
          </div>

          {/* Image Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Profile Quick Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {profile.name}
              </h1>
              <p className="text-lg opacity-90">
                {profile.age} years, {profile.height}
              </p>
            </div>
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="opacity-90">{profile.city}, {profile.state}</span>
          </div>
        </div>
      </div>

      {/* AI Compatibility Card */}
      <div className="mx-4 -mt-6 relative z-10">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white flex items-center justify-between"
          style={{ boxShadow: "0 8px 24px rgba(123, 30, 58, 0.3)" }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-white/20">
              <Sparkles className="w-6 h-6 text-[#F4C430]" />
            </div>
            <div>
              <p className="text-sm opacity-80">AI Compatibility Score</p>
              <p className="text-2xl font-bold">{profile.aiCompatibility}%</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">Profile Views</p>
            <p className="text-xl font-bold">{profile.profileViews}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 mt-6">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full grid grid-cols-5 mb-6 bg-white rounded-xl p-1 border border-[#D4AF37]/20">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="education">Career</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="partner">Partner</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <InfoCard title="Basic Information" icon={<Users className="w-5 h-5" />}>
              <InfoRow label="Name" value={profile.name} />
              <InfoRow label="Age" value={`${profile.age} years`} />
              <InfoRow label="Height" value={profile.height} />
              <InfoRow label="Marital Status" value={profile.maritalStatus} />
              <InfoRow label="Mother Tongue" value={profile.motherTongue} />
            </InfoCard>

            <InfoCard title="Religious Information" icon={<Sparkles className="w-5 h-5" />}>
              <InfoRow label="Religion" value={profile.religion} />
              <InfoRow label="Caste" value={profile.caste} />
              {profile.gothram && <InfoRow label="Gothram" value={profile.gothram} />}
              {profile.rashi && <InfoRow label="Rashi" value={profile.rashi} />}
              {profile.nakshatram && <InfoRow label="Nakshatram" value={profile.nakshatram} />}
            </InfoCard>

            {profile.about && (
              <InfoCard title="About Me" icon={<Users className="w-5 h-5" />}>
                <p className="text-[#004953]/80">{profile.about}</p>
              </InfoCard>
            )}
          </TabsContent>

          <TabsContent value="family" className="space-y-4">
            {profile.familyDetails && (
              <InfoCard title="Family Details" icon={<HomeIcon className="w-5 h-5" />}>
                <InfoRow label="Father's Occupation" value={profile.familyDetails.fatherOccupation} />
                <InfoRow label="Mother's Occupation" value={profile.familyDetails.motherOccupation} />
                <InfoRow label="Siblings" value={profile.familyDetails.siblings} />
                <InfoRow label="Family Type" value={profile.familyDetails.familyType} />
                <InfoRow label="Family Values" value={profile.familyDetails.familyValues} />
              </InfoCard>
            )}
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <InfoCard title="Education & Career" icon={<GraduationCap className="w-5 h-5" />}>
              <InfoRow label="Education" value={profile.education} />
              <InfoRow label="Profession" value={profile.profession} />
              <InfoRow label="Annual Income" value={profile.income} />
              <InfoRow label="Employment Type" value={profile.employmentType} />
            </InfoCard>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-4">
            <InfoCard title="Lifestyle" icon={<Users className="w-5 h-5" />}>
              <InfoRow label="Diet" value={profile.diet} />
              <InfoRow label="Location" value={`${profile.city}, ${profile.state}`} />
            </InfoCard>
          </TabsContent>

          <TabsContent value="partner" className="space-y-4">
            {profile.partnerPreference && (
              <InfoCard title="Partner Preferences" icon={<Heart className="w-5 h-5" />}>
                <InfoRow label="Age Range" value={profile.partnerPreference.ageRange} />
                <InfoRow label="Height Range" value={profile.partnerPreference.heightRange} />
                <InfoRow label="Education" value={profile.partnerPreference.education} />
                <InfoRow label="Profession" value={profile.partnerPreference.profession} />
                <InfoRow label="Location" value={profile.partnerPreference.location} />
              </InfoCard>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#D4AF37]/20 p-4 z-20"
        style={{ boxShadow: "0 -4px 12px rgba(123, 30, 58, 0.08)" }}
      >
        <div className="flex gap-3 max-w-md mx-auto">
          <Button
            variant="outline"
            className="flex-1 h-12 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] hover:bg-[#D4AF37]/10"
            onClick={() => navigate("/chat")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat
          </Button>
          <Button
            className="flex-1 h-12 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF"
            }}
            onClick={handleSendInterest}
          >
            <Heart className="w-5 h-5 mr-2" />
            Send Interest
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A]"
          >
            <Phone className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A]"
          >
            <Video className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-[#D4AF37]/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-[#D4AF37]">{icon}</div>
        <h3 className="font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-[#D4AF37]/10 last:border-0">
      <span className="text-sm text-[#004953]/60 font-medium">{label}</span>
      <span className="text-sm text-[#004953] font-semibold text-right max-w-[60%]">{value}</span>
    </div>
  );
}