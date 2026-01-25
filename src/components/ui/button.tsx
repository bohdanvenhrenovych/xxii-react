import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { BracketedText } from './bracketed-text'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles = {
  primary: 'bg-status-online text-foreground',
  secondary: 'bg-card text-secondary',
  outline: 'border border-border bg-transparent text-secondary',
  danger: 'bg-status-dnd text-foreground',
  ghost: 'bg-transparent text-foreground hover:bg-white/5',
  success: 'bg-success text-success-foreground rounded-md hover:opacity-90',
} as const

const sizeStyles = {
  sm: 'px-0.5 py-0.5 text-13',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
} as const

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'sm', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <BracketedText>{children}</BracketedText>
      </button>
    )
  }
)

Button.displayName = 'Button'
