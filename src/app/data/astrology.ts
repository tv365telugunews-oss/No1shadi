// Telugu Astrology Data - Rashis and Nakshatrams

// 12 Rashis (Zodiac Signs) in Telugu
export const rashis = [
  "Mesham (Aries) - మేషం",
  "Vrishabham (Taurus) - వృషభం",
  "Midhunam (Gemini) - మిథునం",
  "Karkatakam (Cancer) - కర్కాటకం",
  "Simham (Leo) - సింహం",
  "Kanya (Virgo) - కన్య",
  "Tula (Libra) - తుల",
  "Vrischikam (Scorpio) - వృశ్చికం",
  "Dhanus (Sagittarius) - ధనస్సు",
  "Makaram (Capricorn) - మకరం",
  "Kumbham (Aquarius) - కుంభం",
  "Meenam (Pisces) - మీనం",
];

// 27 Nakshatrams (Birth Stars) in Telugu
export const nakshatrams = [
  "Ashwini - అశ్విని",
  "Bharani - భరణి",
  "Krittika - కృత్తిక",
  "Rohini - రోహిణి",
  "Mrigashira - మృగశిర",
  "Ardra - ఆర్ద్ర",
  "Punarvasu - పునర్వసు",
  "Pushya - పుష్యమి",
  "Ashlesha - ఆశ్లేష",
  "Magha - మఘ",
  "Purva Phalguni - పూర్వ ఫల్గుణి",
  "Uttara Phalguni - ఉత్తర ఫల్గుణి",
  "Hasta - హస్త",
  "Chitra - చిత్త",
  "Swati - స్వాతి",
  "Vishakha - విశాఖ",
  "Anuradha - అనురాధ",
  "Jyeshtha - జ్యేష్ఠ",
  "Moola - మూల",
  "Purva Ashadha - పూర్వాషాఢ",
  "Uttara Ashadha - ఉత్తరాషాఢ",
  "Shravana - శ్రవణ",
  "Dhanishta - ధనిష్ఠ",
  "Shatabhisha - శతభిష",
  "Purva Bhadrapada - పూర్వ భాద్రపద",
  "Uttara Bhadrapada - ఉత్తర భాద్రపద",
  "Revati - రేవతి",
];

// Popular Gotrams in Telugu Communities
export const gothrams = [
  "Atreya",
  "Bharadwaja",
  "Gautama",
  "Gangadhara",
  "Jamadagni",
  "Kashyapa",
  "Kaundinya",
  "Vashishta",
  "Vishwamitra",
  "Agastya",
  "Angirasa",
  "Bhrigu",
  "Harita",
  "Katyayana",
  "Mandavya",
  "Mudgala",
  "Paraashara",
  "Shandilya",
  "Shatamarshana",
  "Upamanyu",
  "Vatsa",
  "Dhananjaya",
  "Kanva",
  "Kaushika",
  "Kutsa",
  "Naidhruva",
  "Raibhya",
  "Srivatsa",
  "Vadula",
  "Varaha",
  "Krishnatreya",
];

// Dosham (Astrological Issues)
export const doshams = [
  "No Dosham",
  "Manglik / Kuja Dosham",
  "Rahu Ketu Dosham",
  "Shani Dosham",
  "Naga Dosham",
  "Kalathra Dosham",
  "Don't Know",
];

// Get display name (keep as is)
export const getRashiDisplayName = (rashi: string): string => {
  return rashi;
};

export const getNakshatramDisplayName = (nakshatram: string): string => {
  return nakshatram;
};

export const getGothramDisplayName = (gothram: string): string => {
  return gothram;
};

export const getDoshamDisplayName = (dosham: string): string => {
  return dosham;
};

// Get value for form (lowercase with dashes)
export const getRashiValue = (rashi: string): string => {
  return rashi
    .toLowerCase()
    .replace(/[()\/\-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

export const getNakshatramValue = (nakshatram: string): string => {
  return nakshatram
    .toLowerCase()
    .replace(/[()\/\-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

export const getGothramValue = (gothram: string): string => {
  return gothram.toLowerCase().replace(/\s+/g, '-');
};

export const getDoshamValue = (dosham: string): string => {
  return dosham.toLowerCase().replace(/[\s\/]/g, '-');
};