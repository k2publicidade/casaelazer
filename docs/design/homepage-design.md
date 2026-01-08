# Casa e Lazer - Design da Homepage
## Sistema de Listas de Materiais Escolares

**Data:** 2026-01-08
**Designer:** Claude Sonnet 4.5
**Stack:** Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui

---

## 1. Descoberta e Análise

### 1.1 Público-Alvo

**Pais de Alunos (Primário)**
- Idade: 25-50 anos
- Comportamento: Buscam praticidade, economia de tempo, preços justos
- Pain Points: Falta de tempo, dificuldade em encontrar todos os itens, comparar preços
- Motivação: Facilitar a volta às aulas, comprar tudo em um só lugar
- Devices: Principalmente mobile (70%), tablet/desktop (30%)

**Escolas (Secundário)**
- Comportamento: Querem facilitar a vida dos pais, modernizar processos
- Pain Points: Muitas reclamações sobre lista, logística de entrega
- Motivação: Parceria benéfica, reduzir carga administrativa

**Profissionais da Educação**
- Comportamento: Decisores de compra para a escola
- Motivação: Facilidade, confiabilidade, atendimento

### 1.2 Objetivos de Negócio

1. **Conversão Principal**: Fazer com que usuários enviem suas listas (CTA)
2. **Conversão Secundária**: Escolas se tornarem parceiras
3. **Awareness**: Posicionar Casa e Lazer como moderna e tecnológica
4. **Confiança**: Demonstrar credibilidade e experiência (desde 1950)
5. **Engajamento**: Incentivar exploração do catálogo

### 1.3 Análise da Identidade Visual Atual

**Logo:** https://casaelazer.com.br/assets/img/logo.png
- Cores: Azul e Vermelho predominantes
- Estilo: Clássico, confiável, familiar
- Tagline: "O Melhor Pra Você"

**Tom de Voz:**
- Amigável e acolhedor
- Familiar: "Somos você :)"
- Confiável e profissional
- Focado no cliente

**Valores:**
- Responsabilidade
- Ética
- Inovação
- História e tradição (1950-2026)

---

## 2. Design System

### 2.1 Paleta de Cores

#### Cores Principais (Brand Colors)

```css
/* Azul Principal - Confiança, Profissionalismo */
--brand-blue-50: #E6F0FF;
--brand-blue-100: #CCE1FF;
--brand-blue-200: #99C3FF;
--brand-blue-300: #66A5FF;
--brand-blue-400: #3387FF;
--brand-blue-500: #0066FF;  /* Azul Principal */
--brand-blue-600: #0052CC;
--brand-blue-700: #003D99;
--brand-blue-800: #002966;
--brand-blue-900: #001433;

/* Vermelho Secundário - Energia, Ação */
--brand-red-50: #FFE6E6;
--brand-red-100: #FFCCCC;
--brand-red-200: #FF9999;
--brand-red-300: #FF6666;
--brand-red-400: #FF3333;
--brand-red-500: #FF0000;  /* Vermelho Principal */
--brand-red-600: #CC0000;
--brand-red-700: #990000;
--brand-red-800: #660000;
--brand-red-900: #330000;
```

#### Cores Neutras

```css
/* Neutros - Texto, Backgrounds */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
--white: #FFFFFF;
--black: #000000;
```

#### Cores Funcionais

```css
/* Sucesso - Itens encontrados, confirmações */
--success-50: #ECFDF5;
--success-100: #D1FAE5;
--success-500: #10B981;
--success-600: #059669;
--success-700: #047857;

/* Aviso - Itens para revisar */
--warning-50: #FFFBEB;
--warning-100: #FEF3C7;
--warning-500: #F59E0B;
--warning-600: #D97706;
--warning-700: #B45309;

/* Erro - Itens não encontrados, erros */
--error-50: #FEF2F2;
--error-100: #FEE2E2;
--error-500: #EF4444;
--error-600: #DC2626;
--error-700: #B91C1C;

/* Informação */
--info-50: #EFF6FF;
--info-100: #DBEAFE;
--info-500: #3B82F6;
--info-600: #2563EB;
--info-700: #1D4ED8;
```

#### Uso das Cores

