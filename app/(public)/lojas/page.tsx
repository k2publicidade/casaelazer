import { MapPin, Phone, Clock } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Container } from '@/components/ui/container'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nossas Lojas | Casa e Lazer',
    description: 'Encontre a Casa e Lazer mais próxima de você. Mais de 16 lojas no Rio de Janeiro e região.',
}

const regions = [
    {
        name: "Rio de Janeiro (Capital)",
        stores: [
            { name: "Madureira", address: "Estrada do Portela, Madureira", obs: "Próximo ao Mercadão" },
            { name: "Carioca Shopping", address: "Av. Vicente de Carvalho, 909 - Vila da Penha", obs: "Dentro do Shopping" },
            { name: "Shopping Boulevard", address: "Rua Barão de São Francisco, 236 - Vila Isabel", obs: "Antigo Iguatemi" },
            { name: "Bangu Shopping", address: "Rua Fonseca, 240 - Bangu", obs: "Dentro do Shopping" },
            { name: "West Shopping", address: "Estr. do Mendanha, 555 - Campo Grande", obs: "Dentro do Shopping" },
        ]
    },
    {
        name: "Baixada Fluminense",
        stores: [
            { name: "Nova Iguaçu - Centro", address: "Av. Gov. Amaral Peixoto, Centro", obs: "Calçadão" },
            { name: "Nova Iguaçu - TopShopping", address: "Av. Gov. Roberto Silveira, 540", obs: "Dentro do Shopping" },
            { name: "Shopping Grande Rio", address: "R. Maria Soares Sendas, 111 - São João de Meriti", obs: "" },
            { name: "Duque de Caxias", address: "Centro de Caxias", obs: "" },
            { name: "Queimados", address: "Av. Irmãos Guinle, 1021 - Centro", obs: "" },
        ]
    },
    {
        name: "Leste Fluminense",
        stores: [
            { name: "São Gonçalo Shopping", address: "Av. São Gonçalo, 100 - Boa Vista", obs: "" },
            { name: "Pátio Alcântara", address: "R. Carlos Gianelli - Alcântara", obs: "" },
            { name: "Itaboraí Plaza", address: "Rod. BR-101, Km 295 - Três Pontes", obs: "" },
        ]
    },
    {
        name: "Outras Regiões",
        stores: [
            { name: "Teresópolis", address: "Várzea, Teresópolis - RJ", obs: "Região Serrana" },
            { name: "Campos dos Goytacazes", address: "Centro - Campos", obs: "Norte Fluminense" },
            { name: "Juiz de Fora (MG)", address: "Centro - Juiz de Fora", obs: "Minas Gerais" },
            { name: "Cachoeiro de Itapemirim (ES)", address: "Centro", obs: "Espírito Santo" },
        ]
    }
]

export default function LojasPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Hero for Lojas */}
            <div className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/store-interior-1.png')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">Nossas Lojas</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Estamos pertinho de você! Confira nossos endereços e venha nos fazer uma visita.
                        <br />
                        <span className="text-red-500 font-bold text-base mt-2 block">⚠ Não vendemos online. Compras somente nas lojas físicas.</span>
                    </p>
                </div>
            </div>

            <Section padding="large">
                <div className="max-w-5xl mx-auto space-y-16">
                    {regions.map((region) => (
                        <div key={region.name}>
                            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-red-600 pl-4">
                                {region.name}
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {region.stores.map((store, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded full">
                                                Loja Física
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{store.name}</h3>
                                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                            {store.address}
                                        </p>

                                        {store.obs && (
                                            <div className="text-xs text-slate-500 flex items-center gap-1.5 border-t border-slate-50 pt-3">
                                                <Clock className="w-3.5 h-3.5" />
                                                {store.obs}
                                            </div>
                                        )}

                                        <div className="mt-4 pt-4">
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=Casa+e+Lazer+${encodeURIComponent(store.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 hover:bg-red-50 py-2 rounded-lg transition-colors"
                                            >
                                                Ver no Mapa
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
