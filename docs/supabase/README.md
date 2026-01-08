# Supabase Database Setup

Este diretório contém todos os arquivos SQL necessários para configurar o banco de dados do projeto Casa e Lazer.

## 📁 Arquivos

1. **`01-extensions.sql`** - Extensões PostgreSQL (uuid-ossp, vector, unaccent)
2. **`02-schema.sql`** - Criação de todas as tabelas
3. **`03-indexes.sql`** - Índices para otimização de queries
4. **`04-functions.sql`** - Funções e triggers auxiliares
5. **`05-rls-policies.sql`** - Políticas de Row Level Security
6. **`06-seeds.sql`** - Dados iniciais (categorias, produtos exemplo, páginas)
7. **`00-master.sql`** - Script master que executa todos na ordem

## 🚀 Como Executar

### Opção 1: Via Supabase Dashboard (Recomendado)

1. Acesse seu projeto no [Supabase Dashboard](https://app.supabase.com)
2. Vá em **SQL Editor**
3. Execute os arquivos **NA ORDEM**:
   - `01-extensions.sql`
   - `02-schema.sql`
   - `03-indexes.sql`
   - `04-functions.sql`
   - `05-rls-policies.sql`
   - `06-seeds.sql`

### Opção 2: Via CLI (psql)

```bash
# Conectar ao banco Supabase
psql postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres

# Executar master script
\i docs/supabase/00-master.sql
```

### Opção 3: Via Supabase CLI

```bash
# Instalar Supabase CLI
npm install -g supabase

# Login
supabase login

# Link com projeto
supabase link --project-ref [PROJECT_REF]

# Executar migrations
supabase db push
```

## 📊 Schema Overview

### Tabelas Principais

- **`profiles`** - Perfis de usuários (admin, school, parent)
- **`schools`** - Escolas cadastradas
- **`products`** - Catálogo de produtos com embeddings
- **`material_lists`** - Listas de materiais escolares
- **`list_items`** - Itens individuais das listas
- **`blog_posts`** - Posts do blog/notícias
- **`pages`** - Páginas institucionais
- **`sql_import_logs`** - Log de importações SQL
- **`product_categories`** - Categorias e subcategorias

### Extensões Habilitadas

- **uuid-ossp** - Geração de UUIDs
- **vector** - Embeddings para busca semântica
- **unaccent** - Full-text search em português

### Funcionalidades do Schema

✅ **Row Level Security (RLS)** ativado em todas as tabelas
✅ **Triggers automáticos** para `updated_at`
✅ **Criação automática** de profile ao criar usuário
✅ **Funções auxiliares** para busca vetorial e verificação de roles
✅ **Índices otimizados** para queries comuns
✅ **Full-text search** em português

## 🔐 Primeiro Usuário Admin

Após executar o schema:

1. **Criar usuário no Supabase Auth:**
   - Dashboard → Authentication → Add User
   - Email: seu-email@example.com
   - Password: senha-segura

2. **Atualizar role para admin:**
```sql
UPDATE profiles
SET role = 'admin', full_name = 'Seu Nome'
WHERE id = (SELECT id FROM auth.users WHERE email = 'seu-email@example.com');
```

3. Fazer login no sistema com as credenciais criadas

## 📦 Importar Catálogo de Produtos

Os produtos de exemplo em `06-seeds.sql` são apenas para demonstração.

Para importar o catálogo completo:

1. Faça login como admin no sistema
2. Acesse `/admin/produtos/importar-sql`
3. Faça upload do arquivo SQL com os produtos da Casa e Lazer
4. O sistema irá:
   - Validar o SQL
   - Criar backup
   - Executar importação
   - Gerar embeddings automaticamente

## 🔄 Atualizações e Migrations

Para adicionar novas features ao schema:

1. Criar arquivo de migration numerado: `07-nome-da-feature.sql`
2. Executar via SQL Editor ou CLI
3. Atualizar este README

## 🛠️ Manutenção

### Verificar Integridade

```sql
-- Contar registros
SELECT 'products' as table, COUNT(*) FROM products
UNION ALL
SELECT 'schools', COUNT(*) FROM schools
UNION ALL
SELECT 'material_lists', COUNT(*) FROM material_lists;

-- Verificar RLS
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';
```

### Rebuild Índice Vetorial

Se adicionar muitos produtos, reconstruir índice:

```sql
REINDEX INDEX idx_products_embedding;
```

### Backup

```bash
# Via Supabase CLI
supabase db dump -f backup.sql

# Via pg_dump
pg_dump -h [HOST] -U postgres -d postgres > backup.sql
```

## 📚 Documentação Adicional

- [Design Técnico Completo](../plans/2026-01-08-casaelazer-design.md)
- [Supabase Docs](https://supabase.com/docs)
- [pgvector Docs](https://github.com/pgvector/pgvector)
