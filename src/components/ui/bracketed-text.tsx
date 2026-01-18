import { Typography } from '../Typography'
import type { ComponentProps } from 'react'
import { clsx } from 'clsx'

type TypographyProps = ComponentProps<typeof Typography>

interface BracketedTextProps extends Omit<TypographyProps, 'children'> {
  children: React.ReactNode
}

export function BracketedText({
  children,
  className,
  ...props
}: BracketedTextProps) {
  return (
    <Typography
      variant="itemName"
      wrap={false}
      className={clsx('flex-1', className)}
      {...props}
    >
      [{children}]
    </Typography>
  )
}
