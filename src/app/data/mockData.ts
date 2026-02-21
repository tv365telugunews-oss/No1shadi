export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  education: string;
  profession: string;
  location: string;
  city: string;
  state: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  gothram?: string;
  rashi?: string;
  nakshatram?: string;
  income: string;
  employmentType: string;
  diet: string;
  motherTongue: string;
  photo: string;
  verified: boolean;
  premium: boolean;
  trusted: boolean;
  aiCompatibility: number;
  profileViews: number;
  about?: string;
  familyDetails?: {
    fatherOccupation: string;
    motherOccupation: string;
    siblings: string;
    familyType: string;
    familyValues: string;
  };
  partnerPreference?: {
    ageRange: string;
    heightRange: string;
    education: string;
    profession: string;
    location: string;
  };
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 25,
    height: "5'4\"",
    education: "B.Tech in Computer Science",
    profession: "Software Engineer",
    location: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Reddy",
    gothram: "Vashista",
    rashi: "Mesha",
    nakshatram: "Ashwini",
    income: "₹8-12 Lakhs",
    employmentType: "Private Sector",
    diet: "Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    verified: true,
    premium: true,
    trusted: true,
    aiCompatibility: 92,
    profileViews: 245,
    about: "Well-educated, family-oriented individual looking for a life partner who shares similar values and aspirations.",
    familyDetails: {
      fatherOccupation: "Business",
      motherOccupation: "Homemaker",
      siblings: "1 Brother",
      familyType: "Nuclear Family",
      familyValues: "Traditional"
    }
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    age: 28,
    height: "5'10\"",
    education: "MBA Finance",
    profession: "Investment Banker",
    location: "Vijayawada",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Kamma",
    gothram: "Kashyapa",
    rashi: "Vrishabha",
    nakshatram: "Krittika",
    income: "₹15-20 Lakhs",
    employmentType: "Private Sector",
    diet: "Non-Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    verified: true,
    premium: true,
    trusted: false,
    aiCompatibility: 88,
    profileViews: 312
  },
  {
    id: "3",
    name: "Lakshmi Devi",
    age: 24,
    height: "5'3\"",
    education: "M.Sc Biotechnology",
    profession: "Research Scientist",
    location: "Warangal",
    city: "Warangal",
    state: "Telangana",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Brahmin",
    gothram: "Bharadwaja",
    rashi: "Karka",
    nakshatram: "Pushya",
    income: "₹6-8 Lakhs",
    employmentType: "Government",
    diet: "Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    verified: true,
    premium: false,
    trusted: true,
    aiCompatibility: 85,
    profileViews: 189
  },
  {
    id: "4",
    name: "Srinivas Reddy",
    age: 30,
    height: "5'11\"",
    education: "B.E Mechanical",
    profession: "Project Manager",
    location: "Guntur",
    city: "Guntur",
    state: "Andhra Pradesh",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Reddy",
    gothram: "Vashista",
    rashi: "Simha",
    nakshatram: "Magha",
    income: "₹12-15 Lakhs",
    employmentType: "Private Sector",
    diet: "Non-Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    verified: true,
    premium: true,
    trusted: true,
    aiCompatibility: 90,
    profileViews: 278
  },
  {
    id: "5",
    name: "Divya Krishna",
    age: 26,
    height: "5'5\"",
    education: "CA (Chartered Accountant)",
    profession: "Chartered Accountant",
    location: "Vizag",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Vysya",
    gothram: "Koundinya",
    rashi: "Kanya",
    nakshatram: "Hasta",
    income: "₹10-15 Lakhs",
    employmentType: "Self Employed",
    diet: "Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    verified: true,
    premium: true,
    trusted: true,
    aiCompatibility: 94,
    profileViews: 356
  },
  {
    id: "6",
    name: "Anil Kumar",
    age: 27,
    height: "5'9\"",
    education: "B.Tech IT",
    profession: "Software Developer",
    location: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    maritalStatus: "Never Married",
    religion: "Hindu",
    caste: "Kamma",
    gothram: "Kashyapa",
    rashi: "Tula",
    nakshatram: "Chitra",
    income: "₹10-12 Lakhs",
    employmentType: "Private Sector",
    diet: "Vegetarian",
    motherTongue: "Telugu",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    verified: true,
    premium: false,
    trusted: true,
    aiCompatibility: 87,
    profileViews: 198
  }
];

export const subscriptionPlans = [
  {
    id: "silver",
    name: "Silver",
    duration: "3 Months",
    price: "₹2,499",
    originalPrice: "₹3,999",
    discount: "37% OFF",
    features: [
      "View 50 Contact Details",
      "Send 50 Interests",
      "Chat with Matches",
      "Basic Search Filters",
      "Email Support"
    ],
    popular: false,
    recommended: false
  },
  {
    id: "gold",
    name: "Gold",
    duration: "6 Months",
    price: "₹3,999",
    originalPrice: "₹6,999",
    discount: "43% OFF",
    features: [
      "View 100 Contact Details",
      "Send 100 Interests",
      "Unlimited Chat",
      "Advanced Search Filters",
      "Profile Highlighting",
      "Priority Support",
      "Horoscope Matching"
    ],
    popular: true,
    recommended: false
  },
  {
    id: "diamond",
    name: "Diamond",
    duration: "12 Months",
    price: "₹4,999",
    originalPrice: "₹11,999",
    discount: "58% OFF",
    features: [
      "View 200 Contact Details",
      "Send 200 Interests",
      "Unlimited Chat & Calls",
      "Premium Search Filters",
      "Profile Spotlight",
      "24/7 Priority Support",
      "AI Compatibility Insights",
      "Verified Badge",
      "Video Call Feature"
    ],
    popular: false,
    recommended: false
  },
  {
    id: "platinum",
    name: "Platinum",
    duration: "12 Months",
    price: "₹5,999",
    originalPrice: "₹19,999",
    discount: "70% OFF",
    features: [
      "Unlimited Contact Views",
      "Unlimited Interests",
      "Unlimited Communication",
      "All Premium Features",
      "Dedicated Relationship Manager",
      "Premium Badge",
      "Priority Listing",
      "Background Verification",
      "Personalized Matchmaking",
      "Exclusive Events Access"
    ],
    popular: false,
    recommended: true
  },
  {
    id: "prime",
    name: "Prime",
    duration: "Custom",
    price: "Contact Us",
    originalPrice: "",
    discount: "",
    features: [
      "All Platinum Features",
      "Personal Matchmaker",
      "Concierge Service",
      "Private Events",
      "Astrologer Consultation",
      "Pre-Wedding Planning Support",
      "Family Background Check",
      "Unlimited Everything"
    ],
    popular: false,
    recommended: false
  },
  {
    id: "super-prime",
    name: "Super Prime",
    duration: "Custom",
    price: "Contact Us",
    originalPrice: "",
    discount: "",
    features: [
      "All Prime Features",
      "Elite Matchmaking",
      "Global Partner Search",
      "NRI Priority Matching",
      "Luxury Events Access",
      "Wedding Planner Support",
      "Legal & Financial Counseling",
      "Complete Privacy Protection",
      "VIP Customer Support"
    ],
    popular: false,
    recommended: false
  }
];

export interface Interest {
  id: string;
  profileId: string;
  profile: Profile;
  type: 'sent' | 'received';
  status: 'pending' | 'accepted' | 'declined';
  date: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: string;
  read: boolean;
}