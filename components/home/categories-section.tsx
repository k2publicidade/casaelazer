import { Notebook, Home, Hammer, Gamepad2, Utensils, Armchair } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { CategoryCard } from './category-card'

// Mock data - will be replaced with Supabase query
const categories = [
    {
        title: 'Utilidades Domésticas',
        icon: Utensils,
        count: 1250,
        href: '/produtos?category=utilidades',
    },
    {
        title: 'Cama, Mesa e Banho',
        icon: Home,
        count: 850,
        href: '/produtos?category=cama-mesa-banho',
    },
    {
        title: 'Brinquedos',
        icon: Gamepad2,
        count: 560,
        href: '/produtos?category=brinquedos',
    },
    {
        title: 'Papelaria e Escritório',
        icon: Notebook,
        count: 3200,
        href: '/produtos?category=papelaria',
    },
    {
        title: 'Decoração',
        icon: Armchair,
        count: 450,
        href: '/produtos?category=decoracao',
    },
    {
        title: 'Ferramentas e Jardim',
        icon: Hammer,
        count: 320,
        href: '/produtos?category=ferramentas',
    },
]

export function CategoriesSection() {
    return (
        <Section background="white" padding="large">
            <div className="flex flex-col items-center text-center mb-16">
                <SectionTitle centered>
                    Nossos <span className="text-blue-600">Departamentos</span>
                </SectionTitle>
                <Subtitle centered className="max-w-2xl">
                    Tudo para sua casa, lazer e trabalho em um só lugar. Confira nossa variedade.
                </Subtitle>
                <div className="w-16 h-1 bg-red-600 rounded-full mt-4"></div>
            </div>

            <Grid cols={3} gap={6}>
                {categories.map((category) => (
                    <CategoryCard
                        key={category.href}
                        title={category.title}
                        icon={category.icon}
                        count={category.count}
                        href={category.href}
                    />
                ))}
            </Grid>
        </Section>
    )
}
