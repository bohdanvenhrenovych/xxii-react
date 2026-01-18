import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
  orientation?: 'horizontal'
}

export function Divider({
  className,
  variant = 'default',
  orientation = 'horizontal',
  ...props
}: DividerProps) {
  return (
    <hr
      className={clsx(
        'h-px border-0',
        {
          'bg-secondary': variant === 'default',
        },
        className
      )}
      {...props}
    />
  )
}
