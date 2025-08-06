import React from "react";
import { cn } from "@/lib/utils";
import Technologies from "@/components/experience/Technologies";
import Responsibilities from "@/components/experience/Responsibilities";

interface ExperienceCardProps {
  title: string;
  company?: string | null;
  period: string;
  technologies?: readonly string[] | [];
  responsibilities?: readonly string[] | [];
  isActive?: boolean;
}

function ExperienceCard({
  title,
  company = null,
  period,
  technologies = [],
  responsibilities = [],
  isActive = false,
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 relative">
      <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white shadow-lg" />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div className="flex-1">
          <div
            className={cn(
              "inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3",
              {
                "bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800":
                  isActive,
                "bg-gray-100 text-gray-600": !isActive,
              }
            )}
          >
            {period}
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>

          {company && (
            <p className="text-emerald-600 font-semibold mb-4">{company}</p>
          )}
        </div>
      </div>

      <Technologies technologies={technologies} />

      <Responsibilities responsibilities={responsibilities} />
    </div>
  );
}

export default ExperienceCard;
