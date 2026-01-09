import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'blue-light' | 'primary'
  padding?: 'normal' | 'large' | 'small'
  id?: string
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  'blue-light': 'bg-blue-50',
  primary: 'bg-blue-600',
}

const paddingStyles = {
  small: 'py-16 md:py-20',
  normal: 'py-20 md:py-24',
  large: 'py-24 md:py-28',
}

export function Section({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = 'normal',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
