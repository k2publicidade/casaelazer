import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactCardProps {
    icon: LucideIcon
    title: string
    content: string
    content2?: string
    className?: string
}

export function ContactCard({
    icon: Icon,
    title,
    content,
    content2,
    className,
}: ContactCardProps) {
    return (
        <div
            className={cn(
                'bg-white/10 border border-white/20 rounded-2xl p-6 text-white backdrop-blur-md flex items-start gap-4 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:translate-x-1',
                className
            )}
        >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10">
                <Icon className="w-6 h-6 text-white" />
            </div>

            <div className="space-y-1">
                <div className="font-heading font-extrabold text-lg tracking-tight uppercase text-blue-100">
                    {title}
                </div>
                <div className="text-base font-medium opacity-90 leading-tight">
                    {content}
                </div>
                {content2 && (
                    <div className="text-sm font-semibold opacity-70 italic">
                        {content2}
                    </div>
                )}
            </div>
        </div>
    )
}
