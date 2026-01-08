-- =====================================================
-- Casa e Lazer - Functions & Triggers
-- =====================================================
-- Funções auxiliares e triggers automáticos

-- =====================================================
-- FUNCTION: Atualizar updated_at automaticamente
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger em todas as tabelas com updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schools_updated_at
  BEFORE UPDATE ON schools
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_material_lists_updated_at
  BEFORE UPDATE ON material_lists
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FUNCTION: Criar profile automaticamente ao criar usuário
-- =====================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, role, full_name)
  VALUES (
    NEW.id,
    'parent', -- role padrão
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- =====================================================
-- FUNCTION: Buscar produtos por similaridade vetorial
-- =====================================================
CREATE OR REPLACE FUNCTION search_products_by_embedding(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.5,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  sku text,
  name text,
  description text,
  price decimal,
  image_url text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id,
    p.sku,
    p.name,
    p.description,
    p.price,
    p.image_url,
    1 - (p.embedding <=> query_embedding) AS similarity
  FROM products p
  WHERE
    p.active = true
    AND p.embedding IS NOT NULL
    AND 1 - (p.embedding <=> query_embedding) > match_threshold
  ORDER BY p.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- =====================================================
-- FUNCTION: Obter role do usuário atual
-- =====================================================
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role
  FROM profiles
  WHERE id = auth.uid();

  RETURN user_role;
END;
$$;

-- =====================================================
-- FUNCTION: Verificar se usuário é admin
-- =====================================================
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;

-- =====================================================
-- FUNCTION: Verificar se usuário é escola
-- =====================================================
CREATE OR REPLACE FUNCTION is_school()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'school'
  );
END;
$$;

-- =====================================================
-- FUNCTION: Gerar slug único a partir de texto
-- =====================================================
CREATE OR REPLACE FUNCTION generate_unique_slug(
  base_text TEXT,
  table_name TEXT DEFAULT 'blog_posts'
)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  slug TEXT;
  counter INTEGER := 0;
  final_slug TEXT;
BEGIN
  -- Criar slug base: lowercase, substituir espaços por hífens, remover caracteres especiais
  slug := lower(trim(regexp_replace(
    unaccent(base_text),
    '[^a-z0-9\s-]',
    '',
    'g'
  )));
  slug := regexp_replace(slug, '\s+', '-', 'g');
  slug := regexp_replace(slug, '-+', '-', 'g');

  final_slug := slug;

  -- Verificar se slug já existe e adicionar contador se necessário
  LOOP
    IF NOT EXISTS (
      SELECT 1 FROM blog_posts WHERE blog_posts.slug = final_slug
      UNION ALL
      SELECT 1 FROM pages WHERE pages.slug = final_slug
    ) THEN
      EXIT;
    END IF;

    counter := counter + 1;
    final_slug := slug || '-' || counter;
  END LOOP;

  RETURN final_slug;
END;
$$;
