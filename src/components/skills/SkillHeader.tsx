import React from "react";
import GradientSectionTitle from "@/components/typography/GradientSectionTitle";
import { SKILLS_INFO } from "@/constants/user";

function SkillHeader() {
  return (
    <div className="text-center">
      <GradientSectionTitle
        blackText="My"
        coloredText="Skills"
        className="text-4xl lg:text-5xl"
      />
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {SKILLS_INFO.description}
      </p>
    </div>
  );
}

export default SkillHeader;
