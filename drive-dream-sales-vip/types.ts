import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  text: string;
}

export enum SectionType {
  HERO = 'HERO',
  FEATURES = 'FEATURES',
  WHY_JOIN = 'WHY_JOIN',
  FOUNDER = 'FOUNDER',
  SOCIAL_PROOF = 'SOCIAL_PROOF',
  PHILOSOPHY = 'PHILOSOPHY'
}