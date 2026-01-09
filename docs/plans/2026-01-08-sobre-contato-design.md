# Design: Páginas Sobre e Contato - Casa e Lazer

**Data:** 2026-01-08
**Tipo:** Design Institucional
**Abordagem:** Reutilização de Componentes Existentes (Abordagem A)

---

## 📋 Resumo Executivo

Criação de duas páginas institucionais para o site Casa e Lazer:
- **Sobre** (`/sobre`): História, missão, visão, valores, timeline de 76 anos
- **Contato** (`/contato`): Formulário, informações de contato, mapa, FAQ

**Princípios:**
- Tom institucional e profissional
- Foco em credibilidade (76 anos) e inovação (IA)
- Máxima reutilização de componentes existentes (~80%)
- Dados mock (substituir depois com dados reais do Instagram)

---

## 📄 Página SOBRE (`/sobre`)

### Estrutura Geral
- **Localização:** `app/(public)/sobre/page.tsx`
- **Layout:** Público (Header + Footer automáticos)
- **Seções:** 6 principais
- **Objetivo:** Transmitir credibilidade, história e valores da empresa

---

### 1. Hero Section

**Background:** Gradiente azul (`gradient-hero`)
**Layout:** Container centralizado, `max-w-4xl`

**Elementos:**
- Badge vermelho: "76 Anos de História"
- H1: "Tradição e Inovação em Cada Detalhe"
- Parágrafo: "Desde 1950, a Casa e Lazer é referência em materiais escolares, papelaria e utilidades domésticas no Rio de Janeiro. Combinamos décadas de experiência com tecnologia de ponta para oferecer o melhor atendimento."
- Sem CTA (deixar para seção final)

**Componentes Reusados:**
- `Section` (background="gradient", padding="large")
- `Container`

**Spacing:** `py-20 md:py-24`

---

### 2. Timeline Section - Nossa História

**Background:** Branco
**Layout:** Container com heading centralizado + timeline vertical

**Heading:**
- Subtítulo vermelho: "Nossa Trajetória"
- H2: "76 Anos Construindo História"
- Parágrafo: Breve descrição sobre evolução

**Timeline Component (NOVO):**

Componente vertical com 5 marcos históricos:

**Estrutura de cada item:**
- Ano grande à esquerda (text-2xl, azul, bold)
- Linha vertical azul conectando itens
- Círculo azul no ponto de conexão
- Card branco à direita com:
  - Título do marco (font-semibold, text-lg)
  - Descrição (2-3 linhas, text-gray-600)
  - Shadow: `shadow-md`, hover: `shadow-lg`

**Marcos Históricos (Mock Data):**

1. **1950** - Fundação da Casa e Lazer
   "Início das atividades no Rio de Janeiro, focando em materiais escolares e papelaria de qualidade."

2. **1985** - Expansão Estratégica
   "Abertura de novas unidades e ampliação do catálogo de produtos para atender toda a família."

3. **2010** - Era Digital
   "Modernização com presença online e implementação de sistema de gestão integrado."

4. **2020** - Catálogo Digital Completo
   "Digitalização completa do catálogo com milhares de produtos acessíveis online."

5. **2025** - Tecnologia com IA
   "Implementação de inteligência artificial para matching automático de listas escolares em minutos."

**Animação:** FadeIn on scroll (Intersection Observer)

**Spacing:** `py-20`, `gap-12` entre itens

---

### 3. Missão, Visão e Valores

**Background:** `gray-50` (contraste suave)
**Layout:** Container com heading + grid 3 colunas

**Heading:**
- Subtítulo vermelho: "Nossos Pilares"
- H2: "O Que Nos Move"

**Grid de 3 Cards:**

#### Card 1 - Missão
- **Ícone:** Target (Lucide) em círculo azul
- **Título:** "Nossa Missão"
- **Texto:** "Atuar no varejo de materiais e utilidades com foco total na satisfação do cliente, oferecendo qualidade, variedade e atendimento excepcional."

#### Card 2 - Visão
- **Ícone:** Eye (Lucide) em círculo azul
- **Título:** "Nossa Visão"
- **Texto:** "Ser a referência em varejo no Rio de Janeiro, reconhecida pela excelência no atendimento, inovação e compromisso com nossos clientes."

#### Card 3 - Valores
- **Ícone:** Heart (Lucide) em círculo azul
- **Título:** "Nossos Valores"
- **Lista com badges vermelhos:**
  - Responsabilidade
  - Ética
  - Inovação
  - Crescimento
  - Satisfação do Cliente

