import React from 'react'
import { CONTACT_INFO } from '@/constants/user/contactInfo'
import Icon from '../icons';
import type { IconType } from '../icons/types';

// Social media platform mapping
type SocialPlatform = {
  name: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'LinkedIn',
    url: CONTACT_INFO.social.linkedin,
    icon: "linkedin",
    ariaLabel: 'Visit LinkedIn profile'
  },
  {
    name: 'GitHub', 
    url: CONTACT_INFO.social.github,
    icon: "github",
    ariaLabel: 'Visit GitHub profile'
  },
  {
    name: 'Website',
    url: CONTACT_INFO.social.website,
    icon: "website",
    ariaLabel: 'Visit personal website'
  },
  {
    name: 'Email',
    url: CONTACT_INFO.social.email,
    icon: "email",
    ariaLabel: 'Send an email'
  },
  {
    name: 'Phone',
    url: CONTACT_INFO.social.mobile,
    icon: "mobile",
    ariaLabel: 'Call phone number'
  },
];

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-3 py-3">
      {socialPlatforms.map((platform) => {
        
        return (
          <a 
            key={platform.name}
            href={platform.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label={platform.ariaLabel}
            title={`Visit ${platform.name}`}
          >
            <Icon className="w-4 h-4" type={platform.icon} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks