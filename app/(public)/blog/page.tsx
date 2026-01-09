import { BlogCard } from "@/components/blog/blog-card"
import { Section } from "@/components/ui/section"
import { SectionTitle, Subtitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"

// Mock Data
const BLOG_POSTS = [
    {
        slug: "organize-seu-escritorio-home-office",
        title: "5 Dicas para Organizar seu Home Office e Aumentar a Produtividade",
        excerpt: "Descubra como um ambiente bem organizado pode transformar sua rotina de trabalho. Dicas de móveis, iluminação e acessórios essenciais.",
        coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
        category: "Organização",
        date: "12 Jan, 2026",
        readTime: "5",
        author: {
            name: "Ana Silva",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
        }
    },
    {
        slug: "melhores-materiais-escolares-2026",
        title: "Lista de Material Escolar 2026: O que não pode faltar?",
        excerpt: "Preparamos um guia completo com os itens essenciais para o volta às aulas. Confira as tendências e novidades do ano.",
        coverImage: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1000&auto=format&fit=crop",
        category: "Escolar",
        date: "10 Jan, 2026",
        readTime: "8",
        author: {
            name: "Carlos Santos",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
        }
    },
    {
        slug: "decoracao-acessivel-sala",
        title: "Como Renovar a Decoração da Sala Gastando Pouco",
        excerpt: "Pequenas mudanças que fazem grande diferença. Aprenda a usar almofadas, quadros e plantas para dar vida nova ao ambiente.",
        coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
        category: "Decoração",
        date: "05 Jan, 2026",
        readTime: "4",
        author: {
            name: "Mariana Costa",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
        }
    },
    {
        slug: "brinquedos-educativos",
        title: "A Importância dos Brinquedos Educativos no Desenvolvimento Infantil",
        excerpt: "Entenda como escolher o brinquedo ideal para cada faixa etária e como eles auxiliam no aprendizado e coordenação motora.",
        coverImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop",
        category: "Brinquedos",
        date: "02 Jan, 2026",
        readTime: "6",
        author: {
            name: "Dr. Pedro Lima",
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
        }
    },
    {
        slug: "receber-visitas-verao",
        title: "Preparando a Casa para Receber Visitas no Verão",
        excerpt: "Dicas de utilidades domésticas e decoração para deixar sua casa mais fresca e acolhedora nos dias quentes.",
        coverImage: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop",
        category: "Casa",
        date: "28 Dez, 2025",
        readTime: "5",
        author: {
            name: "Ana Silva",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
        }
    },
    {
        slug: "organizacao-cozinha",
        title: "Organização na Cozinha: Potes, Prateleiras e Mais",
        excerpt: "Mantenha sua cozinha funcional e bonita com nossas dicas de organização. Otimize espaço e facilite o dia a dia.",
        coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
        category: "Organização",
        date: "20 Dez, 2025",
        readTime: "7",
        author: {
            name: "Mariana Costa",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
        }
    }
]

export default function BlogListingPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-md">
                        <span className="text-sm font-bold tracking-tight uppercase text-blue-200">Blog Casa & Lazer</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                        Dicas, Novidades e <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Inspiração para Você</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Fique por dentro das últimas tendências, dicas de organização e guias completos para aproveitar ao máximo sua casa.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <Section padding="large">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="min-w-[200px]">
                        Carregar Mais
                    </Button>
                </div>
            </Section>
        </div>
    )
}
