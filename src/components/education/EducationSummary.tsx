import React from 'react';
import { EDUCATION_INFO } from '@/constants/user/educationInfo';

function EducationSummary() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-emerald-100">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
        Academic Excellence
      </h3>
      <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
        My educational journey reflects a strong foundation in computer science and continuous commitment to academic excellence. 
        With consistently high performance throughout my academic career, I&apos;ve built solid theoretical knowledge while gaining 
        practical experience through projects and internships. This combination of academic rigor and hands-on learning has 
        prepared me well for the challenges in the software development industry.
      </p>
    </div>
  );
}

export default EducationSummary;
