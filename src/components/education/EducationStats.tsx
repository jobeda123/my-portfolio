import React from 'react';

interface EducationStatsProps {
  studyYears: number;
  institutionsAttended: number;
  certificationsEarned: number;
  gpaAchieved: number;
}

function EducationStats({ 
  studyYears, 
  institutionsAttended, 
  certificationsEarned, 
  gpaAchieved 
}: EducationStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
        <div className="text-2xl lg:text-3xl font-bold text-emerald-600">
          {studyYears}
        </div>
        <div className="text-sm text-gray-600">Years of Study</div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
        <div className="text-2xl lg:text-3xl font-bold text-teal-600">
          {institutionsAttended}
        </div>
        <div className="text-sm text-gray-600">Institutions</div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
        <div className="text-2xl lg:text-3xl font-bold text-cyan-600">
          {certificationsEarned}
        </div>
        <div className="text-sm text-gray-600">Certifications</div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
        <div className="text-2xl lg:text-3xl font-bold text-green-600">
          {gpaAchieved}
        </div>
        <div className="text-sm text-gray-600">Highest GPA</div>
      </div>
    </div>
  );
}

export default EducationStats;
