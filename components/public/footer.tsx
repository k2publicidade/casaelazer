import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export function PublicFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <ShoppingBag className="h-5 w-5" />
              <span>Casa e Lazer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Encontre todos os materiais escolares da sua lista em um só lugar.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-foreground">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/listas/nova" className="text-muted-foreground hover:text-foreground">
                  Criar Lista
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 Endereço da Loja</li>
              <li>📞 (XX) XXXX-XXXX</li>
              <li>📱 (XX) XXXXX-XXXX</li>
              <li>✉️ contato@casaelazer.com.br</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Casa e Lazer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
