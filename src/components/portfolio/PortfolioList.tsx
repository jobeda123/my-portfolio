import React from "react";
import { PORTFOLIO_INFO } from "@/constants/user";
import PortfolioCard from "@/components/core/card/PortfolioCard";


function PortfolioList() {
  return (
    <div className="space-y-6">
      <>
        {PORTFOLIO_INFO.projects.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            title={portfolio.title}
            description={portfolio.description}
            technologies={portfolio.technologies}
            responsibilities={portfolio.responsibilities}
          />
        ))}
      </>
    </div>
  );
}

export default PortfolioList;
