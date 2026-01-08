# Casa e Lazer - Design Técnico Completo

**Data:** 2026-01-08
**Projeto:** Site institucional + Sistema de matching de listas de materiais escolares
**Stack:** Next.js 14+ (App Router) + React + TypeScript + Tailwind + Supabase

---

## 1. Visão Geral

### Objetivo
Criar site completo para casaelazer.com.br com:
- Interface moderna e responsiva
- Sistema de gerenciamento de conteúdo (CMS custom)
- Funcionalidade de matching de listas de materiais escolares
- Catálogo virtual de produtos (NÃO é e-commerce)
- Geração de orçamentos em PDF/Excel

### Importante
- **NÃO é e-commerce**: Sistema apenas cataloga produtos e gera orçamentos
- Clientes baixam PDF/Excel e compram na loja física
- Sem carrinho, checkout, pagamento online ou pedidos

---

## 2. Arquitetura Geral

### Stack Tecnológica

**Frontend/Backend:**
- Next.js 14+ (App Router, TypeScript)
- React 18+
- Tailwind CSS + shadcn/ui

**Database & Backend:**
- Supabase PostgreSQL + pgvector
- Supabase Auth (autenticação)
- Supabase Storage (arquivos, imagens)

**IA/ML:**
- OpenRouter API (GPT-4o free tier)
- text-embedding-3-small (embeddings semânticos)

**Geração de Documentos:**
- @react-pdf/renderer (PDF)
- exceljs (Excel)

**Deploy:**
- Vercel (Next.js) - free tier
- Supabase - free tier

### Estrutura do Projeto

```
/app
  /(public)              # Rotas públicas
    /page.tsx            # Home
    /produtos            # Catálogo de produtos
      /page.tsx          # Listagem
      /[slug]/page.tsx   # Detalhes do produto
    /listas              # Sistema de listas
      /page.tsx          # Landing
      /nova/page.tsx     # Criar nova lista
      /[id]/page.tsx     # Visualizar lista
      /escolas/[slug]/page.tsx  # Listas públicas de escolas
    /blog                # Blog/Notícias
      /page.tsx          # Listagem
      /[slug]/page.tsx   # Post individual
    /contato/page.tsx    # Contato

  /(admin)               # Rotas protegidas (admin only)
    /admin
      /page.tsx          # Dashboard
      /produtos
        /page.tsx        # Listagem de produtos
        /novo/page.tsx   # Criar produto
        /[id]/page.tsx   # Editar produto
        /importar-sql/page.tsx  # Importar via SQL
      /listas/page.tsx   # Gestão de listas
      /escolas
        /page.tsx        # Gestão de escolas
        /nova/page.tsx   # Criar escola
      /blog
        /page.tsx        # Gestão de posts
        /novo/page.tsx   # Criar post
      /paginas/page.tsx  # Gestão de páginas

  /api                   # API Routes
    /extract/route.ts    # Extração de listas com IA
    /match/route.ts      # Matching de produtos
    /export/route.ts     # Geração PDF/Excel
    /embeddings/route.ts # Geração de embeddings

/components
  /ui                    # shadcn/ui components
  /admin                 # Admin-specific components
  /public                # Public site components

/lib
  /supabase
    /client.ts           # Client-side Supabase
    /server.ts           # Server-side Supabase
  /ai
    /openrouter.ts       # OpenRouter integration
    /embeddings.ts       # Embedding generation
  /matching
    /algorithm.ts        # Matching algorithm
  /pdf
    /generator.ts        # PDF generation
  /excel
    /generator.ts        # Excel generation
```

---

## 3. Schema do Banco de Dados

### Tabelas Principais

#### `products` (Produtos)
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  subcategory TEXT,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  embedding VECTOR(1536),  -- embeddings para busca semântica
  metadata JSONB,          -- atributos flexíveis
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_products_active ON products(active);
CREATE INDEX idx_products_category ON products(category, active);
CREATE INDEX idx_products_search ON products USING gin(to_tsvector('portuguese', name || ' ' || description));
CREATE INDEX idx_products_embedding ON products USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
```

#### `schools` (Escolas)
```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cnpj TEXT UNIQUE,
  address TEXT,
  city TEXT,
  state TEXT,
  phone TEXT,
  email TEXT,
  logo_url TEXT,
  active BOOLEAN DEFAULT true,
  user_id UUID REFERENCES auth.users(id),  -- responsável da escola
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `material_lists` (Listas de Materiais)
```sql
CREATE TABLE material_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  school_id UUID REFERENCES schools(id),   -- null se criada por pai
  user_id UUID REFERENCES auth.users(id),  -- quem criou
  year INTEGER,                             -- ano letivo
  grade TEXT,                               -- série/ano
  is_public BOOLEAN DEFAULT false,          -- escola=true, pai=false
  original_file_url TEXT,                   -- PDF/Excel original
  status TEXT CHECK (status IN ('processing', 'completed', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_lists_user ON material_lists(user_id);
CREATE INDEX idx_lists_school ON material_lists(school_id, is_public);
```

