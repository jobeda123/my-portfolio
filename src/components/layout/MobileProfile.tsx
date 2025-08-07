"use client";

import { useCurrentSection } from "@/stores/navigationStore";
import { BASIC_INFO, PROFILE_IMAGE } from "@/constants/user";
import ProfileImage from "../profile/ProfileImage";
import ProfileImageAvatar from "../profile/ProfileImageAvatar";

export default function MobileProfile() {
  const currentSection = useCurrentSection();

  // Don't render on home page
  if (currentSection === "home") {
    return null;
  }

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white shadow-2xl p-4">
      <div className="flex items-center gap-3">
        {PROFILE_IMAGE ? (
          <ProfileImage className="w-12 h-12 mx-0 mb-0" isBadge />
        ) : (
          <ProfileImageAvatar />
        )}

        {/* Name and Title */}
        <div>
          <h1 className="text-sm font-bold text-white">{BASIC_INFO.name}</h1>
          <p className="text-xs text-gray-400">{BASIC_INFO.title}</p>
        </div>
      </div>
    </div>
  );
}
