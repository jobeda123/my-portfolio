"use client";

import {
  useCurrentSection,
  useSetCurrentSection,
} from "@/stores/navigationStore";
import { getSectionLabel, getSectionIcon } from "@/utils/section-helpers";
import Icon from "@/components/icons/Icon";
import GradientTooltip from "../core/tooltip/GradientTooltip";

interface SidebarProps {
  sections: string[];
}

export default function DesktopSidebar({ sections }: SidebarProps) {
  const currentSection = useCurrentSection();
  const setCurrentSection = useSetCurrentSection();

  return (
    <aside
      className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
      role="navigation"
      aria-label="Desktop navigation sidebar"
    >
      <nav className="relative flex flex-col items-center py-4 px-2 rounded-3xl shadow-2xl backdrop-blur-xl border bg-white/10 border-teal-500/50 shadow-black/40 transition-all duration-700">
        <ul className="flex flex-col items-center space-y-2" role="list">
          {sections.map((section) => {
            const isActive = currentSection === section;
            const sectionLabel = getSectionLabel(section);
            const iconType = getSectionIcon(section);

            return (
              <li key={section} role="none">
                <button
                  onClick={() => setCurrentSection(section)}
                  className={`group relative p-2 rounded-2xl transition-all duration-200 transform hover:scale-105 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-2xl shadow-emerald-500/40 scale-105 ring-2 ring-emerald-400/30"
                      : "text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-emerald-400/80 hover:via-teal-400/80 hover:to-cyan-500/80 hover:shadow-xl hover:shadow-emerald-400/30 hover:ring-1 hover:ring-emerald-300/50"
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${section}-content`}
                  aria-label={`Navigate to ${sectionLabel} section`}
                >
                  <div
                    className={`transition-all duration-200 ${
                      isActive
                        ? "scale-110 drop-shadow-sm text-white"
                        : "group-hover:scale-105 group-hover:text-white text-gray-400"
                    }`}
                  >
                    <Icon
                      type={iconType}
                      className={`w-6 h-6 transition-all duration-200 ${
                        isActive
                          ? "text-white drop-shadow-lg"
                          : "text-gray-400 group-hover:text-white group-hover:drop-shadow-md"
                      }`}
                    />
                  </div>

                  {/* Enhanced glowing effect for active item */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-600/20 animate-pulse" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-teal-600/10 blur-sm" />
                    </>
                  )}

                  <GradientTooltip label={sectionLabel} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
