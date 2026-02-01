export interface InfoBlockItem {
  title: string
  author: string
  dateTime: string
  textPost: string
}

export interface InfoBlockProps {
  item: InfoBlockItem
}

export interface StatReaction {
  emoji: string
  count: number
}

export interface StatItem {
  label: string
  value?: number
  reactions?: StatReaction[]
}

export interface StatItemProps {
  item: StatItem
}

export interface StatsBlockProps {
  items: StatItem[]
}