#### `list_items` (Itens das Listas)
```sql
CREATE TABLE list_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  list_id UUID REFERENCES material_lists(id) ON DELETE CASCADE,
  raw_text TEXT NOT NULL,                   -- texto original extraído
  quantity INTEGER DEFAULT 1,
  matched_product_id UUID REFERENCES products(id),  -- null se não encontrado
  confidence_score DECIMAL(3,2),            -- 0-1
  status TEXT CHECK (status IN ('matched', 'not_found', 'manual_review')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_list_items_list ON list_items(list_id, status);
```

#### `blog_posts` (Blog/Notícias)
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,                             -- markdown ou HTML
  excerpt TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `pages` (Páginas do Site)
```sql
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  metadata JSONB,                           -- SEO, etc
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `profiles` (Perfis de Usuários)
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  role TEXT CHECK (role IN ('admin', 'school', 'parent')),
  full_name TEXT,
  phone TEXT,
  school_id UUID REFERENCES schools(id),   -- null se parent/admin
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### `sql_import_logs` (Log de Importações SQL)
```sql
CREATE TABLE sql_import_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID REFERENCES auth.users(id),
  filename TEXT,
  rows_affected INTEGER,
  status TEXT CHECK (status IN ('success', 'failed', 'partial')),
  error_log TEXT,
  backup_file TEXT,                         -- caminho do backup
  executed_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Row Level Security (RLS)

**products:**
```sql
-- Leitura: produtos ativos OU admin
CREATE POLICY products_select ON products FOR SELECT
  USING (active = true OR (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Modificação: apenas admin
CREATE POLICY products_modify ON products FOR ALL
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
```

**material_lists:**
```sql
-- Leitura: públicas OU próprias OU admin
CREATE POLICY lists_select ON material_lists FOR SELECT
  USING (
    is_public = true
    OR user_id = auth.uid()
    OR (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  );

-- Criação: autenticado
CREATE POLICY lists_insert ON material_lists FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Edição: próprias OU admin
CREATE POLICY lists_update ON material_lists FOR UPDATE
  USING (
    user_id = auth.uid()
    OR (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  );
```

---

## 4. Fluxo do Sistema de Listas

### Etapa 1: Upload
1. Usuário faz upload de PDF/Excel/Word
2. Arquivo salvo em Supabase Storage: `material-lists/{user_id}/{list_id}/original.pdf`
3. Cria registro em `material_lists` com `status='processing'`

### Etapa 2: Extração com IA
**API Route:** `/api/extract`

```typescript
1. Download do arquivo do Supabase Storage
2. Enviar para OpenRouter (GPT-4o free)
3. Prompt estruturado:
   "Extraia a lista de materiais escolares do documento.
    Retorne JSON com formato:
    [{ item: string, quantity: number }, ...]"
4. GPT retorna itens estruturados
5. Salva cada item em `list_items` com status='pending'
```

### Etapa 3: Geração de Embeddings
```typescript
Para cada item extraído:
- Gera embedding via OpenRouter (text-embedding-3-small)
- Usa para matching semântico
```

### Etapa 4: Matching Semântico
**API Route:** `/api/match`

```typescript
Para cada item em list_items:
1. Busca produtos similares usando pgvector:
   SELECT * FROM products
   WHERE active = true
   ORDER BY embedding <=> $item_embedding
   LIMIT 5

2. Calcula confidence score (cosine similarity)
3. Classificação:
   - score > 0.75: matched (status='matched')
   - score 0.5-0.75: revisar (status='manual_review')
   - score < 0.5: não encontrado (status='not_found')

4. Atualiza list_items com matched_product_id e confidence_score
5. Atualiza material_lists.status = 'completed'
```

