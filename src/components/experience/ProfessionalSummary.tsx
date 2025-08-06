import { EXPERIENCE_INFO } from "@/constants/user/experienceInfo";
import { getTotalYears } from "@/utils/string";
import React from "react";

function ProfessionalSummary() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-emerald-100">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
        Professional Journey
      </h3>
      <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
        Over the past {getTotalYears(EXPERIENCE_INFO.stats.startDate, EXPERIENCE_INFO.stats.endDate)} years, I&apos;ve
        evolved from a frontend developer into a senior full-stack engineer and
        team lead. My journey has been marked by continuous learning, taking on
        challenging projects, and mentoring fellow developers. I&apos;ve worked
        across various industries, building scalable applications and leading
        technical initiatives.
      </p>
    </div>
  );
}

export default ProfessionalSummary;
