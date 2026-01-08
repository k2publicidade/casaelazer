# Casa e Lazer - Sistema de Listas de Materiais Escolares

Sistema completo de catálogo de produtos e matching inteligente de listas de materiais escolares usando IA.

## 🚀 Stack Tecnológica

- **Frontend/Backend:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL + pgvector)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
- **IA:** OpenRouter API (GPT-4o free)
- **PDF:** @react-pdf/renderer
- **Excel:** exceljs

## 📋 Funcionalidades

### Sistema de Listas
- Upload de listas de materiais (PDF/Excel/Word)
- Extração automática de itens com IA
- Matching semântico com catálogo de produtos
- Geração de orçamentos em PDF e Excel

### CMS Admin
- Gestão completa de produtos
- Importação em massa via SQL
- Gestão de escolas cadastradas
- Sistema de blog/notícias
- Gestão de listas e matching

### Catálogo Público
- Catálogo de produtos com busca e filtros
- Sistema de autenticação (admin/escola/pai)
- Listas públicas de escolas
- Interface responsiva e moderna

## 🛠️ Setup Inicial

### 1. Instalar dependências

\`\`\`bash
npm install
\`\`\`

### 2. Configurar variáveis de ambiente

Copie o arquivo \`.env.example\` para \`.env.local\`:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Configure as variáveis:

\`\`\`env
# Supabase (obter em https://supabase.com)
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# OpenRouter (obter em https://openrouter.ai)
OPENROUTER_API_KEY=your-openrouter-api-key

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### 3. Configurar Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o schema SQL (disponível em \`docs/supabase-schema.sql\`)
3. Ative a extensão pgvector
4. Configure Row Level Security (RLS)

### 4. Rodar o projeto

\`\`\`bash
npm run dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

\`\`\`
/app
  /(public)          # Rotas públicas
    /produtos        # Catálogo
    /listas          # Sistema de listas
    /blog            # Blog/notícias
    /contato         # Contato
  /(admin)           # Rotas protegidas (admin)
    /admin
      /produtos      # Gestão de produtos
      /listas        # Gestão de listas
      /escolas       # Gestão de escolas
      /blog          # Gestão de blog
  /api               # API Routes
    /extract         # Extração de listas com IA
    /match           # Matching de produtos
    /export          # Geração PDF/Excel
/components
  /ui                # shadcn/ui components
  /admin             # Admin components
  /public            # Public site components
/lib
  /supabase          # Supabase utils
  /ai                # OpenRouter integration
  /matching          # Matching algorithm
  /pdf               # PDF generation
  /excel             # Excel generation
\`\`\`

## 🔐 Autenticação e Roles

### Admin
- Gerencia produtos, escolas, conteúdo
- Acesso total ao painel admin

### School
- Cria listas oficiais públicas
- Visualiza estatísticas

### Parent
- Cria listas privadas
- Visualiza listas públicas das escolas

## 📖 Documentação

- [Design Técnico Completo](docs/plans/2026-01-08-casaelazer-design.md)

## 🚀 Deploy

### Vercel (Recomendado)

\`\`\`bash
npm run build
\`\`\`

Deploy automático ao fazer push para main branch com Vercel integrado.

## 📝 Scripts Disponíveis

- \`npm run dev\` - Inicia servidor de desenvolvimento
- \`npm run build\` - Build para produção
- \`npm run start\` - Inicia servidor de produção
- \`npm run lint\` - Executa linter

## 🤝 Contribuindo

Este é um projeto privado da Casa e Lazer.

## 📄 Licença

Propriedade privada - Todos os direitos reservados © 2026 Casa e Lazer
