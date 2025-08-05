'use client'

import { useCurrentSection } from '@/stores/navigationStore'
import { SECTIONS } from '@/constants/sections'
import { DynamicSectionRenderer } from './sections/DynamicSectionRenderer'
import NotFoundSection from './sections/NotFoundSection'
import MainContentWrapper from './wrapper/MainContentWrapper'

export default function MainContent() {
  const currentSection = useCurrentSection()

  if(currentSection === 'home'){
    return null
  }

  // Find the current section configuration
  const currentSectionConfig = SECTIONS.find(section => section.id === currentSection)

  if (!currentSectionConfig) {
    return (
      <NotFoundSection currentSection={currentSection} />
    )
  }

  return (
    <MainContentWrapper>
      <DynamicSectionRenderer sectionConfig={currentSectionConfig} />
    </MainContentWrapper>
  )
}
