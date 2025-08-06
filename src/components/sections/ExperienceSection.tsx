import React from "react";
import SectionWrapper from "../wrapper/SectionWrapper";
import ExperienceStats from "../experience/ExperienceStats";
import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import SectionHeader from "../core/typography/SectionHeader";
import ProfessionalSummary from "../experience/ProfessionalSummary";
import ExperienceList from "../experience/ExperienceList";
import { getTotalYears } from "@/utils/string";


function ExperienceSection() {
  return (
    <SectionWrapper name="experience">
      <div className="space-y-8 w-full mx-auto pb-0 lg:pb-8">
        <SectionHeader
          blackText="Work"
          coloredText="Experience"
          subtitle={EXPERIENCE_INFO.subTitle}
        />

        <ExperienceStats
          totalYears={getTotalYears(EXPERIENCE_INFO.stats.startDate, EXPERIENCE_INFO.stats.endDate)}
          companiesWorked={EXPERIENCE_INFO.companies.length}
          projectsCompleted={EXPERIENCE_INFO.stats.projectsCompleted}
          technologiesUsed={EXPERIENCE_INFO.stats.technologiesUsed}
        />

        <ProfessionalSummary />

        <ExperienceList />
      </div>
    </SectionWrapper>
  );
}

export default ExperienceSection;
