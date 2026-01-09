import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepCardProps {
    number: number
    icon: LucideIcon
    title: string
    description: string
    className?: string
}

export function StepCard({
    number,
    icon: Icon,
    title,
    description,
    className,
}: StepCardProps) {
    return (
        <div className={cn('relative group', className)}>
            {/* Connector Line (visible on desktop) */}
            <div className="hidden lg:block absolute top-10 left-[70%] right-[-30%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0 group-last:hidden"></div>

            {/* Number Badge */}
            <div className="relative z-10 w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-xl shadow-blue-200 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                {number}
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-4">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    )
}
