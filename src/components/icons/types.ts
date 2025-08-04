// Icon types for centralized icon management
export type IconType = 
  | 'home'
  | 'about' 
  | 'projects'
  | 'contact'
  | 'services'
  | 'skills'
  | 'experience'
  | 'blog'
  | 'testimonials'
  | 'resume'
  | 'linkedin'
  | 'github'
  | 'twitter'
  | 'facebook'
  | 'website'
  | 'email'
  | 'mobile';

export interface IconProps {
  type: IconType;
  className?: string;
  size?: number;
}