### Etapa 5: Apresentação de Resultados
Interface mostra 3 seções:
- ✅ **Encontrados** (matched): produto + preço + imagem
- ⚠️ **Revisar** (manual_review): 5 sugestões, usuário escolhe
- ❌ **Não encontrados** (not_found): sem match

Usuário pode:
- Ajustar matches manualmente
- Marcar itens como "não preciso"
- Adicionar produtos do catálogo

### Etapa 6: Geração de Documento
**API Route:** `/api/export?format=pdf|excel`

Gera PDF ou Excel com:
- Header: logo Casa e Lazer, título da lista
- Informações da loja (endereço, telefone, horário)
- Tabela: Item | Qtd | Produto | Preço Unit. | Total
- Total geral estimado
- Itens não encontrados (se houver)
- Footer: contato, WhatsApp, QR code
- Rodapé: "Válido por 7 dias"

Arquivo salvo em Supabase Storage com TTL de 24h.

---

## 5. Sistema de Autenticação e Roles

### Tipos de Usuários

**Admin** (Equipe Casa e Lazer)
- Gerencia produtos, escolas, conteúdo
- Visualiza todas as listas
- Acesso total ao painel admin

**School** (Escolas)
- Cria/edita listas oficiais públicas
- Visualiza estatísticas de uso
- Acesso limitado ao admin

**Parent** (Pais/Responsáveis)
- Cria listas privadas personalizadas
- Visualiza listas públicas das escolas
- Sem acesso ao admin

**Anonymous** (Não autenticado)
- Visualiza catálogo e conteúdo público
- Pode criar lista temporária (não salva)

### Autenticação Supabase

**Métodos disponíveis:**
- Magic Link (email)
- Google OAuth
- Senha tradicional

**Fluxo de Cadastro - Escola:**
1. Admin cria escola e envia convite por email
2. Responsável clica no link, cria conta
3. Sistema associa `profile.school_id` e `role='school'`

**Fluxo de Cadastro - Pai:**
1. Usuário clica "Criar conta"
2. Escolhe método de autenticação
3. Sistema cria `profile` com `role='parent'`

---

## 6. Admin Panel/CMS

### Dashboard (`/admin`)
- Métricas: produtos ativos, listas criadas, escolas, taxa de matching
- Gráficos: listas por período, produtos mais buscados
- Ações rápidas

### Gestão de Produtos (`/admin/produtos`)

**Listagem:**
- Tabela: SKU, Nome, Categoria, Preço, Estoque, Status
- Filtros: categoria, subcategoria, status
- Busca por nome/SKU
- Ações em massa

**Formulário:**
- Campos: SKU, nome, descrição (rich text), categoria, preço, estoque, imagem
- Ao salvar: upload de imagem + geração de embedding

**Importação via SQL (`/admin/produtos/importar-sql`):**
```typescript
{
  sql_file: upload de arquivo .sql
  sql_text: textarea com syntax highlight
  create_backup: checkbox (default: true)
  dry_run: checkbox (preview sem executar)
}

Validações de segurança:
- Apenas permite: INSERT/UPDATE/DELETE em products
- Bloqueia: DROP, TRUNCATE, ALTER, queries em outras tabelas

Fluxo:
1. Cria backup da tabela products
2. Valida SQL (whitelist de comandos)
3. Executa em transação
4. Gera embeddings em background (batch)
5. Log de execução salvo em sql_import_logs
```

### Gestão de Escolas (`/admin/escolas`)
- Listagem: cards/tabela com nome, cidade, listas criadas
- Formulário: dados da escola + email do responsável
- Ao criar: envia convite automático por email

### Gestão de Listas (`/admin/listas`)
- Visualiza TODAS as listas (públicas + privadas)
- Filtros por escola, status, data
- Estatísticas: taxa de matching, produtos mais buscados
- Pode editar matches manualmente

### Gestão de Blog (`/admin/blog`)
- Listagem: cards com preview
- Editor: título, slug, excerpt, conteúdo (rich text), imagem destacada
- SEO: meta title, description, OG image

### Gestão de Páginas (`/admin/paginas`)
- Similar ao blog, sem data/autor
- Editor de blocos (heading, texto, imagem, galeria)

---

## 7. Frontend Público

