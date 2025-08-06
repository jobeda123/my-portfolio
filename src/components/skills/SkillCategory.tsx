import React from "react";


function SkillCategory({
  category,
  skills,
  chipColor="bg-gray-100 text-gray-800" // Default color if not provided,
}: {
  category: string;
  skills: readonly string[];
  chipColor?: string; // Optional prop for custom chip color
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          return (
            <span
              key={index}
              className={`px-3 py-2 rounded-full text-sm font-medium ${chipColor} hover:scale-105 transition-transform cursor-default`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCategory;
