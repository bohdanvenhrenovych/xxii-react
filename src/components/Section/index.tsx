import { type ReactNode } from 'react'
import { Typography } from '../Typography'
import { classNames } from '@/lib/utils'

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <div className={classNames('flex flex-col px-2', className)}>
      <Typography variant="heading3" size="md" className="">
        {title}
      </Typography>
      {children}
    </div>
  )
}
