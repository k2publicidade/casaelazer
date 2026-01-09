import { cn } from '@/lib/utils'

interface GridProps {
    children: React.ReactNode
    className?: string
    cols?: 1 | 2 | 3 | 4 | 5 | 6
    gap?: 4 | 6 | 8
    responsive?: boolean
}

const colsStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6',
}

const gapStyles = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
}

export function Grid({
    children,
    className,
    cols = 1,
    gap = 6,
    responsive = true,
}: GridProps) {
    return (
        <div
            className={cn(
                'grid',
                responsive ? colsStyles[cols] : `grid-cols-${cols}`,
                gapStyles[gap],
                className
            )}
        >
            {children}
        </div>
    )
}
