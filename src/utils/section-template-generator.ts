// Section Template Generator
// This file helps you quickly add new sections to your portfolio

export interface NewSectionConfig {
  id: string
  label: string
  icon: string
  title?: string
  description?: string
}

/**
 * Helper function to generate the section configuration
 * Add this to your SECTIONS array in /constants/sections.ts
 */
export function generateSectionConfig(config: NewSectionConfig) {
  return {
    id: config.id,
    label: config.label,
    icon: config.icon,
    component: `${config.id.charAt(0).toUpperCase() + config.id.slice(1)}Section`
  }
}

/**
 * Template for creating a new section component
 * Create a new file: /components/sections/{SectionName}Section.tsx
 */
export function generateSectionTemplate(config: NewSectionConfig): string {
  const componentName = `${config.id.charAt(0).toUpperCase() + config.id.slice(1)}Section`
  const title = config.title || config.label
  const description = config.description || `Information about ${config.label.toLowerCase()}`

  return `import React from 'react'

function ${componentName}() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          ${title.includes(' ') ? 
            title.split(' ').map((word, i) => 
              i === title.split(' ').length - 1 
                ? `<span className="text-purple-600">${word}</span>`
                : word
            ).join(' ')
            : `<span className="text-purple-600">${title}</span>`
          }
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ${description}
        </p>
      </div>

      {/* Add your content here */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Section</h2>
        <p className="text-gray-600">
          This is a template for your ${config.label} section. Replace this content with your actual section content.
        </p>
      </div>

      {/* Example content grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 1</h3>
          <p className="text-gray-600">Description of feature 1</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 2</h3>
          <p className="text-gray-600">Description of feature 2</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 3</h3>
          <p className="text-gray-600">Description of feature 3</p>
        </div>
      </div>
    </div>
  )
}

export default ${componentName}`
}

// Example usage:
/*
// 1. Generate section config
const newSection = generateSectionConfig({
  id: 'testimonials',
  label: 'Testimonials',
  icon: 'testimonials',
  title: 'Client Testimonials',
  description: 'What my clients say about working with me'
})

// 2. Add to SECTIONS array in /constants/sections.ts
// SECTIONS.push(newSection)

// 3. Create component file with template
// Copy the output of generateSectionTemplate() to create the component

// 4. Add to componentMap in DynamicSectionRenderer.tsx
// TestimonialsSection: lazy(() => import('./TestimonialsSection')),
*/
