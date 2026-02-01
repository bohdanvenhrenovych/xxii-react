export interface Reaction {
  emoji: string
  count: number
}

export interface Attachment {
  name: string
  size: string
  url?: string
}

export interface ForwardedMessage {
  from: string
  originalSender: string
  timestamp: string
  content: string
}

export interface Message {
  id: string
  sender: string
  timestamp: string
  content: string
  reactions?: Reaction[]
  replyCount?: number
  forwardedMessage?: ForwardedMessage
  attachment?: Attachment
}
