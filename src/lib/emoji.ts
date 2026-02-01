import { emojify as nodeEmojify } from 'node-emoji'

export function emojify(input: string): string {
  return nodeEmojify(input)
}