**Card Style:**
- Background: white
- Shadow: `shadow-md`
- Border radius: `rounded-2xl`
- Padding: `p-8`
- Hover: `shadow-xl`, `transform scale-105`

**Grid:** `grid-cols-1 md:grid-cols-3 gap-8`
**Spacing:** `py-20`

**Componentes Reusados:** Card pattern da homepage

---

### 4. Stats Section - Números que Impressionam

**Background:** Branco
**Layout:** Container com heading + grid 4 colunas

**Heading:**
- Subtítulo vermelho: "Resultados"
- H2: "Números que Falam por Si"

**4 Stats Cards:**

1. **76** - Anos de História
2. **50.000+** - Produtos no Catálogo
3. **[X]** - Lojas no Rio de Janeiro _(preencher com dado real depois)_
4. **100%** - Satisfação Garantida

**Card Style:**
- Número grande: `text-4xl md:text-5xl`, azul, bold
- Label: `text-gray-600`, smaller
- Ícone decorativo pequeno
- Animação: CountUp com Intersection Observer (já implementado na homepage)

**Grid:** `grid-cols-2 md:grid-cols-4 gap-8`
**Spacing:** `py-20`

**Componentes Reusados:** `StatCard` da homepage

---

### 5. Diferenciais Section

**Background:** Gradiente azul (igual hero)
**Layout:** Container com heading + grid 2 colunas

**Heading:**
- Subtítulo: `text-white/90` - "Por Que Escolher"
- H2: `text-white` - "Casa e Lazer"

**Grid de 4 Diferenciais:**

#### 1. Tradição e Confiança
- **Ícone:** Award (Lucide)
- **Texto:** "76 anos de experiência e credibilidade no mercado carioca"

#### 2. Tecnologia Inovadora
- **Ícone:** Zap (Lucide)
- **Texto:** "IA para matching de listas escolares em minutos"

#### 3. Variedade Incomparável
- **Ícone:** Package (Lucide)
- **Texto:** "Mais de 50 mil produtos para todas as necessidades"

#### 4. Atendimento Personalizado
- **Ícone:** Users (Lucide)
- **Texto:** "Equipe experiente e dedicada à sua satisfação"

**Card Style:**
- Background: `bg-white/95` (semi-transparente)
- Backdrop blur: `backdrop-blur-sm`
- Shadow: `shadow-lg`
- Padding: `p-6`
- Border radius: `rounded-xl`

**Grid:** `grid-cols-1 md:grid-cols-2 gap-8`
**Spacing:** `py-20`

---

### 6. CTA Final Section

**Background:** Vermelho sólido (`#FF0000`)
**Layout:** Container centralizado, `max-w-3xl`, `text-center`

**Conteúdo:**
- H2 (branco): "Pronto para Conhecer Nossa História de Perto?"
- Parágrafo (`text-white/90`): "Visite uma de nossas lojas ou entre em contato. Estamos prontos para atender você!"

**Botões (lado a lado):**
1. **Primário:** "Fale Conosco" → `/contato`
   - Background: white
   - Text: vermelho
   - Hover: gray-50

2. **Secundário:** "Nossas Lojas" → `/lojas`
   - Variant: outline
   - Border: white
   - Text: white
   - Hover: white/10 background

**Spacing:** `py-16`

---

### SEO Metadata

```typescript
export const metadata = {
  title: 'Sobre Nós - 76 Anos de História | Casa e Lazer',
  description: 'Conheça a história da Casa e Lazer, referência em materiais escolares e papelaria no Rio de Janeiro desde 1950. Tradição, inovação e atendimento excepcional.',
  keywords: 'casa e lazer história, sobre casa e lazer, materiais escolares rj, papelaria tradicional, casa e lazer rio de janeiro'
}
```

---

## 📞 Página CONTATO (`/contato`)

### Estrutura Geral
- **Localização:** `app/(public)/contato/page.tsx`
- **Layout:** Público (Header + Footer automáticos)
- **Seções:** 5 principais
- **Objetivo:** Facilitar comunicação e fornecer todas as informações de contato

---

### 1. Hero Section

**Background:** Gradiente azul
**Layout:** Container centralizado, `max-w-4xl`

**Elementos:**
- Badge vermelho: "Estamos Aqui"
- H1: "Fale Conosco"
- Parágrafo: "Nossa equipe está pronta para atender você. Entre em contato por qualquer um dos canais abaixo ou visite uma de nossas lojas."

**Spacing:** `py-16` (mais compacto que página Sobre)

---

### 2. Contact Cards Grid

**Background:** Branco
**Layout:** Container com grid 4 colunas (responsivo)