### Home (`/`)
- Hero: headline + CTAs ("Criar minha lista", "Ver catálogo")
- Como funciona: 3 passos visuais
- Listas populares: cards de escolas
- Produtos em destaque: grid de produtos
- Blog recente: 3 últimos posts
- Informações da loja física

### Catálogo (`/produtos`)
- Sidebar: filtros (categorias, preço, subcategorias)
- Grid de produtos: 3-4 colunas
- Card: imagem, nome, preço, badge "Disponível"
- Ordenação: relevância, preço, nome
- Paginação ou scroll infinito

**Produto Individual (`/produtos/[slug]`):**
- Galeria de imagens
- Nome, SKU, categoria, preço
- Descrição completa
- Especificações
- Botão: "Adicionar à minha lista"
- Produtos relacionados

### Sistema de Listas (`/listas`)

**Landing:**
- Explicação do sistema
- Opções: criar nova, buscar lista de escola, minhas listas

**Nova Lista (`/listas/nova`):**

Wizard de 3 etapas:

1. **Upload:**
   - Drag & drop zone
   - Aceita: .pdf, .xlsx, .docx (max 10MB)
   - Loading: "Processando arquivo..." com progresso

2. **Revisão:**
   - Tabs: Encontrados / Revisar / Não encontrados
   - Encontrados: lista com produtos + preço + ações
   - Revisar: 5 sugestões por item, usuário escolhe
   - Não encontrados: opção de buscar no catálogo

3. **Finalizar:**
   - Resumo: X itens encontrados, total estimado
   - Ações:
     - "Baixar PDF"
     - "Baixar Excel"
     - "Salvar lista" (autenticado)
     - "Compartilhar" (gera link)

**Minhas Listas (`/listas/[id]`):**
- Visualização de lista salva
- Pode editar itens
- Re-exportar documentos
- Compartilhar

**Listas de Escolas (`/listas/escolas/[slug]`):**
- Listas públicas da escola
- Filtro por ano/série
- Botão "Usar esta lista"

### Blog (`/blog`)
- Grid de posts
- Filtros: categorias, busca
- Post individual: hero image, conteúdo, autor, data

### Contato (`/contato`)
- Informações da loja
- Mapa (Google Maps)
- Formulário de contato
- Redes sociais

### Componentes Globais

**Header:**
- Logo
- Menu: Produtos, Listas, Blog, Contato
- Ações: Login / User Menu (avatar + dropdown)

**Footer:**
- Informações da empresa
- Links úteis
- Redes sociais

---

## 8. Geração de PDF/Excel

### PDF (react-pdf)

**Template:**
```
┌────────────────────────────────────┐
│ [Logo Casa e Lazer]                │
│ Orçamento - Lista de Materiais     │
│ [Nome da Lista] - [Escola]         │
│ Data: XX/XX/XXXX                   │
├────────────────────────────────────┤
│ Casa e Lazer                       │
│ 📍 Endereço | 📞 Tel | ⏰ Horário  │
├────────────────────────────────────┤
│ # | Qtd | Produto | Unit. | Total │
├───┼─────┼─────────┼───────┼───────┤
│ 1 │  2  │ Caderno │ 15,00 │ 30,00 │
│ 2 │  5  │ Caneta  │  2,50 │ 12,50 │
│...│ ... │   ...   │  ...  │  ...  │
├────────────────────────────────────┤
│              TOTAL: R$ XXX,XX      │
├────────────────────────────────────┤
│ Itens não encontrados:             │
│ • Item X (Qtd: 3)                  │
│ • Item Y (Qtd: 1)                  │
├────────────────────────────────────┤
│ 📱 WhatsApp: (XX) XXXXX-XXXX       │
│ * Válido por 7 dias                │
│ [QR Code - Link para lista online] │
└────────────────────────────────────┘
```

### Excel (exceljs)

**Layout:**
- Header com logo e informações
- Tabela formatada com bordas
- Células de preço formatadas como moeda
- Total em destaque (amarelo)
- Aba separada para itens não encontrados (se houver)
- Footer com informações da loja
- Colunas auto-ajustadas

### Recursos Adicionais

**QR Code:**
- Gerado com biblioteca `qrcode`
- Link para visualizar lista online
- Incluído no PDF

**Email (opcional):**
- Envia PDF por email usando Resend/SendGrid
- Template HTML com link para download

