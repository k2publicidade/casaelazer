import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { ProductCard } from './product-card'
import { ArrowRight } from 'lucide-react'

// Mock data - will be replaced with Supabase query
const mockProducts = [
    {
        id: '1',
        name: 'Jogo de Panelas Antiaderente 5 Peças',
        category: 'Cozinha',
        price: 199.90,
        image: null,
        slug: 'jogo-panelas-antiaderente',
    },
    {
        id: '2',
        name: 'Mochila Escolar Ergono-Tech Premium',
        category: 'Mochilas',
        price: 249.90,
        image: null,
        slug: 'mochila-escolar-ergono-tech',
    },
    {
        id: '3',
        name: 'Toalha de Banho Algodão Egípcio',
        category: 'Cama e Banho',
        price: 45.90,
        image: null,
        slug: 'toalha-banho-egipcio',
    },
    {
        id: '4',
        name: 'Boneca Articulada Fashion',
        category: 'Brinquedos',
        price: 89.90,
        image: null,
        slug: 'boneca-articulada',
    },
    {
        id: '5',
        name: 'Jogo de Ferramentas Manuais 40 Peças',
        category: 'Ferramentas',
        price: 129.90,
        image: null,
        slug: 'jogo-ferramentas-40pcs',
    },
    {
        id: '6',
        name: 'Calculadora Científica',
        category: 'Papelaria',
        price: 59.90,
        image: null,
        slug: 'calculadora-cientifica',
    },
    {
        id: '7',
        name: 'Vaso Decorativo Cerâmica',
        category: 'Decoração',
        price: 74.90,
        image: null,
        slug: 'vaso-decorativo',
    },
    {
        id: '8',
        name: 'Carrinho de Controle Remoto',
        category: 'Brinquedos',
        price: 154.90,
        image: null,
        slug: 'carrinho-controle-remoto',
    },
]

export function FeaturedProductsSection() {
    return (
        <Section background="gray" padding="large">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                    <SectionTitle className="mb-4">
                        Ofertas da <span className="text-red-500">Semana</span>
                    </SectionTitle>
                    <Subtitle className="mb-0">
                        Os produtos mais desejados com preços imperdíveis em nossas lojas físicas.
                    </Subtitle>
                </div>

                <Link
                    href="/produtos"
                    className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all group"
                >
                    Ver todas ofertas
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            <Grid cols={4} gap={6} className="mb-12">
                {mockProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        category={product.category}
                        name={product.name}
                        price={product.price}
                        href={`/produtos/${product.slug}`}
                    />
                ))}
            </Grid>

            {/* Trust Banner/Info */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-wrap justify-around gap-8 text-center">
                <div className="space-y-1">
                    <p className="font-bold text-gray-900">Retirada em Loja</p>
                    <p className="text-sm text-gray-500">Grátis e Imediata</p>
                </div>
                <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
                <div className="space-y-1">
                    <p className="font-bold text-gray-900">Parcelamento</p>
                    <p className="text-sm text-gray-500">Até 10x sem juros</p>
                </div>
                <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
                <div className="space-y-1">
                    <p className="font-bold text-gray-900">Compra Segura</p>
                    <p className="text-sm text-gray-500">Certificado SSL</p>
                </div>
            </div>
        </Section>
    )
}
