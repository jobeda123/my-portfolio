# Zustand State Management Setup - Modular Architecture

This portfolio project uses Zustand with a **modular store architecture** where each feature has its own dedicated store. This approach provides better code organization, maintainability, and performance.

## 📦 What's Installed

- `zustand` - A small, fast, and scalable state management solution

## 🏗️ Modular Store Structure

Each feature has its own store located in the `src/stores/` directory:

### 🎨 Theme Store (`themeStore.ts`)
- **Theme Management**: Dark/light mode toggle with persistence
- **Features**: Toggle theme, set specific theme
- **Persistence**: Saves theme preference to localStorage

### 🧭 Navigation Store (`navigationStore.ts`) 
- **Navigation State**: Current section tracking with history
- **Features**: Navigate between sections, go back, clear history
- **Persistence**: Saves current section to localStorage

### ⏳ Loading Store (`loadingStore.ts`)
- **Loading State**: Global loading indicator with messages
- **Features**: Set loading state, loading messages, clear loading
- **No Persistence**: Loading states are session-only

### 📧 Contact Form Store (`contactFormStore.ts`)
- **Form Management**: Contact form data and submission state
- **Features**: Form validation, async submission, reset functionality
- **No Persistence**: Form data is session-only for privacy

### 📄 Index Store (`index.ts`)
- **Re-exports**: All stores and hooks for convenient importing
- **Central Import**: Import all hooks from a single location

## 🔧 Usage Examples

### Using Individual Selectors (Recommended for Performance)
```tsx
// Import specific selectors to avoid unnecessary re-renders
import { 
  useIsDarkMode, 
  useToggleTheme,
  useCurrentSection,
  useSetCurrentSection,
  useIsLoading,
  useSetLoading 
} from '@/stores'

function OptimizedComponent() {
  // Only re-renders when isDarkMode changes
  const isDarkMode = useIsDarkMode()
  const toggleTheme = useToggleTheme()
  
  // Only re-renders when currentSection changes
  const currentSection = useCurrentSection()
  const setCurrentSection = useSetCurrentSection()
  
  return (
    <div>
      <h1>Current Section: {currentSection}</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
```

### Using Combined Hooks (When You Need Multiple Values)
```tsx
// Import combined hooks when you need multiple related values
import { useTheme, useNavigation, useContactForm } from '@/stores'

function CombinedComponent() {
  // Use combined hooks when you need multiple values from the same store
  const { isDarkMode, toggleTheme } = useTheme()
  const { currentSection, setCurrentSection, canGoBack, goBack } = useNavigation()
  const { contactForm, updateContactForm } = useContactForm()
  
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {canGoBack && (
        <button onClick={goBack}>← Back</button>
      )}
    </div>
  )
}
```

## ⚡ Performance Optimizations

### Selector Caching Strategy
Each store provides both **individual selectors** and **combined hooks**:

```tsx
// ✅ GOOD: Individual selectors (cached, no object creation)
const isDarkMode = useIsDarkMode()        // Only re-renders when isDarkMode changes
const currentSection = useCurrentSection() // Only re-renders when currentSection changes

// ✅ GOOD: Combined hooks (uses individual selectors internally)
const { isDarkMode, toggleTheme } = useTheme() // Optimized with individual selectors

// ❌ AVOID: Direct object selectors (creates new object on each render)
const theme = useThemeStore(state => ({ isDarkMode: state.isDarkMode, toggleTheme: state.toggleTheme }))
```

### Performance Benefits:
- **🚀 Reduced Re-renders**: Components only update when their specific data changes
- **🧠 Memory Efficient**: No unnecessary object creation in selectors
- **⚡ Faster Updates**: Direct property access instead of object comparisons
- **🎯 Granular Control**: Choose exactly what data triggers re-renders

### Adding New Stores
To add a new feature store, create a new file in the `src/stores/` directory:

```tsx
// src/stores/userPreferencesStore.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserPreferencesState {
  language: string
  notifications: boolean
  setLanguage: (language: string) => void
  toggleNotifications: () => void
}

export const useUserPreferencesStore = create<UserPreferencesState>()(
  devtools(
    persist(
      (set) => ({
        language: 'en',
        notifications: true,
        setLanguage: (language: string) =>
          set({ language }, false, 'setLanguage'),
        toggleNotifications: () =>
          set((state) => ({ 
            notifications: !state.notifications 
          }), false, 'toggleNotifications'),
      }),
      { name: 'user-preferences-store' }
    ),
    { name: 'user-preferences-store' }
  )
)

// ✅ Individual selector hooks (recommended for performance)
export const useLanguage = () => useUserPreferencesStore((state) => state.language)
export const useNotifications = () => useUserPreferencesStore((state) => state.notifications)
export const useSetLanguage = () => useUserPreferencesStore((state) => state.setLanguage)
export const useToggleNotifications = () => useUserPreferencesStore((state) => state.toggleNotifications)

// ✅ Combined hook for components that need multiple values
export const useUserPreferences = () => {
  const language = useLanguage()
  const notifications = useNotifications()
  const setLanguage = useSetLanguage()
  const toggleNotifications = useToggleNotifications()
  
  return {
    language,
    notifications,
    setLanguage,
    toggleNotifications,
  }
}
```

