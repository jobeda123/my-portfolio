import React from "react";

function KeyMetricItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-2xl lg:text-3xl font-bold text-emerald-600">{value}</div>
      <div className="text-xs lg:text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default KeyMetricItem;
