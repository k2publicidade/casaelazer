import { cn } from '@/lib/utils'

interface SectionTitleProps {
    children: React.ReactNode
    className?: string
    centered?: boolean
    color?: 'default' | 'white'
    as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
    children,
    className,
    centered = false,
    color = 'default',
    as: Component = 'h2',
}: SectionTitleProps) {
    return (
        <Component
            className={cn(
                'font-heading font-bold text-3xl md:text-4xl mb-4',
                centered && 'text-center',
                color === 'white' ? 'text-white' : 'text-gray-900',
                className
            )}
        >
            {children}
        </Component>
    )
}

interface SubtitleProps {
    children: React.ReactNode
    className?: string
    centered?: boolean
    color?: 'default' | 'white'
}

export function Subtitle({
    children,
    className,
    centered = false,
    color = 'default',
}: SubtitleProps) {
    return (
        <p
            className={cn(
                'text-lg mb-8 md:mb-12 max-w-2xl',
                centered && 'mx-auto text-center',
                color === 'white' ? 'text-white/90' : 'text-gray-600',
                className
            )}
        >
            {children}
        </p>
    )
}
