import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, BadgeCheck, Users } from 'lucide-react'

// You might generate an image for this or use a placeholder
// For now I'll use a solid color/placeholder if no image
const ABOUT_IMAGE = '/about-bg.png'

export function AboutSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">Sobre Nós</span>
                        <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                            A Sua Casa é a Nossa<br />
                            Inspiração Diária.
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            A Casa e Lazer é referência no varejo carioca, oferecendo uma variedade impressionante de produtos para o lar, lazer e escola.
                            Nossas lojas espalhadas pelo Rio de Janeiro trazem praticidade, preço justo e aquele atendimento que você já conhece.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                            <div>
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Nossa Missão</h3>
                                <p className="text-sm text-slate-500">
                                    Atuar no varejo com responsabilidade, foco no cliente e produtos de qualidade.
                                </p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                                    <Eye className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Nossa Visão</h3>
                                <p className="text-sm text-slate-500">
                                    Ser referência em crescimento através da excelência, satisfação e inovação.
                                </p>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                                    <BadgeCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Nossos Valores</h3>
                                <p className="text-sm text-slate-500">
                                    Responsabilidade, Ética, Inovação e Crescimento Profissional.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/sobre"
                            className="inline-flex items-center justify-center px-8 py-3 bg-[#0f172a] text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
                        >
                            Saiba Mais
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl group">
                            <Image
                                src="/store-aisle.jpg"
                                alt="Loja Casa e Lazer"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Graphic */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-pulse">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-0 h-0 border-l-[12px] border-l-red-600 border-y-[8px] border-y-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative DOTS */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 pattern-dots opacity-20 text-blue-600"></div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                            </div>
                            <div className="text-xs font-bold text-slate-800">
                                2.000+ <br /><span className="text-slate-500 font-normal">Clientes Felizes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
