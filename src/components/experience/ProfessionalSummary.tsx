import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import React from "react";

function ProfessionalSummary() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-emerald-100">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
        Professional Journey
      </h3>
      <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
        {EXPERIENCE_INFO.summary}
      </p>
    </div>
  );
}

export default ProfessionalSummary;
