import { type StatsBlockProps } from '../types'
import { StatItem } from './StatItem'

export function StatsBlock({ items }: StatsBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, index) => (
        <StatItem key={index} item={item} />
      ))}
    </div>
  )
}
