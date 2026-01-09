# Homepage Institucional Moderna - Plano de Implementação

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implementar homepage institucional moderna para Casa e Lazer com 9 seções completas, focando em tradição + inovação tecnológica.

**Architecture:** Componentes React reutilizáveis + Tailwind CSS + shadcn/ui, integrando com Supabase para produtos em destaque e categorias. Sem e-commerce, foco em catálogo digital e sistema de orçamentos.

**Tech Stack:** Next.js 15 + React 19 + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Lucide Icons

---

## Fase 1: Componentes Base Reutilizáveis

### Task 1: Container Component

**Files:**
- Create: `components/ui/container.tsx`

**Step 1: Create Container component**

```tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn(
      'container mx-auto px-4 max-w-7xl',
      className
    )}>
      {children}
    </Component>
  )
}
```

**Step 2: Verify file exists**

Run: `cat components/ui/container.tsx`
Expected: File content displayed

**Step 3: Commit**

```bash
git add components/ui/container.tsx
git commit -m "feat(ui): add Container component for consistent layout

- Max width 1280px (7xl)
- Responsive padding
- Flexible HTML tag rendering"
```

---

### Task 2: Section Component

**Files:**
- Create: `components/ui/section.tsx`

**Step 1: Create Section component**

```tsx
import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'blue-light' | 'primary'
  padding?: 'normal' | 'large' | 'small'
  id?: string
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  'blue-light': 'bg-blue-50',
  primary: 'bg-blue-600',
}

const paddingStyles = {
  small: 'py-16 md:py-20',
  normal: 'py-20 md:py-24',
  large: 'py-24 md:py-28',
}

export function Section({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = 'normal',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
```

**Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/ui/section.tsx
git commit -m "feat(ui): add Section component with variants

- Background variants (white, gray, blue-light, primary)
- Padding variants (small, normal, large)
- Includes Container wrapper"
```

---

### Task 3: SectionTitle Component

**Files:**
- Create: `components/ui/section-title.tsx`

**Step 1: Create SectionTitle component**

```tsx
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  color?: 'default' | 'white'
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
  children,
  className,
  centered = false,
  color = 'default',
  as: Component = 'h2',
}: SectionTitleProps) {
  return (
    <Component
      className={cn(
        'font-heading font-bold text-3xl md:text-4xl mb-4',
        centered && 'text-center',
        color === 'white' ? 'text-white' : 'text-gray-900',
        className
      )}
    >
      {children}
    </Component>
  )
}
```

**Step 2: Create Subtitle component**

```tsx
interface SubtitleProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  color?: 'default' | 'white'
}

export function Subtitle({
  children,
  className,
  centered = false,
  color = 'default',
}: SubtitleProps) {
  return (
    <p
      className={cn(
        'text-lg mb-8 md:mb-12 max-w-2xl',
        centered && 'mx-auto text-center',
        color === 'white' ? 'text-white/90' : 'text-gray-600',
        className
      )}
    >
      {children}
    </p>
  )
}
```

**Step 3: Export both components**

Add to file:
```tsx
// At the end of the file
export { Subtitle }
```

**Step 4: Commit**

```bash
git add components/ui/section-title.tsx
git commit -m "feat(ui): add SectionTitle and Subtitle components

- Responsive font sizes
- Color variants (default, white)
- Center alignment option
- Flexible heading levels"
```

---

### Task 4: Grid Component

**Files:**
- Create: `components/ui/grid.tsx`

**Step 1: Create Grid component**

```tsx
import { cn } from '@/lib/utils'

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 4 | 6 | 8
  responsive?: boolean
}

const colsStyles = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6',
}

const gapStyles = {
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
}

export function Grid({
  children,
  className,
  cols = 1,
  gap = 6,
  responsive = true,
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        responsive ? colsStyles[cols] : `grid-cols-${cols}`,
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  )
}
```

**Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/ui/grid.tsx
git commit -m "feat(ui): add responsive Grid component

- Cols 1-6 support
- Gap variants (4, 6, 8)
- Responsive by default
- Mobile-first breakpoints"
```

---

### Task 5: Badge Component Enhancement

