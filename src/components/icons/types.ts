// Icon types for centralized icon management
export type IconType =
  | "home"
  | "about"
  | "portfolio"
  | "contact"
  | "skills"
  | "experience"
  | "blog"
  | "testimonials"
  | "resume"
  | "linkedin"
  | "github"
  | "twitter"
  | "facebook"
  | "website"
  | "email"
  | "mobile"
  | "education";

export interface IconProps {
  type: IconType;
  className?: string;
  size?: number;
}
