import { Link } from '../../ui/link'
import { type OutlineBlockProps } from '../types'
import { classNames } from '@/lib/utils'

export function OutlineBlock({ items }: OutlineBlockProps) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Outline">
      {items.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={classNames(
            'flex items-center gap-2 text-base text-foreground',
            'hover:text-primary transition-colors'
          )}
        >
          <span className="text-secondary" aria-hidden>
            →
          </span>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
