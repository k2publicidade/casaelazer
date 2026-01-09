import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
    quote: string
    author: string
    role: string
    rating?: number
    avatar?: string
    className?: string
}

export function TestimonialCard({
    quote,
    author,
    role,
    rating = 5,
    avatar,
    className,
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100',
                className
            )}
        >
            {/* Decorative Icon */}
            <div className="absolute top-10 right-10 opacity-[0.05] group-hover:scale-150 transition-transform duration-700">
                <Quote className="w-16 h-16 text-blue-600" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            'w-5 h-5 transition-all duration-300',
                            i < rating
                                ? 'text-yellow-400 fill-yellow-400 group-hover:scale-110'
                                : 'text-gray-200'
                        )}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8 flex-grow relative z-10">
                "{quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="flex-shrink-0">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={author}
                            className="w-14 h-14 rounded-full border-2 border-blue-600 p-0.5 object-cover"
                        />
                    ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                            {author.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
                <div>
                    <div className="font-heading font-extrabold text-gray-900 text-lg tracking-tight">
                        {author}
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    )
}
