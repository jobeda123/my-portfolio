import React from "react";

function GradientSectionTitle({blackText = "About", coloredText = "Me"}: {blackText?: string, coloredText?: string}) {
  return (
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
      {blackText} <span className="text-emerald-600">{coloredText}</span>
    </h2>
  );
}

export default GradientSectionTitle;
