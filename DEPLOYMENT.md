# 🚀 Guia de Deployment - Casa e Lazer

## ✅ Status do Projeto

### Configurações Concluídas

- ✅ **Database**: Completamente configurado no Supabase
  - Projeto: `tuwqhdayuefuchotrspq`
  - Região: `us-west-2`
  - Status: ACTIVE_HEALTHY
  - Todas as tabelas, indexes, functions, triggers e RLS policies aplicados
  - Seed data inicial inserido (categorias, produtos exemplo, páginas institucionais)

- ✅ **Usuário Admin Criado**
  - Email: `k2publicidade@yahoo.com.br`
  - Role: `admin`
  - Nome: `Administrador Casa e Lazer`
  - Status: Ativo e pronto para uso

- ✅ **Build de Produção**: Testado e funcionando
  - Compilação bem-sucedida
  - Todas as rotas geradas corretamente
  - Sem erros de TypeScript

### Configurações Pendentes

- ⚠️ **SUPABASE_SERVICE_ROLE_KEY**: Precisa ser obtida manualmente
- ⚠️ **OPENROUTER_API_KEY**: Necessária para funcionalidade de IA

---

## 🔑 Obter Chaves Faltantes

### 1. Supabase Service Role Key

A Service Role Key é necessária para operações administrativas do servidor.

**Passos:**

1. Acesse: https://supabase.com/dashboard/project/tuwqhdayuefuchotrspq/settings/api
2. Role até a seção "Project API keys"
3. Localize a chave `service_role` (marcada como "secret")
4. Clique no ícone de copiar
5. Cole no arquivo `.env.local`:
   ```env
   SUPABASE_SERVICE_ROLE_KEY=sua-chave-aqui
   ```

**⚠️ IMPORTANTE**: Esta chave é secreta e fornece acesso total ao banco de dados. Nunca compartilhe ou commite no git.

### 2. OpenRouter API Key

A OpenRouter API é usada para extração inteligente de listas de materiais com GPT-4o.

**Passos:**

1. Acesse: https://openrouter.ai/keys
2. Faça login ou crie uma conta (oferece créditos gratuitos para teste)
3. Crie uma nova API key
4. Copie a chave
5. Cole no arquivo `.env.local`:
   ```env
   OPENROUTER_API_KEY=sk-or-v1-sua-chave-aqui
   ```

**Nota**: A funcionalidade de extração de listas só funcionará após configurar esta chave.

---

## 🌐 Deploy para Vercel (Recomendado)

### Pré-requisitos

