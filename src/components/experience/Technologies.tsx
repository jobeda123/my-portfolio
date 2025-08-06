import React from "react";

function Technologies({ technologies = [] }: { technologies?: readonly string[] | [] }) {
  return (
    <>
      {technologies?.length > 0 ? (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Technology Used
          </h4>
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
      ) : null}
    </>
  );
}

export default Technologies;
