# Design da Homepage Institucional Moderna - Casa e Lazer

**Data:** 2026-01-08
**Versão:** 1.0
**Status:** Aprovado para implementação

## Contexto

Transformar o site atual em um **portal institucional moderno** para a Casa e Lazer, empresa tradicional de materiais escolares desde 1950 (76 anos de história). O objetivo é criar uma presença digital que reflita tradição + inovação tecnológica, com foco em catálogo digital e sistema de orçamentos automatizado via IA.

**Importante:** Não é um e-commerce. Foco em consulta de produtos e geração de orçamentos.

---

## Identidade Visual

### Cores da Marca
- **Azul Primário:** `#0066FF` - Confiança, tecnologia, profissionalismo
- **Vermelho Accent:** `#FF0000` - Energia, tradição, destaque
- **Neutros:** Escala de cinzas do design system existente
- **Backgrounds:** Brancos, azul claro (`#E6F0FF`), cinza claro (`#F9FAFB`)

### Tipografia
- **Headings:** Poppins (Bold 600-700)
- **Body:** Inter (Regular 400-500)
- **Hierarquia:**
  - H1: 3.75rem (60px) - Hero titles
  - H2: 2.25rem (36px) - Section titles
  - H3: 1.5rem (24px) - Subsection titles
  - Body: 1rem (16px) - Texto padrão
  - Small: 0.875rem (14px) - Legendas

### Espaçamento
- **Seções:** 80-120px padding vertical
- **Containers:** max-width 1280px (7xl)
- **Grid gaps:** 24-32px
- **Card padding:** 24-32px

---

## Estrutura da Homepage

### 1. Header Fixo (Sticky)

**Especificações:**
- Altura: 80px
- Fundo: Branco com sombra suave ao scroll
- Transparente no topo, sólido após 100px de scroll
- Z-index: 50

**Layout:**
```
[Logo Casa e Lazer]  |  [Menu Principal]  |  [Ações]
```

**Menu Principal (centralizado):**
- Início
- Sobre
- Produtos (com mega menu no hover)
- Blog
- Contato

**Mega Menu de Produtos:**
- Trigger: Hover em "Produtos"
- Layout: Grid 3 colunas com categorias
- Animação: Fade in + slide down (200ms)
- Cada categoria:
  - Ícone característico
  - Nome da categoria
  - Contagem de produtos "(N itens)"
  - Link para `/produtos/[categoria-slug]`

**Ações (direita):**
- Ícone de busca (abre modal de pesquisa)
- ~~Botão "Solicitar Orçamento"~~ (removido)

**Mobile:**
- Hamburger menu (lado direito)
- Full screen overlay
- Menu vertical com categorias expansíveis

---

### 2. Hero Section - "Tradição que Evolui"

**Layout:** Split 60/40 (conteúdo à esquerda, visual à direita)

**Conteúdo (Esquerda):**

```jsx
<Badge>⭐ Desde 1950 - 76 anos de tradição</Badge>

<h1>
  O Melhor Pra Você
  <span>Materiais Escolares com Qualidade e Tecnologia</span>
</h1>

<p className="lead">
  Tradição de 76 anos encontra tecnologia: envie sua lista escolar
  e receba orçamento completo em minutos através do nosso sistema
  inteligente de matching.
</p>

<div className="cta-group">
  <Button primary href="/listas/nova">
    📤 Enviar Minha Lista
  </Button>
  <Button outline href="/produtos">
    🔍 Ver Catálogo
  </Button>
</div>

<TrustBadges>
  <Badge>✓ Entrega rápida</Badge>
  <Badge>✓ Melhores marcas</Badge>
  <Badge>✓ Atendimento personalizado</Badge>
</TrustBadges>
```

**Visual (Direita):**
- Ilustração ou foto de alta qualidade: estudantes + materiais escolares
- Formas geométricas sutis em azul/vermelho como background decorativo
- Efeito parallax suave no scroll (velocidade 0.5x)
- Imagem responsiva (oculta em mobile)

