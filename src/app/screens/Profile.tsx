import { useState, useEffect } from "react";
import { ArrowLeft, Camera, Edit2, CheckCircle, Phone, Mail, MapPin, Briefcase, GraduationCap, Heart, Users, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/ui/button";
import { Avatar } from "../components/ui/avatar";

// Default user profile data
const defaultUserProfile = {
  id: "me",
  name: "Lakshmi Devi",
  photo: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=400&fit=crop",
  age: 26,
  height: "5'4\"",
  profession: "Software Engineer",
  education: "B.Tech in Computer Science",
  location: "Hyderabad, Telangana",
  phone: "+91 98765 43210",
  email: "lakshmi.devi@email.com",
  salary: "₹12-15 Lakhs/year",
  
  // Telugu specific
  gothram: "Kashyapa",
  rashi: "Meena (Pisces)",
  nakshatram: "Revathi",
  subcaste: "Brahmin",
  
  // Family
  fatherName: "Ramesh Kumar",
  fatherOccupation: "Retired Bank Manager",
  motherName: "Saraswati Devi",
  motherOccupation: "Homemaker",
  siblings: "1 Sister (Married)",
  
  // About
  about: "I am a software engineer working at a leading IT company. I value family traditions while embracing modern thinking. Looking for a well-educated partner who respects family values and cultural heritage.",
  
  interests: ["Classical Music", "Cooking", "Reading", "Temple Visits"],
  languages: ["Telugu", "English", "Hindi"],
  
  // Preferences
  preferences: {
    ageRange: "26-32",
    heightRange: "5'6\" - 6'0\"",
    education: "Graduate or above",
    profession: "Any",
    location: "Hyderabad, Bangalore, Chennai",
  },
  
  verified: true,
  premium: true,
  completionPercentage: 85,
};

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(defaultUserProfile);

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('userProfileData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Merge saved data with default profile (to include fields like photo, verified, etc.)
      setUserProfile({
        ...defaultUserProfile,
        name: parsedData.name || defaultUserProfile.name,
        age: parseInt(parsedData.age) || defaultUserProfile.age,
        height: parsedData.height || defaultUserProfile.height,
        profession: parsedData.profession || defaultUserProfile.profession,
        education: parsedData.education || defaultUserProfile.education,
        location: parsedData.city && parsedData.state ? `${parsedData.city}, ${parsedData.state}` : defaultUserProfile.location,
        phone: parsedData.phone || defaultUserProfile.phone,
        email: parsedData.email || defaultUserProfile.email,
        salary: parsedData.salary || defaultUserProfile.salary,
        gothram: parsedData.gothram || defaultUserProfile.gothram,
        rashi: parsedData.rashi || defaultUserProfile.rashi,
        nakshatram: parsedData.nakshatram || defaultUserProfile.nakshatram,
        subcaste: parsedData.caste || defaultUserProfile.subcaste,
        fatherName: parsedData.fatherName || defaultUserProfile.fatherName,
        fatherOccupation: parsedData.fatherOccupation || defaultUserProfile.fatherOccupation,
        motherName: parsedData.motherName || defaultUserProfile.motherName,
        motherOccupation: parsedData.motherOccupation || defaultUserProfile.motherOccupation,
        siblings: parsedData.siblings || defaultUserProfile.siblings,
        about: parsedData.about || defaultUserProfile.about,
        photo: parsedData.photo || defaultUserProfile.photo, // Load photo from localStorage
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 pt-6 pb-24 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 border-4 border-[#D4AF37] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 border-4 border-[#D4AF37] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              My Profile
            </h1>
            <Button
              onClick={() => navigate("/edit-profile")}
              className="bg-[#D4AF37] text-[#7B1E3A] hover:bg-[#FFD700] font-semibold"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Card - Overlapping header */}
      <div className="px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="flex justify-center -mt-16 mb-4">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-[#D4AF37] shadow-xl bg-white">
                  <img 
                    src={userProfile.photo} 
                    alt={userProfile.name} 
                    className="w-full h-full object-cover object-center" 
                    style={{ objectPosition: 'center center' }}
                  />
                </Avatar>
                {userProfile.verified && (
                  <div className="absolute bottom-2 right-2 bg-[#D4AF37] rounded-full p-2 shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                )}
                {isEditing && (
                  <button className="absolute top-0 right-0 bg-[#7B1E3A] text-white rounded-full p-2 shadow-lg">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Name and Basic Info */}
            <div className="text-center px-6 pb-4">
              <h2 className="text-2xl font-bold text-[#7B1E3A] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {userProfile.name}
              </h2>
              <p className="text-[#004953]/70 mb-3">
                {userProfile.age} years • {userProfile.height}
              </p>
              
              {/* Profile Completion */}
              <div className="max-w-xs mx-auto mb-4">
                <div className="flex items-center justify-between text-xs text-[#004953]/60 mb-1">
                  <span>Profile Completion</span>
                  <span className="font-semibold">{userProfile.completionPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-[#FFF8E7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37]"
                    style={{ width: `${userProfile.completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Premium Badge */}
              {userProfile.premium && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#7B1E3A] px-4 py-2 rounded-full font-semibold text-sm">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Premium Member
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4 bg-gradient-to-br from-[#FFF8E7] to-white">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7B1E3A]" />
                <span className="text-[#004953]">{userProfile.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7B1E3A]" />
                <span className="text-[#004953]">{userProfile.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#7B1E3A]" />
                <span className="text-[#004953]">{userProfile.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Professional Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#7B1E3A] mt-0.5" />
                <div>
                  <p className="text-sm text-[#004953]/60">Profession</p>
                  <p className="text-[#004953] font-medium">{userProfile.profession}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#7B1E3A] mt-0.5" />
                <div>
                  <p className="text-sm text-[#004953]/60">Education</p>
                  <p className="text-[#004953] font-medium">{userProfile.education}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#7B1E3A] mt-0.5">₹</div>
                <div>
                  <p className="text-sm text-[#004953]/60">Annual Income</p>
                  <p className="text-[#004953] font-medium">{userProfile.salary}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural & Astrological Details */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4 bg-gradient-to-br from-[#FFF8E7] to-white">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Astrological Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#004953]/60">Gothram</p>
                <p className="text-[#004953] font-medium">{userProfile.gothram}</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Sub-Caste</p>
                <p className="text-[#004953] font-medium">{userProfile.subcaste}</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Rashi</p>
                <p className="text-[#004953] font-medium">{userProfile.rashi}</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Nakshatram</p>
                <p className="text-[#004953] font-medium">{userProfile.nakshatram}</p>
              </div>
            </div>
          </div>

          {/* Family Details */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <Users className="w-5 h-5" />
              Family Details
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#004953]/60">Father</p>
                  <p className="text-[#004953] font-medium">{userProfile.fatherName}</p>
                  <p className="text-xs text-[#004953]/50">{userProfile.fatherOccupation}</p>
                </div>
                <div>
                  <p className="text-sm text-[#004953]/60">Mother</p>
                  <p className="text-[#004953] font-medium">{userProfile.motherName}</p>
                  <p className="text-xs text-[#004953]/50">{userProfile.motherOccupation}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Siblings</p>
                <p className="text-[#004953] font-medium">{userProfile.siblings}</p>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4 bg-gradient-to-br from-[#FFF8E7] to-white">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              About Me
            </h3>
            <p className="text-[#004953] leading-relaxed">{userProfile.about}</p>
          </div>

          {/* Interests */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <Heart className="w-5 h-5" />
              Interests & Hobbies
            </h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4 bg-gradient-to-br from-[#FFF8E7] to-white">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Languages Known
            </h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border-2 border-[#D4AF37] text-[#7B1E3A] rounded-full text-sm font-medium"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Partner Preferences */}
          <div className="border-t-2 border-[#D4AF37] px-6 py-4">
            <h3 className="text-lg font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Partner Preferences
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#004953]/60">Age Range</p>
                <p className="text-[#004953] font-medium">{userProfile.preferences.ageRange} years</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Height Range</p>
                <p className="text-[#004953] font-medium">{userProfile.preferences.heightRange}</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Education</p>
                <p className="text-[#004953] font-medium">{userProfile.preferences.education}</p>
              </div>
              <div>
                <p className="text-sm text-[#004953]/60">Preferred Location</p>
                <p className="text-[#004953] font-medium">{userProfile.preferences.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3 pb-6">
          <Button
            onClick={() => navigate("/settings")}
            className="w-full bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white font-semibold py-6 rounded-xl shadow-lg"
          >
            Privacy & Settings
          </Button>
          <Button
            onClick={() => navigate("/subscription")}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#7B1E3A] font-semibold py-6 rounded-xl shadow-lg"
          >
            Upgrade Membership
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