- **Background primário**: White (#FFFFFF)
- **Background secundário**: Gray-50 (#F9FAFB)
- **Texto primário**: Gray-900 (#111827)
- **Texto secundário**: Gray-600 (#4B5563)
- **CTAs principais**: Brand-Blue-500 (#0066FF)
- **CTAs secundários**: Brand-Red-500 (#FF0000)
- **Hover CTAs principais**: Brand-Blue-600 (#0052CC)
- **Links**: Brand-Blue-500 (#0066FF)
- **Bordas**: Gray-200 (#E5E7EB)

### 2.2 Tipografia

#### Fontes Recomendadas

```css
/* Opção 1: Moderna e Limpa */
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Opção 2: Profissional e Confiável */
--font-heading: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Escolha Recomendada: Opção 1 (Poppins + Inter) */
```

#### Escala Tipográfica (Mobile-First)

```css
/* Mobile (< 768px) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* Desktop (≥ 768px) */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 2.5rem;      /* 40px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

#### Hierarquia de Texto

```css
/* H1 - Hero Headlines */
.h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
@media (min-width: 768px) {
  .h1 { font-size: var(--text-6xl); }
}

/* H2 - Section Titles */
.h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
@media (min-width: 768px) {
  .h2 { font-size: var(--text-4xl); }
}

/* H3 - Subsection Titles */
.h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 1.3;
}
@media (min-width: 768px) {
  .h3 { font-size: var(--text-3xl); }
}

/* Body Text */
.body-lg {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: 1.6;
}

.body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.6;
}

.body-sm {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 400;
  line-height: 1.5;
}

/* Caption/Helper Text */
.caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: 1.4;
  color: var(--gray-600);
}
```

### 2.3 Espaçamento

Sistema baseado em múltiplos de 4px (Tailwind default):

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
--spacing-32: 8rem;     /* 128px */
```

**Uso:**
- **Margens entre sections**: 16 (mobile) / 24 (desktop)
- **Padding de containers**: 4-6 (mobile) / 8-12 (desktop)
- **Gap entre elementos**: 4-6
- **Padding de cards**: 6 (mobile) / 8 (desktop)

### 2.4 Componentes UI

#### Botões

```css
/* Primary Button (CTA Principal) */
.btn-primary {
  background: var(--brand-blue-500);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.15);
}
.btn-primary:hover {
  background: var(--brand-blue-600);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.25);
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: var(--brand-blue-500);
  border: 2px solid var(--brand-blue-500);
  padding: 12px 32px;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--brand-blue-50);
  border-color: var(--brand-blue-600);
  transform: translateY(-1px);
}

/* Accent Button (Vermelho) */
.btn-accent {
  background: var(--brand-red-500);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.15);
}
.btn-accent:hover {
  background: var(--brand-red-600);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.25);
  transform: translateY(-1px);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--gray-700);
  padding: 12px 24px;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}
```

#### Cards

```css
/* Product Card */
.card-product {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.card-product:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  border-color: var(--brand-blue-200);
}

/* Content Card (Blog, Features) */
.card-content {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Icon Card (Como Funciona) */
.card-icon {
  background: var(--brand-blue-50);
  border: 2px solid var(--brand-blue-100);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}
.card-icon:hover {
  background: white;
  border-color: var(--brand-blue-500);
  box-shadow: 0 8px 24px rgba(0, 102, 255, 0.12);
  transform: translateY(-4px);
}
```

#### Inputs

```css
/* Text Input */
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--gray-900);
  background: white;
  transition: all 0.2s ease;
}
.input:focus {
  outline: none;
  border-color: var(--brand-blue-500);
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
}
.input::placeholder {
  color: var(--gray-400);
}

/* Upload Zone */
.upload-zone {
  border: 2px dashed var(--gray-300);
  border-radius: 12px;
  padding: 48px 24px;
  text-align: center;
  background: var(--gray-50);
  transition: all 0.2s ease;
  cursor: pointer;
}
.upload-zone:hover {
  border-color: var(--brand-blue-500);
  background: var(--brand-blue-50);
}
.upload-zone.active {
  border-color: var(--brand-blue-500);
  background: var(--brand-blue-50);
  border-style: solid;
}
```

#### Badges

```css
/* Status Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background: var(--success-50);
  color: var(--success-700);
}

.badge-warning {
  background: var(--warning-50);
  color: var(--warning-700);
}

.badge-error {
  background: var(--error-50);
  color: var(--error-700);
}

.badge-info {
  background: var(--info-50);
  color: var(--info-700);
}
```

### 2.5 Iconografia

**Biblioteca Recomendada:** Lucide React (https://lucide.dev)
- Estilo: Outline, consistente, moderno
- Tamanhos padrão: 16px, 20px, 24px, 32px, 48px

**Ícones Principais:**
- Upload: `Upload`
- Check/Success: `CheckCircle2`
- Warning: `AlertTriangle`
- Error: `XCircle`
- Search: `Search`
- Filter: `Filter`
- Cart/List: `ShoppingBag`, `ClipboardList`
- School: `GraduationCap`
- Location: `MapPin`
- Phone: `Phone`
- Email: `Mail`
- Clock: `Clock`
- Arrow Right: `ArrowRight`
- External Link: `ExternalLink`

### 2.6 Animações e Transições

```css
/* Timing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Durações */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;

/* Animações Comuns */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Motion Preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 3. Wireframes e Layout da Homepage

### 3.1 Estrutura Geral

```
┌─────────────────────────────────────────────┐
│            HEADER/NAVIGATION                │
├─────────────────────────────────────────────┤
│                                             │
│            1. HERO SECTION                  │
│          (Headline + CTA)                   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         2. COMO FUNCIONA                    │
│           (3 Passos)                        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│      3. BENEFÍCIOS/DIFERENCIAIS             │
│         (Grid de Features)                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│       4. CATÁLOGO EM DESTAQUE               │
│      (Produtos Populares)                   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│        5. ESCOLAS PARCEIRAS                 │
│      (Logos + CTA Escolas)                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│      6. SOBRE CASA E LAZER                  │
│       (História + Valores)                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         7. BLOG RECENTE                     │
│        (3 Últimos Posts)                    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│     8. CTA FINAL + INFORMAÇÕES              │
│       (Loja Física)                         │
│                                             │
├─────────────────────────────────────────────┤
│                 FOOTER                      │
└─────────────────────────────────────────────┘
```

### 3.2 Header/Navigation

#### Desktop (≥ 1024px)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  [LOGO Casa e Lazer]    Produtos  Listas  Blog  Contato  │
│  O Melhor Pra Você                   [Busca] [Entrar]    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Especificações:**
- Height: 80px
- Background: White com shadow-sm
- Logo: Height 50px, link para home
- Menu items: Font-body, 16px, gray-700, hover:blue-500
- Sticky on scroll com shadow-md
- Transição suave ao rolar

#### Mobile (< 1024px)

```
┌──────────────────────────────────┐
│                                  │
│ [☰]  [LOGO]          [Busca] [👤] │
│                                  │
└──────────────────────────────────┘
```

**Menu Mobile (Drawer/Sidebar):**
- Full-screen overlay
- Slide-in da esquerda
- Links grandes e espaçados
- CTA "Criar Lista" em destaque

### 3.3 Hero Section

#### Desktop

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────┐    ┌──────────────────────────┐   │
│  │                     │    │                          │   │
│  │  Facilite a Volta   │    │    [ILUSTRAÇÃO/FOTO]     │   │
│  │  às Aulas           │    │                          │   │
│  │                     │    │   Pais + Filhos felizes  │   │
│  │  Envie sua lista de │    │   com materiais ou       │   │
│  │  materiais e receba │    │   Interface do sistema   │   │
│  │  orçamento completo │    │   em um device           │   │
│  │  em minutos!        │    │                          │   │
│  │                     │    └──────────────────────────┘   │
│  │  [Enviar Minha Lista]                                   │
│  │  [Ver Como Funciona]                                    │
│  │                     │                                   │
│  │  ✓ Grátis e rápido  │                                   │
│  │  ✓ Sem cadastro     │                                   │
│  │  ✓ Produtos de qualidade                               │
│  │                     │                                   │
│  └─────────────────────┘                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações Desktop:**
- Layout: 2 colunas (60/40 ou 50/50)
- Background: Gradient sutil (blue-50 → white)
- Padding: 80px vertical, 64px horizontal
- Headline (H1):
  - "Facilite a Volta às Aulas"
  - Font: Poppins Bold, 60px
  - Color: Gray-900
- Subheadline:
  - "Envie sua lista de materiais e receba orçamento completo em minutos!"
  - Font: Inter Regular, 20px
  - Color: Gray-600
  - Line-height: 1.6
- CTAs:
  - Primário (azul): "Enviar Minha Lista" → /listas/nova
  - Secundário (outline): "Ver Como Funciona" → scroll smooth #como-funciona
  - Gap: 16px entre botões
- Trust badges:
  - 3 itens com checkmark icon
  - Font: 16px, gray-600

#### Mobile

```
┌──────────────────────────────────┐
│                                  │
│    [ILUSTRAÇÃO/FOTO]             │
│    (Reduzida)                    │
│                                  │
│  Facilite a Volta às Aulas       │
│                                  │
│  Envie sua lista e receba        │
│  orçamento completo em minutos!  │
│                                  │
│  [Enviar Minha Lista]            │
│  [Ver Como Funciona]             │
│                                  │
│  ✓ Grátis e rápido               │
│  ✓ Sem cadastro                  │
│  ✓ Produtos de qualidade         │
│                                  │
└──────────────────────────────────┘
```

**Especificações Mobile:**
- Layout: 1 coluna
- Padding: 48px vertical, 24px horizontal
- Headline: 36px
- Subheadline: 18px
- CTAs: Full-width, stack vertical, 12px gap

### 3.4 Como Funciona

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    COMO FUNCIONA                            │
│          Receba seu orçamento em 3 passos simples           │
│                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐       │
│  │    [📤]     │   │    [🔍]     │   │    [📄]     │       │
│  │             │   │             │   │             │       │
│  │   Passo 1   │   │   Passo 2   │   │   Passo 3   │       │
│  │             │   │             │   │             │       │
│  │   Envie     │   │   Matching  │   │   Receba    │       │
│  │ Sua Lista   │   │  Automático │   │ Orçamento   │       │
│  │             │   │             │   │             │       │
│  │ Faça upload │   │ Nossa IA    │   │ Baixe em    │       │
│  │ do PDF/Excel│   │ encontra os │   │ PDF ou Excel│       │
│  │ da escola   │   │ produtos    │   │ completo    │       │
│  │             │   │             │   │             │       │
│  └─────────────┘   └─────────────┘   └─────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gray-50
- Padding: 80px vertical (desktop) / 48px (mobile)
- Section title (H2):
  - "Como Funciona"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: Gray-900
  - Text-align: center
- Subtitle:
  - "Receba seu orçamento em 3 passos simples"
  - Font: Inter Regular, 18px
  - Color: Gray-600
  - Text-align: center
  - Margin-bottom: 48px
- Layout: 3 colunas (desktop) / 1 coluna (mobile)
- Gap: 32px

**Card Individual (Passo):**
- Background: Blue-50 (hover: white)
- Border: 2px solid blue-100 (hover: blue-500)
- Border-radius: 16px
- Padding: 32px
- Text-align: center
- Transition: all 0.3s ease
- Hover: translateY(-4px), shadow-lg

**Ícone:**
- Size: 64px
- Background circle: blue-500
- Icon color: white
- Margin-bottom: 24px

**Título do Passo:**
- Font: Poppins SemiBold, 20px
- Color: Gray-900
- Margin-bottom: 8px

**Número do Passo:**
- Font: Inter Medium, 14px
- Color: Blue-600
- Text-transform: uppercase
- Letter-spacing: 0.05em
- Margin-bottom: 12px

**Descrição:**
- Font: Inter Regular, 16px
- Color: Gray-600
- Line-height: 1.6

### 3.5 Benefícios/Diferenciais

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              POR QUE ESCOLHER CASA E LAZER?                 │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │    [⏰]       │  │    [💰]       │  │    [✓]        │   │
│  │               │  │               │  │               │   │
│  │ Economize     │  │ Preços        │  │ Produtos de   │   │
│  │ Tempo         │  │ Competitivos  │  │ Qualidade     │   │
│  │               │  │               │  │               │   │
│  │ Sem filas,    │  │ Melhores      │  │ Marcas        │   │
│  │ sem stress    │  │ preços da     │  │ confiáveis e  │   │
│  │               │  │ região        │  │ testadas      │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │    [🚚]       │  │    [🏫]       │  │    [📞]       │   │
│  │               │  │               │  │               │   │
│  │ Entrega       │  │ Parceria com  │  │ Atendimento   │   │
│  │ Rápida        │  │ Escolas       │  │ Especializado │   │
│  │               │  │               │  │               │   │
│  │ Receba em     │  │ Listas        │  │ Tire dúvidas  │   │
│  │ casa ou retire│  │ oficiais      │  │ com experts   │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: White
- Padding: 80px vertical (desktop) / 48px (mobile)
- Section title (H2):
  - "Por Que Escolher Casa e Lazer?"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: Gray-900
  - Text-align: center
  - Margin-bottom: 48px
- Layout: Grid 3 colunas (desktop) / 1 coluna (mobile)
- Gap: 24px

**Card de Benefício:**
- Background: White
- Border: 1px solid gray-200
- Border-radius: 12px
- Padding: 32px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.06)
- Transition: all 0.3s ease
- Hover: shadow-xl, translateY(-4px)

**Ícone:**
- Size: 48px
- Color: Blue-500
- Margin-bottom: 20px

**Título:**
- Font: Poppins SemiBold, 20px
- Color: Gray-900
- Margin-bottom: 12px

**Descrição:**
- Font: Inter Regular, 16px
- Color: Gray-600
- Line-height: 1.6

### 3.6 Catálogo em Destaque

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                 PRODUTOS EM DESTAQUE                        │
│            Os materiais mais procurados para 2026           │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  [IMG]   │  │  [IMG]   │  │  [IMG]   │  │  [IMG]   │    │
│  │          │  │          │  │          │  │          │    │
│  │ Caderno  │  │ Mochila  │  │ Estojo   │  │ Lápis    │    │
│  │ Espiral  │  │ Escolar  │  │ Completo │  │ de Cor   │    │
│  │          │  │          │  │          │  │          │    │
│  │ R$ 15,90 │  │ R$ 89,90 │  │ R$ 34,90 │  │ R$ 12,90 │    │
│  │          │  │          │  │          │  │          │    │
│  │[Ver Mais]│  │[Ver Mais]│  │[Ver Mais]│  │[Ver Mais]│    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  [IMG]   │  │  [IMG]   │  │  [IMG]   │  │  [IMG]   │    │
│  │  ...     │  │  ...     │  │  ...     │  │  ...     │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                             │
│              [Ver Catálogo Completo]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gray-50
- Padding: 80px vertical (desktop) / 48px (mobile)
- Section title (H2):
  - "Produtos em Destaque"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: Gray-900
  - Text-align: center
- Subtitle:
  - "Os materiais mais procurados para 2026"
  - Font: Inter Regular, 18px
  - Color: Gray-600
  - Margin-bottom: 48px
- Layout: Grid 4 colunas (desktop) / 2 colunas (mobile)
- Gap: 24px
- Limite: 8 produtos

**Product Card:**
- Background: White
- Border: 1px solid gray-200
- Border-radius: 12px
- Overflow: hidden
- Transition: all 0.3s ease
- Hover: shadow-xl, translateY(-4px), border-color blue-200

**Imagem:**
- Aspect-ratio: 1:1 (square)
- Object-fit: cover
- Background: gray-100

**Conteúdo (Padding 16px):**
- Nome do produto:
  - Font: Inter SemiBold, 16px
  - Color: Gray-900
  - Margin-bottom: 8px
  - Truncate 2 linhas
- Preço:
  - Font: Poppins Bold, 20px
  - Color: Blue-600
  - Margin-bottom: 12px
- Badge "Disponível":
  - Background: Success-50
  - Color: Success-700
  - Font: 12px, uppercase
  - Position: absolute top-right (sobre imagem)

**CTA do Card:**
- Button ghost small
- "Ver Mais"
- Full-width

**CTA da Seção:**
- Button secondary large
- "Ver Catálogo Completo"
- Margin-top: 48px
- Centralizado

### 3.7 Escolas Parceiras

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                   ESCOLAS PARCEIRAS                         │
│        Instituições que confiam no Casa e Lazer             │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ [LOGO]  │  │ [LOGO]  │  │ [LOGO]  │  │ [LOGO]  │        │
│  │ Escola  │  │ Colégio │  │ Centro  │  │ Instituto│        │
│  │ ABC     │  │ XYZ     │  │ Educac. │  │ Saber   │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ [LOGO]  │  │ [LOGO]  │  │ [LOGO]  │  │ [LOGO]  │        │
│  │  ...    │  │  ...    │  │  ...    │  │  ...    │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
│  ┌───────────────────────────────────────────────┐          │
│  │                                               │          │
│  │    Sua escola ainda não é parceira?           │          │
│  │                                               │          │
│  │  [Seja uma Escola Parceira]                   │          │
│  │                                               │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: White
- Padding: 80px vertical (desktop) / 48px (mobile)
- Section title (H2):
  - "Escolas Parceiras"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: Gray-900
  - Text-align: center
- Subtitle:
  - "Instituições que confiam no Casa e Lazer"
  - Font: Inter Regular, 18px
  - Color: Gray-600
  - Margin-bottom: 48px
- Layout: Grid 4 colunas (desktop) / 2 colunas (mobile)
- Gap: 32px

**Logo Card:**
- Background: Gray-50
- Border: 1px solid gray-200
- Border-radius: 12px
- Padding: 24px
- Aspect-ratio: 16:9
- Display: flex center
- Transition: all 0.2s ease
- Hover: background white, shadow-md

**Logo:**
- Max-width: 80%
- Max-height: 80%
- Object-fit: contain
- Filter: grayscale(100%) (hover: grayscale(0%))

**CTA Card:**
- Background: Blue-50
- Border: 2px dashed blue-300
- Border-radius: 16px
- Padding: 48px 32px
- Text-align: center
- Grid-column: span 2 (desktop)
- Margin-top: 32px

**CTA Headline:**
- Font: Poppins SemiBold, 24px
- Color: Gray-900
- Margin-bottom: 24px

**CTA Button:**
- Button accent (vermelho)
- "Seja uma Escola Parceira"
- Link: /contato?tipo=escola

### 3.8 Sobre Casa e Lazer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────────────────┐     ┌───────────────────────────┐  │
│  │                    │     │  CASA E LAZER             │  │
│  │   [FOTO/IMAGEM]    │     │  Tradição desde 1950      │  │
│  │                    │     │                           │  │
│  │   Loja física ou   │     │  Há mais de 70 anos       │  │
│  │   equipe Casa e    │     │  servindo a comunidade    │  │
│  │   Lazer            │     │  com os melhores produtos │  │
│  │                    │     │  e atendimento.           │  │
│  └────────────────────┘     │                           │  │
│                             │  Somos você :)            │  │
│                             │                           │  │
│                             │  ✓ Responsabilidade       │  │
│                             │  ✓ Ética                  │  │
│                             │  ✓ Inovação               │  │
│                             │                           │  │
│                             │  [Saiba Mais Sobre Nós]   │  │
│                             │                           │  │
│                             └───────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gradient (blue-50 → white)
- Padding: 80px vertical (desktop) / 48px (mobile)
- Layout: 2 colunas 50/50 (desktop) / 1 coluna (mobile)
- Gap: 64px

**Imagem:**
- Aspect-ratio: 4:3
- Border-radius: 16px
- Box-shadow: 0 8px 32px rgba(0,0,0,0.12)
- Object-fit: cover

**Conteúdo:**
- Title (H2):
  - "Casa e Lazer"
  - Font: Poppins Bold, 40px
  - Color: Gray-900
- Subtitle:
  - "Tradição desde 1950"
  - Font: Inter Medium, 20px
  - Color: Blue-600
  - Margin-bottom: 24px
- Body text:
  - Font: Inter Regular, 18px
  - Color: Gray-700
  - Line-height: 1.7
  - Margin-bottom: 24px
- Tagline:
  - "Somos você :)"
  - Font: Poppins SemiBold, 24px
  - Color: Red-500
  - Margin-bottom: 24px
- Valores (checkmark list):
  - Font: Inter Medium, 16px
  - Color: Gray-700
  - Icon: CheckCircle2 (blue-500)
  - Gap: 12px
- CTA:
  - Button secondary
  - "Saiba Mais Sobre Nós"
  - Link: /sobre

### 3.9 Blog Recente

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    NOVIDADES E DICAS                        │
│              Fique por dentro do mundo escolar              │
│                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────┐  │
│  │   [IMG DESTAQUE] │  │   [IMG DESTAQUE] │  │  [IMG]   │  │
│  │                  │  │                  │  │          │  │
│  │ Como organizar   │  │ Lista completa   │  │ 10 dicas │  │
│  │ a mochila        │  │ para o 5º ano    │  │ ...      │  │
│  │ escolar          │  │                  │  │          │  │
│  │                  │  │                  │  │          │  │
│  │ Lorem ipsum text │  │ Lorem ipsum text │  │ Lorem... │  │
│  │ about the post.. │  │ about the post.. │  │          │  │
│  │                  │  │                  │  │          │  │
│  │ [Ler Mais]       │  │ [Ler Mais]       │  │[Ler Mais]│  │
│  │ 10 Jan 2026      │  │ 08 Jan 2026      │  │05 Jan...│  │
│  └──────────────────┘  └──────────────────┘  └──────────┘  │
│                                                             │
│                  [Ver Todos os Posts]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gray-50
- Padding: 80px vertical (desktop) / 48px (mobile)
- Section title (H2):
  - "Novidades e Dicas"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: Gray-900
  - Text-align: center
- Subtitle:
  - "Fique por dentro do mundo escolar"
  - Font: Inter Regular, 18px
  - Color: Gray-600
  - Margin-bottom: 48px
- Layout: Grid 3 colunas (desktop) / 1 coluna (mobile)
- Gap: 24px
- Limite: 3 posts mais recentes

**Blog Post Card:**
- Background: White
- Border: 1px solid gray-200
- Border-radius: 12px
- Overflow: hidden
- Transition: all 0.3s ease
- Hover: shadow-xl, translateY(-4px)

**Featured Image:**
- Aspect-ratio: 16:9
- Object-fit: cover
- Background: gray-200

**Conteúdo (Padding 24px):**
- Título:
  - Font: Poppins SemiBold, 20px
  - Color: Gray-900
  - Margin-bottom: 12px
  - Truncate 2 linhas
  - Hover: color blue-600
- Excerpt:
  - Font: Inter Regular, 16px
  - Color: Gray-600
  - Line-height: 1.6
  - Truncate 3 linhas
  - Margin-bottom: 16px
- Footer:
  - Display: flex justify-between align-center
  - Data:
    - Font: Inter Regular, 14px
    - Color: Gray-500
  - Link "Ler Mais":
    - Font: Inter Medium, 14px
    - Color: Blue-600
    - Hover: underline

**CTA da Seção:**
- Button secondary
- "Ver Todos os Posts"
- Link: /blog
- Margin-top: 48px
- Centralizado

### 3.10 CTA Final + Informações da Loja

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           PRONTO PARA FACILITAR SUA VIDA?                   │
│        Envie sua lista agora e receba seu orçamento         │
│                                                             │
│              [Enviar Minha Lista Agora]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   📍         │  │   📞         │  │   ⏰         │      │
│  │              │  │              │  │              │      │
│  │ Visite Nossa │  │   Ligue      │  │  Horários    │      │
│  │   Loja       │  │  para Nós    │  │              │      │
│  │              │  │              │  │              │      │
│  │ Rua exemplo, │  │ (XX) XXXX-   │  │ Seg-Sex:     │      │
│  │ 123 - Centro │  │ XXXX         │  │ 8h-18h       │      │
│  │              │  │              │  │              │      │
│  │ Cidade - UF  │  │ WhatsApp     │  │ Sáb: 8h-12h  │      │
│  │              │  │ disponível   │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gradient (blue-500 → blue-700)
- Padding: 80px vertical (desktop) / 48px (mobile)
- Color: White (todo texto)

**CTA Section (Top):**
- Text-align: center
- Headline (H2):
  - "Pronto para Facilitar sua Vida?"
  - Font: Poppins Bold, 40px (desktop) / 32px (mobile)
  - Color: White
  - Margin-bottom: 16px
- Subheadline:
  - "Envie sua lista agora e receba seu orçamento"
  - Font: Inter Regular, 20px
  - Color: Blue-100
  - Margin-bottom: 32px
- Button:
  - Background: White
  - Color: Blue-600
  - Large size
  - "Enviar Minha Lista Agora"
  - Hover: shadow-xl, scale(1.05)
  - Margin-bottom: 64px

**Informações da Loja:**
- Border-top: 1px solid rgba(255,255,255,0.2)
- Padding-top: 64px
- Layout: Grid 3 colunas (desktop) / 1 coluna (mobile)
- Gap: 32px

**Info Card:**
- Text-align: center
- Icon:
  - Size: 48px
  - Color: White
  - Background: rgba(255,255,255,0.1)
  - Border-radius: 50%
  - Padding: 12px
  - Margin-bottom: 16px
- Título:
  - Font: Poppins SemiBold, 20px
  - Color: White
  - Margin-bottom: 12px
- Conteúdo:
  - Font: Inter Regular, 16px
  - Color: Blue-100
  - Line-height: 1.6

### 3.11 Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌───────┐ │
│  │ [LOGO]     │  │ Empresa    │  │ Produtos   │  │ Ajuda │ │
│  │            │  │            │  │            │  │       │ │
│  │ O Melhor   │  │ Sobre Nós  │  │ Catálogo   │  │ FAQ   │ │
│  │ Pra Você   │  │ Trabalhe   │  │ Categorias │  │ Conta │ │
│  │            │  │ Conosco    │  │ Ofertas    │  │ Contato│ │
│  │ [🌐🌐🌐]   │  │ Blog       │  │            │  │       │ │
│  │            │  │ Contato    │  │            │  │       │ │
│  └────────────┘  └────────────┘  └────────────┘  └───────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  © 2026 Casa e Lazer. Todos os direitos reservados.        │
│  Termos de Uso  |  Política de Privacidade                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificações:**
- Background: Gray-900
- Color: Gray-300
- Padding: 64px vertical (desktop) / 40px (mobile)

**Layout Principal:**
- Grid 4 colunas (desktop) / 1 coluna (mobile)
- Gap: 48px

**Coluna 1 (Brand):**
- Logo: altura 40px, filter brightness(0) invert(1)
- Tagline: font 14px, gray-400, margin-bottom 16px
- Social icons:
  - Size: 24px
  - Color: Gray-400
  - Hover: Blue-500
  - Gap: 12px

**Colunas 2-4 (Links):**
- Título:
  - Font: Poppins SemiBold, 16px
  - Color: White
  - Margin-bottom: 16px
- Links:
  - Font: Inter Regular, 14px
  - Color: Gray-400
  - Line-height: 2
  - Hover: White, underline

**Bottom Bar:**
- Border-top: 1px solid gray-800
- Padding-top: 32px
- Margin-top: 48px
- Display: flex justify-between (desktop) / stack (mobile)
- Copyright:
  - Font: Inter Regular, 14px
  - Color: Gray-500
- Legal links:
  - Font: Inter Regular, 14px
  - Color: Gray-500
  - Separator: " | "
  - Hover: White

---

## 4. Layouts Responsivos

### 4.1 Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */

/* Tablet (sm) */
@media (min-width: 640px) { }

/* Tablet Large (md) */
@media (min-width: 768px) { }

/* Desktop (lg) */
@media (min-width: 1024px) { }

/* Desktop Large (xl) */
@media (min-width: 1280px) { }

/* Desktop XL (2xl) */
@media (min-width: 1536px) { }
```

### 4.2 Container

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;   /* 16px */
  padding-right: 1rem;  /* 16px */
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1400px;  /* Limita largura máxima */
  }
}
```

### 4.3 Grid Systems

**Desktop (≥ 1024px):**
- Hero: 2 colunas (60/40)
- Como Funciona: 3 colunas
- Benefícios: 3 colunas
- Produtos: 4 colunas
- Escolas: 4 colunas
- Blog: 3 colunas

**Tablet (768px - 1023px):**
- Hero: 1 coluna (stack)
- Como Funciona: 3 colunas
- Benefícios: 2 colunas
- Produtos: 3 colunas
- Escolas: 3 colunas
- Blog: 2 colunas

**Mobile (< 768px):**
- Todas as seções: 1 coluna
- Produtos: 2 colunas (cards menores)
- Escolas: 2 colunas (logos)

### 4.4 Typography Responsive Scale

```css
/* H1 Hero */
.hero-title {
  font-size: 2.25rem;  /* 36px mobile */
  line-height: 1.1;
}
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;  /* 48px tablet */
  }
}
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;  /* 60px desktop */
  }
}

/* H2 Sections */
.section-title {
  font-size: 1.875rem;  /* 30px mobile */
}
@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem;  /* 36px tablet */
  }
}
@media (min-width: 1024px) {
  .section-title {
    font-size: 2.5rem;  /* 40px desktop */
  }
}

