import { Upload, Brain, FileText, CheckCircle } from 'lucide-react'

const steps = [
    {
        number: '01',
        title: 'Envie sua Lista',
        description: 'Faça upload da lista escolar ou envie uma foto.',
        icon: Upload
    },
    {
        number: '02',
        title: 'Análise Inteligente',
        description: 'Nossa equipe identifica todos os itens necessários.',
        icon: Brain
    },
    {
        number: '03',
        title: 'Orçamento Rápido',
        description: 'Receba a cotação completa em minutos.',
        icon: FileText
    },
    {
        number: '04',
        title: 'Aprovação & Retirada',
        description: 'Aprove e retire na loja de sua preferência.',
        icon: CheckCircle
    }
]

export function ProcessSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">Nosso Processo de Trabalho</span>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-16 leading-tight max-w-3xl mx-auto">
                    Simples, Transparente e Confiável<br />
                    Do Envio à Retirada
                </h2>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-dashed border-t-2 border-slate-200 border-dashed z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center group">
                            <div className="text-4xl md:text-5xl font-extrabold text-slate-200 mb-4 group-hover:text-red-500 transition-colors duration-300">
                                {step.number}
                            </div>

                            <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-red-500 group-hover:bg-red-50 transition-all duration-300">
                                <step.icon className="w-6 h-6 text-slate-600 group-hover:text-red-600 transition-colors" />
                            </div>

                            <h3 className="font-bold text-lg text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
