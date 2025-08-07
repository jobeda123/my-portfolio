'use client'

import { useIsLoading } from '@/stores/loadingStore'

export default function LoadingSpinner() {
  const isLoading = useIsLoading()

  if (!isLoading) return null

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground"></div>
    </div>
  )
}
