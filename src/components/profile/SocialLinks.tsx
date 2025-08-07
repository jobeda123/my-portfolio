import React from "react";
import Icon, { IconType } from "../icons";
import { USER_SOCIAL_PLATFORMS } from "@/constants/user";


function SocialLinks() {
  return (
    <div className="flex justify-center space-x-3 py-3">
      {USER_SOCIAL_PLATFORMS.map((platform) => {
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
            <Icon className="w-4 h-4" type={platform.icon as IconType} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
