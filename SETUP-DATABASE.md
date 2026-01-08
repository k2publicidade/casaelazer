# 🚀 Guia de Configuração do Banco de Dados - Casa e Lazer

## ✅ CONFIGURAÇÃO COMPLETA!

### ✨ O banco de dados está 100% configurado e pronto para uso!

### 1. Variáveis de Ambiente

Configuradas no arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tuwqhdayuefuchotrspq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

⚠️ **Pendente**: Obter manualmente as chaves:
- `SUPABASE_SERVICE_ROLE_KEY` - [Ver instruções no DEPLOYMENT.md](./DEPLOYMENT.md#1-supabase-service-role-key)
- `OPENROUTER_API_KEY` - [Ver instruções no DEPLOYMENT.md](./DEPLOYMENT.md#2-openrouter-api-key)

### 2. Database Schema

**Status**: ✅ Completamente configurado

Todas as migrations foram aplicadas com sucesso:
- ✅ Extensões habilitadas (uuid-ossp, vector, unaccent)
- ✅ 9 tabelas criadas (profiles, schools, products, material_lists, list_items, blog_posts, pages, sql_import_logs, product_categories)
- ✅ 20 índices para performance
- ✅ Functions e triggers (auto-update timestamps, profile creation)
- ✅ 34 Row Level Security policies
- ✅ Seed data inicial (categorias, produtos exemplo, páginas institucionais)

### 3. Usuário Admin

**Status**: ✅ Criado e ativo

```
Email: k2publicidade@yahoo.com.br
Role: admin
Nome: Administrador Casa e Lazer
```

**Acesso**: Já pode fazer login em `/login` com este usuário!

---

## 🎯 Scripts SQL (Referência - Já Executados)

> ℹ️ **Nota**: Todos os scripts abaixo **JÁ FORAM EXECUTADOS** com sucesso.
> Esta seção é mantida apenas para referência e documentação.

Os scripts estão em: `docs/supabase/`

1. ✅ **`01-extensions.sql`** - Extensões PostgreSQL habilitadas
2. ✅ **`02-schema.sql`** - Todas as tabelas criadas
3. ✅ **`03-indexes.sql`** - Índices aplicados
4. ✅ **`04-functions.sql`** - Functions e triggers criados
5. ✅ **`05-rls-policies.sql`** - 34 RLS policies aplicadas
6. ✅ **`06-seeds.sql`** - Dados iniciais inseridos

---

## 🚀 Como Usar o Sistema

### 1. Fazer Login

1. Acesse: http://localhost:3000/login (ou sua URL de produção)
2. Faça login com as credenciais do admin:
   - **Email**: `k2publicidade@yahoo.com.br`
   - **Senha**: A senha configurada na criação do usuário
3. Você será redirecionado para o painel admin: `/admin`

### 2. Redefinir Senha (Se Necessário)

Se não souber a senha do usuário admin:

1. Acesse o Supabase Dashboard: https://supabase.com/dashboard/project/tuwqhdayuefuchotrspq
2. Vá em **Authentication** → **Users**
3. Localize o usuário `k2publicidade@yahoo.com.br`
4. Clique nos 3 pontinhos → **Reset Password**
5. Defina uma nova senha ou envie email de recuperação

---

## 📊 Verificar Configuração

Execute este SQL no **SQL Editor** para verificar se tudo foi criado corretamente:

```sql
-- Verificar tabelas criadas
SELECT
  schemaname,
  tablename,
  tableowner
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- Contar registros
SELECT 'products' as tabela, COUNT(*) as total FROM products
UNION ALL
SELECT 'product_categories', COUNT(*) FROM product_categories
UNION ALL
SELECT 'pages', COUNT(*) FROM pages
UNION ALL
SELECT 'profiles', COUNT(*) FROM profiles
UNION ALL
SELECT 'schools', COUNT(*) FROM schools;

-- Verificar RLS ativado
SELECT
  tablename,
  rowsecurity as "RLS Ativado"
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;
```

Resultado esperado:
- ✅ Múltiplas tabelas criadas no schema `public`
- ✅ Categorias e páginas inseridas
- ✅ Produtos exemplo inseridos
- ✅ RLS ativado em todas as tabelas

---

## 🎯 Próximas Funcionalidades

Após completar a configuração:

### 1. Importar Catálogo Completo de Produtos
- Acesse: http://localhost:3001/admin/produtos/importar-sql
- Faça upload do arquivo SQL com o catálogo completo da Casa e Lazer
- O sistema irá:
  - ✅ Validar o SQL
  - ✅ Criar backup automático
  - ✅ Importar produtos
  - ✅ Gerar embeddings para busca semântica

### 2. Cadastrar Escolas
- Acesse: http://localhost:3001/admin/escolas
- Cadastre as escolas parceiras
- Configure logotipo e informações

### 3. Criar Listas de Materiais
- Acesse: http://localhost:3001/admin/listas
- Crie listas de materiais escolares
- Associe com escolas cadastradas

---

## 🐛 Solução de Problemas

### Erro: "relation already exists"
- Alguma tabela já existe no banco
- Solução: Delete as tabelas manualmente ou crie um novo projeto Supabase

### Erro: "extension ... does not exist"
- As extensões não foram habilitadas
- Solução: Execute `01-extensions.sql` primeiro

### Erro: "permission denied for schema public"
- Problema de permissões
- Solução: Use a connection string com usuário `postgres` (já configurado)

### Erro ao fazer login
- Profile não foi criado ou role não é 'admin'
- Solução: Execute o SQL de promoção para admin novamente

---

## 📞 Suporte

Se encontrar problemas, verifique:

1. ✅ Todos os scripts SQL foram executados na ordem?
2. ✅ O usuário foi criado no Authentication?
3. ✅ O profile foi atualizado para role='admin'?
4. ✅ As variáveis de ambiente estão corretas no .env.local?
5. ✅ O servidor está rodando em http://localhost:3001?

---

## 📚 Documentação Adicional

- [Design Técnico Completo](docs/plans/2026-01-08-casaelazer-design.md)
- [Schema Database](docs/supabase/README.md)
- [Supabase Docs](https://supabase.com/docs)

---

**✨ Configuração criada por Claude Code**
