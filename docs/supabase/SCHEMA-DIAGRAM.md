# Database Schema Diagram

## Entity Relationship Diagram

```
┌─────────────────┐
│   auth.users    │
│  (Supabase)     │
└────────┬────────┘
         │
         │ 1:1
         ↓
┌─────────────────┐           ┌─────────────────┐
│    profiles     │           │     schools     │
├─────────────────┤           ├─────────────────┤
│ id (PK, FK)     │           │ id (PK)         │
│ role            │◄─────────┐│ name            │
│ full_name       │          ││ cnpj            │
│ phone           │          ││ user_id (FK)    │
│ school_id (FK)  │──────────┘│ ...             │
└─────────────────┘           └────────┬────────┘
         │                             │
         │                             │
         │ 1:N                         │ 1:N
         ↓                             ↓
┌─────────────────────────────┐ ┌──────────────────┐
│    material_lists           │ │   blog_posts     │
├─────────────────────────────┤ ├──────────────────┤
│ id (PK)                     │ │ id (PK)          │
│ title                       │ │ title            │
│ school_id (FK)   ────────┐  │ │ slug             │
│ user_id (FK)     ────┐   │  │ │ content          │
│ year                 │   │  │ │ author_id (FK)   │
│ grade                │   │  │ │ published        │
│ is_public            │   │  │ └──────────────────┘
│ original_file_url    │   │  │
│ status               │   │  │ ┌──────────────────┐
└──────────┬───────────┘   │  │ │      pages       │
           │               │  │ ├──────────────────┤
           │ 1:N           │  │ │ id (PK)          │
           ↓               │  │ │ title            │
┌─────────────────────┐    │  │ │ slug             │
│    list_items       │    │  │ │ content          │
├─────────────────────┤    │  │ │ published        │
│ id (PK)             │    │  │ └──────────────────┘
│ list_id (FK) ───────┘    │  │
│ raw_text            │    │  │
│ quantity            │    │  │ ┌─────────────────────┐
│ matched_product_id  │────┼──┼─│ sql_import_logs     │
│ confidence_score    │    │  │ ├─────────────────────┤
│ status              │    │  │ │ id (PK)             │
└─────────────────────┘    │  │ │ admin_id (FK) ──────┤
                           │  │ │ filename            │
                           │  │ │ rows_affected       │
                           │  │ │ status              │
┌──────────────────────────┘  │ └─────────────────────┘
│                             │
↓                             │
┌─────────────────────────────┐
│         products            │
├─────────────────────────────┤
│ id (PK)                     │
│ sku (unique)                │
│ name                        │
│ description                 │
│ category                    │
│ subcategory                 │
│ price                       │
│ stock_quantity              │
│ image_url                   │
│ active                      │
│ embedding (vector 1536)     │◄────────┐
│ metadata (jsonb)            │         │
└─────────────────────────────┘         │
         ↑                              │
         │ N:1                          │
┌────────┴──────────────────┐           │
│  product_categories       │           │
├───────────────────────────┤           │
│ id (PK)                   │           │
│ name                      │           │
│ slug                      │           │
│ parent_id (FK, self)      │───────────┘
└───────────────────────────┘
```

## Tabelas e Relacionamentos

### 1. Authentication Flow

```
auth.users (Supabase)
    └── trigger: on_auth_user_created
        └── cria automaticamente: profiles (role='parent')
```

### 2. User Roles

```
profiles.role:
├── 'admin'   → Acesso total ao sistema
├── 'school'  → Gerencia listas da escola
└── 'parent'  → Cria listas privadas
```

### 3. Lists Flow

```
User (parent/school)
    └── cria: material_lists
        └── upload: arquivo PDF/Excel
            └── API extrai: list_items (raw_text)
                └── matching: encontra products
                    └── atualiza: matched_product_id + confidence_score
```

### 4. Products & Embeddings

```
products
    └── embedding (vector 1536)
        └── gerado por: OpenRouter text-embedding-3-small
            └── usado em: search_products_by_embedding()
                └── retorna: produtos similares por cosine similarity
```

## Campos Especiais

### Vector Embeddings

- **Tabela:** `products.embedding`
- **Tipo:** `vector(1536)` - dimensão do modelo text-embedding-3-small
- **Índice:** IVFFlat para busca rápida
- **Uso:** Matching semântico de itens de lista com produtos

### JSONB Fields

- **`products.metadata`** - Atributos customizados por produto
- **`pages.metadata`** - SEO e meta tags

### Status Enums

- **`material_lists.status`**: `processing`, `completed`, `failed`
- **`list_items.status`**: `matched`, `not_found`, `manual_review`, `pending`
- **`sql_import_logs.status`**: `success`, `failed`, `partial`
- **`profiles.role`**: `admin`, `school`, `parent`

## Índices Importantes

### Performance

```sql
-- Full-text search em português
idx_products_search (gin)
idx_blog_search (gin)

-- Vector similarity (IVFFlat)
idx_products_embedding

-- Foreign keys e filters
idx_lists_user_id
idx_lists_school_id
idx_list_items_list_id
idx_products_active
idx_products_category
```

## Row Level Security

### Resumo de Políticas

| Tabela | SELECT | INSERT | UPDATE | DELETE |
|--------|--------|--------|--------|--------|
| **profiles** | Own + Admin | Auto | Own + Admin | - |
| **schools** | All active | Admin | Admin | Admin |
| **products** | Active + Admin | Admin | Admin | Admin |
| **material_lists** | Public + Own + Admin | Auth | Own + Admin | Own + Admin |
| **list_items** | Via list | Via list | Via list | Via list |
| **blog_posts** | Published + Admin | Admin | Admin | Admin |
| **pages** | Published + Admin | Admin | Admin | Admin |

### Funções Auxiliares

```sql
get_user_role()      -- Retorna role do usuário atual
is_admin()           -- Verifica se é admin
is_school()          -- Verifica se é escola
search_products_by_embedding()  -- Busca semântica
generate_unique_slug()          -- Gera slug único
```

## Storage Buckets (Supabase Storage)

### Organização

```
/products
  /{product_id}/image.jpg

/material-lists
  /{user_id}
    /{list_id}
      /original.pdf
      /export.pdf

/blog
  /featured
    /{post_id}.jpg

/schools
  /logos
    /{school_id}.png
```

### Políticas de Storage

- **products:** Read público, Write admin
- **material-lists:** Read/Write próprias listas
- **blog:** Read público, Write admin
- **schools:** Read público, Write admin

## Migrations e Versionamento

### Ordem de Execução

1. `01-extensions.sql` - Extensões PostgreSQL
2. `02-schema.sql` - Criação de tabelas
3. `03-indexes.sql` - Índices
4. `04-functions.sql` - Funções e triggers
5. `05-rls-policies.sql` - Políticas de segurança
6. `06-seeds.sql` - Dados iniciais

### Adicionar Nova Feature

```sql
-- 07-nome-feature.sql
-- Descrição da feature

ALTER TABLE ... ;
CREATE INDEX ... ;
CREATE POLICY ... ;
```
