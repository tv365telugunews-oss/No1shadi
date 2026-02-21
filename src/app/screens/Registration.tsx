import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Progress } from "../components/ui/progress";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { teluguCastes, getCasteDisplayName, getCasteValue } from "../data/castes";
import { indianStates, getStateDisplayName, getStateValue } from "../data/states";
import { indianReligions, getReligionDisplayName, getReligionValue } from "../data/religions";
import { educationCourses, getEducationDisplayName, getEducationValue } from "../data/education";
import { rashis, getRashiDisplayName, getRashiValue, nakshatrams, getNakshatramDisplayName, getNakshatramValue, gothrams, getGothramDisplayName, getGothramValue, doshams, getDoshamDisplayName, getDoshamValue } from "../data/astrology";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";

export default function Registration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for Profile For selection
  const totalSteps = 7; // Including Profile For step
  const [profileFor, setProfileFor] = useState<string>("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Form state for all steps
  const [formData, setFormData] = useState({
    // Step 0: Profile For
    profileFor: "",
    
    // Step 1: Basic Details
    fullName: "",
    dateOfBirth: "",
    height: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    
    // Step 2: Location
    state: "",
    district: "",
    city: "",
    country: "",
    
    // Step 3: Education & Career
    qualification: "",
    profession: "",
    companyName: "",
    placeOfWorking: "",
    income: "",
    employmentType: "",
    
    // Step 4: Family
    fatherOccupation: "",
    motherOccupation: "",
    familyType: "",
    familyValues: "",
    
    // Step 5: Lifestyle
    diet: "",
    smoking: "",
    drinking: "",
    motherTongue: "",
  });

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 0: // Profile For
        if (!formData.profileFor) {
          alert("Please select who this profile is for");
          return false;
        }
        return true;
      
      case 1: // Basic Details
        if (!formData.fullName.trim()) {
          alert("Please enter your full name");
          return false;
        }
        if (!formData.dateOfBirth) {
          alert("Please select your date of birth");
          return false;
        }
        if (!formData.height) {
          alert("Please select your height");
          return false;
        }
        if (!formData.maritalStatus) {
          alert("Please select your marital status");
          return false;
        }
        if (!formData.religion) {
          alert("Please select your religion");
          return false;
        }
        if (!formData.caste) {
          alert("Please select your caste");
          return false;
        }
        return true;
      
      case 2: // Location
        if (!formData.state) {
          alert("Please select your state");
          return false;
        }
        if (!formData.district.trim()) {
          alert("Please enter your district");
          return false;
        }
        if (!formData.city.trim()) {
          alert("Please enter your city");
          return false;
        }
        if (!formData.country) {
          alert("Please select your country");
          return false;
        }
        return true;
      
      case 3: // Education & Career
        if (!formData.qualification) {
          alert("Please select your qualification");
          return false;
        }
        if (!formData.profession.trim()) {
          alert("Please enter your profession");
          return false;
        }
        if (!formData.income) {
          alert("Please select your annual income");
          return false;
        }
        if (!formData.employmentType) {
          alert("Please select your employment type");
          return false;
        }
        return true;
      
      case 4: // Family
        if (!formData.familyType) {
          alert("Please select your family type");
          return false;
        }
        if (!formData.familyValues) {
          alert("Please select your family values");
          return false;
        }
        return true;
      
      case 5: // Lifestyle
        if (!formData.diet) {
          alert("Please select your diet preference");
          return false;
        }
        if (!formData.smoking) {
          alert("Please select your smoking habit");
          return false;
        }
        if (!formData.drinking) {
          alert("Please select your drinking habit");
          return false;
        }
        if (!formData.motherTongue) {
          alert("Please select your mother tongue");
          return false;
        }
        return true;
      
      case 6: // Photos - optional step, can proceed
        return true;
      
      default:
        return true;
    }
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Mark profile as completed
      localStorage.setItem("profileCompleted", "true");
      setShowSuccessDialog(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/welcome-back");
    }
  };

  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg flex flex-col">
      {/* Header with Progress */}
      <div className="bg-white shadow-sm border-b border-[#D4AF37]/20 p-4">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={handleBack} className="p-2 hover:bg-[#FFF8E7] rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#7B1E3A]" />
          </button>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
              Create Your Profile
            </h2>
            <p className="text-sm text-[#004953]/60">Step {currentStep + 1} of {totalSteps}</p>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && <Step0ProfileFor formData={formData} setFormData={setFormData} />}
          {currentStep === 1 && <Step1BasicDetails formData={formData} setFormData={setFormData} />}
          {currentStep === 2 && <Step2Location formData={formData} setFormData={setFormData} />}
          {currentStep === 3 && <Step3Education formData={formData} setFormData={setFormData} />}
          {currentStep === 4 && <Step4Family formData={formData} setFormData={setFormData} />}
          {currentStep === 5 && <Step5Lifestyle formData={formData} setFormData={setFormData} />}
          {currentStep === 6 && <Step6Photos />}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 bg-white border-t border-[#D4AF37]/20">
        <Button
          onClick={handleNext}
          className="w-full h-14 text-lg rounded-xl"
          style={{
            background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
            color: "#FFFFFF",
            boxShadow: "0 4px 16px rgba(123, 30, 58, 0.3)"
          }}
        >
          {currentStep === totalSteps - 1 ? "Complete Registration" : "Continue"}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7B1E3A] to-[#A0002A] flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
              </div>
              <AlertDialogTitle className="text-2xl font-bold text-[#7B1E3A] text-center" style={{ fontFamily: "var(--font-heading)" }}>
                Congratulations!
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-[#004953] text-base pt-2">
                Your profile has been successfully created
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="pt-4">
              <Button
                className="w-full h-14 text-lg rounded-xl font-bold shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  color: "#FFFFFF"
                }}
                onClick={() => navigate("/home")}
              >
                Start Exploring Matches
              </Button>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}

