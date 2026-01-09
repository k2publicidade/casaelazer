import { ProductGallery } from "@/components/products/product-gallery"
import { ProductInfo } from "@/components/products/product-info"
import { ProductTabs } from "@/components/products/product-tabs"
import { RelatedProducts } from "@/components/products/related-products"

// Mock Data for the specific product
const PRODUCT = {
    id: "1",
    title: "Tenda Gazebo Dobrável Articulada 3x3m com Proteção Solar",
    description: "A Tenda Gazebo 3x3m é a solução perfeita para seus momentos de lazer ao ar livre. Com estrutura articulada de fácil montagem, oferece ampla área de sombra e proteção contra raios solares. Ideal para praia, camping, jardim e eventos. Sua cobertura em poliéster com silver coating garante maior durabilidade e conforto térmico.",
    price: 499.00,
    originalPrice: 699.00,
    sku: "GZ-3X3-BLUE",
    rating: 4.5,
    reviewCount: 128,
    stock: 50,
    images: [
        "https://images.unsplash.com/photo-1595246140625-573b715d98e7?q=80&w=1200&auto=format&fit=crop", // Placeholder Tenda
        "https://images.unsplash.com/photo-1565071559227-20ab25b7685e?q=80&w=1200&auto=format&fit=crop", // Detail
        "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=1200&auto=format&fit=crop", // Lifestyle
        "https://images.unsplash.com/photo-1596162955779-9c8f7b43f0a0?q=80&w=1200&auto=format&fit=crop", // Folded
    ]
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Breadcrumb / Top spacing */}
            <div className="container mx-auto px-4 py-8">
                <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                    <a href="/" className="hover:text-primary">Home</a>
                    <span>/</span>
                    <a href="/produtos" className="hover:text-primary">Produtos</a>
                    <span>/</span>
                    <span className="text-foreground font-medium truncate max-w-[200px]">{PRODUCT.title}</span>
                </nav>

                {/* Main Grid */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column: Gallery */}
                    <ProductGallery images={PRODUCT.images} title={PRODUCT.title} />

                    {/* Right Column: Info */}
                    <ProductInfo product={PRODUCT} />
                </div>

                {/* Detailed Info Section */}
                <div className="mt-16 sm:mt-24">
                    <ProductTabs />
                </div>

                {/* Related Products */}
                <div className="mt-16 mb-16 sm:mt-24">
                    <RelatedProducts />
                </div>
            </div>
        </div>
    )
}
