import React from "react";
import SectionWrapper from "../../wrapper/SectionWrapper";
import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import SectionHeader from "../typography/SectionHeader";
import ExperienceList from "../../experience/ExperienceList";


function ExperienceSection() {
  return (
    <SectionWrapper name="experience">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="Work"
          coloredText="Experience"
          subtitle={EXPERIENCE_INFO.subTitle}
        />

        <ExperienceList />
      </div>
    </SectionWrapper>
  );
}

export default ExperienceSection;
