import React from "react";

function Achievements({
  achievements = [],
}: {
  achievements?: readonly string[] | [];
}) {
  if (!achievements || achievements.length === 0) return null;
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-600 leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
