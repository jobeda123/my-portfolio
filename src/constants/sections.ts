import { IconType } from '@/components/icons/types';

export interface Section {
  id: string;
  label: string;
  icon: IconType;
  component?: string;
}

export const SECTIONS: Section[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    component: 'HomeSection'
  },
  {
    id: 'about',
    label: 'About',
    icon: 'about',
    component: 'AboutSection'
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: 'skills',
    component: 'SkillsSection'
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: 'experience',
    component: 'ExperienceSection'
  },
  {
    id: 'education',
    label: 'Education',
    icon: 'education',
    component: 'EducationSection'
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: 'portfolio',
    component: 'PortfolioSection'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'contact',
    component: 'ContactSection'
  },
];
