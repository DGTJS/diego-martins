import type { IconType } from "react-icons";

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  className?: string;
  iconClassName?: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ContactDetail {
  title: string;
  value: string;
  href?: string;
  icon: IconType;
  className?: string;
  iconClassName?: string;
}

export interface Skill {
  name: string;
  icon: string | IconType;
  color: string;
  level: number;
  experience: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ProjectTech {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: ProjectTech[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}
