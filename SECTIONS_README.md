# Centralized Section Management System

This project uses a centralized section management system that makes it easy to add, remove, or modify sections throughout the entire application.

## 📁 File Structure

```
src/
├── constants/
│   └── sections.ts          # Central section configuration
├── components/
│   ├── DesktopSidebar.tsx   # Auto-updated desktop navigation
│   ├── MobileNavigation.tsx # Auto-updated mobile navigation
│   └── PageLayout.tsx       # Main layout component
└── app/
    └── page.tsx             # Main page using centralized sections
```

## 🎯 How to Add a New Section

### Step 1: Add Section Configuration
Edit `src/constants/sections.ts`:

```typescript
export const SECTIONS: Section[] = [
  // ... existing sections
  {
    id: 'services',        // Unique identifier
    label: 'Services',     // Display name
    icon: '⚙️',           // Emoji icon for navigation
    component: 'ServicesSection'  // Component name (optional)
  }
]
```

### Step 2: Create Section Component (Optional)
Create `src/components/sections/ServicesSection.tsx`:

```typescript
export default function ServicesSection() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Services</h2>
      {/* Your section content */}
    </div>
  )
}
```

### Step 3: That's it! ✨

The new section will automatically appear in:
- ✅ Desktop sidebar navigation
- ✅ Mobile bottom navigation  
- ✅ All navigation tooltips and labels
- ✅ Accessibility attributes
- ✅ Routing and state management

## 🔧 Available Helper Functions

```typescript
import { getSectionIds, getSectionById, getSectionLabel, getSectionIcon } from '@/constants/sections'

// Get all section IDs as array
const sectionIds = getSectionIds()  // ['home', 'about', 'projects', 'contact']

// Get specific section data
const homeSection = getSectionById('home')  // { id: 'home', label: 'Home', icon: '🏠', ... }

// Get section display name
const label = getSectionLabel('home')  // 'Home'

// Get section icon
const icon = getSectionIcon('home')  // '🏠'
```

## 🎨 Section Interface

```typescript
interface Section {
  id: string          // Unique identifier for routing/state
  label: string       // Human-readable display name
  icon: string        // Emoji or icon for navigation
  component?: string  // Optional component name reference
}
```

## 📱 Features

- **Automatic Navigation Updates**: Both desktop and mobile navigation update automatically
- **Consistent Styling**: All sections use the same design system
- **Accessibility**: Proper ARIA labels and navigation structure
- **Type Safety**: Full TypeScript support with proper interfaces
- **Easy Maintenance**: Change section details in one place
- **Scalable**: Add unlimited sections without touching navigation code

## 🚀 Examples

### Adding a Blog Section
```typescript
{
  id: 'blog',
  label: 'Blog',
  icon: '📝',
  component: 'BlogSection'
}
```

### Adding a Resume Section
```typescript
{
  id: 'resume',
  label: 'Resume',
  icon: '📄',
  component: 'ResumeSection'
}
```

### Adding a Gallery Section
```typescript
{
  id: 'gallery',
  label: 'Gallery',
  icon: '🖼️',
  component: 'GallerySection'
}
```

The system handles all the navigation logic, styling, and state management automatically!
