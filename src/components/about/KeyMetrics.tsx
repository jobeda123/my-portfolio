import React from "react";
import KeyMetricItem from "./KeyMetricItem";
import { ABOUT_INFO } from "@/constants/user";

function KeyMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {ABOUT_INFO.keyMetrics.map((metric, index) => (
        <KeyMetricItem key={index} value={metric.value} label={metric.label} />
      ))}
    </div>
  );
}

export default KeyMetrics;
