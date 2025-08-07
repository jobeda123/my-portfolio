import React from "react";

function Responsibilities({
  responsibilities = [],
  title= "Responsibilities",
}: {
  title?: string;
  responsibilities?: readonly string[] | [];
}) {
  return (
    <>
      {responsibilities?.length > 0 ? (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            {title}
          </h4>
          
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 leading-relaxed">
                  {responsibility}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Responsibilities;
