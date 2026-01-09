import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Share2, Instagram, Facebook, Youtube } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Contato - Fale Conosco | Casa e Lazer',
  description: 'Entre em contato com a Casa e Lazer. Telefone, WhatsApp, e-mail e endereços das lojas no Rio de Janeiro.',
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">Estamos Aqui</Badge>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-slate-900 mb-6">Fale Conosco</h1>
            <p className="text-lg text-slate-600">Nossa equipe está pronta para atender você.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-sm text-gray-500 uppercase mb-2">Central</h3>
              <p className="font-semibold text-slate-900">(21) 3122-1234</p>
              <p className="text-sm text-gray-600">Seg a Sex, 8h-18h</p>
            </div>
            <div className="bg-white border rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-sm text-gray-500 uppercase mb-2">WhatsApp</h3>
              <p className="font-semibold text-slate-900">(21) 98765-4321</p>
            </div>
            <div className="bg-white border rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-brand-blue-500" />
              </div>
              <h3 className="font-bold text-sm text-gray-500 uppercase mb-2">E-mail</h3>
              <p className="font-semibold text-slate-900">contato@casaelazer.com.br</p>
            </div>
            <div className="bg-white border rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-sm text-gray-500 uppercase mb-2">Matriz</h3>
              <p className="font-semibold text-slate-900">Rio de Janeiro - RJ</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="font-heading font-bold text-2xl mb-2">Envie Sua Mensagem</h3>
                <p className="text-gray-600 mb-8">Preencha o formulário abaixo.</p>
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Clock className="w-6 h-6 text-brand-blue-500 mb-4" />
                <h4 className="font-bold mb-4">Horário</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Seg-Sex:</span><span>8h-18h</span></div>
                  <div className="flex justify-between"><span>Sábado:</span><span>9h-13h</span></div>
                  <div className="flex justify-between"><span>Domingo:</span><span>Fechado</span></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <Share2 className="w-6 h-6 text-red-600 mb-4" />
                <h4 className="font-bold mb-4">Redes Sociais</h4>
                <div className="space-y-3">
                  <a href="https://instagram.com/__casaelazer" className="flex items-center gap-3 hover:text-brand-blue-500">
                    <Instagram className="w-5 h-5" /><span>@__casaelazer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}