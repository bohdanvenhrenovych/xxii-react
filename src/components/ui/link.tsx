import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { clsx } from 'clsx'

interface LinkProps extends RouterLinkProps {
  className?: string
}

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <RouterLink className={clsx(className)} {...props}>
      {children}
    </RouterLink>
  )
}
