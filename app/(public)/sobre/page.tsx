import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Zap, 
  Package, 
  Users,
  Phone,
  MapPin
} from 'lucide-react'
import { TimelineItem } from '@/components/about/timeline-item'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Sobre Nós - 76 Anos de História | Casa e Lazer',
  description: 'Conheça a história da Casa e Lazer, referência em materiais escolares e papelaria no Rio de Janeiro desde 1950. Tradição, inovação e atendimento excepcional.',
  keywords: 'casa e lazer história, sobre casa e lazer, materiais escolares rj, papelaria tradicional, casa e lazer rio de janeiro',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
              76 Anos de História
            </Badge>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
              Tradição e Inovação<br />em Cada Detalhe
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Desde 1950, a Casa e Lazer é referência em materiais escolares, papelaria e utilidades domésticas no Rio de Janeiro. Combinamos décadas de experiência com tecnologia de ponta para oferecer o melhor atendimento.
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                Nossa Trajetória
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-4">
                76 Anos Construindo História
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Uma jornada de evolução, crescimento e compromisso com nossos clientes
              </p>
            </div>
            <div className="space-y-0">
              <TimelineItem
                year="1950"
                title="Fundação da Casa e Lazer"
                description="Início das atividades no Rio de Janeiro, focando em materiais escolares e papelaria de qualidade."
              />
              <TimelineItem
                year="1985"
                title="Expansão Estratégica"
                description="Abertura de novas unidades e ampliação do catálogo de produtos para atender toda a família."
              />
              <TimelineItem
                year="2010"
                title="Era Digital"
                description="Modernização com presença online e implementação de sistema de gestão integrado."
              />
              <TimelineItem
                year="2020"
                title="Catálogo Digital Completo"
                description="Digitalização completa do catálogo com milhares de produtos acessíveis online."
              />
              <TimelineItem
                year="2025"
                title="Tecnologia com IA"
                description="Implementação de inteligência artificial para matching automático de listas escolares em minutos."
                isLast
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">
              Nossos Pilares
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900">
              O Que Nos Move
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600 leading-relaxed">
                Atuar no varejo de materiais e utilidades com foco total na satisfação do cliente, oferecendo qualidade, variedade e atendimento excepcional.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser a referência em varejo no Rio de Janeiro, reconhecida pela excelência no atendimento, inovação e compromisso com nossos clientes.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:scale-105">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">Nossos Valores</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  Responsabilidade
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  Ética
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  Inovação
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  Crescimento
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  Satisfação do Cliente
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">
              Resultados
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900">
              Números que Falam por Si
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-blue-500 mb-2">76</div>
              <div className="text-gray-600 font-medium">Anos de História</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-blue-500 mb-2">50.000+</div>
              <div className="text-gray-600 font-medium">Produtos no Catálogo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-blue-500 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Lojas no Rio de Janeiro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-blue-500 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-white/90 font-bold uppercase tracking-widest text-xs mb-2 block">
              Por Que Escolher
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white">
              Casa e Lazer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Tradição e Confiança</h3>
              <p className="text-slate-600">
                76 anos de experiência e credibilidade no mercado carioca
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Tecnologia Inovadora</h3>
              <p className="text-slate-600">
                IA para matching de listas escolares em minutos
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Variedade Incomparável</h3>
              <p className="text-slate-600">
                Mais de 50 mil produtos para todas as necessidades
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Atendimento Personalizado</h3>
              <p className="text-slate-600">
                Equipe experiente e dedicada à sua satisfação
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </section>

      {/* CTA Final Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Pronto para Conhecer Nossa História de Perto?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Visite uma de nossas lojas ou entre em contato. Estamos prontos para atender você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-50 font-bold"
              >
                <Link href="/contato">
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold"
              >
                <Link href="/lojas">
                  <MapPin className="mr-2 h-5 w-5" />
                  Nossas Lojas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
