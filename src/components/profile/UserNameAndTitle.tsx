import { BASIC_INFO } from "@/constants/user";
import React from "react";

function UserNameAndTitle() {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold text-white mb-2">
        {BASIC_INFO.name}
      </h1>
      <p className="text-gray-400 text-base">{BASIC_INFO.title}</p>
    </div>
  );
}

export default UserNameAndTitle;
