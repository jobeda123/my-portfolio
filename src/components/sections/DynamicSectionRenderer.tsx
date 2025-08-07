'use client'

import { lazy, Suspense } from 'react'
import { Section } from '@/constants/sections'
import DefaultSection from './DefaultSection'
import SectionLoader from '../loader/SectionLoader'

// Dynamic component imports
const componentMap = {
  AboutSection: lazy(() => import('./AboutSection')),
  SkillsSection: lazy(() => import('./SkillsSection')),
  ExperienceSection: lazy(() => import('./ExperienceSection')),
  EducationSection: lazy(() => import('./EducationSection')),
  PortfolioSection: lazy(() => import('./PortfolioSection')),
//   ContactSection: lazy(() => import('./ContactSection')),
  // ServicesSection: lazy(() => import('./ServicesSection')),
}


interface DynamicSectionRendererProps {
  sectionConfig: Section
}

export function DynamicSectionRenderer({ sectionConfig }: DynamicSectionRendererProps) {
  const { id, component } = sectionConfig
  
  // Get the component from the map
  const Component = component && componentMap[component as keyof typeof componentMap]
  
  if (!Component) {
    return <DefaultSection sectionId={id} />
  }

  return (
    <Suspense fallback={<SectionLoader />}>
      <Component />
    </Suspense>
  )
}

export default DynamicSectionRenderer
