'use client'

import Link from 'next/link'
import {
  Upload,
  CheckCircle2,
  FileText,
  Clock,
  DollarSign,
  Shield,
  GraduationCap,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { ButtonPrimary, ButtonSecondary } from '@/components/ui/button-variants'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slideUp">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Há 76 anos facilitando sua vida</span>
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Facilite a Volta às Aulas
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Envie sua lista de materiais e receba um <span className="text-brand-blue-500 font-semibold">orçamento completo em minutos</span>!
                Economia de tempo e os melhores preços em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/listas/nova">
                  <ButtonPrimary className="w-full sm:w-auto">
                    <Upload className="w-5 h-5" />
                    Enviar Minha Lista
                  </ButtonPrimary>
                </Link>
                <Link href="/produtos">
                  <ButtonSecondary className="w-full sm:w-auto">
                    Ver Catálogo
                  </ButtonSecondary>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success-500" />
                  <span>Desde 1950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-blue-500" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-info-500" />
                  <span>Entrega Rápida</span>
                </div>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative hidden lg:block animate-slideUp" style={{ animationDelay: '100ms' }}>
              <div className="relative aspect-square rounded-2xl bg-brand-blue-50 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-500/10 to-brand-red-500/10 rounded-2xl"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <GraduationCap className="w-48 h-48 text-brand-blue-500 mx-auto mb-6" />
                    <p className="text-2xl font-heading font-bold text-gray-800">O Melhor Pra Você</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em apenas 3 passos simples, você tem seu orçamento completo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="relative text-center animate-slideUp" style={{ animationDelay: '0ms' }}>
              <div className="w-16 h-16 bg-brand-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-blue-md">
                1
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-brand-blue-200 transition-colors">
                <Upload className="w-12 h-12 text-brand-blue-500 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Envie Sua Lista
                </h3>
                <p className="text-gray-600">
                  Faça upload da lista de materiais em PDF, Excel ou Word
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative text-center animate-slideUp" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-brand-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-blue-md">
                2
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-brand-blue-200 transition-colors">
                <CheckCircle2 className="w-12 h-12 text-success-500 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Matching Automático
                </h3>
                <p className="text-gray-600">
                  Nossa IA identifica cada item e encontra os produtos correspondentes
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative text-center animate-slideUp" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-brand-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-blue-md">
                3
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-brand-blue-200 transition-colors">
                <FileText className="w-12 h-12 text-info-500 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Receba o Orçamento
                </h3>
                <p className="text-gray-600">
                  Orçamento completo em PDF/Excel com todos os produtos e preços
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/listas/nova">
              <ButtonPrimary>
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Por Que Escolher a Casa e Lazer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tradição, qualidade e tecnologia para facilitar suas compras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefício 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn">
              <div className="w-12 h-12 bg-brand-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Economia de Tempo
              </h3>
              <p className="text-gray-600">
                Não perca tempo visitando várias lojas. Encontre tudo em um só lugar.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: '50ms' }}>
              <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-success-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Preços Competitivos
              </h3>
              <p className="text-gray-600">
                Os melhores preços do mercado com a qualidade Casa e Lazer.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-info-50 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-info-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Produtos de Qualidade
              </h3>
              <p className="text-gray-600">
                Materiais escolares de marcas reconhecidas e com garantia.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: '150ms' }}>
              <div className="w-12 h-12 bg-brand-red-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-red-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                76 Anos de Tradição
              </h3>
              <p className="text-gray-600">
                Desde 1950 atendendo famílias com excelência e confiança.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-warning-50 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-warning-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Parceria com Escolas
              </h3>
              <p className="text-gray-600">
                Trabalhamos com as principais escolas da região.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn" style={{ animationDelay: '250ms' }}>
              <div className="w-12 h-12 bg-brand-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Equipe pronta para te ajudar em todas as etapas da compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-cta text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Pronto para Facilitar Suas Compras?
            </h2>
            <p className="text-xl mb-8 text-brand-blue-50">
              Junte-se a milhares de famílias que já confiam na Casa e Lazer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/listas/nova">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-lg bg-white text-brand-blue-500 hover:bg-gray-50 active:bg-gray-100 transition-all duration-normal shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <Upload className="w-6 h-6" />
                  Enviar Lista Agora
                </button>
              </Link>
              <Link href="/produtos">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-lg bg-transparent text-white border-2 border-white hover:bg-white/10 active:bg-white/20 transition-all duration-normal w-full sm:w-auto">
                  Ver Catálogo Completo
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>

            {/* Informações da Loja Física */}
            <div className="border-t border-brand-blue-400/30 pt-12">
              <h3 className="font-heading font-bold text-xl mb-6">Visite Nossa Loja Física</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left md:text-center">
                <div className="flex md:flex-col items-start md:items-center gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-brand-blue-100 text-sm">Rua Principal, 123 - Centro</p>
                  </div>
                </div>
                <div className="flex md:flex-col items-start md:items-center gap-3">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-brand-blue-100 text-sm">(11) 1234-5678</p>
                  </div>
                </div>
                <div className="flex md:flex-col items-start md:items-center gap-3">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-brand-blue-100 text-sm">contato@casaelazer.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
