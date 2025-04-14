import type { LucideIcon } from 'lucide-react';
import type React from 'react';

// Project card props
export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

// Experience entry props
export interface ExperienceEntryProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

// Skill category props
export interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

// Section title props
export interface SectionTitleProps {
  children: React.ReactNode;
}
