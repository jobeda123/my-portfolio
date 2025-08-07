import React from "react";
import { SKILLS_INFO } from "@/constants/user/skillsInfo";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import SkillCategory from "@/components/skills/SkillCategory";
import SectionHeader from "../typography/SectionHeader";

function SkillsSection() {
  return (
    <SectionWrapper name="skills">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="My"
          coloredText="Skills"
          subtitle={SKILLS_INFO.description}
        />

        <div className="space-y-6">
          {Object.entries(SKILLS_INFO.categories).map(([category, skills]) => {
            const typedCategory =
              category as keyof typeof SKILLS_INFO.chipColors;

            return (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                chipColor={SKILLS_INFO.chipColors[typedCategory]}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;