**Files:**
- Modify: `components/ui/badge.tsx`

**Step 1: Check existing badge**

Run: `cat components/ui/badge.tsx | head -30`
Expected: See existing badge component

**Step 2: Add brand color variants**

Add after existing variants:
```tsx
  brand: "bg-blue-600 text-white hover:bg-blue-700",
  "brand-light": "bg-blue-50 text-blue-700 border border-blue-200",
```

**Step 3: Verify compilation**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 4: Commit**

```bash
git add components/ui/badge.tsx
git commit -m "feat(ui): add brand color variants to Badge

- brand: Blue 600 solid
- brand-light: Blue 50 with border"
```

---

## Fase 2: Hero Section

### Task 6: Hero Section Component

**Files:**
- Create: `components/home/hero-section.tsx`

**Step 1: Create basic structure**

```tsx
import Link from 'next/link'
import { Upload, Search, CheckCircle2, Shield, Clock } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <Section
      background="white"
      padding="large"
      className="relative bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* Content - Left */}
        <div className="space-y-6">
          {/* Badge */}
          <Badge variant="brand-light" className="inline-flex items-center gap-2">
            ⭐ Desde 1950 - 76 anos de tradição
          </Badge>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              O Melhor Pra Você
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-gray-700">
              Materiais Escolares com Qualidade e Tecnologia
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Tradição de 76 anos encontra tecnologia: envie sua lista escolar
            e receba orçamento completo em minutos através do nosso sistema
            inteligente de matching.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/listas/nova"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Upload className="w-5 h-5" />
              Enviar Minha Lista
            </Link>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Search className="w-5 h-5" />
              Ver Catálogo
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Entrega rápida</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Melhores marcas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>

        {/* Visual - Right */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-square rounded-2xl bg-blue-50 p-8 shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10"></div>

            {/* Placeholder content */}
            <div className="relative flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  Imagem ou ilustração
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Estudantes + materiais escolares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
```

**Step 2: Verify compilation**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add components/home/hero-section.tsx
git commit -m "feat(home): implement Hero Section component

- Split layout 60/40
- Badge with tradition highlight
- Dual CTAs (Send List + Catalog)
- Trust badges
- Placeholder for visual
- Fully responsive"
```

---

### Task 7: Integrate Hero into Homepage

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace homepage content**

```tsx
import { HeroSection } from '@/components/home/hero-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* TODO: Add remaining sections */}
    </div>
  )
}
```

**Step 2: Test in browser**

Run: `Open http://localhost:3004 in browser`
Expected: See new Hero Section rendered

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): integrate Hero Section into homepage

