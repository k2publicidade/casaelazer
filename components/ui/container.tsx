import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn(
      'container mx-auto px-4 max-w-7xl',
      className
    )}>
      {children}
    </Component>
  )
}
