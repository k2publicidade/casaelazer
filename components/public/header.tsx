'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Search } from 'lucide-react'
import { useState } from 'react'
import { useUser } from '@/hooks/use-user'
import Image from 'next/image'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Lojas', href: '/lojas' },
  { name: 'Departamentos', href: '/produtos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
]

export function PublicHeader() {
  const pathname = usePathname()
  const { user, isAdmin, isSchool } = useUser()

  return (
    <div className="w-full relative z-50">
      {/* Top Bar - Dark Blue/Slate as per reference */}
      <div className="bg-[#0f172a] text-white py-2.5 text-xs font-medium hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:contato@casaelazer.com.br" className="flex items-center gap-2 hover:text-red-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>contato@casaelazer.com.br</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>(21) 4004-1234</span>
            </div>
            <Link href="/lojas" className="flex items-center gap-2 hover:text-red-400 transition-colors group">
              <MapPin className="w-3.5 h-3.5 text-red-500 group-hover:animate-bounce" />
              <span>Nossas Lojas (16 Unidades)</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/10 pr-4 mr-1">
              <a href="#" className="hover:text-red-400 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-red-400 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-red-400 transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
            <Link href="/listas/nova" className="hover:text-red-400 transition-colors">
              Enviar Lista
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 md:static">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo-blue.png"
              alt="Casa & Lazer Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain max-w-[150px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-blue-600 ${pathname === item.href
                  ? 'text-blue-600'
                  : 'text-slate-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/listas/nova"
              className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/20 active:scale-95 flex items-center gap-2"
            >
              Orçamento Rápido
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            </Link>
          </div>

        </nav>



      </header>
    </div>
  )
}