- Replace basic homepage with Hero component
- Prepare structure for remaining sections"
```

---

## Fase 3: Sistema de Listas Section

### Task 8: StepCard Component

**Files:**
- Create: `components/home/step-card.tsx`

**Step 1: Create StepCard component**

```tsx
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepCardProps {
  number: number
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div className={cn('relative text-center', className)}>
      {/* Number Badge */}
      <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
        {number}
      </div>

      {/* Card */}
      <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-md">
        <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />

        <h3 className="font-bold text-xl text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add components/home/step-card.tsx
git commit -m "feat(home): add StepCard component for process steps

- Numbered badge (circular, blue)
- Icon display
- Hover effects (border, shadow)
- Fully responsive"
```

---

### Task 9: ListsSystem Section Component

**Files:**
- Create: `components/home/lists-system-section.tsx`

**Step 1: Create section structure**

```tsx
import Link from 'next/link'
import { Upload, Brain, FileText } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { StepCard } from './step-card'

export function ListsSystemSection() {
  return (
    <Section background="blue-light" padding="large">
      <SectionTitle centered>
        Facilite sua Volta às Aulas
      </SectionTitle>

      <Subtitle centered>
        Sistema inteligente que transforma sua lista escolar em orçamento completo
      </Subtitle>

      <Grid cols={3} gap={8} className="mb-12">
        <StepCard
          number={1}
          icon={Upload}
          title="Envie sua Lista"
          description="Faça upload da lista de materiais em PDF, Excel ou Word"
        />

        <StepCard
          number={2}
          icon={Brain}
          title="IA Faz o Matching"
          description="Nosso sistema identifica cada item e encontra os produtos correspondentes automaticamente"
        />

        <StepCard
          number={3}
          icon={FileText}
          title="Receba o Orçamento"
          description="Orçamento completo em minutos, disponível em PDF e Excel"
        />
      </Grid>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/listas/nova"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Começar Agora →
        </Link>
      </div>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`, add after HeroSection:
```tsx
import { ListsSystemSection } from '@/components/home/lists-system-section'

// Inside HomePage return:
<HeroSection />
<ListsSystemSection />
```

**Step 3: Test in browser**

Expected: See blue section with 3 step cards

**Step 4: Commit**

```bash
git add components/home/lists-system-section.tsx app/page.tsx
git commit -m "feat(home): implement Lists System section

- 3-step process explanation
- Blue background
- CTA to start process
- Fully responsive grid"
```

---

## Fase 4: Estatísticas Section

### Task 10: StatCard Component with Count Animation

**Files:**
- Create: `components/home/stat-card.tsx`

**Step 1: Install counter library**

Run: `npm install react-countup --save`

**Step 2: Create StatCard component**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  number: number
  label: string
  suffix?: string
  icon: LucideIcon
  className?: string
}

export function StatCard({
  number,
  label,
  suffix,
  icon: Icon,
  className,
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'relative bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-xl p-8 md:p-10 text-center',
        className
      )}
    >
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Icon className="w-32 h-32 text-blue-600" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="font-heading font-bold text-5xl md:text-6xl text-blue-600 mb-3">
          {isVisible ? (
            <CountUp
              end={number}
              duration={2}
              suffix={suffix ? ` ${suffix}` : ''}
            />
          ) : (
            '0'
          )}
        </div>

        <div className="font-body font-medium text-lg md:text-xl text-gray-700">
          {label}
        </div>
      </div>
    </div>
  )
}
```

**Step 3: Commit**

```bash
git add components/home/stat-card.tsx package.json package-lock.json
git commit -m "feat(home): add StatCard with count-up animation

- Intersection Observer for viewport entry
- CountUp animation (2s duration)
- Background icon watermark
- Gradient background"
```

---

### Task 11: StatsSection Component

**Files:**
- Create: `components/home/stats-section.tsx`

**Step 1: Create section**

```tsx
import { Calendar, Store, Users, Package } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { StatCard } from './stat-card'

export function StatsSection() {
  return (
    <Section background="white" padding="large">
      <SectionTitle centered className="mb-16">
        Casa e Lazer em Números
      </SectionTitle>

      <Grid cols={4} gap={6}>
        <StatCard
          number={76}
          label="Anos de Tradição"
          suffix="anos"
          icon={Calendar}
        />

        <StatCard
          number={5}
          label="Lojas na Região"
          suffix="lojas"
          icon={Store}
        />

        <StatCard
          number={50}
          label="Famílias Atendidas"
          suffix="mil"
          icon={Users}
        />

        <StatCard
          number={10}
          label="Produtos em Catálogo"
          suffix="mil"
          icon={Package}
        />
      </Grid>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`:
```tsx
import { StatsSection } from '@/components/home/stats-section'

// Add after ListsSystemSection:
<StatsSection />
```

**Step 3: Test animation**

Open browser and scroll to section
Expected: Numbers count up when entering viewport

**Step 4: Commit**

```bash
git add components/home/stats-section.tsx app/page.tsx
git commit -m "feat(home): implement Stats section

- 4 stat cards with data
- Count-up animations on scroll
- Responsive 4-col grid
- Placeholder numbers (to be updated)"
```

---

## Fase 5: Produtos em Destaque

### Task 12: ProductCard Component

**Files:**
- Create: `components/home/product-card.tsx`

**Step 1: Create ProductCard**

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  image: string | null
  category: string
  name: string
  price: number
  href: string
  className?: string
}

export function ProductCard({
  image,
  category,
  name,
  price,
  href,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">📦</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="brand" className="text-xs">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl text-blue-600">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </span>

          <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  )
}
```

**Step 2: Commit**

```bash
git add components/home/product-card.tsx
git commit -m "feat(home): add ProductCard component

- Image with hover zoom
- Category badge overlay
- Price formatting (BRL)
- Hover effects
- Fallback emoji for missing images"
```

---

### Task 13: FeaturedProducts Section (Static)

**Files:**
- Create: `components/home/featured-products-section.tsx`

**Step 1: Create section with mock data**

```tsx
import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { ProductCard } from './product-card'

// Mock data - will be replaced with Supabase query
const mockProducts = [
  {
    id: '1',
    name: 'Caderno Universitário 10 Matérias',
    category: 'Cadernos',
    price: 24.90,
    image: null,
    slug: 'caderno-universitario-10-materias',
  },
  {
    id: '2',
    name: 'Mochila Escolar Grande',
    category: 'Mochilas',
    price: 89.90,
    image: null,
    slug: 'mochila-escolar-grande',
  },
  {
    id: '3',
    name: 'Estojo 3 Compartimentos',
    category: 'Estojos',
    price: 34.90,
    image: null,
    slug: 'estojo-3-compartimentos',
  },
  {
    id: '4',
    name: 'Kit Canetas Coloridas 12 Cores',
    category: 'Material Escolar',
    price: 18.90,
    image: null,
    slug: 'kit-canetas-coloridas-12',
  },
  {
    id: '5',
    name: 'Régua 30cm Transparente',
    category: 'Material Escolar',
    price: 5.90,
    image: null,
    slug: 'regua-30cm-transparente',
  },
  {
    id: '6',
    name: 'Cola Branca 90g',
    category: 'Material Escolar',
    price: 4.50,
    image: null,
    slug: 'cola-branca-90g',
  },
  {
    id: '7',
    name: 'Lápis Preto HB Caixa com 12',
    category: 'Material Escolar',
    price: 12.90,
    image: null,
    slug: 'lapis-preto-hb-cx12',
  },
  {
    id: '8',
    name: 'Borracha Branca Macia',
    category: 'Material Escolar',
    price: 2.50,
    image: null,
    slug: 'borracha-branca-macia',
  },
]

export function FeaturedProductsSection() {
  return (
    <Section background="gray" padding="large">
      <SectionTitle centered>Produtos em Destaque</SectionTitle>
      <Subtitle centered>As melhores marcas do mercado</Subtitle>

      <Grid cols={4} gap={6} className="mb-12">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            name={product.name}
            price={product.price}
            href={`/produtos/${product.slug}`}
          />
        ))}
      </Grid>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/produtos"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-colors"
        >
          Ver Catálogo Completo →
        </Link>
      </div>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`:
```tsx
import { FeaturedProductsSection } from '@/components/home/featured-products-section'

// Add after StatsSection:
<FeaturedProductsSection />
```

**Step 3: Test in browser**

Expected: See 8 product cards in 4-column grid

**Step 4: Commit**

```bash
git add components/home/featured-products-section.tsx app/page.tsx
git commit -m "feat(home): implement Featured Products section

- 8 product cards grid
- Mock data (to be replaced with Supabase)
- CTA to catalog
- Gray background section"
```

---

## Fase 6: Navegação por Categorias

### Task 14: CategoryCard Component

**Files:**
- Create: `components/home/category-card.tsx`

**Step 1: Create CategoryCard**

```tsx
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title: string
  icon: LucideIcon
  count: number
  href: string
  image?: string
  className?: string
}

