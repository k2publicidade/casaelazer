-- =====================================================
-- Casa e Lazer - Master Setup Script
-- =====================================================
-- Execute este arquivo para criar todo o schema do banco
-- ORDEM DE EXECUÇÃO IMPORTA!

-- 1. Extensões
\i 01-extensions.sql

-- 2. Schema (Tabelas)
\i 02-schema.sql

-- 3. Índices
\i 03-indexes.sql

-- 4. Funções e Triggers
\i 04-functions.sql

-- 5. Row Level Security Policies
\i 05-rls-policies.sql

-- 6. Dados Iniciais (Seeds)
\i 06-seeds.sql

-- =====================================================
-- Setup Completo!
-- =====================================================
-- Próximos passos:
-- 1. Criar primeiro usuário admin manualmente no Supabase Auth
-- 2. Atualizar o profile do usuário para role='admin'
-- 3. Fazer login no sistema
-- 4. Importar catálogo de produtos via admin panel
