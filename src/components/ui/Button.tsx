'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false,
  className = ''
}: ButtonProps) {
  const getVariantClasses = () => {
    if (disabled) {
      return 'bg-gray-700 text-gray-400 cursor-not-allowed'
    }
    
    if (variant === 'secondary') {
      return 'bg-gray-700 hover:bg-gray-600 text-white'
    }
    
    // Primary variant with emerald theme
    return 'bg-emerald-600 hover:bg-emerald-700 text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${getVariantClasses()} ${className}`}
    >
      {children}
    </button>
  )
}
