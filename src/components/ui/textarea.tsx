import { TextareaHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          'w-full resize-y p-1 text-13 max-h-[240px]',
          'bg-secondary text-foreground placeholder:text-secondary',
          'outline-none transition-colors border border-secondary',
          'focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-inset',
          'disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
