'use client'

import { useCurrentSection, useSetCurrentSection } from '@/stores/navigationStore'
import { getSectionLabel, getSectionIcon } from '@/utils/section-helpers'
import Icon from '@/components/icons/Icon'

interface MobileNavigationProps {
  sections: string[]
}

export default function MobileNavigation({ sections }: MobileNavigationProps) {
  const currentSection = useCurrentSection()
  const setCurrentSection = useSetCurrentSection()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50" role="navigation" aria-label="Mobile navigation">
      <div className="backdrop-blur-xl border-t shadow-2xl transition-all duration-700 bg-white/10 border-teal-500/50 shadow-black/40">
        {/* Navigation container */}
        <div className="overflow-x-auto scrollbar-hide" role="tablist">
          <ul className="flex items-center justify-center min-w-max px-3 py-2 list-none">
            {sections.map((section) => {
              const isActive = currentSection === section
              const sectionLabel = getSectionLabel(section)
              const iconType = getSectionIcon(section)
              
              return (
                <li key={section} role="none">
                  <button
                    onClick={() => setCurrentSection(section)}
                    className={`group relative flex flex-col items-center justify-center px-3 py-2 mx-1 rounded-2xl transition-all duration-150 touch-manipulation min-w-[64px] cursor-pointer ring-2 ${
                      isActive
                        ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-2xl shadow-emerald-500/40 ring-emerald-400/30'
                        : 'text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-emerald-400/80 hover:via-teal-400/80 hover:to-cyan-500/80 hover:shadow-xl hover:shadow-emerald-400/30 ring-transparent hover:ring-emerald-300/50'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${section}-content`}
                    aria-label={`Navigate to ${section} section`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <div className={`transition-all duration-150 mb-1 ${isActive ? 'drop-shadow-sm text-white' : 'group-hover:text-white text-gray-400'}`} aria-hidden="true">
                      <Icon 
                        type={iconType} 
                        className={`w-5 h-5 transition-all duration-150 ${
                          isActive 
                            ? 'text-white drop-shadow-lg' 
                            : 'text-gray-400 group-hover:text-white group-hover:drop-shadow-md'
                        }`}
                      />
                    </div>
                    <span className={`text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isActive ? 'text-white drop-shadow-sm' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {sectionLabel}
                    </span>
                    
                    {/* Enhanced glowing effect for active item */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-600/20" aria-hidden="true" />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-teal-600/10 blur-sm" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
