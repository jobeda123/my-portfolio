import { cn } from "@/lib/utils";
import React from "react";

function GradientSectionTitle({blackText = "About", coloredText = "Me", className=""}: {blackText?: string, coloredText?: string, className?: string}) {
  return (
    <h2 className={cn("text-2xl lg:text-3xl font-bold text-gray-900 mb-4", className)}>
      {blackText} <span className="text-emerald-600">{coloredText}</span>
    </h2>
  );
}

export default GradientSectionTitle;
