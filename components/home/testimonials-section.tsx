'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { TestimonialCard } from './testimonial-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
    {
        quote:
            'A Casa e Lazer facilitou muito minha vida! Enviei a lista da escola e recebi o orçamento completo em minutos. Economizei horas de pesquisa.',
        author: 'Renata Oliveira',
        role: 'Mãe de 2 alunos',
        rating: 5,
    },
    {
        quote:
            'Sou cliente há mais de 20 anos. A tradição se mantém, mas a tecnologia que eles trouxeram para o envio de listas é impressionante. Nota 10!',
        author: 'Ricardo Mendes',
        role: 'Pai e Empresário',
        rating: 5,
    },
    {
        quote:
            'Melhor preço da região e atendimento impecável. Tudo o que meus filhos precisavam para o volta às aulas eu encontrei aqui em um só lugar.',
        author: 'Juliana Castro',
        role: 'Cliente Fidelidade',
        rating: 5,
    },
    {
        quote:
            'Como escola parceira, vemos o cuidado que a Casa e Lazer tem com cada lista escolar. É uma parceria que traz tranquilidade para os pais.',
        author: 'Prof. Cláudio Silva',
        role: 'Diretor Escolar',
        rating: 5,
    },
]

export function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    )

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <Section
            background="white"
            padding="large"
            className="bg-gradient-to-b from-white to-blue-50/50 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <SectionTitle>
                        O Que Nossos <span className="text-blue-600">Clientes Dizem</span>
                    </SectionTitle>
                    <Subtitle className="mb-0">
                        A confiança de gerações de famílias é o que nos motiva a inovar e oferecer sempre o melhor.
                    </Subtitle>
                </div>

                {/* Custom Navigation */}
                <div className="flex gap-4">
                    <button
                        onClick={scrollPrev}
                        className="w-14 h-14 rounded-2xl border-2 border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-14 h-14 rounded-2xl border-2 border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div className="overflow-visible px-4 md:px-0" ref={emblaRef}>
                    <div className="flex -ml-6 py-10">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                            >
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            </div>
        </Section>
    )
}
