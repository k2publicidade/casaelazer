import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { FeaturedProductsSection } from '@/components/home/featured-products-section'
import { CategoriesSection } from '@/components/home/categories-section'

export const metadata = {
    title: 'Produtos | Casa e Lazer',
    description: 'Confira nosso catálogo completo de utilidades, decoração, brinquedos e papelaria.',
}

export default function ProdutosPage() {
    return (
        <div className="pb-20">
            {/* Header Section */}
            <Section background="gray" padding="large">
                <div className="max-w-4xl">
                    <SectionTitle>Nossos <span className="text-red-500">Produtos</span></SectionTitle>
                    <Subtitle>
                        Encontre tudo o que você precisa para o seu dia a dia.
                        Qualidade e variedade em todos os departamentos.
                    </Subtitle>
                </div>
            </Section>

            {/* Categories for quick navigation */}
            <CategoriesSection />

            {/* All Products (Currently reusing featured for demo) */}
            <FeaturedProductsSection />
        </div>
    )
}
