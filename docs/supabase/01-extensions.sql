-- =====================================================
-- Casa e Lazer - Extensions
-- =====================================================
-- Extensões necessárias para o funcionamento do sistema

-- Extensão para UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Extensão para vector embeddings (busca semântica)
CREATE EXTENSION IF NOT EXISTS vector;

-- Extensão para full-text search em português
CREATE EXTENSION IF NOT EXISTS unaccent;
