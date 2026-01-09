"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ListPlus } from "lucide-react"

// Mock Data
const RELATED_PRODUCTS = [
    {
        id: "1",
        title: "Conjunto de Cadeiras",
        price: "R$ 499,00",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop",
        category: "Móveis"
    },
    {
        id: "2",
        title: "Mesa de Centro Moderna",
        price: "R$ 350,00",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600&auto=format&fit=crop",
        category: "Sala de Estar"
    },
    {
        id: "3",
        title: "Luminária Pendente",
        price: "R$ 180,00",
        image: "https://images.unsplash.com/photo-1513506003011-3b3215099b85?q=80&w=600&auto=format&fit=crop",
        category: "Iluminação"
    },
    {
        id: "4",
        title: "Vaso Decorativo Cerâmica",
        price: "R$ 89,90",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=600&auto=format&fit=crop",
        category: "Decoração"
    },
]

export function RelatedProducts() {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Produtos Relacionados</h2>
                <a href="/produtos" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Ver todos
                </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {RELATED_PRODUCTS.map((product) => (
                    <Card key={product.id} className="group overflow-hidden rounded-xl border-slate-200 transition-all hover:border-slate-300 hover:shadow-md">
                        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            <div className="absolute right-3 top-3 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                <Button size="icon" className="h-8 w-8 rounded-full bg-white text-slate-900 shadow-sm hover:bg-slate-50">
                                    <ListPlus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="mb-2 text-xs text-muted-foreground">{product.category}</div>
                            <h3 className="line-clamp-2 text-base font-medium text-slate-900 group-hover:text-blue-600">
                                {product.title}
                            </h3>
                            <div className="mt-2 font-bold text-slate-900">{product.price}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
