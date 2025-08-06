import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import ExperienceCard from "./ExperienceCard";

function ExperienceList() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
        Career Timeline
      </h3>

      <ExperienceTimeline>
        {EXPERIENCE_INFO.companies.map((company) => (
          <ExperienceCard
            key={company.id}
            title={company.title}
            company={company.company}
            period={company.period}
            technologies={company.technologies}
            responsibilities={company.responsibilities}
            isActive={company.isActive}
          />
        ))}
      </ExperienceTimeline>
    </div>
  );
}

export default ExperienceList;
