import React from "react";
import { EDUCATION_INFO } from "@/constants/user/educationInfo";
import EducationCard from "../core/card/EducationCard";
import TimelineWrapper from "../wrapper/TimelineWrapper";


function EducationList() {
  return (
    <div className="space-y-6">
      <TimelineWrapper>
        {EDUCATION_INFO.degrees.map((degree) => (
          <EducationCard
            key={degree.id}
            degree={degree.degree}
            institution={degree.institution}
            period={degree.period}
            location={degree.location}
            gpa={degree.gpa}
            coursework={degree.coursework}
            achievements={degree.achievements}
          />
        ))}
      </TimelineWrapper>
    </div>
  );
}

export default EducationList;
