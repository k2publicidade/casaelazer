-- =====================================================
-- Casa e Lazer - Row Level Security Policies
-- =====================================================
-- Políticas de segurança de acesso aos dados

-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE material_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE sql_import_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PROFILES
-- =====================================================

-- Usuários podem ver seu próprio perfil
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Usuários podem atualizar seu próprio perfil
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Admins podem ver todos os perfis
CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  USING (is_admin());

-- Admins podem atualizar todos os perfis
CREATE POLICY "Admins can update all profiles"
  ON profiles FOR UPDATE
  USING (is_admin());

-- =====================================================
-- SCHOOLS
-- =====================================================

-- Todos podem ver escolas ativas
CREATE POLICY "Anyone can view active schools"
  ON schools FOR SELECT
  USING (active = true);

-- Apenas admins podem criar escolas
CREATE POLICY "Only admins can create schools"
  ON schools FOR INSERT
  WITH CHECK (is_admin());

-- Apenas admins podem atualizar escolas
CREATE POLICY "Only admins can update schools"
  ON schools FOR UPDATE
  USING (is_admin());

-- Apenas admins podem deletar escolas
CREATE POLICY "Only admins can delete schools"
  ON schools FOR DELETE
  USING (is_admin());

-- =====================================================
-- PRODUCTS
-- =====================================================

-- Todos podem ver produtos ativos
CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  USING (active = true OR is_admin());

-- Apenas admins podem criar produtos
CREATE POLICY "Only admins can create products"
  ON products FOR INSERT
  WITH CHECK (is_admin());

-- Apenas admins podem atualizar produtos
CREATE POLICY "Only admins can update products"
  ON products FOR UPDATE
  USING (is_admin());

-- Apenas admins podem deletar produtos
CREATE POLICY "Only admins can delete products"
  ON products FOR DELETE
  USING (is_admin());

-- =====================================================
-- MATERIAL_LISTS
-- =====================================================

-- Ver listas públicas OU próprias OU se for admin
CREATE POLICY "View public or own lists"
  ON material_lists FOR SELECT
  USING (
    is_public = true
    OR user_id = auth.uid()
    OR is_admin()
  );

-- Usuários autenticados podem criar listas
CREATE POLICY "Authenticated users can create lists"
  ON material_lists FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Usuários podem atualizar suas próprias listas
CREATE POLICY "Users can update own lists"
  ON material_lists FOR UPDATE
  USING (user_id = auth.uid() OR is_admin());

-- Usuários podem deletar suas próprias listas
CREATE POLICY "Users can delete own lists"
  ON material_lists FOR DELETE
  USING (user_id = auth.uid() OR is_admin());

-- =====================================================
-- LIST_ITEMS
-- =====================================================

-- Ver itens de listas que o usuário tem acesso
CREATE POLICY "View items of accessible lists"
  ON list_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM material_lists
      WHERE material_lists.id = list_items.list_id
        AND (
          material_lists.is_public = true
          OR material_lists.user_id = auth.uid()
          OR is_admin()
        )
    )
  );

-- Criar itens em listas próprias
CREATE POLICY "Create items in own lists"
  ON list_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM material_lists
      WHERE material_lists.id = list_items.list_id
        AND (material_lists.user_id = auth.uid() OR is_admin())
    )
  );

-- Atualizar itens de listas próprias
CREATE POLICY "Update items in own lists"
  ON list_items FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM material_lists
      WHERE material_lists.id = list_items.list_id
        AND (material_lists.user_id = auth.uid() OR is_admin())
    )
  );

-- Deletar itens de listas próprias
CREATE POLICY "Delete items in own lists"
  ON list_items FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM material_lists
      WHERE material_lists.id = list_items.list_id
        AND (material_lists.user_id = auth.uid() OR is_admin())
    )
  );

-- =====================================================
-- BLOG_POSTS
-- =====================================================

-- Todos podem ver posts publicados
CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  USING (published = true OR is_admin());

-- Apenas admins podem criar posts
CREATE POLICY "Only admins can create posts"
  ON blog_posts FOR INSERT
  WITH CHECK (is_admin());

-- Apenas admins podem atualizar posts
CREATE POLICY "Only admins can update posts"
  ON blog_posts FOR UPDATE
  USING (is_admin());

-- Apenas admins podem deletar posts
CREATE POLICY "Only admins can delete posts"
  ON blog_posts FOR DELETE
  USING (is_admin());

-- =====================================================
-- PAGES
-- =====================================================

-- Todos podem ver páginas publicadas
CREATE POLICY "Anyone can view published pages"
  ON pages FOR SELECT
  USING (published = true OR is_admin());

-- Apenas admins podem criar páginas
CREATE POLICY "Only admins can create pages"
  ON pages FOR INSERT
  WITH CHECK (is_admin());

-- Apenas admins podem atualizar páginas
CREATE POLICY "Only admins can update pages"
  ON pages FOR UPDATE
  USING (is_admin());

-- Apenas admins podem deletar páginas
CREATE POLICY "Only admins can delete pages"
  ON pages FOR DELETE
  USING (is_admin());

-- =====================================================
-- SQL_IMPORT_LOGS
-- =====================================================

-- Apenas admins podem ver logs
CREATE POLICY "Only admins can view import logs"
  ON sql_import_logs FOR SELECT
  USING (is_admin());

-- Apenas admins podem criar logs
CREATE POLICY "Only admins can create import logs"
  ON sql_import_logs FOR INSERT
  WITH CHECK (is_admin());

-- =====================================================
-- PRODUCT_CATEGORIES
-- =====================================================

-- Todos podem ver categorias
CREATE POLICY "Anyone can view categories"
  ON product_categories FOR SELECT
  USING (true);

-- Apenas admins podem gerenciar categorias
CREATE POLICY "Only admins can manage categories"
  ON product_categories FOR ALL
  USING (is_admin());
