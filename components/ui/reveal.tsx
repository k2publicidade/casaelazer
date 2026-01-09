'use client'

import { motion, useInView, useAnimation, Variant } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    width?: 'fit-content' | '100%'
    variant?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'blur'
}

export const Reveal = ({
    children,
    className = '',
    delay = 0.5,
    duration = 0.8,
    width = '100%',
    variant = 'slide-up'
}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    const variantsMap = {
        'fade': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
        'slide-up': { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } },
        'slide-down': { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } },
        'slide-left': { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } },
        'slide-right': { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } },
        'scale': { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
        'blur': { hidden: { opacity: 0, filter: 'blur(20px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
    }

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
            <motion.div
                variants={variantsMap[variant]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    )
}
