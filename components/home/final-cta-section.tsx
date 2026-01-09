import Link from 'next/link'
import { Upload, ArrowRight, MapPin, Phone, Mail, Clock, Store } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { ContactCard } from './contact-card'

export function FinalCTASection() {
    return (
        <Section
            background="primary"
            padding="large"
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8 backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-tight uppercase">Estamos prontos para te atender</span>
                </div>

                <SectionTitle color="white" className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                    Pronto para <span className="text-blue-200">Facilitar</span> Suas Compras?
                </SectionTitle>

                <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto font-medium">
                    Envie sua lista de materiais agora e receba um orçamento personalizado.
                    Junte-se às milhares de famílias que economizam tempo com a Casa e Lazer.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                    <Link
                        href="/listas/nova"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl bg-white text-blue-600 hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
                    >
                        <Upload className="w-6 h-6" />
                        Enviar Minha Lista
                    </Link>
                    <Link
                        href="/catalog"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl bg-transparent text-white border-2 border-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        Ver Catálogo Completo
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>

                {/* Contact Info Grid */}
                <div className="pt-20 border-t border-white/10">
                    <h3 className="font-heading font-extrabold text-2xl mb-10 tracking-tight uppercase">Informações de Contato</h3>
                    <Grid cols={3} gap={6} className="text-left">
                        <ContactCard
                            icon={Store}
                            title="Nossas Lojas"
                            content="Encontre a unidade mais próxima"
                            content2="Clique para ver endereços"
                            href="/lojas"
                        />
                        <ContactCard
                            icon={Phone}
                            title="Telefone"
                            content="(12) 3122-1234"
                            content2="Seg a Sex: 08:30 - 18:30"
                        />
                        <ContactCard
                            icon={Mail}
                            title="E-mail"
                            content="contato@casaelazer.com.br"
                            content2="Resposta em até 24h"
                        />
                    </Grid>

                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="inline-flex items-center gap-3 text-white/60">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm font-medium">Aberto aos sábados: 09:00 - 13:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
