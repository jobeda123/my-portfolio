import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import { EDUCATION_INFO } from "@/constants/user/educationInfo";
import SectionHeader from "../core/typography/SectionHeader";
import EducationList from "../education/EducationList";


function EducationSection() {
  return (
    <SectionWrapper name="education">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="My"
          coloredText="Education"
          subtitle={EDUCATION_INFO.subTitle}
        />

        <EducationList />
      </div>
    </SectionWrapper>
  );
}

export default EducationSection;