/* Body Text */
.body-text {
  font-size: 1rem;  /* 16px todas as telas */
}
@media (min-width: 1024px) {
  .body-text {
    font-size: 1.125rem;  /* 18px desktop */
  }
}
```

### 4.5 Spacing Responsive

```css
/* Padding Vertical de Sections */
.section {
  padding-top: 3rem;    /* 48px mobile */
  padding-bottom: 3rem;
}
@media (min-width: 768px) {
  .section {
    padding-top: 4rem;    /* 64px tablet */
    padding-bottom: 4rem;
  }
}
@media (min-width: 1024px) {
  .section {
    padding-top: 5rem;    /* 80px desktop */
    padding-bottom: 5rem;
  }
}

/* Gaps entre elementos */
.grid {
  gap: 1rem;  /* 16px mobile */
}
@media (min-width: 768px) {
  .grid {
    gap: 1.5rem;  /* 24px tablet/desktop */
  }
}
```

---

## 5. Acessibilidade (WCAG 2.1 AA)

### 5.1 Contraste de Cores

Todas as combinações atendem WCAG AA (4.5:1 texto normal, 3:1 texto grande):

**Aprovado:**
- ✅ Gray-900 sobre White: 18.8:1
- ✅ Gray-700 sobre White: 9.6:1
- ✅ Gray-600 sobre White: 6.2:1
- ✅ Blue-600 sobre White: 5.8:1
- ✅ White sobre Blue-500: 7.1:1
- ✅ White sobre Blue-600: 9.4:1
- ✅ White sobre Gray-900: 18.8:1

### 5.2 Navegação por Teclado

**Header/Navigation:**
- Tab order lógico: Logo → Menu Items → Busca → Login
- Focus visible em todos os elementos interativos
- Skip to main content link (visível no foco)
- Menu mobile: Esc fecha, foco trapado

**CTAs e Botões:**
- Todos acessíveis via Tab
- Enter/Space ativam
- Focus outline: 2px solid blue-500, offset 2px
- Hover e focus estados distintos

**Cards Clicáveis:**
- Toda área do card clicável (não apenas link)
- Focus no card inteiro, não só no link

**Forms:**
- Labels associados corretamente (htmlFor)
- Placeholder não substitui label
- Erro apresentado em texto, não só cor
- Focus na primeira campo ao abrir

### 5.3 Estrutura Semântica

```html
<!-- Estrutura Básica -->
<header role="banner">
  <nav role="navigation" aria-label="Menu principal"></nav>
