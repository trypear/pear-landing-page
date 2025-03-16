export type DownloadFeedback = {
  role: string;
  experience_level: string;
  primary_use: string;
  project_description: string;
};

export const userRoles = [
  "Software Developer",
  "Data Scientist",
  "Student",
  "Researcher",
  "Product Manager",
  "Non-Technical",
  "Other",
] as const;

export const experienceLevels = [
  "No Experience",
  "Beginner (Less than 1 Year)",
  "Intermediate (1-3 Years)",
  "Advanced (3-5 Years)",
  "Expert (5+ Years)",
] as const;

export const primaryUses = [
  "Personal Projects",
  "Work/Professional",
  "Academic/Research",
  "Learning/Education",
  "Other",
] as const;