function Step0ProfileFor({ formData, setFormData }: { formData: any, setFormData: any }) {
  const [selectedValue, setSelectedValue] = useState("");
  
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Profile For
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Creating Profile For *</label>
        <Select onValueChange={(value) => {
          setSelectedValue(value);
          setFormData({ ...formData, profileFor: value });
        }}>
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select who this profile is for" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="self">Self</SelectItem>
            <SelectItem value="son">Son</SelectItem>
            <SelectItem value="daughter">Daughter</SelectItem>
            <SelectItem value="brother">Brother</SelectItem>
            <SelectItem value="sister">Sister</SelectItem>
            <SelectItem value="relative">Relative</SelectItem>
            <SelectItem value="friend">Friend</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl p-4">
        <p className="text-sm text-[#004953]/70">
          <strong className="text-[#7B1E3A]">Note:</strong> You can create a profile for yourself or your family members. 
          Please ensure you have their consent before creating their profile.
        </p>
      </div>
    </div>
  );
}

function Step1BasicDetails({ formData, setFormData }: { formData: any, setFormData: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Basic Details
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Full Name *</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="Enter your full name" 
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#004953]">Date of Birth *</label>
          <Input 
            type="date" 
            className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#004953]">Height *</label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, height: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5.0">5'0"</SelectItem>
              <SelectItem value="5.1">5'1"</SelectItem>
              <SelectItem value="5.2">5'2"</SelectItem>
              <SelectItem value="5.3">5'3"</SelectItem>
              <SelectItem value="5.4">5'4"</SelectItem>
              <SelectItem value="5.5">5'5"</SelectItem>
              <SelectItem value="5.6">5'6"</SelectItem>
              <SelectItem value="5.7">5'7"</SelectItem>
              <SelectItem value="5.8">5'8"</SelectItem>
              <SelectItem value="5.9">5'9"</SelectItem>
              <SelectItem value="5.10">5'10"</SelectItem>
              <SelectItem value="5.11">5'11"</SelectItem>
              <SelectItem value="6.0">6'0"</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Marital Status *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, maritalStatus: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select marital status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="never">Never Married</SelectItem>
            <SelectItem value="divorced">Divorced</SelectItem>
            <SelectItem value="widowed">Widowed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#004953]">Religion *</label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, religion: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {indianReligions.map(religion => (
                <SelectItem key={getReligionValue(religion)} value={getReligionValue(religion)}>
                  {getReligionDisplayName(religion)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#004953]">Caste *</label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, caste: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {teluguCastes.map(caste => (
                <SelectItem key={getCasteValue(caste)} value={getCasteValue(caste)}>
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
          <Select
            onValueChange={(value) => setFormData({ ...formData, gothram: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {gothrams.map(gothram => (
                <SelectItem key={getGothramValue(gothram)} value={getGothramValue(gothram)}>
                  {getGothramDisplayName(gothram)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#004953]">Rashi</label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, rashi: value })}
          >
            <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {rashis.map(rashi => (
                <SelectItem key={getRashiValue(rashi)} value={getRashiValue(rashi)}>
                  {getRashiDisplayName(rashi)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Nakshatram</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, nakshatram: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select nakshatram" />
          </SelectTrigger>
          <SelectContent>
            {nakshatrams.map(nakshatram => (
              <SelectItem key={getNakshatramValue(nakshatram)} value={getNakshatramValue(nakshatram)}>
                {getNakshatramDisplayName(nakshatram)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Dosham</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, dosham: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select dosham" />
          </SelectTrigger>
          <SelectContent>
            {doshams.map(dosham => (
              <SelectItem key={getDoshamValue(dosham)} value={getDoshamValue(dosham)}>
                {getDoshamDisplayName(dosham)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step2Location({ formData, setFormData }: { formData: any, setFormData: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Location Details
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">State *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, state: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {indianStates.map(state => (
              <SelectItem key={getStateValue(state)} value={getStateValue(state)}>
                {getStateDisplayName(state)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">District *</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="Enter your district" 
          value={formData.district}
          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">City *</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="Enter your city" 
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Country *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, country: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step3Education({ formData, setFormData }: { formData: any, setFormData: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Education & Career
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Highest Qualification *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, qualification: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select qualification" />
          </SelectTrigger>
          <SelectContent>
            {educationCourses.map(course => (
              <SelectItem key={getEducationValue(course)} value={getEducationValue(course)}>
                {getEducationDisplayName(course)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Profession *</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="e.g., Software Engineer" 
          value={formData.profession}
          onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Company Name</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="e.g., Infosys, TCS, Google" 
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Place of Working</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="e.g., Hyderabad, Bangalore, USA" 
          value={formData.placeOfWorking}
          onChange={(e) => setFormData({ ...formData, placeOfWorking: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Annual Income *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, income: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select income range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
            <SelectItem value="5-8">₹5-8 Lakhs</SelectItem>
            <SelectItem value="8-12">₹8-12 Lakhs</SelectItem>
            <SelectItem value="12-15">₹12-15 Lakhs</SelectItem>
            <SelectItem value="15-20">₹15-20 Lakhs</SelectItem>
            <SelectItem value="20+">₹20+ Lakhs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Employment Type *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, employmentType: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select employment type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private">Private Sector</SelectItem>
            <SelectItem value="government">Government</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="self-employed">Self Employed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step4Family({ formData, setFormData }: { formData: any, setFormData: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Family Details
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Father's Occupation</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="Enter occupation" 
          value={formData.fatherOccupation}
          onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Mother's Occupation</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="Enter occupation" 
          value={formData.motherOccupation}
          onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Number of Siblings</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, numberOfSiblings: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">None</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4+">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Family Type *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, familyType: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select family type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nuclear">Nuclear Family</SelectItem>
            <SelectItem value="joint">Joint Family</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Family Values *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, familyValues: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select values" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="traditional">Traditional</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="liberal">Liberal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step5Lifestyle({ formData, setFormData }: { formData: any, setFormData: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Lifestyle & Preferences
      </h3>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Diet *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, diet: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select diet preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="veg">Vegetarian</SelectItem>
            <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
            <SelectItem value="eggetarian">Eggetarian</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Smoking *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, smoking: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="occasionally">Occasionally</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Drinking *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, drinking: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="occasionally">Socially</SelectItem>
            <SelectItem value="yes">Yes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Hobbies</label>
        <Input 
          className="h-12 rounded-xl border-[#D4AF37]/30 bg-white" 
          placeholder="e.g., Reading, Music, Travel" 
          value={formData.hobbies}
          onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#004953]">Mother Tongue *</label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, motherTongue: value })}
        >
          <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="telugu">Telugu</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="tamil">Tamil</SelectItem>
            <SelectItem value="kannada">Kannada</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function Step6Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const [showSupportDialog, setShowSupportDialog] = useState(false);
  const [supportMessage, setSupportMessage] = useState("");

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      
      // Check file type
      if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
        alert("Please upload JPG, PNG or JPEG file only");
        return;
      }

      setSelectedPhoto(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendSupport = () => {
    if (supportMessage.trim()) {
      // In real app, send to support API
      alert(`Support message sent: ${supportMessage}`);
      setSupportMessage("");
      setShowSupportDialog(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#7B1E3A] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        Photo Upload & Verification
      </h3>

      {/* Photo Upload Section */}
      <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#D4AF37]/50 text-center">
        {photoPreview ? (
          <div className="space-y-4">
            <img 
              src={photoPreview} 
              alt="Profile Preview" 
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#D4AF37]"
            />
            <p className="text-sm font-semibold text-[#004953]">
              {selectedPhoto?.name}
            </p>
            <Button 
              variant="outline" 
              className="border-[#D4AF37] text-[#7B1E3A]"
              onClick={() => {
                setSelectedPhoto(null);
                setPhotoPreview(null);
              }}
            >
              Change Photo
            </Button>
          </div>
        ) : (
          <>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFF8E7] flex items-center justify-center">
              <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#004953] mb-2">Upload Profile Photo</h4>
            <p className="text-sm text-[#004953]/60 mb-4">JPG, PNG or JPEG (Max 5MB)</p>
            <label htmlFor="photo-upload">
              <Button 
                variant="outline" 
                className="border-[#D4AF37] text-[#7B1E3A]"
                type="button"
                onClick={() => document.getElementById('photo-upload')?.click()}
              >
                Choose Photo
              </Button>
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </>
        )}
      </div>

      {/* Verification Section */}
      <div className="p-6 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
        <h4 className="font-semibold text-[#004953] mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414l2-2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Get Verified for Premium Trust
        </h4>
        <p className="text-sm text-[#004953]/70 mb-4">
          Upload Aadhaar and selfie for profile verification. Verified profiles get 3x more matches.
        </p>
        <Button 
          variant="outline" 
          className="border-[#D4AF37] text-[#7B1E3A] w-full"
          onClick={() => setShowVerificationDialog(true)}
        >
          Start Verification
        </Button>
      </div>

      {/* Contact Support Section */}
      <div className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30">
        <h4 className="font-semibold text-[#004953] mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#7B1E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Need Help?
        </h4>
        <p className="text-sm text-[#004953]/70 mb-4">
          Have questions or facing issues? Our support team is here to help you.
        </p>
        <Button 
          variant="outline" 
          className="border-[#7B1E3A] text-[#7B1E3A] w-full"
          onClick={() => setShowSupportDialog(true)}
        >
          Contact Support
        </Button>
      </div>

      {/* Privacy Notice */}
      <div className="text-center pt-4">
        <p className="text-sm text-[#004953]/60">
          Your photos are 100% safe and will only be visible to members you choose.
        </p>
      </div>

      {/* Verification Dialog */}
      {showVerificationDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Start Verification Process
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#7B1E3A] font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-[#004953] mb-1">Upload Aadhaar Card</p>
                  <p className="text-sm text-[#004953]/70">Front and back side of your Aadhaar</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#7B1E3A] font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-[#004953] mb-1">Take a Selfie</p>
                  <p className="text-sm text-[#004953]/70">Live photo for face verification</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF8E7] rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#7B1E3A] font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-[#004953] mb-1">Get Verified Badge</p>
                  <p className="text-sm text-[#004953]/70">Approval within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-[#004953]">
                <strong className="text-[#7B1E3A]">🔒 100% Safe & Secure:</strong> Your documents are encrypted and used only for verification purposes.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-[#D4AF37]"
                onClick={() => setShowVerificationDialog(false)}
              >
                Later
              </Button>
              <Button
                className="flex-1"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setShowVerificationDialog(false);
                  alert("Verification process will be available after completing registration!");
                }}
              >
                Start Now
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Support Dialog */}
      {showSupportDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Support
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-[#004953] mb-2 block">
                  How can we help you?
                </label>
                <textarea
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  placeholder="Type your message or question here..."
                  className="w-full h-32 p-4 rounded-xl border-2 border-[#D4AF37]/30 focus:border-[#7B1E3A] focus:outline-none resize-none"
                />
              </div>

              <div className="bg-[#FFF8E7] border border-[#D4AF37]/30 rounded-xl p-4">
                <p className="text-sm text-[#004953]">
                  <strong className="text-[#7B1E3A]">📧 Email:</strong> no1shadi.com@gmail.com<br/>
                  <strong className="text-[#7B1E3A]">📞 Phone:</strong> +91 9849884466<br/>
                  <strong className="text-[#7B1E3A]">⏰ Hours:</strong> Mon-Sat, 9 AM - 6 PM
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-[#D4AF37]"
                onClick={() => {
                  setShowSupportDialog(false);
                  setSupportMessage("");
                }}
              >
                Cancel
              </Button>
              <Button
                className="flex-1"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  color: "#FFFFFF",
                }}
                onClick={handleSendSupport}
                disabled={!supportMessage.trim()}
              >
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}