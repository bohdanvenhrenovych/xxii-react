import { Typography } from '../../Typography'

import { type InfoBlockProps } from '../types'

export function InfoBlock({ item }: InfoBlockProps) {
  return (
    <div className="flex flex-col gap-1 p-2">
      <Typography
        variant="heading3"
        color="primary"
        className="font-semibold normal-case text-[16px]"
      >
        {item.title}
      </Typography>
      <Typography size="xs">
        <span className="text-primary">{item.author}</span>
        <span className="text-secondary"> • {item.dateTime}</span>
      </Typography>
      <Typography size="sm" color="primary" className="leading-normal">
        {item.textPost}
      </Typography>
    </div>
  )
}
