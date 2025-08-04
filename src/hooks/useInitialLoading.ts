import { useEffect } from 'react'
import { useSetLoading } from '@/stores/loadingStore'

export function useInitialLoading() {
  const setLoading = useSetLoading()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [setLoading])
}