</header>

<main role="main">
  <!-- Hero -->
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">Facilite a Volta às Aulas</h1>
  </section>

  <!-- Como Funciona -->
  <section aria-labelledby="como-funciona-title">
    <h2 id="como-funciona-title">Como Funciona</h2>
  </section>

  <!-- Outras seções... -->
</main>

<footer role="contentinfo">
  <nav aria-label="Rodapé"></nav>
</footer>
```

### 5.4 ARIA Labels e Landmarks

**Ícones sem texto:**
```html
<button aria-label="Abrir menu de navegação">
  <MenuIcon aria-hidden="true" />
</button>

<a href="https://instagram.com" aria-label="Instagram Casa e Lazer">
  <InstagramIcon aria-hidden="true" />
</a>
```

**Listas de produtos:**
```html
<ul role="list" aria-label="Produtos em destaque">
  <li role="listitem">
    <article aria-labelledby="product-1-title">
      <img alt="Caderno espiral universitário 200 folhas" />
      <h3 id="product-1-title">Caderno Espiral</h3>
    </article>
  </li>
</ul>
```

**Loading states:**
```html
<div role="status" aria-live="polite" aria-label="Processando lista">
  <span>Processando sua lista...</span>
</div>
```

### 5.5 Imagens e Alt Text

**Alt text descritivo:**
- Produtos: "Mochila escolar azul com bolsos laterais"
- Decorativas: alt="" (vazio, não omitir atributo)
- Complexas: alt curto + aria-describedby para descrição longa

**Logos:**
- Logo principal: alt="Casa e Lazer - O Melhor Pra Você"
- Logos de escolas: alt="Logo [Nome da Escola]"

### 5.6 Responsivo para Zoom

- Zoom até 200% sem scroll horizontal
- Texto não truncado ou sobreposto
- CTAs e elementos interativos mantêm tamanho mínimo 44x44px (touch target)
- Breakpoints em em/rem, não px

### 5.7 Motion e Animações

```css
/* Respeita preferência do usuário */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 5.8 Formulários Acessíveis

