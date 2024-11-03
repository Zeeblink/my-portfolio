import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;  // Use LucideIcon type for the icon
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  link: string;
}

export interface TechStack {
  name: string;
  logo: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}