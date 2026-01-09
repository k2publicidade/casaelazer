'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin, Tag } from 'lucide-react'

export function HeroSection() {
    return (
        <div className="relative min-h-[85vh] w-full overflow-hidden bg-[#0f172a] text-white">
            {/* Background Image (Store Facade) - Low Opacity */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/store-front.png"
                    alt="Fachada Casa e Lazer"
                    fill
                    className="object-cover opacity-10 saturate-0"
                    priority
                />
            </div>

            {/* Premium Animated Gradient Overlay - Intensified */}
            <div className="absolute inset-0 z-0">
                {/* Base Gradient - #0000FF Tones */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000033]/90 via-[#0000FF]/40 to-[#000066]/90 animate-gradient-slow opacity-90 mix-blend-multiply" />

                {/* Moving Light Overlay - Brighter Blue */}
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0000FF]/30 via-transparent to-transparent animate-spin-slow opacity-60 mix-blend-screen" />

                {/* Accent pulses */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0000FF]/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#000099]/30 rounded-full blur-[100px] animate-pulse-slower mix-blend-screen" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center space-y-10 py-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">
                            O Maior Varejo do Rio
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4 animate-fade-in-up delay-100">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                            Tudo para sua Casa &
                        </h1>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-red-600 to-blue-500 bg-clip-text text-transparent pb-2">
                            Momentos de Lazer
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed animate-fade-in-up delay-200">
                        A rede de lojas mais completa do Rio de Janeiro. Utilidades domésticas,
                        decoração, brinquedos, papelaria e muito mais. Qualidade e variedade que você confia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-300">
                        <Link href="/lojas">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-lg rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
                            >
                                <MapPin className="mr-2 h-5 w-5" />
                                Encontrar Loja Próxima
                            </Button>
                        </Link>

                        <Link href="/produtos">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-white hover:border-white/30 px-8 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                            >
                                <Tag className="mr-2 h-5 w-5" />
                                Ver Ofertas
                            </Button>
                        </Link>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-8 animate-fade-in-up delay-500">
                        {['Utilidades Domésticas', 'Decoração', 'Brinquedos', 'Papelaria'].map((item) => (
                            <div
                                key={item}
                                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default hover:text-blue-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-[5]" />


        </div>
    )
}
