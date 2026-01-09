'use client'

import { Calendar, Store, Users, Package } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { StatCard } from './stat-card'

export function StatsSection() {
    return (
        <Section background="white" padding="large">
            <div className="flex flex-col items-center mb-16 text-center">
                <SectionTitle centered>
                    Casa e Lazer em <span className="text-blue-600">Números</span>
                </SectionTitle>
                <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-4"></div>
            </div>

            <Grid cols={4} gap={6}>
                <StatCard
                    number={76}
                    label="Anos de Tradição"
                    icon={Calendar}
                />
                <StatCard
                    number={150}
                    label="Mil Produtos"
                    suffix="k+"
                    icon={Package}
                />
                <StatCard
                    number={50}
                    label="Mil Clientes"
                    suffix="k+"
                    icon={Users}
                />
                <StatCard
                    number={25}
                    label="Escolas Parceiras"
                    suffix="+"
                    icon={Store}
                />
            </Grid>
        </Section>
    )
}
