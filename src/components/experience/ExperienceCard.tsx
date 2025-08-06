import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  technologies: readonly string[];
  responsibilities: readonly string[];
  isActive?: boolean;
}

function ExperienceCard({ 
  title, 
  company, 
  period, 
  technologies, 
  responsibilities, 
  isActive = false 
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 relative">
      {/* Timeline dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
      
      {/* Period Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div className="flex-1">
          <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3 ${
            isActive 
              ? 'bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {period}
          </div>
          
          {/* Job Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          
          {/* Company */}
          <p className="text-emerald-600 font-semibold mb-4">{company}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Used</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600 leading-relaxed">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
