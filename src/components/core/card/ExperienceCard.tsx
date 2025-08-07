import React from "react";
import { cn } from "@/lib/utils";
import Technologies from "@/components/experience/Technologies";
import Responsibilities from "@/components/experience/Responsibilities";

interface ExperienceCardProps {
  title: string;
  company?: string | null;
  period?: string;
  workType?: "Remote" | "Onsite" | "Hybrid";
  technologies?: readonly string[] | [];
  responsibilities?: readonly string[] | [];
  isActive?: boolean;
}

function ExperienceCard({
  title,
  company = null,
  period = "",
  workType,
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

          <div className="flex items-center flex-wrap gap-2 mb-4">
            <p className="text-emerald-600 font-semibold">{company}</p>

            <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-full text-xs font-semibold border border-emerald-200">
              {workType}
            </span>
          </div>
        </div>
      </div>

      <Technologies technologies={technologies} />

      <Responsibilities responsibilities={responsibilities} />
    </div>
  );
}

export default ExperienceCard;
