import { LucideIcon, Home, Gift, Utensils, PenTool } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    color: 'blue' | 'indigo' | 'slate' | 'red'
}

function ServiceCard({ icon: Icon, title, description, color }: ServiceCardProps) {
    const colorStyles = {
        blue: 'bg-blue-600',
        indigo: 'bg-indigo-600',
        slate: 'bg-slate-700',
        red: 'bg-red-600'
    }

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${colorStyles[color]} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <Link href="/produtos" className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full ${colorStyles[color]} text-white text-sm font-bold hover:opacity-90 transition-opacity`}>
                Ver Opções
            </Link>
        </div>
    )
}

export function ServicesSection() {
    return (
        <Section background="gray" padding="large" className="relative -mt-20 z-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                    icon={Home}
                    title="Cama, Mesa e Banho"
                    description="Renove sua casa com nossa linha completa de têxteis e decoração."
                    color="slate"
                />
                <ServiceCard
                    icon={Utensils}
                    title="Utilidades Domésticas"
                    description="Tudo para sua cozinha, organização e limpeza do dia a dia."
                    color="red"
                />
                <ServiceCard
                    icon={Gift}
                    title="Brinquedos e Lazer"
                    description="Diversão garantida com as melhores marcas de brinquedos do mercado."
                    color="indigo"
                />
                <ServiceCard
                    icon={PenTool}
                    title="Papelaria e Escritório"
                    description="Material escolar e de escritório para todas as suas necessidades."
                    color="blue"
                />
            </div>

            <div className="mt-20 text-center max-w-2xl mx-auto">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">Nossos Departamentos</span>
                <SectionTitle centered>
                    Variedade Incrível em <br />Um Só Lugar
                </SectionTitle>
                <p className="text-slate-600 mt-4">
                    Da organização da sua casa até o material escolar das crianças. A Casa e Lazer tem tudo o que sua família precisa com o melhor preço do Rio.
                </p>
            </div>
        </Section>
    )
}