export function CategoryCard({
  title,
  icon: Icon,
  count,
  href,
  image,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative h-[280px] rounded-2xl overflow-hidden',
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent group-hover:from-blue-900/95 transition-colors" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Icon className="w-16 h-16 mb-4 drop-shadow-lg" />

        <h3 className="font-heading font-bold text-2xl mb-2 drop-shadow-md">
          {title}
        </h3>

        <p className="text-sm opacity-90 drop-shadow">
          ({count} itens)
        </p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-colors" />
    </Link>
  )
}
```

**Step 2: Commit**

```bash
git add components/home/category-card.tsx
git commit -m "feat(home): add CategoryCard component

- Blue gradient background
- Icon and title overlay
- Product count display
- Hover scale and border effects
- 280px fixed height"
```

---

### Task 15: CategoriesSection Component

**Files:**
- Create: `components/home/categories-section.tsx`

**Step 1: Create section**

```tsx
import { Notebook, Pencil, Backpack, Book, Palette, Laptop } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { CategoryCard } from './category-card'

// Mock data - will be replaced with Supabase query
const categories = [
  {
    title: 'Cadernos e Papelaria',
    icon: Notebook,
    count: 245,
    href: '/produtos/cadernos-papelaria',
  },
  {
    title: 'Material Escolar',
    icon: Pencil,
    count: 568,
    href: '/produtos/material-escolar',
  },
  {
    title: 'Mochilas e Estojos',
    icon: Backpack,
    count: 123,
    href: '/produtos/mochilas-estojos',
  },
  {
    title: 'Livros e Didáticos',
    icon: Book,
    count: 892,
    href: '/produtos/livros-didaticos',
  },
  {
    title: 'Arte e Criatividade',
    icon: Palette,
    count: 156,
    href: '/produtos/arte-criatividade',
  },
  {
    title: 'Informática e Tecnologia',
    icon: Laptop,
    count: 87,
    href: '/produtos/informatica-tecnologia',
  },
]

