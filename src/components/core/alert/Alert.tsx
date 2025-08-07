'use client'

import { useIsDarkMode } from '@/stores/themeStore'

interface AlertProps {
  type: 'success' | 'error'
  message: string
}

export default function Alert({ type, message }: AlertProps) {
  const isDarkMode = useIsDarkMode()
  
  const getAlertClasses = () => {
    if (type === 'success') {
      return isDarkMode 
        ? 'bg-green-900 text-green-100' 
        : 'bg-green-100 text-green-800'
    }
    return isDarkMode 
      ? 'bg-red-900 text-red-100' 
      : 'bg-red-100 text-red-800'
  }

  return (
    <div className={`p-4 rounded-lg ${getAlertClasses()}`}>
      {message}
    </div>
  )
}