**4 Contact Cards (REUTILIZA componente existente da homepage):**

#### Card 1 - Telefone
- **Ícone:** Phone (azul)
- **Label:** "Central de Atendimento"
- **Valor:** "(21) 3122-1234"
- **Subtext:** "Seg a Sex, 8h às 18h"

#### Card 2 - WhatsApp
- **Ícone:** MessageCircle (verde)
- **Label:** "WhatsApp"
- **Valor:** "(21) 98765-4321"
- **Subtext:** "Atendimento rápido"

#### Card 3 - Email
- **Ícone:** Mail (azul)
- **Label:** "E-mail"
- **Valor:** "contato@casaelazer.com.br"
- **Subtext:** "Respondemos em até 24h"

#### Card 4 - Endereço
- **Ícone:** MapPin (vermelho)
- **Label:** "Matriz"
- **Valor:** "Rua Francisco Glicério, 123"
- **Subtext:** "Centro, Rio de Janeiro"

**Card Style (já existe):**
- Background: `bg-white/10` com `backdrop-blur-md`
- Hover: scale + shadow
- Padding: `p-6`
- Rounded: `rounded-xl`

**Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
**Spacing:** `py-20`

**Componentes Reusados:** `ContactCard` completo da homepage

**Nota:** Dados de telefone, WhatsApp e endereço são MOCK. Substituir depois com dados reais do Instagram.

---

### 3. Formulário de Contato + Info Lateral

**Background:** `gray-50`
**Layout:** Container com grid 2 colunas (60% formulário / 40% info)

#### Coluna Esquerda - Formulário (NOVO COMPONENTE)

**Heading:**
- H3: "Envie Sua Mensagem"
- Parágrafo: "Preencha o formulário abaixo e retornaremos em breve."

**Campos do Formulário:**

1. **Nome Completo**
   - Type: text
   - Required: sim
   - Placeholder: "Seu nome completo"

2. **Email**
   - Type: email
   - Required: sim
   - Placeholder: "seu@email.com"
   - Validação: formato de email

3. **Telefone**
   - Type: tel
   - Required: não
   - Placeholder: "(00) 00000-0000"
   - Máscara: telefone brasileiro

4. **Mensagem**
   - Type: textarea
   - Required: sim
   - Rows: 6
   - Placeholder: "Como podemos ajudar você?"

**Botão Submit:**
- Variant: primário (azul)
- Full width
- Texto: "Enviar Mensagem"
- Loading state: spinner + texto "Enviando..."
- Success state: checkmark + "Mensagem enviada!"

**Tecnologias:**
- React Hook Form para gerenciamento
- Zod para validação de schema
- shadcn/ui components (Input, Textarea, Button)

**Validação Client-Side:**
- Mensagens de erro em vermelho abaixo dos campos
- Desabilitar submit se form inválido
- Required fields destacados

**Action (Mock por enquanto):**
```typescript
async function onSubmit(data: ContactFormData) {
  console.log('Form data:', data)
  // TODO: Integrar com API/Supabase para enviar email
  await new Promise(resolve => setTimeout(resolve, 1000)) // Mock delay
  toast.success('Mensagem enviada com sucesso!')
}
```

---

#### Coluna Direita - Informações Adicionais

**Card 1 - Horários de Atendimento:**
- **Ícone:** Clock (Lucide)
- **H4:** "Horário de Atendimento"
- **Lista:**
  - Segunda a Sexta: 8h às 18h
  - Sábado: 9h às 13h
  - Domingo: Fechado
- Background: white
- Shadow: `shadow-md`
- Padding: `p-6`
- Rounded: `rounded-xl`

**Card 2 - Redes Sociais:**
- **Ícone:** Share2 (Lucide)
- **H4:** "Siga-nos nas Redes"
- **Botões de Redes Sociais:**
  - Instagram: @__casaelazer
  - Facebook: /casaelazer
  - YouTube: /casaelazer
- Ícones com brand colors
- Links externos (target="_blank")
- Background: white
- Shadow: `shadow-md`

**Spacing entre cards:** `space-y-6`

**Grid da Seção:** `grid-cols-1 lg:grid-cols-5 gap-8`
- Formulário: `lg:col-span-3`
- Info: `lg:col-span-2`

**Spacing:** `py-20`

---

### 4. Mapa das Lojas

**Background:** Branco
**Layout:** Container `max-w-7xl` (mais largo que outras seções)

**Heading:**
- Subtítulo vermelho: "Nossas Lojas"
- H2: "Encontre a Unidade Mais Próxima"

