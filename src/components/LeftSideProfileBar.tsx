"use client";

import React from "react";
import ProfileImage from "@/components/profile/ProfileImage";
import UserNameAndTitle from "@/components/profile/UserNameAndTitle";
import SocialLinks from "./profile/SocialLinks";
import CopyRight from "./profile/CopyRight";
import DownloadButton from "./ui/DownloadButton";
import { useCurrentSection } from "@/stores";
import { cn } from "@/lib/utils";

function LeftSideProfileBar() {
  const currentSection = useCurrentSection();

  return (
    <div
      className={cn(
        "hidden lg:flex lg:w-1/3 xl:w-1/4 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative lg:h-screen lg:overflow-hidden",
        {
          "w-full lg:w-full h-screen lg:h-full flex lg:flex pb-[72px] lg:pb-0":
            currentSection === "home",
        }
      )}
    >
      <div className="w-full flex flex-col justify-center items-center p-6 lg:p-8">
        <div className="text-center space-y-4">
          <ProfileImage />

          <UserNameAndTitle />

          <SocialLinks />

          <div className="mt-[30px] lg:mt-[60px]">
            <DownloadButton />
            <CopyRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideProfileBar;
