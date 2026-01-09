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

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-red-900/20 to-slate-900/50 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/30 via-transparent to-red-900/30 animate-gradient-shift-reverse" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse-slower" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px]" />
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
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent pb-2">
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

            <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-shift-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease-in-out infinite;
        }
        .animate-gradient-shift-reverse {
          background-size: 200% 200%;
          animation: gradient-shift-reverse 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>
        </div>
    )
}
