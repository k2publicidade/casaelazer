import { Truck, Globe, Headphones, Clock } from 'lucide-react'

// Using an image placeholder for the background
const BG_IMAGE = '/features-bg.jpg' // Would need to exist or be a color fallback

export function WhyUsSection() {
    return (
        <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
            {/* Background elements would go here, using simple gradients/colors for now */}
            <div className="absolute inset-0 bg-blue-900/10"></div>

            <div className="container mx-auto px-4 relative z-10 text-center mb-16">
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Por que nos escolher</span>
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-6">
                    Entregamos Mais que Produtos <br />
                    Entregamos Confiança.
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Quando se trata de educação e trabalho, cada detalhe conta. É por isso que milhares de clientes confiam em nós.
                </p>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                            <Truck className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Sem Frete</h3>
                        <p className="text-sm text-slate-400">Retirada gratuita e imediata em nossas lojas físicas.</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">16+ Lojas</h3>
                        <p className="text-sm text-slate-400">Presente no Rio, Baixada e Região Serrana.</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                            <Clock className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Tradição Carioca</h3>
                        <p className="text-sm text-slate-400">Desde 1950 fazendo parte da história do RJ.</p>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                            <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Atendimento Real</h3>
                        <p className="text-sm text-slate-400">Equipe apaixonada pronta para te receber.</p>
                    </div>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="container mx-auto px-4 mt-20 pt-10 border-t border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-red-500 mb-2">Since 1950</div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest">Tradição Carioca</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-red-500 mb-2">15.000m²</div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest">De Lojas Físicas</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-red-500 mb-2">16+</div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest">Unidades no Rio</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-extrabold text-red-500 mb-2">1000+</div>
                        <div className="text-xs text-slate-400 uppercase tracking-widest">Colaboradores</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
