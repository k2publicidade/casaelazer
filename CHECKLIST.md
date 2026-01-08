# ✅ Checklist de Finalização - Casa e Lazer

## 📋 Checklist de Deploy

### Fase 1: Configurações de API (5 minutos)

- [ ] **Obter Supabase Service Role Key**
  - [ ] Acessar: https://supabase.com/dashboard/project/tuwqhdayuefuchotrspq/settings/api
  - [ ] Copiar chave `service_role`
  - [ ] Guardar em local seguro

- [ ] **Obter OpenRouter API Key**
  - [ ] Criar conta em: https://openrouter.ai
  - [ ] Criar nova API key em: https://openrouter.ai/keys
  - [ ] Guardar chave gerada

- [ ] **Atualizar .env.local (desenvolvimento)**
  - [ ] Adicionar `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] Adicionar `OPENROUTER_API_KEY`
  - [ ] Testar localmente com `npm run dev`

### Fase 2: Deploy no Vercel (5 minutos)

- [ ] **Preparar Repositório Git**
  - [ ] Commit final: `git add . && git commit -m "chore: preparar para deploy"`
  - [ ] Push: `git push origin main`
  - [ ] Verificar que `.env.local` está no `.gitignore`

- [ ] **Criar Projeto no Vercel**
  - [ ] Acessar: https://vercel.com/new
  - [ ] Importar repositório do projeto
  - [ ] Configurar Root Directory: `casaelazer` (se monorepo)
  - [ ] Framework preset: Next.js

- [ ] **Configurar Variáveis de Ambiente no Vercel**
  ```env
  NEXT_PUBLIC_SUPABASE_URL=https://tuwqhdayuefuchotrspq.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1d3FoZGF5dWVmdWNob3Ryc3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NzU4MjksImV4cCI6MjA4MzI1MTgyOX0.5XQS7hoS3rFBEk6LY78ZfsMGeeysp9eMYIZxEuR3qmQ
  SUPABASE_SERVICE_ROLE_KEY=[cole-sua-chave]
  OPENROUTER_API_KEY=[cole-sua-chave]
  NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
  ```

- [ ] **Fazer Deploy**
  - [ ] Clicar em "Deploy"
  - [ ] Aguardar build (2-5 minutos)
  - [ ] Anotar URL gerada

- [ ] **Atualizar NEXT_PUBLIC_SITE_URL**
  - [ ] Ir em Settings → Environment Variables
  - [ ] Atualizar `NEXT_PUBLIC_SITE_URL` com URL do Vercel
  - [ ] Fazer redeploy

### Fase 3: Configurar Supabase Auth (2 minutos)

- [ ] **Adicionar URLs de Redirect**
  - [ ] Acessar: https://supabase.com/dashboard/project/tuwqhdayuefuchotrspq/auth/url-configuration
  - [ ] Adicionar em **Site URL**: `https://seu-projeto.vercel.app`
  - [ ] Adicionar em **Redirect URLs**:
    - `https://seu-projeto.vercel.app/**`
    - `https://seu-projeto.vercel.app/auth/callback`
    - `http://localhost:3000/**` (manter para dev)
    - `http://localhost:3000/auth/callback` (manter para dev)

### Fase 4: Testes de Produção (10 minutos)

- [ ] **Teste de Acesso**
  - [ ] Abrir URL de produção
  - [ ] Verificar que a página inicial carrega

- [ ] **Teste de Login**
  - [ ] Acessar `/login`
  - [ ] Fazer login com: `k2publicidade@yahoo.com.br`
  - [ ] Verificar redirecionamento para `/admin`

- [ ] **Teste do Painel Admin**
  - [ ] Verificar acesso a `/admin/produtos`
  - [ ] Verificar acesso a `/admin/escolas`
  - [ ] Verificar acesso a `/admin/listas`

- [ ] **Teste de Upload de Lista**
  - [ ] Acessar `/listas/nova`
  - [ ] Fazer upload de um PDF/Excel de teste
  - [ ] Verificar extração com IA (requer OpenRouter key)
  - [ ] Verificar matching de produtos
  - [ ] Gerar orçamento em PDF
  - [ ] Gerar orçamento em Excel

