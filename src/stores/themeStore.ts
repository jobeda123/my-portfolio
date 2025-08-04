import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ThemeState {
  isDarkMode: boolean
  toggleTheme: () => void
  setTheme: (isDark: boolean) => void
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDarkMode: false,
        toggleTheme: () =>
          set((state) => ({ isDarkMode: !state.isDarkMode }), false, 'toggleTheme'),
        setTheme: (isDark: boolean) =>
          set({ isDarkMode: isDark }, false, 'setTheme'),
      }),
      {
        name: 'theme-store',
      }
    ),
    {
      name: 'theme-store',
    }
  )
)

// Selector hooks for better performance
export const useIsDarkMode = () => useThemeStore((state) => state.isDarkMode)
export const useToggleTheme = () => useThemeStore((state) => state.toggleTheme)
export const useSetTheme = () => useThemeStore((state) => state.setTheme)

// Combined hook for components that need multiple theme values
export const useTheme = () => {
  const isDarkMode = useIsDarkMode()
  const toggleTheme = useToggleTheme()
  const setTheme = useSetTheme()
  
  return {
    isDarkMode,
    toggleTheme,
    setTheme,
  }
}
