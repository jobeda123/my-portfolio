import React from 'react';

function ExperienceTimeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 ml-3"></div>
      
      {/* Experience cards */}
      <div className="space-y-8 ml-6">
        {children}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
