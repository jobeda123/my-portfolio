import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface NavigationState {
  currentSection: string
  setCurrentSection: (section: string) => void
  navigationHistory: string[]
  goBack: () => void
  clearHistory: () => void
}

export const useNavigationStore = create<NavigationState>()(
  devtools(
    persist(
      (set, get) => ({
        currentSection: 'home',
        navigationHistory: ['home'],
        setCurrentSection: (section: string) =>
          set((state) => ({
            currentSection: section,
            navigationHistory: [...state.navigationHistory, section],
          }), false, 'setCurrentSection'),
        goBack: () => {
          const { navigationHistory } = get()
          if (navigationHistory.length > 1) {
            const newHistory = navigationHistory.slice(0, -1)
            const previousSection = newHistory[newHistory.length - 1]
            set({
              currentSection: previousSection,
              navigationHistory: newHistory,
            }, false, 'goBack')
          }
        },
        clearHistory: () =>
          set({
            navigationHistory: ['home'],
            currentSection: 'home',
          }, false, 'clearHistory'),
      }),
      {
        name: 'navigation-store',
        partialize: (state) => ({
          currentSection: state.currentSection,
        }),
      }
    ),
    {
      name: 'navigation-store',
    }
  )
)

// Selector hooks for better performance
export const useCurrentSection = () => useNavigationStore((state) => state.currentSection)
export const useSetCurrentSection = () => useNavigationStore((state) => state.setCurrentSection)
export const useNavigationHistory = () => useNavigationStore((state) => state.navigationHistory)
export const useGoBack = () => useNavigationStore((state) => state.goBack)
export const useClearHistory = () => useNavigationStore((state) => state.clearHistory)
export const useCanGoBack = () => useNavigationStore((state) => state.navigationHistory.length > 1)

// Combined hook for components that need multiple navigation values
export const useNavigation = () => {
  const currentSection = useCurrentSection()
  const setCurrentSection = useSetCurrentSection()
  const navigationHistory = useNavigationHistory()
  const goBack = useGoBack()
  const clearHistory = useClearHistory()
  const canGoBack = useCanGoBack()
  
  return {
    currentSection,
    setCurrentSection,
    navigationHistory,
    goBack,
    clearHistory,
    canGoBack,
  }
}
