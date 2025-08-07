import React from "react";
import Technologies from "@/components/experience/Technologies";
import Responsibilities from "@/components/experience/Responsibilities";
import GradientButton from "@/components/ui/GradientButton";

interface PortfolioCardProps {
  title: string;
  technologies?: readonly string[] | [];
  responsibilities?: readonly string[] | [];
  description?: string;
  liveUrl?: string | null;
}

function PortfolioCard({
  title,
  technologies = [],
  responsibilities = [],
  description = "",
  liveUrl = null,
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 relative hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h3>

          {description && (
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
          )}

          {liveUrl && (
            <GradientButton
              label="Live Demo"
              className="py-2 text-sm mb-4"
              onClick={() => window.open(liveUrl, "_blank")}
            />
          )}
        </div>
      </div>

      <Technologies technologies={technologies} />

      <Responsibilities responsibilities={responsibilities} />
    </div>
  );
}

export default PortfolioCard;
