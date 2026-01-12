
import React from 'react';

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  link: string;
  githubLink?: string;
  imageUrl?: string;
  role?: string;
  keyFeatures?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  shortDescription: string; // What you worked on
  longDescription: string; // AI Generated detail
}

export interface Education {
  id: string;
  degree: string;
  school: string; // College/University
  year: string;
  achievements?: string;
}

export interface Certification {
  id: string;
  name: string;
  platform: string; // Coursera, etc.
  year: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: 'Language' | 'Web' | 'Database' | 'Tool' | 'AI/ML';
}

export interface VisualConfig {
  font: 'Inter' | 'Playfair Display' | 'Merriweather' | 'Lato'; // Formal fonts
  themeColor: string;
  backgroundImageUrl?: string;
  showProfileImage: boolean;
  profileImageUrl?: string;
}

export interface PortfolioData {
  // Basic Info
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
  resumeLink?: string;
  
  // Sections
  bio: string; // Who you are, goals, interests
  strengths?: string;
  
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  
  // Config
  template: Template;
  visualConfig: VisualConfig;
}

export interface Template {
  id:string;
  name: string;
  previewImage: string;
  component: React.FC<{ data: PortfolioData }>;
}

export type AppStep = 'FORM' | 'TEMPLATES' | 'PREVIEW' | 'PUBLISHED';
