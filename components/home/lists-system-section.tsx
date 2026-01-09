import Link from 'next/link'
import { Upload, Brain, FileText, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { StepCard } from './step-card'

export function ListsSystemSection() {
    return (
        <Section background="blue-light" padding="large" id="como-funciona">
            <div className="flex flex-col items-center text-center mb-16">
                <SectionTitle centered>
                    Facilite sua <span className="text-blue-600">Volta às Aulas</span>
                </SectionTitle>

                <Subtitle centered className="max-w-3xl">
                    Nosso sistema inteligente transforma sua lista escolar em um orçamento completo em segundos.
                    Economize tempo e garanta os melhores preços sem sair de casa.
                </Subtitle>
            </div>

            <Grid cols={3} gap={8} className="mb-16">
                <StepCard
                    number={1}
                    icon={Upload}
                    title="Envie sua Lista"
                    description="Faça upload da lista de materiais em PDF, Excel, Word ou até mesmo uma foto nítida da lista impressa."
                />

                <StepCard
                    number={2}
                    icon={Brain}
                    title="IA Faz o Matching"
                    description="Nosso sistema avançado identifica cada item e encontra os produtos correspondentes em nosso estoque automaticamente."
                />

                <StepCard
                    number={3}
                    icon={FileText}
                    title="Receba o Orçamento"
                    description="Seu orçamento completo fica pronto em minutos. Você pode revisar, ajustar e fechar o pedido quando quiser."
                />
            </Grid>

            {/* CTA */}
            <div className="text-center">
                <Link
                    href="/listas/nova"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1"
                >
                    Começar Agora <ArrowRight className="w-6 h-6" />
                </Link>
                <p className="mt-6 text-sm font-medium text-gray-500">
                    🔒 Processamento seguro e gratuito para orçamentos
                </p>
            </div>
        </Section>
    )
}
