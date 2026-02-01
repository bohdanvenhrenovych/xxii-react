import { classNames } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  emoji: string
  count: number
  variant?: 'default' | 'ghost'
  isActive?: boolean
}

export const ReactionButton = forwardRef<
  HTMLButtonElement,
  ReactionButtonProps
>(
  (
    {
      emoji,
      count,
      variant = 'default',
      isActive = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'cursor-pointer text-secondary border inline-flex items-center gap-2 px-1 py-0.5 rounded-lg text-sm font-medium transition-colors'

    const variantStyles = {
      default: 'bg-card',
      ghost: 'bg-transparent border-transparent',
    }

    return (
      <button
        ref={ref}
        className={classNames(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        <span className="text-base leading-none">{emoji}</span>
        <span className={isActive ? 'text-primary' : 'text-foreground'}>
          {count}
        </span>
      </button>
    )
  }
)

ReactionButton.displayName = 'ReactionButton'
