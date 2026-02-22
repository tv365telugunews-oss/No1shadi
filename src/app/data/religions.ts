// All Indian Religions
export const indianReligions = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Jain",
  "Zoroastrian (Parsi)",
  "Jewish",
  "Baháʼí",
  "Atheist",
  "No Religion",
  "Other"
];

// Get display name (keep as is)
export const getReligionDisplayName = (religion: string): string => {
  return religion;
};

// Get value for form (lowercase with dashes)
export const getReligionValue = (religion: string): string => {
  return religion.toLowerCase().replace(/[ʼ\s\(\)]/g, '-').replace(/--+/g, '-');
};

