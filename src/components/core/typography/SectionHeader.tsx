import React from "react";
import GradientSectionTitle from "./GradientSectionTitle";

function SectionHeader({
  blackText = '',
  coloredText = '',
  subtitle = "",
}: {
  blackText?: string;
  coloredText?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <GradientSectionTitle
        blackText={blackText}
        coloredText={coloredText}
        className={'text-3xl lg:text-4xl'}
      />
      <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeader;