**Performance:**
- Geração em background (API route assíncrona)
- Cache de 1h para mesma lista
- Compressão de PDF
- Storage no Supabase com TTL de 24h

---

## 9. Performance e Otimizações

### Frontend (Next.js)

**Server Components:**
- Páginas estáticas renderizadas no servidor
- Apenas componentes interativos como Client Components

**Static Generation:**
- Home, blog posts, páginas institucionais
- ISR (Incremental Static Regeneration) com revalidate

**Image Optimization:**
- Next.js Image component
- Lazy loading automático
- Blur placeholder
- Supabase Storage com CDN

**Code Splitting:**
- Route-based splitting (automático)
- Dynamic imports para componentes pesados
- Bundle analysis para monitorar tamanho

### Database

**Indexes Críticos:**
```sql
-- Produtos
idx_products_active
idx_products_category
idx_products_search (full-text)
idx_products_embedding (vector)

-- Listas
idx_lists_user
idx_lists_school
idx_list_items_status
```

**Query Optimization:**
- Evitar N+1 com joins/includes
- Paginação sempre (limit/offset)
- Connection pooling (Supabase automático)

### Cache

**Next.js Cache:**
- Fetch cache em Server Components
- Route cache com generateStaticParams

**React Query (Client-side):**
- Cache de dados do cliente
- staleTime: 5 min, cacheTime: 30 min

**Redis (opcional):**
- Cache de embeddings de produtos
- Cache de resultados de matching

### IA/Embeddings

**Batch Processing:**
- Gerar embeddings em lote (até 2048 por request)
- Mais eficiente que individual

**Pre-compute:**
- Embeddings de produtos gerados no cadastro
- Armazenados no banco, nunca recalcular

**Rate Limiting:**
- Bottleneck para evitar exceder limites da API
- Max 5 concurrent, 200ms entre requests

### SEO

**Metadata:**
- generateMetadata em cada página
- OpenGraph tags completos
- Canonical URLs

**Structured Data:**
- JSON-LD para produtos (schema.org/Product)
- JSON-LD para artigos de blog

**Sitemap:**
- Geração automática com app/sitemap.ts
- Inclui produtos, posts, páginas

### Monitoring

**Vercel Analytics:**
- Web Vitals automático
- Performance metrics

**Supabase Logs:**
- Query performance
- API usage
- Error tracking

**Custom Events:**
- Track: list_created, pdf_generated, etc.
- Métricas de conversão

**Error Monitoring:**
- Sentry (opcional)
- Logging estruturado

### Métricas de Sucesso

**Performance:**
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Largest Contentful Paint < 2.5s

**Funcionalidade:**
- Taxa de matching > 70%
- Tempo de processamento < 30s
- Uptime > 99.5%

---

## 10. Próximos Passos

### Fase 1: Setup Inicial
- [ ] Inicializar repositório Git
- [ ] Criar projeto Next.js 14+
- [ ] Configurar TypeScript + Tailwind
- [ ] Instalar shadcn/ui
- [ ] Criar projeto Supabase
- [ ] Configurar variáveis de ambiente

### Fase 2: Database & Auth
- [ ] Criar schema no Supabase
- [ ] Configurar RLS policies
- [ ] Setup Supabase Auth
- [ ] Criar lib/supabase (client/server)
- [ ] Configurar middleware de autenticação

### Fase 3: Admin Panel
- [ ] Layout base do admin
- [ ] Dashboard com métricas
- [ ] CRUD de produtos
- [ ] Importação SQL
- [ ] Gestão de escolas
- [ ] Gestão de blog/páginas

### Fase 4: Frontend Público
- [ ] Layout base (header/footer)
- [ ] Home page
- [ ] Catálogo de produtos
- [ ] Página de produto individual
- [ ] Blog
- [ ] Contato

### Fase 5: Sistema de Listas
- [ ] Integração OpenRouter
- [ ] Upload de arquivos
- [ ] Extração com IA
- [ ] Geração de embeddings
- [ ] Algoritmo de matching
- [ ] Interface de revisão
- [ ] Geração de PDF
- [ ] Geração de Excel

### Fase 6: Otimizações & Deploy
- [ ] Performance optimization
- [ ] SEO (metadata, sitemap)
- [ ] Testes
- [ ] Deploy Vercel
- [ ] Configurar domínio
- [ ] Monitoring

---

**Documento validado e aprovado em:** 2026-01-08
