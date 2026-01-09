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

## 🎯 Scripts SQL (Já Executados)

### Passo 1: Acessar o Supabase Dashboard

1. Acesse: https://app.supabase.com
2. Faça login com sua conta
3. Selecione o projeto **tenggtjrlrvmutseeuys**
4. Vá em **SQL Editor** (menu lateral esquerdo)

### Passo 2: Executar Scripts SQL na Ordem

Execute os seguintes scripts **NA ORDEM INDICADA**. Para cada script:

1. Clique em **"+ New Query"**
2. Copie o conteúdo do arquivo correspondente
3. Cole no editor
4. Clique em **"Run"** (ou pressione Ctrl+Enter)
5. Aguarde a confirmação de sucesso
6. Prossiga para o próximo script

#### 📁 Ordem de Execução:

Os scripts estão em: `docs/supabase/`

1. **`01-extensions.sql`**
   - Habilita extensões PostgreSQL: UUID, Vector, Unaccent
   - ⚠️ IMPORTANTE: Execute primeiro!

2. **`02-schema.sql`**
   - Cria todas as tabelas do sistema
   - Tabelas: profiles, schools, products, material_lists, blog_posts, pages

3. **`03-indexes.sql`**
   - Cria índices para otimização de queries
   - Melhora performance de buscas

4. **`04-functions.sql`**
   - Cria funções e triggers auxiliares
   - Includes: auto-update timestamps, profile creation triggers

5. **`05-rls-policies.sql`**
   - Configura Row Level Security (RLS)
   - Define permissões de acesso por role (admin, school, parent)

6. **`06-seeds.sql`**
   - Insere dados iniciais
   - Categorias de produtos, páginas institucionais, produtos exemplo

---

## 👤 Passo 3: Criar Primeiro Usuário Admin

Após executar todos os scripts SQL:

### 3.1. Criar Usuário no Supabase Auth

1. No Supabase Dashboard, vá em **Authentication** → **Users**
2. Clique em **"Add User"** → **"Create new user"**
3. Preencha:
   - **Email**: seu-email@casaelazer.com (ou seu email preferido)
   - **Password**: Senha123! (ou uma senha segura)
   - ✅ Marque: **"Auto Confirm User"**
4. Clique em **"Create User"**

### 3.2. Promover Usuário para Admin

1. Volte ao **SQL Editor**
2. Execute o seguinte SQL (substituindo o email):

```sql
-- Promover usuário para admin
UPDATE profiles
SET
  role = 'admin',
  full_name = 'Administrador Casa e Lazer'
WHERE id = (
  SELECT id
  FROM auth.users
  WHERE email = 'seu-email@casaelazer.com'
);
```

3. Clique em **"Run"**
4. Deve retornar: **"Success. 1 rows affected"**

---

## 🔓 Passo 4: Fazer Login no Sistema

1. Acesse: http://localhost:3001/login
2. Faça login com as credenciais criadas:
   - Email: seu-email@casaelazer.com
   - Senha: Senha123!
3. Você será redirecionado para o painel admin: http://localhost:3001/admin

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
