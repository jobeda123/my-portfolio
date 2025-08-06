import { BASIC_INFO } from "@/constants/user";
import React from "react";

function WelcomeHeader() {
  return (
    <div className="text-center lg:text-left space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          Hello, I&apos;m {BASIC_INFO.name.split(" ")[0]}! 👋
        </h1>
        <div className="space-y-2">
          <p className="text-xl lg:text-2xl text-gray-700 font-semibold max-w-[250px] lg:max-w-3xl mx-auto lg:mx-0">
            {BASIC_INFO.fullTitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-tight">
            Passionate about building scalable solutions and leading high-performing
            teams to deliver exceptional digital experiences.
          </p>
        </div>
      </div>   
    </div>
  );
}

export default WelcomeHeader;
