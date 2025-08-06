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
    id: 'projects',
    label: 'Projects',
    icon: 'projects',
    component: 'ProjectsSection'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: 'contact',
    component: 'ContactSection'
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'services',
    component: 'ServicesSection'
  }
];
