# Centralized Section Management System

## 🎯 **Easy Section Management**

Adding a new section is now super simple! Just follow these steps:

### **Step 1: Add Icon Type (if needed)**
If you need a new icon, add it to `/src/components/icons/types.ts`:

```typescript
export type IconType = 
  | 'home'
  | 'about' 
  | 'projects'
  | 'contact'
  | 'services'    // ← Add your new icon type here
  | 'skills'
  | 'experience';
```

### **Step 2: Add Icon Component (if needed)**
Add the SVG component in `/src/components/icons/Icon.tsx`:

```typescript
const ServicesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="your-svg-path-here" />
  </svg>
);

// Add to iconMap
const iconMap = {
  // ... existing icons
  services: ServicesIcon,  // ← Add your icon here
} as const;
```

### **Step 3: Add Section to Configuration**
Add your new section to `/src/constants/sections.ts`:

```typescript
export const SECTIONS: Section[] = [
  // ... existing sections
  {
    id: 'services',
    label: 'Services',
    icon: 'services',
    component: 'ServicesSection'
  }
];
```

### **Step 4: Create Section Component**
Create your section component in `/src/components/sections/`:

```typescript
// /src/components/sections/ServicesSection.tsx
export default function ServicesSection() {
  return (
    <div className="p-6">
      <h2>Services</h2>
      {/* Your content here */}
    </div>
  );
}
```

## ✅ **That's it!**

Your new section will automatically appear in:
- Desktop sidebar navigation
- Mobile bottom navigation
- Both will use the same icon and label
- Automatic routing and state management

## 🚀 **Benefits**

- **Single Source of Truth**: All sections managed in one place
- **Automatic Integration**: Desktop and mobile automatically updated
- **Type Safety**: Full TypeScript support
- **Consistent Icons**: Centralized icon management
- **Easy Maintenance**: Add/remove sections in seconds
- **Scalable**: Easy to add unlimited sections

## 📝 **Example: Adding a Blog Section**

```typescript
// 1. Add to SECTIONS array
{
  id: 'blog',
  label: 'Blog',
  icon: 'blog',  // Already available in iconMap
  component: 'BlogSection'
}

// 2. Create BlogSection.tsx component
// 3. Done! It appears everywhere automatically
```

## 🔧 **Available Icons**

Current icons ready to use:
- `home` - Home icon
- `about` - User/person icon  
- `projects` - Briefcase/portfolio icon
- `contact` - Email/message icon
- `services` - Service/tools icon
- `skills` - Monitor/skills icon
- `experience` - Briefcase/work icon
- `blog` - Document/blog icon
- `testimonials` - Chat/feedback icon
- `resume` - Document/file icon

Need a custom icon? Just add it to the `iconMap` in `Icon.tsx`!
