export const textStyles = {
  heading2: {
    className: 'text-primary font-medium',
    size: 'md',
    defaultColor: 'primary',
  },
  heading3: {
    className: 'font-bold uppercase tracking-wide',
    size: 'sm',
    defaultColor: 'secondary',
  },
  itemName: {
    className: '',
    size: 'base',
    defaultColor: 'primary',
  },
  timestamp: {
    className: '',
    size: 'xs',
    defaultColor: 'secondary',
  },
  badge: {
    className: 'bg-primary/20 px-1.5 py-0.5 rounded font-medium',
    size: 'xs',
    defaultColor: 'primary-foreground',
  },
} as const

export const fontSizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
} as const

export type FontSize = keyof typeof fontSizeMap

export const statusColors = {
  online: '#10B981',
  away: '#D7D132',
  dnd: '#FF6100',
  offline: '#808080',
} as const

export type TextStyleVariant = keyof typeof textStyles
export type StatusColor = keyof typeof statusColors

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'white'
  | 'foreground'
