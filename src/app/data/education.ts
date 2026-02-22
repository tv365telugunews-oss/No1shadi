// All Education Courses in India

// Undergraduate Engineering & Technology
const undergraduateEngineering = [
  "B.Tech (Bachelor of Technology)",
  "B.E. (Bachelor of Engineering)",
  "B.Tech - Computer Science",
  "B.Tech - Information Technology",
  "B.Tech - Electronics & Communication",
  "B.Tech - Electrical Engineering",
  "B.Tech - Mechanical Engineering",
  "B.Tech - Civil Engineering",
  "B.Tech - Chemical Engineering",
  "B.Tech - Aerospace Engineering",
  "B.Tech - Automobile Engineering",
  "B.Tech - Biotechnology",
  "B.Arch (Bachelor of Architecture)",
  "BCA (Bachelor of Computer Applications)",
];

// Postgraduate Engineering & Technology
const postgraduateEngineering = [
  "M.Tech (Master of Technology)",
  "M.E. (Master of Engineering)",
  "M.Tech - Computer Science",
  "M.Tech - Information Technology",
  "M.Tech - Electronics & Communication",
  "M.Tech - Electrical Engineering",
  "M.Tech - Mechanical Engineering",
  "M.Tech - Civil Engineering",
  "M.Arch (Master of Architecture)",
  "MCA (Master of Computer Applications)",
];

// Undergraduate Science
const undergraduateScience = [
  "B.Sc (Bachelor of Science)",
  "B.Sc - Physics",
  "B.Sc - Chemistry",
  "B.Sc - Mathematics",
  "B.Sc - Biology",
  "B.Sc - Biotechnology",
  "B.Sc - Microbiology",
  "B.Sc - Zoology",
  "B.Sc - Botany",
  "B.Sc - Statistics",
  "B.Sc - Computer Science",
  "B.Sc - IT (Information Technology)",
  "B.Sc - Agriculture",
  "B.Sc - Nursing",
];

// Postgraduate Science
const postgraduateScience = [
  "M.Sc (Master of Science)",
  "M.Sc - Physics",
  "M.Sc - Chemistry",
  "M.Sc - Mathematics",
  "M.Sc - Biology",
  "M.Sc - Biotechnology",
  "M.Sc - Microbiology",
  "M.Sc - Zoology",
  "M.Sc - Botany",
  "M.Sc - Statistics",
  "M.Sc - Computer Science",
  "M.Sc - IT (Information Technology)",
  "M.Sc - Agriculture",
];

// Undergraduate Commerce & Management
const undergraduateCommerce = [
  "B.Com (Bachelor of Commerce)",
  "B.Com - General",
  "B.Com - Honors",
  "B.Com - Accounting & Finance",
  "BBA (Bachelor of Business Administration)",
  "BMS (Bachelor of Management Studies)",
  "BBM (Bachelor of Business Management)",
];

// Postgraduate Commerce & Management
const postgraduateCommerce = [
  "M.Com (Master of Commerce)",
  "MBA (Master of Business Administration)",
  "MBA - Finance",
  "MBA - Marketing",
  "MBA - Human Resources",
  "MBA - Operations",
  "MBA - International Business",
  "MBA - IT",
  "PGDM (Post Graduate Diploma in Management)",
  "Executive MBA",
];

// Undergraduate Arts & Humanities
const undergraduateArts = [
  "B.A. (Bachelor of Arts)",
  "B.A. - English",
  "B.A. - Hindi",
  "B.A. - History",
  "B.A. - Political Science",
  "B.A. - Economics",
  "B.A. - Psychology",
  "B.A. - Sociology",
  "B.A. - Geography",
  "B.A. - Philosophy",
  "B.A. - Journalism",
  "B.A. - Mass Communication",
];

// Postgraduate Arts & Humanities
const postgraduateArts = [
  "M.A. (Master of Arts)",
  "M.A. - English",
  "M.A. - Hindi",
  "M.A. - History",
  "M.A. - Political Science",
  "M.A. - Economics",
  "M.A. - Psychology",
  "M.A. - Sociology",
  "M.A. - Geography",
  "M.A. - Philosophy",
  "M.A. - Journalism",
  "M.A. - Mass Communication",
];

