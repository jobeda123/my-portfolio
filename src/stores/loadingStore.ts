import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface LoadingState {
  isLoading: boolean
  loadingMessage: string
  setLoading: (loading: boolean, message?: string) => void
  clearLoading: () => void
}

export const useLoadingStore = create<LoadingState>()(
  devtools(
    (set) => ({
      isLoading: false,
      loadingMessage: '',
      setLoading: (loading: boolean, message: string = '') =>
        set({ isLoading: loading, loadingMessage: message }, false, 'setLoading'),
      clearLoading: () =>
        set({ isLoading: false, loadingMessage: '' }, false, 'clearLoading'),
    }),
    {
      name: 'loading-store',
    }
  )
)

// Selector hooks for better performance
export const useIsLoading = () => useLoadingStore((state) => state.isLoading)
export const useLoadingMessage = () => useLoadingStore((state) => state.loadingMessage)
export const useSetLoading = () => useLoadingStore((state) => state.setLoading)
export const useClearLoading = () => useLoadingStore((state) => state.clearLoading)

// Combined hook for components that need multiple loading values
export const useLoading = () => {
  const isLoading = useIsLoading()
  const loadingMessage = useLoadingMessage()
  const setLoading = useSetLoading()
  const clearLoading = useClearLoading()
  
  return {
    isLoading,
    loadingMessage,
    setLoading,
    clearLoading,
  }
}
