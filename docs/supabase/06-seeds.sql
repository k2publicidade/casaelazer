-- =====================================================
-- Casa e Lazer - Dados Iniciais (Seeds)
-- =====================================================
-- Dados de exemplo e categorias padrão

-- =====================================================
-- CATEGORIAS DE PRODUTOS
-- =====================================================
INSERT INTO product_categories (name, slug, description) VALUES
  ('Cadernos e Blocos', 'cadernos-blocos', 'Cadernos, blocos de notas e agendas'),
  ('Material de Escrita', 'material-escrita', 'Canetas, lápis, marcadores e corretivos'),
  ('Material Escolar', 'material-escolar', 'Tesouras, colas, fitas e grampeadores'),
  ('Papelaria', 'papelaria', 'Papéis, envelopes e etiquetas'),
  ('Organização', 'organizacao', 'Pastas, fichários e organizadores'),
  ('Arte e Criatividade', 'arte-criatividade', 'Tintas, pincéis, massas e papéis especiais'),
  ('Mochilas e Estojos', 'mochilas-estojos', 'Mochilas, lancheiras e estojos'),
  ('Livros e Didáticos', 'livros-didaticos', 'Livros didáticos e paradidáticos')
ON CONFLICT (slug) DO NOTHING;

-- Subcategorias de Cadernos
INSERT INTO product_categories (name, slug, parent_id) VALUES
  ('Cadernos Espiral', 'cadernos-espiral', (SELECT id FROM product_categories WHERE slug = 'cadernos-blocos')),
  ('Cadernos Brochura', 'cadernos-brochura', (SELECT id FROM product_categories WHERE slug = 'cadernos-blocos')),
  ('Blocos de Notas', 'blocos-notas', (SELECT id FROM product_categories WHERE slug = 'cadernos-blocos'))
ON CONFLICT (slug) DO NOTHING;

-- Subcategorias de Material de Escrita
INSERT INTO product_categories (name, slug, parent_id) VALUES
  ('Canetas', 'canetas', (SELECT id FROM product_categories WHERE slug = 'material-escrita')),
  ('Lápis', 'lapis', (SELECT id FROM product_categories WHERE slug = 'material-escrita')),
  ('Marcadores', 'marcadores', (SELECT id FROM product_categories WHERE slug = 'material-escrita')),
  ('Corretivos', 'corretivos', (SELECT id FROM product_categories WHERE slug = 'material-escrita'))
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- PRODUTOS DE EXEMPLO
-- =====================================================
-- Alguns produtos de exemplo (serão substituídos pela importação SQL real)

INSERT INTO products (sku, name, description, category, subcategory, price, stock_quantity, active) VALUES
  ('CAD-ESP-96', 'Caderno Espiral 96 Folhas', 'Caderno universitário espiral com 96 folhas pautadas', 'Cadernos e Blocos', 'Cadernos Espiral', 15.90, 100, true),
  ('CAD-ESP-200', 'Caderno Espiral 200 Folhas', 'Caderno universitário espiral com 200 folhas pautadas', 'Cadernos e Blocos', 'Cadernos Espiral', 28.90, 80, true),
  ('CAN-AZ-UN', 'Caneta Azul Unidade', 'Caneta esferográfica azul ponta fina', 'Material de Escrita', 'Canetas', 2.50, 500, true),
  ('CAN-PR-UN', 'Caneta Preta Unidade', 'Caneta esferográfica preta ponta fina', 'Material de Escrita', 'Canetas', 2.50, 500, true),
  ('LAP-GRA-CX12', 'Lápis Grafite Caixa 12un', 'Caixa com 12 lápis grafite número 2', 'Material de Escrita', 'Lápis', 18.90, 150, true),
  ('BOR-BCO-UN', 'Borracha Branca', 'Borracha branca macia', 'Material Escolar', null, 1.50, 300, true),
  ('COL-BCO-90G', 'Cola Branca 90g', 'Cola branca lavável 90 gramas', 'Material Escolar', null, 5.90, 200, true),
  ('TES-SEM-SER', 'Tesoura sem Ponta', 'Tesoura escolar sem ponta com cabo plástico', 'Material Escolar', null, 8.90, 120, true),
  ('LAP-COR-12', 'Lápis de Cor 12 Cores', 'Caixa com 12 lápis de cor', 'Arte e Criatividade', null, 12.90, 180, true),
  ('LAP-COR-24', 'Lápis de Cor 24 Cores', 'Caixa com 24 lápis de cor', 'Arte e Criatividade', null, 24.90, 100, true)
ON CONFLICT (sku) DO NOTHING;

-- =====================================================
-- PÁGINAS DO SITE
-- =====================================================
INSERT INTO pages (title, slug, content, published, metadata) VALUES
  (
    'Sobre a Casa e Lazer',
    'sobre',
    '# Sobre a Casa e Lazer\n\nA Casa e Lazer é sua parceira de confiança para materiais escolares...',
    true,
    '{"meta_title": "Sobre - Casa e Lazer", "meta_description": "Conheça a história da Casa e Lazer"}'::jsonb
  ),
  (
    'Política de Privacidade',
    'privacidade',
    '# Política de Privacidade\n\nÚltima atualização: Janeiro 2026...',
    true,
    '{"meta_title": "Política de Privacidade - Casa e Lazer"}'::jsonb
  ),
  (
    'Termos de Uso',
    'termos',
    '# Termos de Uso\n\nAo utilizar nosso site, você concorda com...',
    true,
    '{"meta_title": "Termos de Uso - Casa e Lazer"}'::jsonb
  )
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- NOTA IMPORTANTE
-- =====================================================
-- Os produtos acima são apenas exemplos.
-- Para popular o catálogo completo, use a funcionalidade
-- de importação SQL no admin panel (/admin/produtos/importar-sql)
-- com o arquivo SQL fornecido pela Casa e Lazer.
