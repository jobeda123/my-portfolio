// Central export for all user information
export * from './basicInfo';
export * from './contactInfo'; 
export * from './aboutInfo';
export * from './skillsInfo';
export * from './projectsInfo';
export * from './careerInfo';

// Combined user info object for backward compatibility
import { BASIC_INFO } from './basicInfo';
import { CONTACT_INFO } from './contactInfo';
import { ABOUT_INFO } from './aboutInfo';
import { SKILLS_INFO } from './skillsInfo';
import { PROJECTS_INFO } from './projectsInfo';
import { CAREER_INFO } from './careerInfo';

export const USER_INFO = {
  ...BASIC_INFO,
  ...CONTACT_INFO,
  ...ABOUT_INFO,
  ...SKILLS_INFO,
  ...PROJECTS_INFO,
  ...CAREER_INFO
} as const;
