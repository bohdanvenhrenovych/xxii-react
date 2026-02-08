import { Typography } from '@/components/Typography'
import { Link } from '@/components/ui/link'
import { Separator } from '@/components/ui/separator'
import { usePageTitle } from '@/stores/page-title'

const HEADER_LINKS = [
  { label: 'Search', to: '#' },
  { label: 'Pin list', to: '#' },
  { label: 'Members', to: '#' },
  { label: 'Files', to: '#' },
] as const

export default function Header() {
  const { label, topic } = usePageTitle()

  return (
    <header className="flex shrink-0 items-center justify-between border-b border-border  px-4 py-2">
      <div className="flex items-center gap-2">
        <Typography variant="itemName" color="primary" size="sm">
          {label}
        </Typography>
        {topic ? (
          <>
            <Separator orientation="vertical" className="h-4" />
            <Typography variant="timestamp" color="secondary" size="sm">
              {topic}
            </Typography>
          </>
        ) : null}
      </div>
      <nav className="flex items-center gap-4" aria-label="Channel actions">
        {HEADER_LINKS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="text-secondary  no-underline hover:opacity-80"
          >
            [{label}]
          </Link>
        ))}
      </nav>
    </header>
  )
}
