'use client'
import { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqs = [
    {
        question: "Como envio minha lista escolar?",
        answer: "Você pode enviar sua lista através da nossa página 'Enviar Lista'. Aceitamos arquivos PDF, Excel, Word ou fotos nítidas. Nosso sistema processa e retorna o orçamento rapidamente."
    },
    {
        question: "Como funciona a retirada em loja?",
        answer: "É muito simples! Você pode montar sua lista ou fazer seu pedido pelo site/WhatsApp e nós separamos tudo. Assim que estiver pronto, avisamos para você retirar na loja de sua preferência (sem custo de frete)."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos todos os cartões de crédito, débito, PIX e dinheiro. Parcelamos suas compras em até 10x sem juros (consulte condições na loja)."
    },
    {
        question: "Posso trocar um produto se não gostar?",
        answer: "Sim! A troca pode ser realizada em qualquer uma de nossas 16 lojas em até 30 dias, desde que o produto esteja na embalagem original e com a nota fiscal."
    },
    {
        question: "Posso retirar os produtos na loja?",
        answer: "Com certeza! Você pode optar por 'Retirada na Loja' e pegar seu pedido montado sem filas, assim que receber a notificação de pronto."
    }
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-[40%_60%] gap-16">
                    {/* Left Info */}
                    <div>
                        <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">Dúvidas Frequentes</span>
                        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                            Perguntas Comuns sobre<br /> Nossos Serviços
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Separamos as principais dúvidas para facilitar sua experiência. Se ainda precisar de ajuda, fale com nosso time.
                        </p>

                        <div className="bg-[#0f172a] rounded-2xl p-8 text-white relative overflow-hidden">
                            {/* Decorative circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <h3 className="font-bold text-2xl mb-2">12.000+</h3>
                            <p className="text-sm text-slate-400 mb-6">Pedidos entregues com sucesso</p>

                            <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
                                <div className="absolute top-0 left-0 h-full w-[85%] bg-red-500 rounded-full"></div>
                            </div>
                            <p className="text-xs text-slate-400 text-right">98% Satisfação</p>
                        </div>
                    </div>

                    {/* Right Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl border transition-all duration-300 ${openIndex === index
                                    ? 'border-red-500 shadow-md ring-1 ring-red-100'
                                    : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Strip similar to reference (Red strip) */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-[#0f172a] rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="relative z-10 max-w-2xl">
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-xl shadow-red-900/20 text-white font-bold text-xl animate-pulse">
                            24/7
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Pronto para Otimizar suas Compras?
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Vamos transformar sua experiência de compra de materiais escolares e de escritório. Rápido, fácil e confiável.
                        </p>
                    </div>
                    <div className="relative z-10">
                        <Link
                            href="/listas/nova"
                            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:translate-y-[-2px] hover:shadow-red-600/30"
                        >
                            Solicitar Orçamento
                        </Link>
                    </div>

                    {/* Bg Element */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-slate-800/50 to-transparent skew-x-12"></div>
                </div>
            </div>
        </section>
    )
}
