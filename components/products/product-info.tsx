"use client"

import { useState } from "react"
import { Share2, ListPlus, ShieldCheck, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface ProductInfoProps {
    product: {
        id: string
        title: string
        description: string
        price: number
        originalPrice?: number
        sku: string
        rating: number
        reviewCount: number
        stock: number
    }
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)

    // Mock variants
    const colors = ["Azul", "Branco", "Preto"]

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <div className="flex flex-col space-y-6">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>SKU: {product.sku}</span>
                    <span>•</span>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={cn(
                                    "h-4 w-4",
                                    star <= product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                )}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                        <span className="ml-1 text-xs">({product.reviewCount} avaliações)</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    {product.title}
                </h1>

                <div className="flex items-end gap-3 pt-2">
                    <span className="text-3xl font-bold text-blue-600">
                        {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}
                    </span>
                    {product.originalPrice && (
                        <>
                            <span className="mb-1 text-lg text-slate-400 line-through">
                                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                                    product.originalPrice
                                )}
                            </span>
                            <Badge variant="destructive" className="mb-2">
                                -{discount}% OFF
                            </Badge>
                        </>
                    )}
                </div>

            </div>

            <Separator />

            <p className="text-base leading-relaxed text-slate-600">
                {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <span className="text-sm font-medium text-slate-900">Cor: <span className="text-slate-500 font-normal">{selectedColor || "Selecione"}</span></span>
                    <div className="flex flex-wrap gap-2">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                                    selectedColor === color
                                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600"
                                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                    <div className="space-y-2">
                        <span className="text-sm font-medium text-slate-900">Quantidade</span>
                        <div className="flex h-10 w-32 items-center rounded-md border border-slate-200">
                            <button
                                className="flex h-full w-10 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <Input
                                type="number"
                                min={1}
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="h-full flex-1 border-0 text-center focus-visible:ring-0"
                            />
                            <button
                                className="flex h-full w-10 items-center justify-center text-slate-600 hover:bg-slate-50"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <Button size="lg" className="h-12 flex-1 gap-2 bg-blue-600 text-base hover:bg-blue-700">
                        <ListPlus className="h-5 w-5" /> Adicionar à Lista
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">

                <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white p-2 shadow-sm">
                        <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-slate-900">Garantia Estendida</h4>
                        <p className="text-xs text-slate-500">30 dias para devolução grátis</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">

                <Button variant="ghost" size="sm" className="gap-2 text-slate-600">
                    <Share2 className="h-4 w-4" /> Compartilhar
                </Button>
            </div>
        </div>
    )
}
