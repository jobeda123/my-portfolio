// Central export for all user information
export * from './basicInfo';
export * from './contactInfo'; 
export * from './aboutInfo';
export * from './skillsInfo';
export * from './careerInfo';
export * from './educationInfo';
export * from './experienceInfo';
export * from './portfolioInfo'; // This file is used in the PortfolioList component

// Combined user info object for backward compatibility
import { BASIC_INFO } from './basicInfo';
import { CONTACT_INFO } from './contactInfo';
import { ABOUT_INFO } from './aboutInfo';
import { SKILLS_INFO } from './skillsInfo';
import { CAREER_INFO } from './careerInfo';
import { EDUCATION_INFO } from './educationInfo';
import { EXPERIENCE_INFO } from './experienceInfo';
import { PORTFOLIO_INFO } from './portfolioInfo';

export const USER_INFO = {
  ...BASIC_INFO,
  ...CONTACT_INFO,
  ...ABOUT_INFO,
  ...SKILLS_INFO,
  ...CAREER_INFO,
  ...EDUCATION_INFO,
  ...EXPERIENCE_INFO,
  ...PORTFOLIO_INFO
} as const;
