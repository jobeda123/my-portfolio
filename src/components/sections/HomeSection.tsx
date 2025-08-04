"use client";

import ProfileImage from "../profile/ProfileImage";
import UserNameAndTitle from "../profile/UserNameAndTitle";
import SocialLinks from "../profile/SocialLinks";
import HomeContent from "../home/HomeContent";

export default function HomeSection() {
  return (
      <div className="w-full h-auto lg:h-screen relative">
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 text-center space-y-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-5 px-4 shadow-lg">
          <div className="text-center space-y-3">
            <ProfileImage />

            <UserNameAndTitle />

            <SocialLinks />
          </div>
        </div>

        <HomeContent />
      </div>
  );
}
