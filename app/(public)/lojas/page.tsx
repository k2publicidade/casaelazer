import { StoreCard } from "@/components/lojas/store-card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nossas Lojas | Casa e Lazer",
    description:
        "Encontre a Casa e Lazer mais próxima de você. Mais de 16 lojas no Rio de Janeiro e região.",
};

// Mock Data for Stores
const regions = [
    {
        name: "Rio de Janeiro (Capital)",
        stores: [
            {
                id: "madureira",
                name: "Loja Madureira",
                image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2070&auto=format&fit=crop",
                address: "Estrada do Portela, 222 - Madureira",
                phone: "(21) 3456-7890",
                hours: "Seg-Sab: 9h-20h | Dom: 9h-15h",
                rating: 4.8,
                reviews: 1245,
                distance: "1.2 km",
                isOpen: true,
                tags: ["Retirada Loja", "Outlet"],
                manager: "Roberto Carlos",
            },
            {
                id: "carioca",
                name: "Carioca Shopping",
                image: "https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?q=80&w=2070&auto=format&fit=crop",
                address: "Av. Vicente de Carvalho, 909 - Vila da Penha",
                phone: "(21) 3456-7891",
                hours: "Seg-Dom: 10h-22h",
                rating: 4.9,
                reviews: 890,
                distance: "3.5 km",
                isOpen: true,
                tags: ["Shopping", "Estacionamento"],
                manager: "Ana Beatriz",
            },
            {
                id: "bangushopping",
                name: "Bangu Shopping",
                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070&auto=format&fit=crop",
                address: "Rua Fonseca, 240 - Bangu",
                phone: "(21) 3456-7892",
                hours: "Seg-Dom: 10h-22h",
                rating: 4.7,
                reviews: 654,
                distance: "8.1 km",
                isOpen: true,
                tags: ["Shopping", "Pet Friendly"],
                manager: "Carlos Eduardo",
            },
        ],
    },
    {
        name: "Baixada Fluminense",
        stores: [
            {
                id: "novaiguacu",
                name: "Nova Iguaçu Centro",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
                address: "Av. Gov. Amaral Peixoto, 400 - Centro",
                phone: "(21) 2667-1234",
                hours: "Seg-Sex: 8h-19h | Sáb: 9h-16h",
                rating: 4.6,
                reviews: 2100,
                distance: "12.5 km",
                isOpen: false,
                tags: ["Centro", "Grande Porte"],
                manager: "Fernanda Lima",
            },
            {
                id: "granderio",
                name: "Shopping Grande Rio",
                image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
                address: "R. Maria Soares Sendas, 111 - São João de Meriti",
                phone: "(21) 2655-5678",
                hours: "Seg-Dom: 10h-22h",
                rating: 4.5,
                reviews: 543,
                distance: "15.0 km",
                isOpen: true,
                tags: ["Shopping", "Cinema"],
                manager: "Paulo Ricardo",
            },
        ],
    },
    {
        name: "Outras Regiões",
        stores: [
            {
                id: "teresopolis",
                name: "Teresópolis",
                image: "https://images.unsplash.com/photo-1580793241553-e9f1cce181af?q=80&w=2070&auto=format&fit=crop",
                address: "Av. Feliciano Sodré, 100 - Várzea",
                phone: "(21) 2742-9988",
                hours: "Seg-Sab: 9h-19h",
                rating: 4.9,
                reviews: 320,
                distance: "85.0 km",
                isOpen: true,
                tags: ["Serra", "Turismo"],
                manager: "Juliana Paes"
            }
        ]
    }
];

export default function LojasPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 z-10" />
                    <img src="/store-hero-bg.jpg" alt="Lojas Fundo" className="w-full h-full object-cover opacity-30" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 tracking-tight">
                        Nossas Lojas
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Estamos pertinho de você! Confira nossos endereços e venha viver a experiência Casa e Lazer.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 text-red-200">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        ⚠ Vendas somente nas lojas físicas.
                    </div>
                </div>
            </div>

            <Section padding="large" className="bg-slate-50/50">
                <div className="max-w-7xl mx-auto space-y-20">
                    {regions.map((region) => (
                        <div key={region.name}>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                                    {region.name}
                                </h2>
                                <div className="h-px bg-slate-200 flex-grow" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center md:place-items-stretch">
                                {region.stores.map((store) => (
                                    <StoreCard
                                        key={store.id}
                                        storeName={store.name}
                                        storeImage={store.image}
                                        address={store.address}
                                        phone={store.phone}
                                        hours={store.hours}
                                        rating={store.rating}
                                        reviewCount={store.reviews}
                                        distance={store.distance}
                                        isOpen={store.isOpen}
                                        tags={store.tags}
                                        managerName={store.manager}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