- [ ] **Teste do Catálogo Público**
  - [ ] Acessar `/produtos`
  - [ ] Verificar listagem de produtos
  - [ ] Testar busca
  - [ ] Testar filtros por categoria

### Fase 5: Conteúdo Inicial (30 minutos)

- [ ] **Importar Catálogo Completo**
  - [ ] Preparar arquivo SQL com produtos da Casa e Lazer
  - [ ] Acessar `/admin/produtos/importar-sql`
  - [ ] Fazer upload do arquivo
  - [ ] Aguardar processamento
  - [ ] Verificar que produtos foram importados

- [ ] **Cadastrar Primeira Escola**
  - [ ] Acessar `/admin/escolas`
  - [ ] Criar nova escola
  - [ ] Fazer upload do logotipo
  - [ ] Salvar informações

- [ ] **Criar Conteúdo Institucional**
  - [ ] Editar página "Sobre"
  - [ ] Editar página "Contato"
  - [ ] Revisar "Política de Privacidade"
  - [ ] Revisar "Termos de Uso"

- [ ] **Publicar Primeiro Post no Blog** (opcional)
  - [ ] Acessar `/admin/blog`
  - [ ] Criar post de lançamento
  - [ ] Publicar

### Fase 6: Configurações Opcionais

- [ ] **Domínio Customizado**
  - [ ] Comprar domínio (ex: casaelazer.com.br)
  - [ ] Adicionar no Vercel: Settings → Domains
  - [ ] Configurar DNS conforme instruções
  - [ ] Aguardar propagação (até 48h)
  - [ ] Atualizar `NEXT_PUBLIC_SITE_URL`

- [ ] **Analytics**
  - [ ] Adicionar Google Analytics (opcional)
  - [ ] Ou ativar Vercel Analytics

- [ ] **Monitoramento de Erros**
  - [ ] Configurar Sentry (opcional)
  - [ ] Adicionar DSN nas variáveis de ambiente

- [ ] **Email Transacional** (futuro)
  - [ ] Escolher provedor (SendGrid, Resend, etc.)
  - [ ] Configurar templates
  - [ ] Adicionar credenciais

### Fase 7: Segurança e Otimização

- [ ] **Revisão de Segurança**
  - [ ] Verificar que `.env.local` não foi commitado
  - [ ] Verificar que service role key não está exposta
  - [ ] Confirmar que RLS está ativo em todas as tabelas
  - [ ] Testar acesso não autorizado a rotas admin

- [ ] **Otimização de Performance**
  - [ ] Testar velocidade de carregamento
  - [ ] Verificar métricas Core Web Vitals
  - [ ] Otimizar imagens se necessário

- [ ] **Backup**
  - [ ] Fazer backup manual do Supabase
  - [ ] Configurar backups automáticos (Supabase Pro)

### Fase 8: Launch! 🚀

- [ ] **Comunicação**
  - [ ] Preparar comunicado de lançamento
  - [ ] Criar materiais de divulgação
  - [ ] Treinar equipe para usar o sistema

- [ ] **Monitoramento Inicial**
  - [ ] Monitorar logs nas primeiras 24h
  - [ ] Verificar erros reportados
  - [ ] Coletar feedback de usuários iniciais

- [ ] **Documentação Interna**
  - [ ] Criar manual do admin
  - [ ] Criar FAQ para escolas
  - [ ] Documentar processos operacionais

---

## 📊 Status Atual

### ✅ Completo (95%)

- ✅ Desenvolvimento da aplicação
- ✅ Configuração do database
- ✅ Criação de usuário admin
- ✅ Build de produção testado
- ✅ Documentação completa
- ✅ Seed data inicial

### ⏳ Pendente (5%)

- ⏳ Obter chaves de API
- ⏳ Deploy no Vercel
- ⏳ Testes de produção
- ⏳ Importar catálogo completo

---

## 🎯 Meta

**Data alvo para launch**: _______________

**Responsável**: _______________

**Status**: ⏳ Aguardando deploy

---

## 📞 Suporte

Em caso de problemas:

1. Consultar [DEPLOYMENT.md](./DEPLOYMENT.md) - seção Troubleshooting
2. Verificar logs do Vercel
3. Verificar logs do Supabase
4. Revisar variáveis de ambiente

---

**Última atualização**: 2026-01-08