export function CategoriesSection() {
  return (
    <Section background="white" padding="large">
      <SectionTitle centered className="mb-16">
        Explore por Categoria
      </SectionTitle>

      <Grid cols={3} gap={6}>
        {categories.map((category) => (
          <CategoryCard
            key={category.href}
            title={category.title}
            icon={category.icon}
            count={category.count}
            href={category.href}
          />
        ))}
      </Grid>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`:
```tsx
import { CategoriesSection } from '@/components/home/categories-section'

// Add after FeaturedProductsSection:
<CategoriesSection />
```

**Step 3: Test in browser**

Expected: See 6 category cards in 3-column grid

**Step 4: Commit**

```bash
git add components/home/categories-section.tsx app/page.tsx
git commit -m "feat(home): implement Categories section

- 6 main categories
- 3-column grid layout
- Mock counts (to be replaced with queries)
- Blue gradient cards with icons"
```

---

## Fase 7: Depoimentos

### Task 16: Install Carousel Library

**Files:**
- Modify: `package.json`

**Step 1: Install embla-carousel for React**

Run: `npm install embla-carousel-react --save`

**Step 2: Verify installation**

Run: `npm list embla-carousel-react`
Expected: Show installed version

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: add embla-carousel-react for testimonials

- Lightweight carousel library
- React hooks support
- Auto-play and loop support"
```

---

### Task 17: TestimonialCard Component

**Files:**
- Create: `components/home/testimonial-card.tsx`

**Step 1: Create component**

```tsx
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating?: number
  avatar?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-8 md:p-10 shadow-lg mx-2',
        className
      )}
    >
      {/* Avatar */}
      <div className="mb-6">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-16 h-16 rounded-full border-3 border-blue-600"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold border-3 border-blue-600">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Quote */}
      <div className="relative mb-6">
        <div className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif">
          "
        </div>
        <p className="text-lg text-gray-700 leading-relaxed relative z-10">
          {quote}
        </p>
        <div className="absolute -bottom-8 -right-2 text-6xl text-blue-100 font-serif rotate-180">
          "
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            )}
          />
        ))}
      </div>

      {/* Author */}
      <div>
        <div className="font-heading font-semibold text-gray-900">
          {author}
        </div>
        <div className="text-sm text-gray-600">
          {role}
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add components/home/testimonial-card.tsx
git commit -m "feat(home): add TestimonialCard component

- Avatar with fallback (initial letter)
- Quote with decorative marks
- 5-star rating display
- Author name and role
- Shadow and rounded styling"
```

---

### Task 18: TestimonialsSection with Carousel

**Files:**
- Create: `components/home/testimonials-section.tsx`

**Step 1: Create section**

```tsx
'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Section } from '@/components/ui/section'
import { SectionTitle } from '@/components/ui/section-title'
import { TestimonialCard } from './testimonial-card'

const testimonials = [
  {
    quote:
      'A Casa e Lazer facilitou muito minha vida! Enviei a lista da escola e recebi o orçamento completo em minutos. Tudo organizado e com os melhores preços.',
    author: 'Maria Silva',
    role: 'Mãe de aluno',
    rating: 5,
  },
  {
    quote:
      'Trabalhamos com a Casa e Lazer há anos. A tradição e qualidade dos produtos, aliada à modernização do sistema de listas, tornam tudo mais prático para os pais.',
    author: 'João Santos',
    role: 'Diretor escolar',
    rating: 5,
  },
  {
    quote:
      'Atendimento personalizado e produtos de qualidade. A experiência de 76 anos faz toda a diferença. Recomendo!',
    author: 'Ana Costa',
    role: 'Cliente há 10 anos',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  return (
    <Section
      background="white"
      padding="large"
      className="bg-gradient-to-b from-blue-50 to-white"
    >
      <SectionTitle centered className="mb-16">
        O Que Nossos Clientes Dizem
      </SectionTitle>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`:
```tsx
import { TestimonialsSection } from '@/components/home/testimonials-section'

// Add after CategoriesSection:
<TestimonialsSection />
```

**Step 3: Test autoplay**

Open browser and wait 5 seconds
Expected: Carousel auto-rotates

**Step 4: Commit**

```bash
git add components/home/testimonials-section.tsx app/page.tsx
git commit -m "feat(home): implement Testimonials carousel section

- 3 testimonials with 5-star ratings
- Auto-play every 5 seconds
- Loop enabled
- Responsive (1-2-3 cards visible)
- Gradient background"
```

---

## Fase 8: CTA Final

### Task 19: ContactCard Component

**Files:**
- Create: `components/home/contact-card.tsx`

**Step 1: Create component**

```tsx
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactCardProps {
  icon: LucideIcon
  title: string
  content: string
  content2?: string
  className?: string
}

export function ContactCard({
  icon: Icon,
  title,
  content,
  content2,
  className,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-white/10 border border-white/20 rounded-xl p-6 text-white backdrop-blur-sm',
        className
      )}
    >
      <Icon className="w-10 h-10 mb-4" />

      <div className="font-heading font-semibold text-lg mb-2">
        {title}
      </div>

      <div className="text-sm opacity-90 leading-relaxed">
        <div>{content}</div>
        {content2 && <div>{content2}</div>}
      </div>
    </div>
  )
}
```

**Step 2: Commit**

```bash
git add components/home/contact-card.tsx
git commit -m "feat(home): add ContactCard component for CTA section

- White/10 background with border
- Icon display
- Title and content
- Backdrop blur effect"
```

---

### Task 20: CTASection Component

**Files:**
- Create: `components/home/cta-section.tsx`

**Step 1: Create section**

```tsx
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { SectionTitle, Subtitle } from '@/components/ui/section-title'
import { Grid } from '@/components/ui/grid'
import { ContactCard } from './contact-card'

export function CTASection() {
  return (
    <Section
      background="primary"
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Geometric pattern (optional subtle background) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48" />
      </div>

      <div className="relative">
        <SectionTitle color="white" centered>
          Tradição e qualidade que você pode ver de perto
        </SectionTitle>

        <Subtitle color="white" centered>
          Venha conhecer nossa loja física e receba atendimento personalizado
        </Subtitle>

        {/* Contact Cards */}
        <Grid cols={4} gap={6} className="mb-12">
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
        </Grid>

        {/* Map CTA */}
        <div className="text-center mb-8">
          <Link
            href="https://maps.google.com/?q=Casa+e+Lazer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg font-semibold text-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors shadow-xl hover:shadow-2xl"
          >
            📍 Ver no Mapa
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://instagram.com/__casaelazer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-white" />
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-white" />
          </Link>

          <Link
            href="https://wa.me/5511123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all hover:scale-110"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`:
```tsx
import { CTASection } from '@/components/home/cta-section'

// Add after TestimonialsSection:
<CTASection />
```

**Step 3: Test in browser**

Expected: Blue section with contact cards and social icons

**Step 4: Commit**

```bash
git add components/home/cta-section.tsx app/page.tsx
git commit -m "feat(home): implement CTA section

- Blue background with pattern
- 4 contact information cards
- Map button CTA
- Social media links (Instagram, Facebook, WhatsApp)
- Fully responsive"
```

---

## Fase 9: Rodapé

### Task 21: Footer Component

**Files:**
- Modify: `components/public/footer.tsx`

**Step 1: Replace existing footer**

```tsx
import Link from 'next/link'
import { MapPin, Phone, Mail, ShoppingBag, Instagram, Facebook } from 'lucide-react'

export function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-white" />
              <span className="text-xl font-heading font-bold text-white">
                Casa e Lazer
              </span>
            </div>

            <p className="text-sm italic text-gray-500">
              "O Melhor Pra Você"
            </p>

            <p className="text-sm leading-relaxed">
              Há 76 anos oferecendo materiais escolares de qualidade
              com tradição e inovação tecnológica.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/listas/nova" className="hover:text-white transition-colors">
                  Enviar Lista
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Categorias
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/produtos/cadernos-papelaria"
                  className="hover:text-white transition-colors"
                >
                  Cadernos e Papelaria
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/material-escolar"
                  className="hover:text-white transition-colors"
                >
                  Material Escolar
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/mochilas-estojos"
                  className="hover:text-white transition-colors"
                >
                  Mochilas e Estojos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/livros-didaticos"
                  className="hover:text-white transition-colors"
                >
                  Livros e Didáticos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/arte-criatividade"
                  className="hover:text-white transition-colors"
                >
                  Arte e Criatividade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Contato
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  Rua Principal, 123<br />
                  Centro - São Paulo/SP
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>(11) 1234-5678</div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <div>contato@casaelazer.com.br</div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com/__casaelazer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="https://wa.me/5511123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
              © 2026 Casa e Lazer. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacidade" className="hover:text-gray-300 transition-colors">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link href="/termos" className="hover:text-gray-300 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Test in browser**

Expected: See updated footer at bottom of homepage

**Step 3: Commit**

```bash
git add components/public/footer.tsx
git commit -m "feat(footer): redesign footer with 4-column layout

- Logo + description column
- Navigation links
- Category links
- Contact information
- Social media icons
- Legal links in bottom bar
- Dark gray (#1F2937) background"
```

---

## Fase 10: Otimizações e Finalização

### Task 22: Add SEO Metadata to Homepage

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add metadata export**

Add at the top of the file:
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casa e Lazer - Materiais Escolares desde 1950 | Sistema de Listas Inteligente',
  description: 'Casa e Lazer: 76 anos de tradição em materiais escolares. Envie sua lista e receba orçamento completo em minutos com nosso sistema inteligente. As melhores marcas com qualidade garantida.',
  keywords: 'materiais escolares, lista escolar, papelaria, cadernos, mochilas, volta às aulas, são paulo',
  openGraph: {
    title: 'Casa e Lazer - Materiais Escolares desde 1950',
    description: 'Sistema inteligente de listas escolares. Envie sua lista e receba orçamento completo em minutos.',
    url: 'https://casaelazer.com.br',
    siteName: 'Casa e Lazer',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa e Lazer - Materiais Escolares',
    description: '76 anos de tradição + tecnologia. Sistema inteligente de listas escolares.',
  },
}
```

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat(seo): add comprehensive metadata to homepage

- Title optimized for SEO
- Meta description
- Keywords
- Open Graph tags
- Twitter Card tags"
```

---

### Task 23: Add Structured Data (JSON-LD)

**Files:**
- Create: `app/structured-data.tsx`

**Step 1: Create structured data component**

```tsx
export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Casa e Lazer',
    description: 'Loja de materiais escolares desde 1950',
    foundingDate: '1950',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Principal, 123',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01234-567',
      addressCountry: 'BR',
    },
    telephone: '+55-11-1234-5678',
    email: 'contato@casaelazer.com.br',
    url: 'https://casaelazer.com.br',
    sameAs: [
      'https://www.instagram.com/__casaelazer/',
      'https://www.facebook.com/casaelazer',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
```

**Step 2: Add to homepage**

In `app/page.tsx`, add at the end of return:
```tsx
import { StructuredData } from './structured-data'

// At the end of JSX return, before </div>:
<StructuredData />
```

**Step 3: Verify in browser**

View page source, search for "application/ld+json"
Expected: See structured data JSON

**Step 4: Commit**

```bash
git add app/structured-data.tsx app/page.tsx
git commit -m "feat(seo): add structured data (JSON-LD) for store

- Schema.org Store type
- Address, contact information
- Social media profiles
- Founding date (1950)"
```

---

### Task 24: Performance - Add Loading States

**Files:**
- Create: `components/ui/skeleton.tsx`

**Step 1: Create Skeleton component**

```tsx
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
    />
  )
}
```

**Step 2: Commit**

```bash
git add components/ui/skeleton.tsx
git commit -m "feat(ui): add Skeleton component for loading states

- Pulse animation
- Flexible sizing via className
- Gray background"
```

---

### Task 25: Test Full Homepage

**Files:**
- No file changes

**Step 1: Open in browser**

Run: `Open http://localhost:3004`

**Step 2: Visual QA Checklist**

Verify:
- [ ] Hero section displays correctly
- [ ] Lists system 3-step cards visible
- [ ] Stats count up on scroll
- [ ] Products grid (8 items)
- [ ] Categories grid (6 items)
- [ ] Testimonials carousel auto-plays
- [ ] CTA section with contact cards
- [ ] Footer with 4 columns
- [ ] All responsive breakpoints work

**Step 3: Performance check**

Run: `Open DevTools → Lighthouse → Run audit`
Expected: Performance > 80, Accessibility > 90

**Step 4: Document findings**

Note any issues found (will be addressed in next tasks)

---

### Task 26: Final Commit - Homepage Complete

**Files:**
- Modify: `docs/plans/2026-01-08-homepage-institucional-design.md`

**Step 1: Update implementation status**

Update the "Estado da Implementação" section:
```markdown
### Estado da Implementação
- ✅ Design system configurado (tailwind.config.ts)
- ✅ Fontes carregadas (Poppins + Inter)
- ✅ Homepage moderna implementada
- ✅ Componentes específicos da homepage criados
- ✅ SEO metadata e structured data
- ⏳ Integração com dados reais do Supabase (próxima fase)
- ⏳ Otimizações de performance avançadas
- ⏳ Testes de acessibilidade completos
```

**Step 2: Final commit**

```bash
git add docs/plans/2026-01-08-homepage-institucional-design.md
git commit -m "docs: update implementation status - homepage complete

- All 9 sections implemented
- SEO and structured data added
- Ready for Supabase integration phase"
```

---

## Próximas Fases (Fora do Escopo Deste Plano)

### Fase 11: Integração com Supabase (Futuro)
- Substituir mock data por queries reais
- Buscar produtos em destaque do banco
- Buscar contagens de categorias
- Implementar cache e otimizações

### Fase 12: Páginas Secundárias (Futuro)
- Página Sobre (/sobre)
- Página Catálogo (/produtos)
- Página Contato (/contato)
- Páginas de categoria e produto individual

---

## Notas Importantes

### DRY (Don't Repeat Yourself)
- Todos os componentes são reutilizáveis
- Estilos consistentes via Tailwind
- Componentes base (Section, Container, Grid) usados em todas as seções

### YAGNI (You Aren't Gonna Need It)
- Sem features não solicitadas
- Sem over-engineering
- Mock data simples (será substituído quando necessário)

### TDD (Test-Driven Development)
- Como são componentes visuais, testes visuais via browser
- Lighthouse para performance
- Validação manual em cada task

### Commits Frequentes
- Cada task = 1 commit
- Mensagens descritivas seguindo Conventional Commits
- Facilita rollback se necessário

---

**Plano criado em:** 2026-01-08
**Estimativa total:** 4-6 horas de implementação
**Tarefas:** 26 tarefas bite-sized
**Status:** Pronto para execução com superpowers:executing-plans
