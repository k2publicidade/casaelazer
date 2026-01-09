'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

export function TimelineItem({ year, title, description, isLast = false }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-8"
    >
      {/* Year */}
      <div className="flex-shrink-0 w-24 text-right">
        <span className="text-2xl font-bold text-brand-blue-500">{year}</span>
      </div>

      {/* Timeline Line and Circle */}
      <div className="relative flex flex-col items-center">
        {/* Circle */}
        <div className="w-4 h-4 rounded-full bg-brand-blue-500 border-4 border-white shadow-md z-10" />

        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-4 w-0.5 h-full bg-brand-blue-200" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
