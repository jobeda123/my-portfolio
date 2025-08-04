import { BASIC_INFO } from "@/constants/user/basicInfo";
import React from "react";

function ProfileImageAvatar() {
  return (
    <div className="relative w-12 h-12">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-0.5">
        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-lg font-bold text-emerald-400">
          {BASIC_INFO.avatarName}
        </div>
      </div>
    </div>
  );
}

export default ProfileImageAvatar;
