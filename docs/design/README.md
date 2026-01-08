# Casa e Lazer - Design System e Homepage

Documentação completa do design da homepage do sistema de listas de materiais escolares.

## Arquivos

### 1. `homepage-design.md` (Principal)
**Documento completo de 800+ linhas** com:

- **Descoberta e Análise**: Público-alvo, objetivos de negócio, análise de identidade visual
- **Design System Completo**:
  - Paleta de cores (azul, vermelho, neutros, funcionais)
  - Tipografia (Poppins + Inter com escala responsiva)
  - Espaçamento (sistema baseado em 4px)
  - Componentes UI (botões, cards, inputs, badges)
  - Iconografia (Lucide React)
  - Animações e transições
- **Wireframes Detalhados**: Todas as seções da homepage
  - Header/Navigation (desktop + mobile)
  - Hero Section
  - Como Funciona (3 passos)
  - Benefícios (6 cards)
  - Catálogo em Destaque (8 produtos)
  - Escolas Parceiras
  - Sobre Casa e Lazer
  - Blog Recente (3 posts)
  - CTA Final + Informações da Loja
  - Footer completo
- **Layouts Responsivos**: Mobile, tablet, desktop com breakpoints
- **Acessibilidade WCAG 2.1 AA**: Completa e detalhada
- **Performance**: Otimizações e métricas alvo
- **SEO**: Metadata, structured data, sitemap
- **Checklist de Implementação**: Passo a passo

### 2. `tailwind.config.example.js`
**Configuração completa do Tailwind CSS** com:
- Todas as cores do design system
- Fontes customizadas
- Escala tipográfica responsiva
- Sombras customizadas (incluindo blue-shadow, red-shadow)
- Animações (fadeIn, slideUp, slideDown, scaleIn)
- Gradientes pré-definidos
- Plugins necessários
- Utilidades customizadas

### 3. `components-examples.tsx`
**Componentes React prontos para uso** incluindo:

**Botões:**
- `ButtonPrimary` - CTA principal (azul)
- `ButtonSecondary` - CTA secundário (outline)
- `ButtonAccent` - CTA destaque (vermelho)
- `ButtonGhost` - Sutil

**Cards:**
- `ProductCard` - Card de produto com imagem, preço, badge
- `FeatureCard` - Card de benefício com ícone
- `StepCard` - Card numerado (Como Funciona)
- `BlogCard` - Card de post de blog

**Formulários:**
- `Input` - Input com label, hint, erro
- `UploadZone` - Drag & drop zone para arquivos

**Outros:**
- `Badge` - Status badges (success, warning, error, info)
- `SectionHeader` - Títulos de seções
- `ComponentShowcase` - Exemplo de uso de todos os componentes

Todos os componentes incluem:
- Acessibilidade completa (ARIA labels, keyboard navigation)
- Estados (hover, focus, active, disabled)
- Transições suaves
- Responsividade
- TypeScript types

## Como Usar

### 1. Setup do Projeto

```bash
# Criar projeto Next.js
npx create-next-app@latest casaelazer --typescript --tailwind --app

# Instalar dependências
npm install lucide-react
npx shadcn-ui@latest init
```

### 2. Configurar Tailwind

Copie o conteúdo de `tailwind.config.example.js` para `tailwind.config.ts` do projeto.

### 3. Configurar Fontes

```tsx
// app/layout.tsx
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
```

### 4. Usar Componentes

```tsx
// Exemplo: Hero Section
import { ButtonPrimary, ButtonSecondary } from '@/components/ui/buttons'

export default function HeroSection() {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-4">
              Facilite a Volta às Aulas
            </h1>
            <p className="font-body text-lg lg:text-xl text-gray-600 mb-8">
              Envie sua lista de materiais e receba orçamento completo em minutos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary>Enviar Minha Lista</ButtonPrimary>
              <ButtonSecondary>Ver Como Funciona</ButtonSecondary>
            </div>
          </div>

          {/* Imagem */}
          <div>
            <img src="/hero-image.jpg" alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Paleta de Cores Rápida

### Brand Colors
- **Azul Principal**: `#0066FF` (`brand-blue-500`)
- **Vermelho Accent**: `#FF0000` (`brand-red-500`)

### Uso
- Backgrounds: `white`, `gray-50`
- Texto primário: `gray-900`
- Texto secundário: `gray-600`
- CTAs: `brand-blue-500` (hover: `brand-blue-600`)
- Links: `brand-blue-500`
- Bordas: `gray-200`

### Funcionais
- Sucesso: `success-500` (#10B981)
- Aviso: `warning-500` (#F59E0B)
- Erro: `error-500` (#EF4444)
- Info: `info-500` (#3B82F6)

## Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet */
md: 768px   /* Tablet Large */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop Large */
2xl: 1536px /* Desktop XL (max-width: 1400px) */
```

## Componentes shadcn/ui Necessários

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add navigation-menu
```

## Assets Necessários

### Imagens
- Hero image (1920x1080)
- 8 fotos de produtos (600x600 cada)
- 8 logos de escolas (400x200 cada)
- Foto loja física (1200x900)
- 3 imagens de blog (1200x630 cada)
- OG image (1200x630)

### Ícones
Já incluídos via Lucide React:
- Upload, CheckCircle2, AlertTriangle, XCircle
- Search, Filter, ShoppingBag, ClipboardList
- GraduationCap, MapPin, Phone, Mail, Clock
- ArrowRight, ExternalLink

## Métricas de Sucesso

### Performance
- Lighthouse Performance: > 90
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Acessibilidade
- Lighthouse Accessibility: > 95
- WCAG 2.1 AA compliant
- Contraste mínimo: 4.5:1 (texto)

### SEO
- Lighthouse SEO: 100
- Metadata completo
- Structured data
- Sitemap

## Próximos Passos

1. **Fase 1**: Setup inicial (Dia 1)
2. **Fase 2**: Componentes base (Dia 1-2)
3. **Fase 3**: Homepage (Dia 2-3)
4. **Fase 4**: Responsividade (Dia 3)
5. **Fase 5**: Acessibilidade (Dia 4)
6. **Fase 6**: Performance (Dia 4)
7. **Fase 7**: SEO (Dia 5)

## Suporte

Para dúvidas ou ajustes no design, consulte:
- `homepage-design.md` - Documentação completa
- `components-examples.tsx` - Implementações de referência
- `tailwind.config.example.js` - Configuração do design system

---

**Design System versão 1.0**
**Criado em:** 2026-01-08
**Status:** ✅ Pronto para implementação
