-- =====================================================
-- Casa e Lazer - Indexes
-- =====================================================
-- Índices para otimização de queries

-- =====================================================
-- PRODUCTS
-- =====================================================
CREATE INDEX idx_products_active ON products(active);
CREATE INDEX idx_products_category ON products(category) WHERE active = true;
CREATE INDEX idx_products_category_subcategory ON products(category, subcategory) WHERE active = true;
CREATE INDEX idx_products_sku ON products(sku);

-- Full-text search em português
CREATE INDEX idx_products_search ON products
  USING gin(to_tsvector('portuguese', unaccent(name || ' ' || COALESCE(description, ''))));

-- Vector similarity search (IVFFlat para performance)
-- Ajustar 'lists' baseado no volume de produtos (100-1000)
CREATE INDEX idx_products_embedding ON products
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

-- =====================================================
-- SCHOOLS
-- =====================================================
CREATE INDEX idx_schools_active ON schools(active);
CREATE INDEX idx_schools_city ON schools(city) WHERE active = true;
CREATE INDEX idx_schools_user_id ON schools(user_id);

-- =====================================================
-- MATERIAL_LISTS
-- =====================================================
CREATE INDEX idx_lists_user_id ON material_lists(user_id);
CREATE INDEX idx_lists_school_id ON material_lists(school_id);
CREATE INDEX idx_lists_public ON material_lists(is_public) WHERE is_public = true;
CREATE INDEX idx_lists_status ON material_lists(status);
CREATE INDEX idx_lists_created ON material_lists(created_at DESC);

-- =====================================================
-- LIST_ITEMS
-- =====================================================
CREATE INDEX idx_list_items_list_id ON list_items(list_id);
CREATE INDEX idx_list_items_status ON list_items(list_id, status);
CREATE INDEX idx_list_items_product_id ON list_items(matched_product_id);

-- =====================================================
-- BLOG_POSTS
-- =====================================================
CREATE INDEX idx_blog_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_author ON blog_posts(author_id);

-- Full-text search
CREATE INDEX idx_blog_search ON blog_posts
  USING gin(to_tsvector('portuguese', unaccent(title || ' ' || COALESCE(excerpt, '') || ' ' || COALESCE(content, ''))));

-- =====================================================
-- PAGES
-- =====================================================
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_published ON pages(published);

-- =====================================================
-- PROFILES
-- =====================================================
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_school_id ON profiles(school_id);
