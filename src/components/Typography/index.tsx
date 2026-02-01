import { type ReactNode, type ElementType } from 'react'
import { classNames } from '../../lib/utils'
import {
  textStyles,
  fontSizeMap,
  type TextStyleVariant,
  type FontSize,
  type TextColor,
} from './text-styles'

interface TypographyProps {
  as?: ElementType
  variant?: TextStyleVariant
  size?: FontSize
  color?: TextColor
  wrap?: boolean
  className?: string
  children: ReactNode
}

export function Typography({
  as: Component = 'p',
  variant,
  size,
  color,
  wrap = true,
  className,
  children,
}: TypographyProps) {
  const variantStyle = variant ? textStyles[variant] : undefined
  const variantClass = variantStyle?.className
  const resolvedSize = size ?? variantStyle?.size
  const sizeClass = resolvedSize ? fontSizeMap[resolvedSize] : undefined

  const resolvedColor = color || variantStyle?.defaultColor
  const colorClass = resolvedColor ? `text-${resolvedColor}` : undefined
  const truncateClass = !wrap ? 'truncate' : undefined

  return (
    <Component
      className={classNames(
        variantClass,
        sizeClass,
        colorClass,
        truncateClass,
        className
      )}
    >
      {children}
    </Component>
  )
}