**Google Maps Embed:**
- Width: 100%
- Height: 450px
- Border radius: `rounded-xl`
- Shadow: `shadow-lg`
- Modo: múltiplos marcadores (se possível configurar)
- Controles: zoom, street view habilitados
- Estilo: padrão Google Maps

**URL Embed (Mock):**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675..."
  width="100%"
  height="450"
  style="border:0;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl shadow-lg"
></iframe>
```

**Link Auxiliar:**
- Abaixo do mapa: "Ver no Google Maps" (link externo)
- Ícone: ExternalLink
- Target: `_blank`

**Nota:** URL do mapa é MOCK. Substituir depois com coordenadas reais das lojas.

**Spacing:** `py-20`

---

### 5. FAQ Rápido (Opcional)

**Background:** `gray-50`
**Layout:** Container com heading + accordion

**Heading:**
- Subtítulo vermelho: "Dúvidas Frequentes"
- H2: "Perguntas Comuns sobre Contato"

**Accordion (shadcn/ui):**

Componente de acordeão com 4 perguntas:

1. **Qual o prazo de resposta por e-mail?**
   - Resposta: "Respondemos todos os e-mails em até 24 horas úteis. Para questões urgentes, recomendamos contato via WhatsApp ou telefone."

2. **Posso fazer pedidos por telefone?**
   - Resposta: "Sim! Nossa central de atendimento está pronta para receber seu pedido e tirar todas as suas dúvidas."

3. **Vocês atendem fora do Rio de Janeiro?**
   - Resposta: "Atualmente nossas lojas físicas estão localizadas no Rio de Janeiro, mas enviamos produtos para todo o Brasil."

4. **Como faço para enviar minha lista escolar?**
   - Resposta: "Use nossa ferramenta de upload de lista disponível no site, ou entre em contato por WhatsApp enviando uma foto da lista."

**Accordion Style:**
- Type: single (um item aberto por vez)
- Collapsible: true
- Border entre items
- Hover state nos triggers

**Spacing:** `py-20`

**Componentes Reusados:** Accordion do shadcn/ui (já existe no projeto)

---

### SEO Metadata

```typescript
export const metadata = {
  title: 'Contato - Fale Conosco | Casa e Lazer',
  description: 'Entre em contato com a Casa e Lazer. Telefone, WhatsApp, e-mail e endereços das lojas no Rio de Janeiro. Estamos prontos para atender você!',
  keywords: 'contato casa e lazer, telefone casa e lazer, endereço lojas rj, atendimento casa e lazer, whatsapp casa e lazer'
}
```

---

## 🔧 Componentes Novos a Criar

### 1. TimelineItem Component

**Localização:** `components/about/timeline-item.tsx`

**Props:**
```typescript
interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}
```

**Estrutura:**
- Container flex com gap
- Ano à esquerda (fixed width)
- Linha vertical + círculo (condicional no último item)
- Card à direita com título e descrição
- Animação: fadeIn on scroll (framer-motion ou CSS)

**Estimativa:** ~50 linhas de código

---

### 2. ContactForm Component

**Localização:** `components/contact/contact-form.tsx`

**Props:**
```typescript
interface ContactFormProps {
  onSuccess?: () => void
}
```

**Features:**
- React Hook Form integration
- Zod schema validation
- shadcn/ui form components
- Loading states
- Success/Error toast notifications
- Mock submit handler (preparado para API integration)

**Schema Zod:**
```typescript
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres')
})
```

**Estimativa:** ~100 linhas de código

---

## 📊 Análise de Reutilização

### Componentes Totalmente Reusados (0% código novo)
- ✅ `Section`, `Container`, `SectionTitle` (layout)
- ✅ `ContactCard` (página contato)
- ✅ `StatCard` (página sobre)
- ✅ `Button`, `Card`, `Badge` (shadcn/ui)
- ✅ `Input`, `Textarea`, `Label` (shadcn/ui)
- ✅ `Accordion` (FAQ)

### Componentes Novos (100% código novo)
- 🆕 `TimelineItem` (~50 linhas)
- 🆕 `ContactForm` (~100 linhas)

### Páginas Novas
- 🆕 `app/(public)/sobre/page.tsx` (~300 linhas)
- 🆕 `app/(public)/contato/page.tsx` (~250 linhas)

**Total de código novo:** ~700 linhas
**Código reutilizado:** ~80% da funcionalidade

---

## 🗂️ Estrutura de Arquivos Final

```
casaelazer/
├── app/
│   └── (public)/
│       ├── sobre/
│       │   └── page.tsx          # Nova - 6 seções
│       └── contato/
│           └── page.tsx          # Nova - 5 seções
│
├── components/
│   ├── about/
│   │   └── timeline-item.tsx    # Novo componente
│   └── contact/
│       └── contact-form.tsx     # Novo componente
│
└── docs/
    └── plans/
        └── 2026-01-08-sobre-contato-design.md  # Este documento