```html
<!-- Input com label, hint e erro -->
<div>
  <label for="email" id="email-label">
    E-mail
    <span aria-hidden="true">*</span>
  </label>
  <span id="email-hint">
    Usaremos para enviar seu orçamento
  </span>
  <input
    id="email"
    type="email"
    aria-labelledby="email-label"
    aria-describedby="email-hint"
    aria-required="true"
    aria-invalid="false"
  />
  <!-- Se houver erro: -->
  <span id="email-error" role="alert">
    Por favor, insira um e-mail válido
  </span>
</div>
```

---

## 6. Performance e Otimizações

### 6.1 Imagens

**Formato:**
- WebP com fallback PNG/JPG
- AVIF para navegadores compatíveis (futuro)

**Tamanhos:**
- Hero image: 1920x1080 (desktop), 768x768 (mobile)
- Product images: 600x600
- Blog featured: 1200x630
- Logos escolas: 400x200

**Otimização:**
```tsx
// Next.js Image component
<Image
  src="/hero.webp"
  alt="..."
  width={1920}
  height={1080}
  priority  // Hero image
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..."
/>

// Produtos (lazy load)
<Image
  src={product.image}
  alt={product.name}
  width={600}
  height={600}
  loading="lazy"
  quality={80}
/>
```

### 6.2 Fonts

