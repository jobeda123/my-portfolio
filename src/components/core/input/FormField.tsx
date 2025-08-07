'use client'

interface FormFieldProps {
  label: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  required?: boolean
  rows?: number
  placeholder?: string
}

export default function FormField({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  disabled = false, 
  required = false,
  rows = 4,
  placeholder
}: FormFieldProps) {

  const baseClasses = `w-full px-3 py-2 rounded-lg border-2 transition-all duration-300 bg-gray-50 border-gray-200 text-gray-900 disabled:bg-gray-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white placeholder:text-gray-400`

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">{label} {required && <span className="text-red-500">*</span>}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={rows}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={baseClasses}
          required={required}
        />
      )}
    </div>
  )
}
