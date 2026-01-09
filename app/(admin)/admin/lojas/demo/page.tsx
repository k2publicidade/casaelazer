import { StoreCard } from "@/components/lojas/store-card";

export default function StoreCardsDemoPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 p-8 space-y-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
                        Nossas Lojas
                    </h1>
                    <p className="text-muted-foreground">
                        Visualize e gerencie as lojas da rede Casa e Lazer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <StoreCard />
                    <StoreCard
                        storeName="Loja Shopping"
                        storeImage="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop"
                        address="Av. Paulista, 1000 - Bela Vista"
                        phone="(11) 3456-7891"
                        hours="Seg-Dom: 10h-22h"
                        rating={4.9}
                        reviewCount={389}
                        distance="5.2 km"
                        isOpen={true}
                        tags={["Estacionamento", "Acessível"]}
                        managerName="Maria Santos"
                    />
                    <StoreCard
                        storeName="Loja Bairro"
                        storeImage="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070&auto=format&fit=crop"
                        address="Rua Augusta, 456 - Consolação"
                        phone="(11) 3456-7892"
                        hours="Seg-Sex: 8h-20h | Sáb: 9h-16h"
                        rating={4.6}
                        reviewCount={156}
                        distance="1.8 km"
                        isOpen={false}
                        tags={["Drive-thru", "Pet Friendly"]}
                        managerName="Carlos Oliveira"
                    />
                </div>
            </div>
        </div>
    );
}
