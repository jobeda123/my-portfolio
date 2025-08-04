'use client'

import { useIsDarkMode } from '@/stores/themeStore'

interface FormFieldProps {
  label: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  required?: boolean
  rows?: number
}

export default function FormField({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  disabled = false, 
  required = false,
  rows = 4 
}: FormFieldProps) {
  const isDarkMode = useIsDarkMode()

  const baseClasses = `w-full p-3 rounded-lg border transition-colors ${
    isDarkMode 
      ? 'bg-gray-800 border-gray-600 text-white disabled:bg-gray-700' 
      : 'bg-white border-gray-300 text-gray-900 disabled:bg-gray-100'
  }`

  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={rows}
          className={baseClasses}
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={baseClasses}
          required={required}
        />
      )}
    </div>
  )
}
