import React from "react";
import SquareCard from "../core/card/SquareCard";


interface ExperienceStatsProps {
  totalYears: number;
  companiesWorked: number;
  projectsCompleted: number;
  technologiesUsed: number;
}

function ExperienceStats({
  totalYears,
  companiesWorked,
  projectsCompleted,
  technologiesUsed,
}: ExperienceStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SquareCard
        label="Years Experience"
        value={`${totalYears}+`}
        color="green"
      />
      <SquareCard
        label="Companies"
        value={`${companiesWorked}`}
      />
      <SquareCard
        label="Projects"
        value={`${projectsCompleted}+`}
        color="green"
      />
      <SquareCard
        label="Technologies"
        value={`${technologiesUsed}+`}
      />
    </div>
  );
}

export default ExperienceStats;
