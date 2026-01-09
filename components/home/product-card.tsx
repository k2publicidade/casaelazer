import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
    image: string | null
    category: string
    name: string
    price: number
    href: string
    className?: string
}

export function ProductCard({
    image,
    category,
    name,
    price,
    href,
    className,
}: ProductCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                'group bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full',
                className
            )}
        >
            {/* Image Container */}
            <div className="relative aspect-square mb-5 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:bg-blue-50 transition-colors duration-300">
                        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">📦</span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 transition-transform group-hover:translate-x-1 duration-300">
                    <Badge variant="brand" className="text-[10px] uppercase tracking-wider font-bold py-1 px-2.5">
                        {category}
                    </Badge>
                </div>

                {/* Quick view overlay */}
                <div className="absolute inset-x-4 bottom-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="bg-white/90 backdrop-blur-sm text-blue-600 text-center py-2.5 rounded-xl font-bold text-sm shadow-lg">
                        Ver Detalhes
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow space-y-3 px-1">
                <h3 className="font-bold text-gray-900 line-clamp-2 leading-snug text-lg group-hover:text-blue-600 transition-colors duration-300 min-h-[3.5rem]">
                    {name}
                </h3>

                <div className="pt-2 mt-auto border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Preço</span>
                        <span className="font-extrabold text-2xl text-blue-600 tracking-tight">
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(price)}
                        </span>
                    </div>

                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <span className="text-xl">+</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
