import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  icon: LucideIcon;
  text: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  carImage: string;
}

export interface ContentSection {
  title: string;
  description?: string;
}