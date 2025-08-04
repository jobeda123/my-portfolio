'use client'

import { useCurrentSection } from '@/stores/navigationStore'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

export default function MainContent() {
  const currentSection = useCurrentSection()

  if(currentSection === 'home'){
    return null
  }

  return (
    <main className="p-8 pb-24 pt-20 lg:pt-8 lg:pb-8 lg:pr-24 min-h-screen flex items-center justify-center lg:h-full lg:overflow-y-auto">
      <div className="w-full max-w-4xl">
        {currentSection === 'about' && <AboutSection />}
        {currentSection === 'projects' && <ProjectsSection />}
        {currentSection === 'contact' && <ContactSection />}
      </div>
    </main>
  )
}
