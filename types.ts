import { LucideIcon } from 'lucide-react';

export enum LinkCategory {
  SOCIAL = 'SOCIAL',
  PROJECT = 'PROJECT',
  CONTACT = 'CONTACT',
  BLOG = 'BLOG'
}

export interface SocialLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  category: LinkCategory;
  highlight?: boolean;
}