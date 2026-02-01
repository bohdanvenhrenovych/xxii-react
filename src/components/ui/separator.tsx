import * as React from 'react'
import { classNames } from '@/lib/utils'

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: SeparatorProps) {
  return (
    <hr
      data-slot="separator"
      className={classNames(
        'shrink-0 border border-border',
        orientation === 'horizontal'
          ? 'h-px w-full border-t'
          : 'h-full w-px border-l',
        className
      )}
      {...props}
    />
  )
}

export { Separator }
