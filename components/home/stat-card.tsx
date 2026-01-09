'use client'

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
    number: number
    label: string
    suffix?: string
    icon: LucideIcon
    className?: string
}

export function StatCard({
    number,
    label,
    suffix,
    icon: Icon,
    className,
}: StatCardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <div
            ref={ref}
            className={cn(
                'relative group bg-white border border-gray-100 rounded-3xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 overflow-hidden',
                className
            )}
        >
            {/* Decorative Background Icon */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 transition-transform group-hover:scale-150 group-hover:rotate-0 duration-700">
                <Icon className="w-40 h-40 text-blue-600" />
            </div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-blue-600 group-hover:text-white duration-300">
                    <Icon className="w-7 h-7" />
                </div>

                <div className="font-heading font-extrabold text-5xl md:text-6xl text-gray-900 mb-3 tracking-tight">
                    {isVisible ? (
                        <CountUp
                            end={number}
                            duration={2.5}
                            suffix={suffix ? suffix : ''}
                            separator="."
                        />
                    ) : (
                        '0'
                    )}
                </div>

                <div className="font-medium text-lg text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    {label}
                </div>
            </div>
        </div>
    )
}
