import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, Search, FileText, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Encontre todos os materiais escolares
            <span className="block text-primary mt-2">em um só lugar</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faça upload da lista da escola e descubra instantaneamente quais produtos temos disponíveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/listas/nova">
                Criar Minha Lista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/produtos">Ver Catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>1. Faça Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Envie a lista de materiais da escola em PDF, Excel ou Word
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2. Encontramos os Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa IA identifica automaticamente quais itens temos em estoque
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>3. Baixe o Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receba um PDF ou Excel com os produtos e preços para comprar na loja
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para facilitar suas compras?
          </h2>
          <p className="text-lg opacity-90">
            Crie sua lista agora e veja quais produtos temos disponíveis
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/listas/nova">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Por que escolher a Casa e Lazer?</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <strong>Busca Inteligente:</strong> Nossa IA encontra produtos mesmo com nomes diferentes
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <strong>Economia de Tempo:</strong> Não precisa procurar item por item manualmente
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <strong>Preços Transparentes:</strong> Veja todos os valores antes de ir à loja
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1">✓</div>
                  <div>
                    <strong>Catálogo Completo:</strong> Mais de 1000 produtos disponíveis
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">[Imagem ilustrativa]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
