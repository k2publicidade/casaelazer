import { Truck, Globe, Headphones, Clock } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

// Using an image placeholder for the background
const BG_IMAGE = '/features-bg.jpg' // Would need to exist or be a color fallback

export function WhyUsSection() {
    return (
        <section className="py-24 bg-brand-blue-900 text-white overflow-hidden relative">
            {/* Background elements would go here, using simple gradients/colors for now */}
            <div className="absolute inset-0 bg-brand-blue-900"></div>

            <div className="container mx-auto px-4 relative z-10 text-center mb-16">
                <Reveal width="100%" delay={0.1}>
                    <span className="text-brand-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Por que nos escolher</span>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-6">
                        Entregamos Mais que Produtos <br />
                        Entregamos Confiança.
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.3}>
                    <p className="text-brand-blue-100 max-w-2xl mx-auto">
                        Quando se trata de educação e trabalho, cada detalhe conta. É por isso que milhares de clientes confiam em nós.
                    </p>
                </Reveal>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Reveal delay={0.2} className="h-full">
                        <div className="bg-brand-blue-800/50 backdrop-blur-sm border border-brand-blue-700/50 p-6 rounded-2xl hover:bg-brand-blue-800 transition-colors group h-full">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red-500 transition-colors">
                                <Truck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sem Frete</h3>
                            <p className="text-sm text-brand-blue-200">Retirada gratuita e imediata em nossas lojas físicas.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3} className="h-full">
                        <div className="bg-brand-blue-800/50 backdrop-blur-sm border border-brand-blue-700/50 p-6 rounded-2xl hover:bg-brand-blue-800 transition-colors group h-full">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red-500 transition-colors">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">16+ Lojas</h3>
                            <p className="text-sm text-brand-blue-200">Presente no Rio, Baixada e Região Serrana.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="h-full">
                        <div className="bg-brand-blue-800/50 backdrop-blur-sm border border-brand-blue-700/50 p-6 rounded-2xl hover:bg-brand-blue-800 transition-colors group h-full">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red-500 transition-colors">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Tradição Carioca</h3>
                            <p className="text-sm text-brand-blue-200">Desde 1950 fazendo parte da história do RJ.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5} className="h-full">
                        <div className="bg-brand-blue-800/50 backdrop-blur-sm border border-brand-blue-700/50 p-6 rounded-2xl hover:bg-brand-blue-800 transition-colors group h-full">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red-500 transition-colors">
                                <Headphones className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Atendimento Real</h3>
                            <p className="text-sm text-brand-blue-200">Equipe apaixonada pronta para te receber.</p>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="container mx-auto px-4 mt-20 pt-10 border-t border-brand-blue-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <Reveal delay={0.2}>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-brand-red-500 mb-2">Since 1950</div>
                            <div className="text-xs text-brand-blue-300 uppercase tracking-widest">Tradição Carioca</div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-brand-red-500 mb-2">15.000m²</div>
                            <div className="text-xs text-brand-blue-300 uppercase tracking-widest">De Lojas Físicas</div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-brand-red-500 mb-2">16+</div>
                            <div className="text-xs text-brand-blue-300 uppercase tracking-widest">Unidades no Rio</div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-brand-red-500 mb-2">1000+</div>
                            <div className="text-xs text-brand-blue-300 uppercase tracking-widest">Colaboradores</div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
