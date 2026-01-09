import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ShoppingBag } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Casa & Lazer Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain max-w-[150px] opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              A sua loja completa de utilidades domésticas, decoração, brinquedos e papelaria. Tudo para sua casa com os melhores preços do Rio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Departamentos</h3>
            <ul className="space-y-4">
              <li><Link href="/catalog?category=cadernos" className="hover:text-blue-500 transition-colors">Cadernos e Papelaria</Link></li>
              <li><Link href="/catalog?category=mochilas" className="hover:text-blue-500 transition-colors">Mochilas e Estojos</Link></li>
              <li><Link href="/catalog?category=escrita" className="hover:text-blue-500 transition-colors">Escrita e Desenho</Link></li>
              <li><Link href="/catalog?category=livros" className="hover:text-blue-500 transition-colors">Livros Didáticos</Link></li>
              <li><Link href="/catalog?category=tecnologia" className="hover:text-blue-500 transition-colors">Tecnologia Escolar</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Institucional</h3>
            <ul className="space-y-4">
              <li><Link href="/sobre" className="hover:text-blue-500 transition-colors">Nossa História</Link></li>
              <li><Link href="/lojas" className="hover:text-blue-500 transition-colors">Nossas Lojas</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog & Dicas</Link></li>
              <li><Link href="/trabalhe-conosco" className="hover:text-blue-500 transition-colors">Trabalhe Conosco</Link></li>
              <li><Link href="/privacidade" className="hover:text-blue-500 transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-6">Fique por dentro de promoções e listas escolares.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-600 transition-all outline-none"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Casa e Lazer. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-gray-500">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Guaratinguetá, SP
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (12) 3122-1234
            </span>
          </div>
          <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            Feito com ❤️ para sua educação
          </div>
        </div>
      </Container>
    </footer>
  )
}
