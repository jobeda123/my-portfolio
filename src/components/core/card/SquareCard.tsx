import { cn } from "@/lib/utils";
import React from "react";

function SquareCard({
  label,
  value,
  color = null,
}: {
  label: string;
  value: string;
  color?: string | null;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
      <div
        className={cn("text-2xl lg:text-3xl font-bold text-cyan-600", {
          "text-emerald-600": color === "green",
        })}
      >
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default SquareCard;
