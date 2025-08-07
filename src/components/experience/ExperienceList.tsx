import React from "react";
import TimelineWrapper from "@/components/wrapper/TimelineWrapper";
import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import ExperienceCard from "@/components/core/card/ExperienceCard";


function ExperienceList() {
  return (
    <div className="space-y-6">
      <TimelineWrapper>
        {EXPERIENCE_INFO.companies.map((company) => (
          <ExperienceCard
            key={company.id}
            title={company.title}
            company={company.company}
            period={company.period}
            workType={company.workType}
            technologies={company.technologies}
            responsibilities={company.responsibilities}
            isActive={company.isActive}
          />
        ))}
      </TimelineWrapper>
    </div>
  );
}

export default ExperienceList;
