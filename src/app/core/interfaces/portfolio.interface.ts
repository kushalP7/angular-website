export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Font Awesome class, e.g., 'fab fa-github'
}

export interface Fact {
  label: string;
  value: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  experience: string; // e.g. "3+ Years"
  icon: string; // e.g. "fab fa-angular" or "fa-brands fa-angular"
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  designation: string;
  duration: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string; // e.g. "Angular", "React", "Node", "Java", "Python", "Cloud"
  techStack: string[];
  features: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // Font Awesome class
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  mapEmbedUrl?: string;
}

export interface Achievement {
  name: string;
  details: string;
}

export interface PortfolioConfig {
  name: string;
  titles: string[]; // Typing animation titles
  introText: string;
  profileImage: string;
  aboutImage: string;
  bio: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  facts: Fact[];
  stats: Stat[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  skillsCategories: SkillCategory[];
  experienceList: Experience[];
  projectsList: Project[];
  servicesList: Service[];
  contactInfo: ContactInfo;
}