**Especificações Técnicas:**
- Altura mínima: 600px (desktop), 500px (mobile)
- Padding vertical: 120px (desktop), 60px (mobile)
- Background: Gradiente sutil azul claro → branco
- Animações: Fade in + slide up ao carregar (300ms stagger)

---

### 3. Sistema de Listas - "Facilite sua Volta às Aulas"

**Background:** Azul claro (`#E6F0FF`)
**Padding:** 80px vertical

**Estrutura:**

```
<SectionTitle centered>
  Facilite sua Volta às Aulas
</SectionTitle>

<Subtitle centered>
  Sistema inteligente que transforma sua lista escolar em orçamento completo
</Subtitle>

<Grid cols={3} gap={8}>
  <StepCard number={1} icon={Upload}>
    <Title>Envie sua Lista</Title>
    <Description>
      Faça upload da lista de materiais em PDF, Excel ou Word
    </Description>
  </StepCard>

  <StepCard number={2} icon={Brain}>
    <Title>IA Faz o Matching</Title>
    <Description>
      Nosso sistema identifica cada item e encontra os produtos
      correspondentes automaticamente
    </Description>
  </StepCard>

  <StepCard number={3} icon={FileText}>
    <Title>Receba o Orçamento</Title>
    <Description>
      Orçamento completo em minutos, disponível em PDF e Excel
    </Description>
  </StepCard>
</Grid>

<CTA centered>
  <Button large href="/listas/nova">
    Começar Agora →
  </Button>
</CTA>

<VisualDemo>
  <Screenshot desktop src="/mockups/sistema-desktop.png" />
  <Screenshot mobile src="/mockups/sistema-mobile.png" />
</VisualDemo>
```

**Design dos Cards:**
- Fundo: Branco
- Border radius: 16px
- Padding: 32px
- Shadow: Suave, aumenta no hover
- Número do step: Badge circular azul, tamanho 64px
- Ícone: 48px, cor azul primário
- Animação: Hover levanta 4px + shadow mais forte

---

### 4. Números/Estatísticas - "Casa e Lazer em Números"

**Background:** Branco
**Padding:** 80px vertical

**Layout:**

```jsx
<Grid cols={4} gap={6}>
  <StatCard
    number="76"
    label="Anos de Tradição"
    suffix="anos"
    icon={Calendar}
  />

  <StatCard
    number={numberOfStores}
    label="Lojas na Região"
    suffix="lojas"
    icon={Store}
  />

  <StatCard
    number={familiesServed}
    label="Famílias Atendidas"
    suffix="mil"
    icon={Users}
  />

  <StatCard
    number={productsCount}
    label="Produtos em Catálogo"
    suffix="mil"
    icon={Package}
  />
</Grid>
```

**Design do StatCard:**
- Fundo: Gradiente suave (branco → azul claro 5%)
- Border: 1px azul claro
- Border radius: 12px
- Padding: 40px 24px
- Alinhamento: Centralizado