// Medical & Healthcare
const medical = [
  "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
  "BDS (Bachelor of Dental Surgery)",
  "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
  "BHMS (Bachelor of Homeopathic Medicine & Surgery)",
  "BUMS (Bachelor of Unani Medicine & Surgery)",
  "B.Pharm (Bachelor of Pharmacy)",
  "B.P.T. (Bachelor of Physiotherapy)",
  "B.V.Sc (Bachelor of Veterinary Science)",
  "MD (Doctor of Medicine)",
  "MS (Master of Surgery)",
  "MDS (Master of Dental Surgery)",
  "M.Pharm (Master of Pharmacy)",
  "Pharm.D (Doctor of Pharmacy)",
  "M.P.T. (Master of Physiotherapy)",
  "M.V.Sc (Master of Veterinary Science)",
  "DM (Doctorate of Medicine)",
  "MCh (Master of Chirurgiae)",
];

// Law
const law = [
  "LLB (Bachelor of Laws)",
  "B.A. LLB (5 Year Integrated)",
  "B.Com LLB (5 Year Integrated)",
  "B.B.A. LLB (5 Year Integrated)",
  "B.Sc LLB (5 Year Integrated)",
  "LLM (Master of Laws)",
];

// Professional Courses & Certifications
const professional = [
  "CA (Chartered Accountant)",
  "CS (Company Secretary)",
  "CMA (Cost & Management Accountant)",
  "ICWA (Institute of Cost & Works Accountants)",
  "CFA (Chartered Financial Analyst)",
  "FRM (Financial Risk Manager)",
  "ACCA (Association of Chartered Certified Accountants)",
  "CPA (Certified Public Accountant)",
];

// Design & Creative Arts
const design = [
  "B.Des (Bachelor of Design)",
  "B.Des - Fashion Design",
  "B.Des - Interior Design",
  "B.Des - Product Design",
  "B.Des - Graphic Design",
  "B.F.A. (Bachelor of Fine Arts)",
  "M.Des (Master of Design)",
  "M.F.A. (Master of Fine Arts)",
];

// Education & Teaching
const education = [
  "B.Ed (Bachelor of Education)",
  "M.Ed (Master of Education)",
  "D.Ed (Diploma in Education)",
  "B.P.Ed (Bachelor of Physical Education)",
  "M.P.Ed (Master of Physical Education)",
];

// Diploma Courses
const diploma = [
  "Diploma in Engineering",
  "Diploma in Computer Science",
  "Diploma in Mechanical Engineering",
  "Diploma in Civil Engineering",
  "Diploma in Electrical Engineering",
  "Polytechnic Diploma",
  "ITI (Industrial Training Institute)",
];

// Research & Doctoral
const research = [
  "Ph.D. (Doctor of Philosophy)",
  "M.Phil. (Master of Philosophy)",
  "Post Doctoral Research",
];

// Other Education Levels
const otherEducation = [
  "10th Standard",
  "12th Standard / Intermediate",
  "Undergraduate (General)",
  "Postgraduate (General)",
  "Diploma",
  "Certificate Course",
  "Not Specified",
];

// Combine all education courses
export const educationCourses = [
  ...undergraduateEngineering,
  ...postgraduateEngineering,
  ...undergraduateScience,
  ...postgraduateScience,
  ...undergraduateCommerce,
  ...postgraduateCommerce,
  ...undergraduateArts,
  ...postgraduateArts,
  ...medical,
  ...law,
  ...professional,
  ...design,
  ...education,
  ...diploma,
  ...research,
  ...otherEducation,
];

// Grouped education for better UI organization
export const educationByCategory = {
  "Engineering & Technology - UG": undergraduateEngineering,
  "Engineering & Technology - PG": postgraduateEngineering,
  "Science - UG": undergraduateScience,
  "Science - PG": postgraduateScience,
  "Commerce & Management - UG": undergraduateCommerce,
  "Commerce & Management - PG": postgraduateCommerce,
  "Arts & Humanities - UG": undergraduateArts,
  "Arts & Humanities - PG": postgraduateArts,
  "Medical & Healthcare": medical,
  "Law": law,
  "Professional Certifications": professional,
  "Design & Creative Arts": design,
  "Education & Teaching": education,
  "Diploma Courses": diploma,
  "Research & Doctoral": research,
  "Other": otherEducation,
};

// Get display name (keep as is)
export const getEducationDisplayName = (education: string): string => {
  return education;
};

// Get value for form (lowercase with dashes)
export const getEducationValue = (education: string): string => {
  return education
    .toLowerCase()
    .replace(/[&\(\)\.,-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};
