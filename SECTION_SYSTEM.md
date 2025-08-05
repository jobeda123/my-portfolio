# Dynamic Section System

Your portfolio now uses a completely dynamic section system! Here's how to add new sections:

## 🚀 Quick Start: Adding a New Section

### Step 1: Add Section to Constants
Edit `/src/constants/sections.ts` and add your new section:

```typescript
{
  id: 'testimonials',
  label: 'Testimonials', 
  icon: 'testimonials',
  component: 'TestimonialsSection'
}
```

### Step 2: Create Section Component
Create `/src/components/sections/TestimonialsSection.tsx`:

```typescript
import React from 'react'

function TestimonialsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Client <span className="text-purple-600">Testimonials</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          What my clients say about working with me
        </p>
      </div>
      
      {/* Your content here */}
    </div>
  )
}

export default TestimonialsSection
```

### Step 3: Add to Component Map
Edit `/src/components/sections/DynamicSectionRenderer.tsx` and add:

```typescript
const componentMap = {
  // ... existing components
  TestimonialsSection: lazy(() => import('./TestimonialsSection')),
}
```

### Step 4: Add Icon (if needed)
If you need a new icon, add it to:
- `/src/components/icons/types.ts` (add to IconType)
- `/src/components/icons/Icon.tsx` (add to iconMap)

## ✨ Features

- **Automatic Menu Items**: New sections automatically appear in navigation
- **Lazy Loading**: Components load only when needed
- **Fallback UI**: Shows helpful message for missing components
- **Type Safety**: Full TypeScript support
- **Responsive**: Works on all devices

## 📋 Current Sections

- ✅ **Home** - HomeSection
- ✅ **About** - AboutSection  
- ✅ **Projects** - ProjectsSection
- ✅ **Contact** - ContactSection
- ✅ **Services** - ServicesSection
- ✅ **Skills** - SkillsSection

## 🛠️ Section Template Generator

Use the helper in `/src/utils/section-template-generator.ts`:

```typescript
import { generateSectionConfig, generateSectionTemplate } from '@/utils/section-template-generator'

// Generate config
const config = generateSectionConfig({
  id: 'testimonials',
  label: 'Testimonials',
  icon: 'testimonials'
})

// Generate component template
const template = generateSectionTemplate(config)
```

## 🎨 Styling Guidelines

All sections should follow this structure:
- Main container: `<div className="space-y-8">`
- Header: Centered with title and description
- Content: White cards with shadows and rounded corners
- Responsive: Use grid system for multiple columns

That's it! Your new section will automatically appear in the navigation and be fully functional. 🎉