**Número:**
- Fonte: Poppins Bold
- Tamanho: 4rem (64px)
- Cor: Azul primário (#0066FF)
- Animação: Count up ao entrar no viewport (duration 2s, easing ease-out)

**Label:**
- Fonte: Inter Medium
- Tamanho: 1.125rem (18px)
- Cor: Cinza 700

**Ícone:**
- Posição: Background (marca d'água)
- Tamanho: 120px
- Opacity: 0.05
- Cor: Azul primário

**Responsividade:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna

---

### 5. Produtos em Destaque

**Background:** Cinza claro (`#F9FAFB`)
**Padding:** 100px vertical

**Estrutura:**

```jsx
<SectionTitle>Produtos em Destaque</SectionTitle>
<Subtitle>As melhores marcas do mercado</Subtitle>

<ProductGrid cols={4} gap={6}>
  {featuredProducts.map(product => (
    <ProductCard
      key={product.id}
      image={product.image_url}
      category={product.category}
      name={product.name}
      price={product.price}
      href={`/produtos/${product.category_slug}/${product.slug}`}
    />
  ))}
</ProductGrid>

<CTA centered>
  <Button outline href="/produtos">
    Ver Catálogo Completo →
  </Button>
</CTA>
```

**ProductCard Design:**

```
┌─────────────────────┐
│   [Imagem 1:1]     │ ← Hover: zoom 1.05x (300ms)
│   Badge categoria   │
├─────────────────────┤
│ Nome do Produto     │ ← 2 linhas max, ellipsis
│ (truncate)          │
│                     │
│ R$ 99,90           │ ← Bold, tamanho grande
│                     │
│ Ver detalhes →     │ ← Aparece no hover
└─────────────────────┘
```

**Especificações:**
- Aspect ratio imagem: 1:1 (square)
- Border radius: 12px
- Background: Branco
- Padding: 16px
- Shadow: sm, hover → md
- Transição: all 300ms ease

**Badge de Categoria:**
- Posição: Absolute, top 12px, left 12px
- Background: Azul primário com 90% opacity
- Cor texto: Branco
- Padding: 4px 12px
- Border radius: 6px
- Font size: 12px

**Preço:**
- Cor: Azul primário
- Font weight: 700
- Font size: 1.5rem (24px)

**Sem botão "Adicionar ao Carrinho"** - apenas link para detalhes

**Responsividade:**
- Desktop: 4 colunas
- Tablet: 2 colunas
- Mobile: 1 coluna

**Query Supabase:**
```sql
SELECT * FROM products
WHERE active = true
AND image_url IS NOT NULL
ORDER BY created_at DESC
LIMIT 8;
```

---

### 6. Navegação por Categorias

**Background:** Branco
**Padding:** 100px vertical

**Estrutura:**

```jsx
<SectionTitle centered>
  Explore por Categoria
</SectionTitle>

<CategoryGrid cols={3} rows={2} gap={6}>
  <CategoryCard
    title="Cadernos e Papelaria"
    icon={Notebook}
    image="/categories/cadernos.jpg"
    count={productCountByCategory.cadernos}
    href="/produtos/cadernos-papelaria"
  />

  <CategoryCard
    title="Material Escolar"
    icon={Pencil}
    image="/categories/material-escolar.jpg"
    count={productCountByCategory.material}
    href="/produtos/material-escolar"
  />

  <CategoryCard
    title="Mochilas e Estojos"
    icon={Backpack}
    image="/categories/mochilas.jpg"
    count={productCountByCategory.mochilas}
    href="/produtos/mochilas-estojos"
  />

  <CategoryCard
    title="Livros e Didáticos"
    icon={Book}
    image="/categories/livros.jpg"
    count={productCountByCategory.livros}
    href="/produtos/livros-didaticos"
  />

  <CategoryCard
    title="Arte e Criatividade"
    icon={Palette}
    image="/categories/arte.jpg"
    count={productCountByCategory.arte}
    href="/produtos/arte-criatividade"
  />

  <CategoryCard
    title="Informática e Tecnologia"
    icon={Laptop}
    image="/categories/tecnologia.jpg"
    count={productCountByCategory.tecnologia}
    href="/produtos/informatica-tecnologia"
  />
</CategoryGrid>
```

**CategoryCard Design:**

```
┌─────────────────────────────┐
│                             │
│    [Background Image]       │
│    [Overlay azul 40%]       │
│                             │
│    [Ícone 64px - branco]   │
│                             │
│    Categoria Title          │
│    (N itens)               │
│                             │
└─────────────────────────────┘
```

**Especificações:**
- Altura: 280px
- Border radius: 16px
- Position: Relative
- Overflow: Hidden

**Imagem de fundo:**
- Object fit: Cover
- Filter: brightness(0.7) no estado normal
- Filter: brightness(0.5) no hover

**Overlay:**
- Background: `linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.8) 100%)`
- Opacidade aumenta no hover

**Conteúdo:**
- Position: Absolute, bottom 24px, left 24px
- Cor: Branco
- Text shadow: 0 2px 4px rgba(0,0,0,0.3)

**Ícone:**
- Tamanho: 64px
- Cor: Branco
- Margin bottom: 16px

**Título:**
- Font: Poppins Bold
- Tamanho: 1.5rem (24px)

**Contagem:**
- Font: Inter Regular
- Tamanho: 0.875rem (14px)
- Opacity: 0.9

**Animação Hover:**
- Transform: scale(1.05)
- Transition: 400ms ease-out
- Cursor: pointer

**Query Supabase:**
```sql
SELECT
  category,
  COUNT(*) as product_count
FROM products
WHERE active = true
GROUP BY category
ORDER BY product_count DESC;
```

---

### 7. Depoimentos - "O Que Nossos Clientes Dizem"

**Background:** Gradiente azul claro → branco
**Padding:** 100px vertical

**Estrutura:**

```jsx
<SectionTitle centered>
  O Que Nossos Clientes Dizem
</SectionTitle>

<TestimonialCarousel
  autoplay
  interval={5000}
  pauseOnHover
  showDots
  showArrows
>
  <TestimonialCard
    quote="A Casa e Lazer facilitou muito minha vida! Enviei a lista da escola e recebi o orçamento completo em minutos. Tudo organizado e com os melhores preços."
    author="Maria Silva"
    role="Mãe de aluno"
    rating={5}
    avatar="/avatars/maria.jpg"
  />

  <TestimonialCard
    quote="Trabalhamos com a Casa e Lazer há anos. A tradição e qualidade dos produtos, aliada à modernização do sistema de listas, tornam tudo mais prático para os pais."
    author="João Santos"
    role="Diretor escolar"
    rating={5}
    avatar="/avatars/joao.jpg"
  />

  <TestimonialCard
    quote="Atendimento personalizado e produtos de qualidade. A experiência de 76 anos faz toda a diferença. Recomendo!"
    author="Ana Costa"
    role="Cliente há 10 anos"
    rating={5}
    avatar="/avatars/ana.jpg"
  />
</TestimonialCarousel>
```

**TestimonialCard Design:**

```
┌─────────────────────────────────┐
│  [Avatar 64px]                  │
│                                 │
│  "Quote destacado entre aspas   │
│   grandes e com fonte maior"    │
│                                 │
│  ⭐⭐⭐⭐⭐                      │
│                                 │
│  Nome do Cliente                │
│  Perfil/Cargo                   │
└─────────────────────────────────┘
```

**Especificações do Card:**
- Width: 380px
- Background: Branco
- Border radius: 16px
- Padding: 40px
- Shadow: lg
- 3 cards visíveis simultaneamente em desktop

**Avatar:**
- Tamanho: 64px
- Border radius: 50% (circular)
- Border: 3px sólido azul primário
- Fallback: Inicial do nome em círculo colorido

**Quote:**
- Font: Inter Regular
- Tamanho: 1.125rem (18px)
- Line height: 1.6
- Cor: Cinza 700
- Aspas decorativas: ::before e ::after (azul claro, 48px)

**Rating:**
- Estrelas amarelas (#F59E0B)
- Tamanho: 20px
- Margin: 16px 0

**Nome:**
- Font: Poppins SemiBold
- Tamanho: 1rem
- Cor: Cinza 900

**Role:**
- Font: Inter Regular
- Tamanho: 0.875rem
- Cor: Cinza 600

**Navegação do Carrossel:**
- Dots: Abaixo dos cards (12px, azul primário quando ativo)
- Arrows: Laterais (ícones 32px, aparecem no hover)
- Auto-play: 5s interval, pausa no hover

**Responsividade:**
- Desktop: 3 cards visíveis
- Tablet: 2 cards visíveis
- Mobile: 1 card visível

---

### 8. CTA Final - "Visite Nossa Loja"

**Background:** Azul primário (#0066FF) com padrão geométrico sutil
**Padding:** 80px vertical

**Estrutura:**

```jsx
<CTASection background="primary">
  <SectionTitle color="white" centered>
    Tradição e qualidade que você pode ver de perto
  </SectionTitle>

  <Subtitle color="white" opacity={0.9} centered>
    Venha conhecer nossa loja física e receba atendimento personalizado
  </Subtitle>

  <ContactGrid cols={4} gap={6}>
    <ContactCard
      icon={MapPin}
      title="Endereço"
      content="Rua Principal, 123 - Centro"
      content2="São Paulo - SP, 01234-567"
    />

    <ContactCard
      icon={Phone}
      title="Telefone"
      content="(11) 1234-5678"
      content2="(11) 98765-4321"
    />

    <ContactCard
      icon={Mail}
      title="Email"
      content="contato@casaelazer.com.br"
      content2="sac@casaelazer.com.br"
    />

    <ContactCard
      icon={Clock}
      title="Horário"
      content="Seg a Sex: 8h às 18h"
      content2="Sábado: 8h às 13h"
    />
  </ContactGrid>

  <CTA centered>
    <Button
      large
      variant="white"
      href="https://maps.google.com/?q=Casa+e+Lazer"
      target="_blank"
    >
      📍 Ver no Mapa
    </Button>
  </CTA>

  <SocialLinks>
    <SocialIcon platform="instagram" href="https://instagram.com/__casaelazer" />
    <SocialIcon platform="facebook" href="#" />
    <SocialIcon platform="whatsapp" href="https://wa.me/5511123456789" />
  </SocialLinks>
</CTASection>
```

**ContactCard Design:**
- Background: Branco com 10% opacity
- Border: 1px branco com 20% opacity
- Border radius: 12px
- Padding: 24px
- Text color: Branco

**Ícone:**
- Tamanho: 40px
- Cor: Branco
- Margin bottom: 16px

**Title:**
- Font: Poppins SemiBold
- Tamanho: 1.125rem
- Margin bottom: 8px

**Content:**
- Font: Inter Regular
- Tamanho: 0.875rem
- Line height: 1.5
- Opacity: 0.9

**SocialLinks:**
- Layout: Flex horizontal, centralizado
- Gap: 24px
- Margin top: 32px

**SocialIcon:**
- Tamanho: 48px
- Background: Branco com 15% opacity
- Border radius: 50%
- Padding: 12px
- Hover: Background 25% opacity, scale 1.1
- Transition: 200ms

---

### 9. Rodapé (Footer)

**Background:** Cinza escuro (#1F2937)
**Padding:** 60px vertical

**Estrutura:**

```jsx
<Footer>
  <FooterMain>
    <Grid cols={4} gap={8}>
      {/* Coluna 1: Logo + Slogan */}
      <FooterColumn>
        <Logo variant="white" />
        <Tagline>"O Melhor Pra Você"</Tagline>
        <Description>
          Há 76 anos oferecendo materiais escolares de qualidade
          com tradição e inovação tecnológica.
        </Description>
      </FooterColumn>

      {/* Coluna 2: Navegação */}
      <FooterColumn>
        <FooterTitle>Navegação</FooterTitle>
        <FooterLinks>
          <FooterLink href="/">Início</FooterLink>
          <FooterLink href="/sobre">Sobre Nós</FooterLink>
          <FooterLink href="/produtos">Produtos</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/contato">Contato</FooterLink>
          <FooterLink href="/listas/nova">Enviar Lista</FooterLink>
        </FooterLinks>
      </FooterColumn>

      {/* Coluna 3: Categorias */}
      <FooterColumn>
        <FooterTitle>Categorias</FooterTitle>
        <FooterLinks>
          <FooterLink href="/produtos/cadernos-papelaria">
            Cadernos e Papelaria
          </FooterLink>
          <FooterLink href="/produtos/material-escolar">
            Material Escolar
          </FooterLink>
          <FooterLink href="/produtos/mochilas-estojos">
            Mochilas e Estojos
          </FooterLink>
          <FooterLink href="/produtos/livros-didaticos">
            Livros e Didáticos
          </FooterLink>
          <FooterLink href="/produtos/arte-criatividade">
            Arte e Criatividade
          </FooterLink>
        </FooterLinks>
      </FooterColumn>

      {/* Coluna 4: Contato */}
      <FooterColumn>
        <FooterTitle>Contato</FooterTitle>
        <FooterContact>
          <ContactItem icon={MapPin}>
            Rua Principal, 123<br/>
            Centro - São Paulo/SP
          </ContactItem>
          <ContactItem icon={Phone}>
            (11) 1234-5678
          </ContactItem>
          <ContactItem icon={Mail}>
            contato@casaelazer.com.br
          </ContactItem>
        </FooterContact>

        <SocialLinks>
          <SocialIcon platform="instagram" size="sm" />
          <SocialIcon platform="facebook" size="sm" />
          <SocialIcon platform="whatsapp" size="sm" />
        </SocialLinks>
      </FooterColumn>
    </Grid>
  </FooterMain>

  <FooterBottom>
    <Copyright>
      © 2026 Casa e Lazer. Todos os direitos reservados.
    </Copyright>
    <LegalLinks>
      <Link href="/privacidade">Política de Privacidade</Link>
      <Separator>•</Separator>
      <Link href="/termos">Termos de Uso</Link>
    </LegalLinks>
  </FooterBottom>
</Footer>
```

**Especificações de Estilo:**

**FooterTitle:**
- Font: Poppins SemiBold
- Tamanho: 1.125rem
- Cor: Branco
- Margin bottom: 20px

**FooterLink:**
- Font: Inter Regular
- Tamanho: 0.875rem
- Cor: Cinza 400
- Line height: 2
- Hover: Cor → Branco, text-decoration → underline

**Description:**
- Font: Inter Regular
- Tamanho: 0.875rem
- Cor: Cinza 400
- Line height: 1.6
- Margin top: 16px

**ContactItem:**
- Display: Flex
- Gap: 12px
- Margin bottom: 12px
- Ícone: 16px, cinza 400
- Texto: 0.875rem, cinza 400

**FooterBottom:**
- Border top: 1px cinza 700
- Padding top: 24px
- Margin top: 48px
- Display: Flex
- Justify: Space between
- Align: Center

**Copyright:**
- Font: Inter Regular
- Tamanho: 0.875rem
- Cor: Cinza 500

**LegalLinks:**
- Display: Flex
- Gap: 16px
- Font: Inter Regular
- Tamanho: 0.875rem
- Cor: Cinza 500

**Responsividade:**
- Desktop: 4 colunas
- Tablet: 2 colunas (2x2)
- Mobile: 1 coluna (stack)

---

## Performance e Otimizações

### Imagens
- Usar Next.js Image component para otimização automática
- Formato: WebP com fallback para JPG/PNG
- Lazy loading em todas as imagens abaixo do fold
- Sizes attribute configurado corretamente
- Placeholder blur para melhor UX

### Animações
- Intersection Observer para animações on-scroll
- Preferir transforms e opacity (GPU-accelerated)
- Respeitar prefers-reduced-motion
- Throttle scroll listeners

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Loading Strategy
- Critical CSS inline
- Fontes preload via next/font
- Above-the-fold content prioritizado
- Lazy load components não críticos

---

## Acessibilidade (WCAG 2.1 AA)

### Navegação
- Skip to main content link
- Navegação por teclado em todos os elementos interativos
- Focus visible em todos os controles
- ARIA labels em ícones e botões sem texto

### Contraste
- Texto normal: ratio mínimo 4.5:1
- Texto grande: ratio mínimo 3:1
- Verificar todos os pares de cores

### Semântica
- HTML semântico (header, nav, main, section, footer)
- Headings hierárquicos (h1 → h2 → h3)
- Alt text descritivo em todas as imagens
- ARIA landmarks apropriados

### Interatividade
- Estados de hover, focus e active visíveis
- Mensagens de erro claras e associadas aos campos
- Loading states para operações assíncronas
- Timeout adequado para auto-play do carrossel

---

## SEO

### Meta Tags
```html
<title>Casa e Lazer - Materiais Escolares desde 1950 | Sistema de Listas Inteligente</title>
<meta name="description" content="Casa e Lazer: 76 anos de tradição em materiais escolares. Envie sua lista e receba orçamento completo em minutos com nosso sistema inteligente. As melhores marcas com qualidade garantida.">
<meta name="keywords" content="materiais escolares, lista escolar, papelaria, cadernos, mochilas, volta às aulas, são paulo">

<!-- Open Graph -->
<meta property="og:title" content="Casa e Lazer - Materiais Escolares desde 1950">
<meta property="og:description" content="Sistema inteligente de listas escolares. Envie sua lista e receba orçamento completo em minutos.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://casaelazer.com.br">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Casa e Lazer - Materiais Escolares">
<meta name="twitter:description" content="76 anos de tradição + tecnologia. Sistema inteligente de listas escolares.">
<meta name="twitter:image" content="/twitter-card.jpg">
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Casa e Lazer",
  "description": "Loja de materiais escolares desde 1950",
  "foundingDate": "1950",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Principal, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01234-567",
    "addressCountry": "BR"
  },
  "telephone": "+55-11-1234-5678",
  "email": "contato@casaelazer.com.br",
  "url": "https://casaelazer.com.br",
  "sameAs": [
    "https://www.instagram.com/__casaelazer/",
    "https://www.facebook.com/casaelazer"
  ]
}
```

### Sitemap
Gerar sitemap.xml automaticamente incluindo:
- Homepage
- Páginas institucionais
- Categorias de produtos
- Produtos individuais (paginado)
- Posts de blog

---

## Métricas de Sucesso

### KPIs Primários
- Taxa de conversão: Envio de listas
- Tempo médio na página (target: > 2min)
- Taxa de rejeição (target: < 40%)
- Páginas por sessão (target: > 3)

### Eventos para Tracking (Google Analytics 4)
- `view_home` - Pageview da homepage
- `click_cta_send_list` - Clique em "Enviar Minha Lista"
- `click_cta_catalog` - Clique em "Ver Catálogo"
- `view_category` - Visualização de categoria
- `view_product` - Visualização de produto
- `click_contact` - Clique em informações de contato
- `social_click` - Clique em redes sociais
- `scroll_depth` - Profundidade de scroll (25%, 50%, 75%, 100%)

---

## Próximas Páginas (Escopo do Projeto)

Após a homepage, implementar na seguinte ordem:

1. **Sobre** (`/sobre`) - História, timeline, valores, equipe
2. **Catálogo** (`/produtos`) - Listagem com filtros e busca
3. **Categoria** (`/produtos/[categoria]`) - Produtos por categoria
4. **Produto** (`/produtos/[categoria]/[slug]`) - Página individual
5. **Contato** (`/contato`) - Formulário + mapa
6. **Blog** (`/blog`) - Listagem de posts
7. **Post** (`/blog/[slug]`) - Post individual
8. **Landing Orçamento** (`/orcamento`) - Destacar sistema de listas

---

## Notas de Implementação

### Componentes Reutilizáveis
Criar biblioteca de componentes base:
- `Button` (variants: primary, outline, ghost, white)
- `Card` (base para product, testimonial, category, stat)
- `Section` (wrapper com padding/margin consistente)
- `Container` (max-width 1280px, padding responsivo)
- `Grid` (sistema flexível de colunas)
- `Badge` (chips, tags, labels)
- `Icon` (wrapper para Lucide icons com tamanhos padrão)

### Variáveis CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: #0066FF;
  --color-accent: #FF0000;
  --color-gray-50: #F9FAFB;
  --color-gray-900: #111827;

  /* Spacing */
  --spacing-section: 100px;
  --spacing-section-mobile: 60px;
  --container-max-width: 1280px;
  --container-padding: 1rem;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-normal: 300ms ease-out;
  --transition-slow: 500ms ease-out;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Estado da Implementação
- ✅ Design system configurado (tailwind.config.ts)
- ✅ Fontes carregadas (Poppins + Inter)
- ✅ Homepage básica criada (necessita modernização)
- ⏳ Componentes específicos da homepage (a criar)
- ⏳ Integração com dados reais do Supabase
- ⏳ Otimizações de performance
- ⏳ Testes de acessibilidade

---

**Documento aprovado para implementação em:** 2026-01-08
**Responsável:** Claude (Sonnet 4.5)
**Revisão:** Aprovado pelo cliente