Then add the exports to `src/stores/index.ts`:
```tsx
export { 
  useUserPreferencesStore, 
  useUserPreferences,
  useLanguage,
  useNotifications,
  useSetLanguage,
  useToggleNotifications
} from './userPreferencesStore'
```

## 🎯 Components Created

### `ThemeToggle.tsx`
A reusable theme toggle button that demonstrates:
- Using dedicated theme store
- Conditional styling based on theme state
- Smooth transitions

### `Navigation.tsx`
A navigation component with history that shows:
- Navigation state management
- Back button functionality
- Section-based routing

### Updated `page.tsx`
The main page now showcases:
- Multi-section navigation with history
- Theme-aware styling
- Loading states with messages
- Enhanced contact form with submission states
- Persistent preferences across stores

## 🚀 Best Practices Implemented

1. **Modular Architecture**: Each feature has its own dedicated store
2. **Single Responsibility**: Each store handles only its specific domain
3. **Optimized Selectors**: Custom hooks for specific store slices prevent re-renders
4. **Strategic Persistence**: Only UI preferences persist (theme, navigation)
5. **DevTools Integration**: Each store has its own DevTools namespace
6. **TypeScript Safety**: Full type safety throughout all stores
7. **Clear Action Naming**: Descriptive action names for better debugging
8. **Performance First**: Separate stores reduce unnecessary component updates

## 📱 Features Demonstrated

- ✅ **Theme Store**: Dark/light mode with persistence
- ✅ **Navigation Store**: Section navigation with history and back functionality  
- ✅ **Loading Store**: Global loading states with custom messages
- ✅ **Contact Form Store**: Form management with async submission and validation
- ✅ **Modular Imports**: Centralized exports for convenient importing
- ✅ **DevTools Support**: Individual store debugging
- ✅ **TypeScript Support**: Full type safety across all stores
- ✅ **Performance Optimization**: Prevents unnecessary re-renders

## 🛠️ Development Tips

1. **DevTools**: Each store appears separately in Redux DevTools for easier debugging
2. **Persistence Strategy**: Only theme and navigation states are persisted
3. **Performance**: Use dedicated selector hooks instead of accessing stores directly
4. **Testing**: Each store can be tested independently
5. **Modularity**: Add new features by creating new stores without affecting existing ones

## 🔄 Store Communication

While stores are separate, they can communicate through:

```tsx
// Example: Clear form when navigation changes
import { useNavigationStore } from '@/stores/navigationStore'
import { useContactFormStore } from '@/stores/contactFormStore'

useEffect(() => {
  const unsubscribe = useNavigationStore.subscribe((state) => {
    if (state.currentSection !== 'contact') {
      useContactFormStore.getState().resetContactForm()
    }
  })
  return unsubscribe
}, [])
```

## 🎨 Architecture Benefits

### 🔹 **Separation of Concerns**
Each store handles one specific domain, making code easier to understand and maintain.

### 🔹 **Independent Updates** 
Changes to one store don't affect others, reducing bugs and improving stability.

### 🔹 **Better Performance**
Components only re-render when their specific store data changes.

### 🔹 **Easier Testing**
Each store can be tested in isolation with focused test cases.

### 🔹 **Team Collaboration**
Different developers can work on different stores without conflicts.

### 🔹 **Scalability**
Easy to add new features by creating new stores without modifying existing ones.

## 🎨 Styling Integration

The theme state integrates seamlessly with Tailwind CSS classes, allowing for dynamic theming throughout your portfolio.

## 🚀 Quick Start

1. **Development**: Run `bun dev` to start the development server
2. **Explore Stores**: Check individual store files in `src/stores/`
3. **Add Features**: Create new stores following the existing patterns
4. **Debug**: Use Redux DevTools to inspect each store separately
5. **Extend**: Use the store communication patterns in `storeSync.ts` when needed

Your modular Zustand setup is ready! Each store is independent, performant, and easy to maintain. 🎉

## 📂 File Structure

```
src/stores/
├── index.ts                  # Central exports
├── themeStore.ts            # Theme management
├── navigationStore.ts       # Navigation with history
├── loadingStore.ts          # Loading states
├── contactFormStore.ts      # Form management
└── storeSync.ts            # Store communication examples
```