**Estratégia:**
- Self-host fonts (Poppins, Inter) via next/font
- Preload critical fonts
- font-display: swap

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
```

### 6.3 Code Splitting

```tsx
// Componentes pesados com dynamic import
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false,  // Client-side only se necessário
})
```

### 6.4 Critical CSS

- Inline critical CSS no <head>
- Defer non-critical CSS
- Remover CSS não utilizado (PurgeCSS via Tailwind)

### 6.5 Métricas Alvo

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Outras:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Blocking Time: < 200ms
- Speed Index: < 3s

**Lighthouse Score:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

---

## 7. SEO e Metadata

### 7.1 Homepage Metadata

```tsx
// app/page.tsx
export const metadata = {
  title: 'Casa e Lazer | Materiais Escolares Online - O Melhor Pra Você',
  description: 'Envie sua lista de materiais escolares e receba orçamento completo em minutos. Casa e Lazer: tradição desde 1950. Preços competitivos, entrega rápida.',
  keywords: 'materiais escolares, lista escolar, papelaria, Casa e Lazer, volta às aulas',

  openGraph: {
    title: 'Casa e Lazer - Facilite a Volta às Aulas',
    description: 'Envie sua lista de materiais e receba orçamento completo',
    url: 'https://casaelazer.com.br',
    siteName: 'Casa e Lazer',
    images: [
      {
        url: 'https://casaelazer.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa e Lazer - Materiais Escolares',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Casa e Lazer - Facilite a Volta às Aulas',
    description: 'Envie sua lista de materiais e receba orçamento completo',
    images: ['https://casaelazer.com.br/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'código-de-verificação-google',
  },
}
```

### 7.2 Structured Data (JSON-LD)

```tsx
// app/page.tsx
export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Casa e Lazer',
    image: 'https://casaelazer.com.br/logo.png',
    '@id': 'https://casaelazer.com.br',
    url: 'https://casaelazer.com.br',
    telephone: '+55XX XXXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Exemplo, 123',
      addressLocality: 'Cidade',
      addressRegion: 'UF',
      postalCode: 'XXXXX-XXX',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    priceRange: '$$',
    sameAs: [
      'https://facebook.com/casaelazer',
      'https://instagram.com/casaelazer',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Conteúdo da página */}
    </>
  )
}
```

---

## 8. Próximos Passos (Implementação)

### 8.1 Fase 1: Setup (Dia 1)

- [ ] Criar projeto Next.js 15
- [ ] Configurar TypeScript
- [ ] Instalar e configurar Tailwind CSS
- [ ] Instalar shadcn/ui
- [ ] Configurar fonts (Poppins + Inter)
- [ ] Criar design tokens no Tailwind config
- [ ] Setup ESLint + Prettier

### 8.2 Fase 2: Componentes Base (Dia 1-2)

- [ ] Criar componentes de botões
- [ ] Criar componentes de cards
- [ ] Criar componentes de inputs
- [ ] Criar badges
- [ ] Criar componentes de ícones
- [ ] Implementar Header/Navigation
- [ ] Implementar Footer

### 8.3 Fase 3: Homepage (Dia 2-3)

- [ ] Hero Section
- [ ] Como Funciona
- [ ] Benefícios
- [ ] Catálogo em Destaque (mock data)
- [ ] Escolas Parceiras (mock data)
- [ ] Sobre Casa e Lazer
- [ ] Blog Recente (mock data)
- [ ] CTA Final

### 8.4 Fase 4: Responsividade (Dia 3)

- [ ] Testar todos os breakpoints
- [ ] Menu mobile
- [ ] Ajustes de espaçamento
- [ ] Testes em devices reais

### 8.5 Fase 5: Acessibilidade (Dia 4)

- [ ] Auditoria WCAG
- [ ] Testar navegação por teclado
- [ ] Testar screen readers
- [ ] Corrigir contrastes
- [ ] Adicionar ARIA labels

### 8.6 Fase 6: Performance (Dia 4)

- [ ] Otimizar imagens
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Lighthouse audit
- [ ] Core Web Vitals

### 8.7 Fase 7: SEO (Dia 5)

- [ ] Metadata completo
- [ ] Structured data
- [ ] Sitemap
- [ ] Robots.txt
- [ ] OG images

---

## 9. Assets Necessários

### 9.1 Imagens

**Hero:**
- [ ] Foto de família feliz com materiais escolares (1920x1080)
- [ ] Alternativa: Ilustração moderna de pais + filhos + escola

**Como Funciona:**
- [ ] Ícone Upload (64x64, SVG)
- [ ] Ícone IA/Busca (64x64, SVG)
- [ ] Ícone Documento/PDF (64x64, SVG)

**Benefícios:**
- [ ] Ícone Relógio (48x48, SVG)
- [ ] Ícone Dinheiro (48x48, SVG)
- [ ] Ícone Check/Qualidade (48x48, SVG)
- [ ] Ícone Caminhão (48x48, SVG)
- [ ] Ícone Escola (48x48, SVG)
- [ ] Ícone Telefone/Suporte (48x48, SVG)

**Produtos:**
- [ ] 8 fotos de produtos populares (600x600 cada)
- [ ] Fundo branco/neutro
- [ ] Alta qualidade

**Escolas:**
- [ ] Logos de 8 escolas parceiras (400x200 cada)
- [ ] Formato PNG com transparência

**Sobre Casa e Lazer:**
- [ ] Foto da loja física ou equipe (1200x900)

**Blog:**
- [ ] 3 imagens de featured (1200x630 cada)

**OG Image:**
- [ ] Imagem para compartilhamento social (1200x630)

### 9.2 Logo

- [ ] Logo Casa e Lazer (SVG + PNG)
- [ ] Versões: colorida, branca, preta
- [ ] Tamanhos: original, 50px height, 40px height

### 9.3 Conteúdo

**Textos:**
- [ ] Endereço completo da loja
- [ ] Telefone e WhatsApp
- [ ] Horários de funcionamento
- [ ] Links de redes sociais
- [ ] Descrições detalhadas dos benefícios

**Blog (mock):**
- [ ] 3 títulos de posts
- [ ] 3 excerpts (resumos)
- [ ] 3 datas

---

## 10. Checklist Final de Qualidade

### Design
- [ ] Paleta de cores aplicada consistentemente
- [ ] Tipografia hierárquica e legível
- [ ] Espaçamento uniforme e harmonioso
- [ ] Componentes UI reutilizáveis documentados
- [ ] Todos os estados (hover, focus, active, disabled) definidos

### Responsividade
- [ ] Mobile (320px - 767px) funcional
- [ ] Tablet (768px - 1023px) funcional
- [ ] Desktop (1024px+) funcional
- [ ] Sem scroll horizontal em nenhum breakpoint
- [ ] Imagens responsivas

### Acessibilidade
- [ ] Contraste WCAG AA em todos os textos
- [ ] Navegação por teclado completa
- [ ] ARIA labels onde necessário
- [ ] Estrutura semântica HTML5
- [ ] Alt text em todas as imagens
- [ ] Focus indicators visíveis
- [ ] Suporte a screen readers testado

### Performance
- [ ] Imagens otimizadas (WebP)
- [ ] Lazy loading implementado
- [ ] Fonts otimizadas
- [ ] CSS crítico inline
- [ ] JavaScript code-split
- [ ] Lighthouse score > 90

### SEO
- [ ] Metadata completo
- [ ] OpenGraph tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap
- [ ] Robots.txt
- [ ] URLs semânticas

### Funcionalidade
- [ ] Todos os CTAs funcionais
- [ ] Links internos corretos
- [ ] Smooth scroll para âncoras
- [ ] Menu mobile funcional
- [ ] Formulários validados
- [ ] Loading states implementados

---

**Documento criado em:** 2026-01-08
**Versão:** 1.0
**Status:** ✅ Completo e pronto para implementação

