import React from 'react';
import Achievements from './Achievements';
import { cn } from '@/lib/utils';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  coursework: readonly string[];
  achievements: readonly string[];
  isActive?: boolean;
}

function EducationCard({ 
  degree, 
  institution, 
  period, 
  location,
  gpa,
  achievements, 
  isActive = false 
}: EducationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 relative">
      {/* Timeline dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
      
      {/* Period Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div className="flex-1">
          <div className={cn('inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3', {
            'bg-emerald-100 text-emerald-800': isActive,
            'bg-gray-100 text-gray-600': !isActive
          })}>
            {period}
          </div>
     
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            {degree}
          </h3>
          
          <p className="text-emerald-600 font-semibold mb-1">{institution}</p>
          <p className="text-gray-500 text-sm mb-2">{location}</p>
          
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg border border-emerald-200 mb-4">
            <span className="text-sm font-medium text-emerald-700">GPA: {gpa}</span>
          </div>
        </div>
      </div>

      <Achievements achievements={achievements} />
    </div>
  );
}

export default EducationCard;