- Conta no Vercel (https://vercel.com)
- Repositório Git com o código do projeto
- Chaves do Supabase e OpenRouter obtidas

### Passos para Deploy

#### 1. Preparar Repositório

```bash
# Certifique-se de que o .env.local está no .gitignore
echo ".env.local" >> .gitignore

# Commit final
git add .
git commit -m "chore: preparar projeto para deploy"
git push origin main
```

#### 2. Importar Projeto no Vercel

1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione o repositório do projeto
4. Configure o projeto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `casaelazer` (se estiver em monorepo)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### 3. Configurar Variáveis de Ambiente

Na página de configuração do projeto no Vercel, adicione as seguintes variáveis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tuwqhdayuefuchotrspq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1d3FoZGF5dWVmdWNob3Ryc3BxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2NzU4MjksImV4cCI6MjA4MzI1MTgyOX0.5XQS7hoS3rFBEk6LY78ZfsMGeeysp9eMYIZxEuR3qmQ
SUPABASE_SERVICE_ROLE_KEY=[cole-aqui-a-chave-obtida]

# OpenRouter
OPENROUTER_API_KEY=[cole-aqui-a-chave-obtida]

# Site URL - Será preenchido automaticamente após o deploy
NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
```

#### 4. Deploy

1. Clique em "Deploy"
2. Aguarde a build completar (2-5 minutos)
3. Anote a URL gerada: `https://seu-projeto.vercel.app`
4. Atualize a variável `NEXT_PUBLIC_SITE_URL` com a URL gerada

#### 5. Configurar Domínio Customizado (Opcional)

1. No dashboard do projeto Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio personalizado (ex: `casaelazer.com.br`)
3. Configure os registros DNS conforme indicado
4. Atualize `NEXT_PUBLIC_SITE_URL` com o novo domínio

---

## 🔒 Configurações de Segurança do Supabase

### Atualizar URLs Permitidas

Após o deploy, configure as URLs no Supabase:

1. Acesse: https://supabase.com/dashboard/project/tuwqhdayuefuchotrspq/auth/url-configuration
2. Adicione em **Site URL**: `https://seu-projeto.vercel.app`
3. Adicione em **Redirect URLs**:
   ```
   https://seu-projeto.vercel.app/**
   https://seu-projeto.vercel.app/auth/callback
   http://localhost:3000/** (manter para desenvolvimento)
   http://localhost:3000/auth/callback
   ```

---

## 📋 Checklist Pós-Deploy

### Testes Essenciais

- [ ] **Acesso à aplicação**: Abrir URL de produção
- [ ] **Login admin**: Testar login com `k2publicidade@yahoo.com.br`
- [ ] **Painel admin**: Verificar acesso a `/admin`
- [ ] **Catálogo público**: Verificar `/produtos`
- [ ] **Upload de lista**: Testar `/listas/nova`
- [ ] **Extração com IA**: Fazer upload e testar extração (requer OpenRouter key)
- [ ] **Matching de produtos**: Verificar matching automático
- [ ] **Exportação PDF/Excel**: Testar geração de orçamentos

### Monitoramento

- [ ] **Logs do Vercel**: Verificar se há erros em tempo real
- [ ] **Logs do Supabase**: Monitorar queries e auth
- [ ] **Performance**: Verificar tempos de carregamento
- [ ] **Erros de Console**: Abrir DevTools e verificar console

---

## 🎯 Próximos Passos

### 1. Importar Catálogo Completo

Após fazer login como admin:

1. Acesse: `https://seu-projeto.vercel.app/admin/produtos/importar-sql`
2. Faça upload do arquivo SQL com o catálogo completo da Casa e Lazer
3. O sistema irá:
   - Validar o SQL
   - Criar backup automático
   - Importar produtos em massa
   - Gerar embeddings para busca semântica

### 2. Cadastrar Escolas Parceiras

1. Acesse: `/admin/escolas`
2. Cadastre escolas que usarão o sistema
3. Configure logotipos e informações de contato
4. Crie contas para representantes das escolas (role: `school`)

### 3. Criar Conteúdo

1. **Blog/Notícias**: `/admin/blog` - Publicar conteúdo para SEO
2. **Páginas Institucionais**: Editar páginas como Sobre, Contato, etc.

### 4. Configurar Integrações

- **Analytics**: Adicionar Google Analytics ou Vercel Analytics
- **Monitoring**: Configurar Sentry para rastreamento de erros
- **Email**: Configurar SMTP para notificações (futuro)

---

## 🐛 Troubleshooting

### Erro de Autenticação no Supabase

**Problema**: "Neither apiKey nor config.authenticator provided"

**Solução**:
- Verificar se as variáveis de ambiente estão corretas no Vercel
- Garantir que `SUPABASE_SERVICE_ROLE_KEY` está configurada
- Fazer redeploy se necessário

### Extração de Listas Não Funciona

**Problema**: Erro ao processar upload de lista

**Solução**:
- Verificar se `OPENROUTER_API_KEY` está configurada
- Verificar créditos disponíveis na conta OpenRouter
- Verificar logs do Vercel para erros específicos

### Build Falha no Vercel

**Problema**: Build não completa com sucesso

**Solução**:
- Verificar se todas as dependências estão no `package.json`
- Rodar `npm run build` localmente para reproduzir erro
- Verificar logs detalhados do build no Vercel

### Performance Lenta

**Problema**: Carregamento lento de páginas

**Solução**:
- Verificar indexes no Supabase
- Ativar caching de queries
- Considerar CDN para assets estáticos
- Verificar região do Supabase (us-west-2 pode estar longe do Brasil)

---

## 📞 Suporte e Documentação

### Documentação do Projeto

- [README.md](./README.md) - Visão geral e setup
- [SETUP-DATABASE.md](./SETUP-DATABASE.md) - Configuração detalhada do banco
- [docs/plans/2026-01-08-casaelazer-design.md](./docs/plans/2026-01-08-casaelazer-design.md) - Design técnico completo

### Documentação Externa

- [Next.js](https://nextjs.org/docs)
- [Supabase](https://supabase.com/docs)
- [Vercel](https://vercel.com/docs)
- [OpenRouter](https://openrouter.ai/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

---

## 📊 Estrutura de Custos Estimada

### Supabase

- **Free Tier**: Até 500MB database, 1GB bandwidth/mês, 50.000 autenticações/mês
- **Pro**: $25/mês - 8GB database, 50GB bandwidth, 100.000 autenticações
- **Recomendado**: Começar com Free Tier, escalar conforme necessário

### Vercel

- **Hobby**: Grátis - Deploy ilimitado, 100GB bandwidth
- **Pro**: $20/mês - Uso comercial, mais bandwidth, analytics avançado
- **Recomendado**: Hobby para MVP, Pro para produção comercial

### OpenRouter

- **Pay-as-you-go**: GPT-4o ~$0.15 por 100 extrações
- **Estimativa**: $10-30/mês para uso moderado
- **Créditos grátis**: $5-10 para teste

**Total Estimado (MVP)**: $0-10/mês (usando tiers gratuitos)
**Total Estimado (Produção)**: $55-75/mês

---

## ✅ Status Final

### Completo

- ✅ Aplicação desenvolvida e testada
- ✅ Database configurado com dados iniciais
- ✅ Usuário admin criado e funcional
- ✅ Build de produção validado
- ✅ Documentação completa criada

### Aguardando Ação

- ⏳ Obter SUPABASE_SERVICE_ROLE_KEY
- ⏳ Obter OPENROUTER_API_KEY
- ⏳ Fazer deploy no Vercel
- ⏳ Configurar domínio customizado (opcional)
- ⏳ Importar catálogo completo de produtos

---

**🎉 O projeto Casa e Lazer está pronto para deploy!**

Siga os passos deste guia para colocar a aplicação em produção.

---

*Documentação criada em: 2026-01-08*
*Última atualização: 2026-01-08*