```

---

## ✅ Checklist de Implementação

### Preparação
- [ ] Criar pastas `app/(public)/sobre` e `app/(public)/contato`
- [ ] Criar pastas `components/about` e `components/contact`

### Componentes Novos
- [ ] Implementar `TimelineItem` component
  - [ ] Props interface
  - [ ] Layout flex com ano + linha + card
  - [ ] Animação fadeIn
  - [ ] Handling do último item (sem linha)
- [ ] Implementar `ContactForm` component
  - [ ] Setup React Hook Form
  - [ ] Schema Zod
  - [ ] Form fields (nome, email, telefone, mensagem)
  - [ ] Validation + error messages
  - [ ] Submit handler (mock)
  - [ ] Loading/Success states
  - [ ] Toast notifications

### Página Sobre
- [ ] Criar `app/(public)/sobre/page.tsx`
- [ ] Section 1: Hero
- [ ] Section 2: Timeline (usar TimelineItem)
- [ ] Section 3: Missão/Visão/Valores (grid 3 cards)
- [ ] Section 4: Stats (reutilizar StatCard)
- [ ] Section 5: Diferenciais (grid 2 colunas)
- [ ] Section 6: CTA Final (vermelho)
- [ ] Adicionar metadata SEO

### Página Contato
- [ ] Criar `app/(public)/contato/page.tsx`
- [ ] Section 1: Hero
- [ ] Section 2: Contact Cards Grid (reutilizar ContactCard)
- [ ] Section 3: Formulário + Info Lateral (grid 60/40)
  - [ ] ContactForm component na esquerda
  - [ ] Cards de horário e redes sociais na direita
- [ ] Section 4: Google Maps Embed
- [ ] Section 5: FAQ Accordion (opcional)
- [ ] Adicionar metadata SEO

### Testes e Validação
- [ ] Build sem erros (`npm run build`)
- [ ] Links do header funcionando (`/sobre`, `/contato`)
- [ ] Formulário validando corretamente
- [ ] Responsividade mobile (breakpoints: sm, md, lg)
- [ ] Animações funcionando (timeline fadeIn)
- [ ] SEO metadata aparecendo corretamente
- [ ] Performance (Lighthouse score)

### Dados Mock → Reais
- [ ] Substituir telefones mock pelos reais (Instagram)
- [ ] Substituir endereços mock pelos reais (Instagram)
- [ ] Substituir horários mock pelos reais (Instagram)
- [ ] Atualizar Google Maps embed com coordenadas reais
- [ ] Atualizar número de lojas no stats

---

## 🎨 Padrões de Design Mantidos

### Cores
- **Azul Primário:** `#0066FF` (links, botões primários, ícones)
- **Vermelho:** `#FF0000` (CTAs, badges, destaques)
- **Neutros:** gray-50 a gray-900 (backgrounds, textos)

### Tipografia
- **Headings:** Poppins (weights: 600, 700)
- **Body:** Inter (weights: 400, 500, 600)

### Spacing
- **Sections:** `py-20 md:py-24`
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Gaps:** 6, 8, 12, 16 (4-unit increments)

### Shadows
- Cards: `shadow-md`, hover: `shadow-lg` ou `shadow-xl`
- Seções destacadas: `shadow-2xl`

### Animações
- FadeIn on scroll (Intersection Observer)
- Hover: `transform scale-105` + shadow increase
- Transitions: 200-300ms ease

### Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid collapse: 3 colunas → 1 coluna em mobile

---

## 🚀 Próximos Passos Após Implementação

1. **Integração com Backend:**
   - Conectar formulário de contato com API/Supabase
   - Implementar envio de email (Resend, SendGrid, ou similar)
   - Salvar mensagens em banco de dados para histórico

2. **Analytics:**
   - Adicionar tracking de eventos (form submit, CTA clicks)
   - Monitorar taxa de conversão do formulário

3. **Melhorias Futuras:**
   - Adicionar chat ao vivo (Tawk.to, Intercom)
   - Implementar sistema de tickets para acompanhamento
   - A/B testing de CTAs e copywriting

4. **Conteúdo:**
   - Substituir todos os dados mock pelos reais
   - Adicionar fotos reais das lojas
   - Criar conteúdo de blog/notícias (se aplicável)

---

**Documento aprovado e pronto para implementação!** ✅
