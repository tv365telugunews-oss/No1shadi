import { useState, useCallback } from "react";
import { ArrowLeft, Save, CheckCircle, Camera, X, Check, Plus, Trash2, Shield } from "lucide-react";
import { useNavigate } from "react-router";
import Cropper from "react-easy-crop";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Avatar } from "../components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Slider } from "../components/ui/slider";
import { indianStates, getStateDisplayName, getStateValue } from "../data/states";
import { indianReligions, getReligionDisplayName, getReligionValue } from "../data/religions";
import { teluguCastes, getCasteDisplayName, getCasteValue } from "../data/castes";
import { educationCourses, getEducationDisplayName, getEducationValue } from "../data/education";
import { rashis, getRashiDisplayName, getRashiValue, nakshatrams, getNakshatramDisplayName, getNakshatramValue, gothrams, getGothramDisplayName, getGothramValue } from "../data/astrology";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

// Helper function to create image from crop
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number }
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
    }, "image/jpeg");
  });
}

export default function EditProfile() {
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showCropDialog, setShowCropDialog] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  
  // Load saved profile data from localStorage or use defaults
  const loadProfileData = () => {
    const savedData = localStorage.getItem('userProfileData');
    if (savedData) {
      return JSON.parse(savedData);
    }
    // Default data
    return {
      name: "Lakshmi Devi",
      age: "26",
      height: "5'4\"",
      profession: "Software Engineer",
      education: "B.Tech in Computer Science",
      salary: "₹12-15 Lakhs/year",
      workplace: "Infosys Technologies Ltd., Hyderabad",
      phone: "+91 98765 43210",
      email: "lakshmi.devi@email.com",
      state: "Telangana",
      district: "Hyderabad",
      city: "Hyderabad",
      religion: "Hindu",
      caste: "Brahmin",
      gothram: "Kashyapa",
      rashi: "Meena (Pisces)",
      nakshatram: "Revathi",
      fatherName: "Ramesh Kumar",
      fatherOccupation: "Retired Bank Manager",
      motherName: "Saraswati Devi",
      motherOccupation: "Homemaker",
      siblings: "1 Sister (Married)",
      about: "I am a software engineer working at a leading IT company. I value family traditions while embracing modern thinking. Looking for a well-educated partner who respects family values and cultural heritage.",
      languages: ["Telugu", "Hindi", "English"],
      photo: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=400&fit=crop",
      selfiePhoto: "", // Selfie photo for verification
      gallery: [
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      ],
    };
  };
  
  const [formData, setFormData] = useState(loadProfileData());

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result as string);
        setShowCropDialog(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('userProfileData', JSON.stringify(formData));
    
    // Show success dialog
    setShowSuccessDialog(true);
    
    // Navigate back after a short delay
    setTimeout(() => {
      setShowSuccessDialog(false);
      navigate("/profile");
    }, 1500);
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    if (imageToCrop && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels);
      setFormData({ ...formData, photo: croppedImage });
      setShowCropDialog(false);
    }
  };

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const gallery = formData.gallery || [];
      const maxImages = 6;
      
      if (gallery.length >= maxImages) {
        alert(`Maximum ${maxImages} images allowed`);
        return;
      }

      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const newGallery = [...gallery, reader.result as string];
        setFormData({ ...formData, gallery: newGallery });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    const gallery = formData.gallery || [];
    const newGallery = gallery.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, gallery: newGallery });
  };

  const handleSelfieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, selfiePhoto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveSelfie = () => {
    setFormData({ ...formData, selfiePhoto: "" });
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
              Edit Profile
            </h1>
            <p className="text-sm text-white/80">Update your information</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* Profile Photo */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Profile Photo
          </h3>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-[#D4AF37] shadow-xl bg-white">
                <img 
                  src={formData.photo} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center" 
                  style={{ objectPosition: 'center center' }}
                />
              </Avatar>
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 bg-[#7B1E3A] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#C41E3A] transition-colors"
              >
                <Camera className="w-5 h-5" />
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
            <p className="text-sm text-[#004953]/60 text-center">
              Click the camera icon to update your photo
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Basic Information
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Age *</label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Height *</label>
                <Input
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Details
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Phone Number *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Location
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">State *</label>
              <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map(state => (
                    <SelectItem key={getStateValue(state)} value={getStateDisplayName(state)}>
                      {getStateDisplayName(state)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">District *</label>
              <Input
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">City *</label>
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Professional Details
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Education *</label>
              <Select value={formData.education} onValueChange={(value) => setFormData({ ...formData, education: value })}>
                <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                  <SelectValue placeholder="Select education" />
                </SelectTrigger>
                <SelectContent>
                  {educationCourses.map(course => (
                    <SelectItem key={getEducationValue(course)} value={getEducationDisplayName(course)}>
                      {getEducationDisplayName(course)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Profession *</label>
              <Input
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Annual Income *</label>
              <Input
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Workplace</label>
              <Input
                value={formData.workplace}
                onChange={(e) => setFormData({ ...formData, workplace: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Religious Information */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Religious Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Religion *</label>
                <Select value={formData.religion} onValueChange={(value) => setFormData({ ...formData, religion: value })}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select religion" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianReligions.map(religion => (
                      <SelectItem key={getReligionValue(religion)} value={getReligionDisplayName(religion)}>
                        {getReligionDisplayName(religion)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Caste *</label>
                <Select value={formData.caste} onValueChange={(value) => setFormData({ ...formData, caste: value })}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select caste" />
                  </SelectTrigger>
                  <SelectContent>
                    {teluguCastes.map(caste => (
                      <SelectItem key={getCasteValue(caste)} value={getCasteDisplayName(caste)}>
                        {getCasteDisplayName(caste)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Gothram</label>
                <Select value={formData.gothram} onValueChange={(value) => setFormData({ ...formData, gothram: value })}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select gothram" />
                  </SelectTrigger>
                  <SelectContent>
                    {gothrams.map(gothram => (
                      <SelectItem key={getGothramValue(gothram)} value={getGothramDisplayName(gothram)}>
                        {getGothramDisplayName(gothram)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Rashi</label>
                <Select value={formData.rashi} onValueChange={(value) => setFormData({ ...formData, rashi: value })}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select rashi" />
                  </SelectTrigger>
                  <SelectContent>
                    {rashis.map(rashi => (
                      <SelectItem key={getRashiValue(rashi)} value={getRashiDisplayName(rashi)}>
                        {getRashiDisplayName(rashi)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Nakshatram</label>
              <Select value={formData.nakshatram} onValueChange={(value) => setFormData({ ...formData, nakshatram: value })}>
                <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                  <SelectValue placeholder="Select nakshatram" />
                </SelectTrigger>
                <SelectContent>
                  {nakshatrams.map(nakshatram => (
                    <SelectItem key={getNakshatramValue(nakshatram)} value={getNakshatramDisplayName(nakshatram)}>
                      {getNakshatramDisplayName(nakshatram)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Family Details */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Family Details
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Father's Name</label>
                <Input
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Father's Occupation</label>
                <Input
                  value={formData.fatherOccupation}
                  onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Mother's Name</label>
                <Input
                  value={formData.motherName}
                  onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Mother's Occupation</label>
                <Input
                  value={formData.motherOccupation}
                  onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
                  className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Siblings</label>
              <Input
                value={formData.siblings}
                onChange={(e) => setFormData({ ...formData, siblings: e.target.value })}
                className="h-12 rounded-xl border-[#D4AF37]/30 bg-white"
                placeholder="e.g., 1 Brother, 2 Sisters"
              />
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            About Me
          </h3>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#004953]">Tell us about yourself</label>
            <Textarea
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              className="min-h-[120px] rounded-xl border-[#D4AF37]/30 bg-white"
              placeholder="Write a brief description about yourself..."
            />
          </div>
        </div>

        {/* Languages Known */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Languages Known
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.languages && formData.languages.map((language: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 border-2 border-[#D4AF37] text-[#7B1E3A] rounded-full text-sm font-medium bg-[#FFF8E7]"
                >
                  <span>{language}</span>
                  <button
                    onClick={() => {
                      const newLanguages = formData.languages.filter((_: string, i: number) => i !== index);
                      setFormData({ ...formData, languages: newLanguages });
                    }}
                    className="text-[#C41E3A] hover:text-[#7B1E3A] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Add Language</label>
              <Select
                onValueChange={(value) => {
                  const languages = formData.languages || [];
                  if (!languages.includes(value)) {
                    setFormData({ ...formData, languages: [...languages, value] });
                  }
                }}
              >
                <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                  <SelectValue placeholder="Select a language to add" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Telugu">Telugu</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Tamil">Tamil</SelectItem>
                  <SelectItem value="Kannada">Kannada</SelectItem>
                  <SelectItem value="Malayalam">Malayalam</SelectItem>
                  <SelectItem value="Marathi">Marathi</SelectItem>
                  <SelectItem value="Bengali">Bengali</SelectItem>
                  <SelectItem value="Gujarati">Gujarati</SelectItem>
                  <SelectItem value="Punjabi">Punjabi</SelectItem>
                  <SelectItem value="Urdu">Urdu</SelectItem>
                  <SelectItem value="Sanskrit">Sanskrit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-[#004953]/60">
              Select languages you can speak or understand
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Photo Gallery
          </h3>
          <p className="text-sm text-[#004953]/60 mb-4">
            Add up to 6 photos to your profile. Photos get 10x more responses!
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {formData.gallery && formData.gallery.map((image: string, index: number) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl border-2 border-[#D4AF37]/30"
                  />
                  <button
                    onClick={() => handleRemoveGalleryImage(index)}
                    className="absolute -top-2 -right-2 bg-[#C41E3A] text-white rounded-full p-1.5 shadow-lg cursor-pointer hover:bg-[#7B1E3A] transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {(!formData.gallery || formData.gallery.length < 6) && (
                <label
                  htmlFor="gallery-upload"
                  className="aspect-square bg-[#FFF8E7] border-2 border-dashed border-[#D4AF37] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <Plus className="w-8 h-8 text-[#7B1E3A] mb-2" />
                  <span className="text-sm font-semibold text-[#7B1E3A]">Add Photo</span>
                  <span className="text-xs text-[#004953]/60">{formData.gallery ? formData.gallery.length : 0}/6</span>
                  <input
                    id="gallery-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleGalleryImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Selfie Photo */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Selfie Photo - Safety Verification
            </h3>
          </div>
          <p className="text-sm text-[#004953]/70 mb-4 flex items-start gap-2">
            <Shield className="w-4 h-4 text-[#7B1E3A] mt-0.5 flex-shrink-0" />
            <span>Upload your selfie for profile verification. This helps ensure safety and authenticity for all members.</span>
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-[#D4AF37] shadow-xl bg-white">
                <img 
                  src={formData.selfiePhoto} 
                  alt="Selfie" 
                  className="w-full h-full object-cover object-center" 
                  style={{ objectPosition: 'center center' }}
                />
              </Avatar>
              <label
                htmlFor="selfie-upload"
                className="absolute bottom-0 right-0 bg-[#7B1E3A] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#C41E3A] transition-colors"
              >
                <Camera className="w-5 h-5" />
              </label>
              <input
                id="selfie-upload"
                type="file"
                accept="image/*"
                onChange={handleSelfieChange}
                className="hidden"
              />
            </div>
            <p className="text-sm text-[#004953]/60 text-center">
              Click the camera icon to upload your selfie
            </p>
            {formData.selfiePhoto && (
              <button
                onClick={handleRemoveSelfie}
                className="mt-2 text-sm text-[#C41E3A] hover:text-[#7B1E3A] transition-colors"
              >
                Remove Selfie
              </button>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="sticky bottom-4 z-10">
          <Button
            onClick={handleSave}
            className="w-full h-14 rounded-xl text-lg font-bold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
              color: "#FFFFFF"
            }}
          >
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Profile Updated</AlertDialogTitle>
            <AlertDialogDescription>
              Your profile has been successfully updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Crop Dialog */}
      <Dialog open={showCropDialog} onOpenChange={setShowCropDialog}>
        <DialogContent className="w-full max-w-2xl p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Crop Your Photo
            </DialogTitle>
          </DialogHeader>
          <div className="relative h-[400px] bg-black">
            <Cropper
              image={imageToCrop || ""}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="p-6 pt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#004953]">Zoom</label>
              <Slider
                value={[zoom]}
                onValueChange={(value) => setZoom(value[0])}
                min={1}
                max={3}
                step={0.1}
                className="w-full"
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowCropDialog(false);
                  setImageToCrop(null);
                  setCrop({ x: 0, y: 0 });
                  setZoom(1);
                }}
                variant="outline"
                className="flex-1 h-12 rounded-xl border-2 border-[#7B1E3A] text-[#7B1E3A] hover:bg-[#7B1E3A] hover:text-white font-semibold"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleCropSave}
                className="flex-1 h-12 rounded-xl font-semibold shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)",
                  color: "#FFFFFF"
                }}
              >
                <Check className="w-5 h-5 mr-2" />
                Apply Crop
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}