import React from "react";
import { IconProps } from "./types";
import {
  AboutIcon,
  blogIcon,
  ContactIcon,
  educationIcon,
  EmailIcon,
  experienceIcon,
  FacebookIcon,
  FallBackIcon,
  GitHubIcon,
  HomeIcon,
  LinkedInIcon,
  MobileIcon,
  PortfolioIcon,
  resumeIcon,
  skillsIcon,
  testimonialsIcon,
  TwitterIcon,
  WebsiteIcon,
} from "./AllIcons";

const iconMap = {
  home: HomeIcon,
  about: AboutIcon,
  portfolio: PortfolioIcon,
  contact: ContactIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  website: WebsiteIcon,
  email: EmailIcon,
  mobile: MobileIcon,
  skills: skillsIcon,
  experience: experienceIcon,
  blog: blogIcon,
  testimonials: testimonialsIcon,
  resume: resumeIcon,
  education: educationIcon
} as const;

export const Icon: React.FC<IconProps> = ({
  type,
  className = "w-6 h-6",
  size,
}) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    // Fallback icon if type not found
    return <FallBackIcon className={className} />;
  }

  // Handle size prop by creating dynamic className
  const finalClassName = size ? `w-${size} h-${size}` : className;

  return <IconComponent className={finalClassName} />;
};

export default Icon;
