'use client'

import { useNavigation } from '@/stores/navigationStore'
import { useTheme } from '@/stores/themeStore'

interface NavigationProps {
  sections: string[]
}

export default function Navigation({ sections }: NavigationProps) {
  const { currentSection, setCurrentSection, canGoBack, goBack } = useNavigation()
  const { isDarkMode } = useTheme()

  return (
    <nav className="p-4">
      <div className="flex gap-4 justify-center items-center flex-wrap">
        {/* Back button */}
        {canGoBack && (
          <button
            onClick={goBack}
            className={`px-3 py-2 rounded-lg transition-colors text-sm ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            title="Go back"
          >
            ← Back
          </button>
        )}

        {/* Section buttons */}
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={`px-4 py-2 rounded-lg transition-colors capitalize ${
              currentSection === section
                ? isDarkMode 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-500 text-white'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}
