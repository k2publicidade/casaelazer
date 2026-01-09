import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock Data for a single post (in real app, fetch based on slug)
const POST = {
    slug: "organize-seu-escritorio-home-office",
    title: "5 Dicas para Organizar seu Home Office e Aumentar a Produtividade",
    excerpt: "Descubra como um ambiente bem organizado pode transformar sua rotina de trabalho. Dicas de móveis, iluminação e acessórios essenciais.",
    content: `
    <p>Trabalhar em casa se tornou a realidade de muitos profissionais, mas manter a produtividade fora do escritório tradicional pode ser um desafio se o ambiente não estiver preparado. A organização do seu Home Office influencia diretamente na sua capacidade de concentração e no seu bem-estar.</p>
    
    <h2>1. Escolha o Local Ideal</h2>
    <p>O primeiro passo é definir um espaço específico para o trabalho. Evite trabalhar na cama ou no sofá. Ter uma mesa dedicada ajuda seu cérebro a entender que aquele é o momento de focar.</p>

    <h2>2. Invista em uma Boa Cadeira</h2>
    <p>A ergonomia é fundamental. Passar horas sentado em uma cadeira inadequada pode causar dores nas costas e fadiga. Uma cadeira de escritório ajustável é um investimento na sua saúde.</p>

    <h2>3. Iluminação é Tudo</h2>
    <p>Sempre que possível, aproveite a luz natural. Posicione sua mesa perto de uma janela. Para os dias nublados ou trabalho noturno, tenha uma luminária de mesa com luz adequada para leitura.</p>

    <h2>4. Mantenha a Mesa Limpa</h2>
    <p>Uma mesa bagunçada reflete uma mente bagunçada. Utilize organizadores de mesa para canetas, papéis e acessórios. Mantenha apenas o essencial ao alcance das mãos.</p>

    <h2>5. Personalize com Moderação</h2>
    <p>Seu Home Office deve ter sua cara. Plantas, quadros e objetos pessoais tornam o ambiente mais acolhedor e inspirador, mas cuidado para não exagerar e criar distrações visuais.</p>
    
    <p>Na <strong>Casa & Lazer</strong>, você encontra tudo o que precisa para montar e organizar seu escritório em casa. De cadeiras ergonômicas a organizadores práticos, temos as melhores soluções para você.</p>
  `,
    coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
    category: "Organização",
    date: "12 Jan, 2026",
    readTime: "5",
    author: {
        name: "Ana Silva",
        role: "Especialista em Interiores",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // In a real app, you would fetch data here
    // const post = await getPostBySlug(slug)
    const post = POST;

    return (
        <div className="min-h-screen bg-white">
            {/* Header Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
                        </Link>

                        <div className="mb-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                                {post.category}
                            </Badge>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm md:text-base text-slate-200">
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime} min de leitura</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <article className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-700">
                    {/* Render HTML content safely */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="not-prose mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                        <span className="font-bold text-slate-900">Compartilhe este artigo:</span>
                        <div className="flex gap-2">
                            <Button size="icon" variant="outline" className="rounded-full hover:text-blue-600 hover:border-blue-200">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full hover:text-sky-500 hover:border-sky-200">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full hover:text-blue-700 hover:border-blue-200">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 sticky top-24">
                        <h3 className="font-bold text-lg mb-4 text-slate-900">Sobre o Autor</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{post.author.name}</div>
                                <div className="text-sm text-slate-500">{post.author.role}</div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Apaixonada por design de interiores e organização. Compartilha dicas práticas para transformar casas em lares acolhedores.
                        </p>
                        <Button variant="outline" className="w-full">Ver todos os posts</Button>
                    </div>
                </aside>
            </div>
        </div>
    )
}
