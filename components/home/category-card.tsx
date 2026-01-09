import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
    title: string
    icon: LucideIcon
    count: number
    href: string
    image?: string
    className?: string
}

export function CategoryCard({
    title,
    icon: Icon,
    count,
    href,
    image,
    className,
}: CategoryCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                'group relative h-[320px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500',
                className
            )}
        >
            {/* Background with Image or Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 group-hover:scale-110 transition-transform duration-700">
                {image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ) : (
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
                )}
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent group-hover:via-blue-800/50 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl mb-2 tracking-tight group-hover:text-blue-200 transition-colors duration-300">
                    {title}
                </h3>

                <div className="flex items-center gap-2 opacity-80">
                    <span className="text-sm font-bold bg-blue-500/30 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                        {count} itens
                    </span>
                    <div className="h-px flex-grow bg-white/20"></div>
                </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
        </Link>
    )
}
