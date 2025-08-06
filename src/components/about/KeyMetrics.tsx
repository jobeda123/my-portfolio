import React from "react";
import { ABOUT_INFO } from "@/constants/user";
import SquareCard from "../core/card/SquareCard";

function KeyMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {ABOUT_INFO.keyMetrics.map((metric, index) => (
        <SquareCard key={index} value={metric.value} label={metric.label} color={index % 2 === 0 ? "green" : null} />
      ))}
    </div>
  );
}

export default KeyMetrics;
