import { Typography } from '../../Typography'
import { type StatItemProps } from '../types'
import { ReactionItem } from './ReactionItem'

export function StatItem({ item }: StatItemProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Typography size="sm" color="foreground">
        {item.label}
      </Typography>
      <div className="flex items-center gap-3">
        {item.value !== undefined && (
          <Typography size="sm" className="text-primary font-medium">
            {item.value}
          </Typography>
        )}
        {item.reactions?.map((reaction, index) => (
          <ReactionItem key={index} reaction={reaction} />
        ))}
      </div>
    </div>
  )
}
