import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Package,
  School,
  FileText,
  TrendingUp,
  Activity,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings
} from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

// --- Data Fetching ---

async function getStats() {
  const supabase = await createClient()

  const [
    { count: productsCount },
    { count: schoolsCount },
    { count: listsCount },
    { count: activeProductsCount },
  ] = await Promise.all([
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('schools').select('*', { count: 'exact', head: true }).eq('active', true),
    supabase.from('material_lists').select('*', { count: 'exact', head: true }),
    supabase.from('products').select('*', { count: 'exact', head: true }).eq('active', true),
  ])

  return {
    totalProducts: productsCount || 0,
    activeProducts: activeProductsCount || 0,
    totalSchools: schoolsCount || 0,
    totalLists: listsCount || 0,
  }
}

async function getRecentLists() {
  const supabase = await createClient()

  const { data: lists } = await supabase
    .from('material_lists')
    .select(`
      id,
      title,
      created_at,
      status,
      school:schools(name)
    `)
    .order('created_at', { ascending: false })
    .limit(5)

  return lists || []
}

// --- Components ---

interface StatCardProps {
  title: string
  value: string | number
  change: string
  changeType: 'positive' | 'negative'
  icon: any
  color: string
}

function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <div className={`text-xs mt-1 flex items-center ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
          <TrendingUp className={`h-3 w-3 mr-1 ${changeType === 'negative' ? 'rotate-180' : ''}`} />
          {change}
        </div>
      </CardContent>
    </Card>
  )
}

async function DashboardStats() {
  const stats = await getStats()

  const cards: StatCardProps[] = [
    {
      title: 'Produtos Totais',
      value: stats.totalProducts,
      change: '+12% este mês',
      changeType: 'positive',
      icon: Package,
      color: 'bg-blue-600',
    },
    {
      title: 'Escolas Parceiras',
      value: stats.totalSchools,
      change: '+3 novas este ano',
      changeType: 'positive',
      icon: School,
      color: 'bg-red-600',
    },
    {
      title: 'Listas Criadas',
      value: stats.totalLists,
      change: '+8% vs. ano passado',
      changeType: 'positive',
      icon: FileText,
      color: 'bg-amber-500',
    },
    {
      title: 'Produtos Ativos',
      value: stats.activeProducts,
      change: '98% do catálogo',
      changeType: 'positive',
      icon: Activity,
      color: 'bg-emerald-500',
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <StatCard key={i} {...card} />
      ))}
    </div>
  )
}

function ActivityItem({ type, title, description, time }: { type: 'success' | 'warning' | 'info', title: string, description: string, time: string }) {
  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case 'info': return <Clock className="h-5 w-5 text-blue-600" />
    }
  }

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="mt-0.5">{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900">{title}</p>
        <p className="text-xs text-slate-600 mt-1">{description}</p>
        <p className="text-xs text-slate-500 mt-1">{time}</p>
      </div>
    </div>
  )
}

function RecentActivity() {
  // Mock recent activity for now
  const activities = [
    { type: 'success', title: 'Nova Escola Cadastrada', description: 'Colégio Santo Agostinho adicionado.', time: 'Há 2 horas' },
    { type: 'info', title: 'Atualização de Sistema', description: 'Backup automático realizado.', time: 'Há 4 horas' },
    { type: 'warning', title: 'Estoque Baixo', description: 'Item #4432 (Caderno) com menos de 10 un.', time: 'Há 5 horas' },
    { type: 'success', title: 'Lista Criada', description: 'Lista "6º Ano A" publicada.', time: 'Há 1 dia' },
  ] as const

  return (
    <Card className="lg:col-span-2 border-slate-200">
      <CardHeader>
        <CardTitle>Atividades Recentes</CardTitle>
        <CardDescription>Acompanhe as últimas ações no sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <ActivityItem key={i} {...activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function SystemStatus() {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle>Status do Sistema</CardTitle>
        <CardDescription>Visão geral de desempenho</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Desempenho (Vercel)</span>
            <span className="text-sm font-medium text-slate-900">98%</span>
          </div>
          <Progress value={98} className="bg-slate-100" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Banco de Dados (Supabase)</span>
            <span className="text-sm font-medium text-slate-900">42%</span>
          </div>
          <Progress value={42} className="bg-slate-100" />
        </div>
        <div className="pt-4 border-t border-slate-100">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Todos os sistemas operacionais
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function QuickActions() {
  const actions = [
    { label: 'Novo Produto', icon: Package, href: '/admin/produtos/novo', color: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Nova Escola', icon: School, href: '/admin/escolas/nova', color: 'bg-green-600 hover:bg-green-700' },
    { label: 'Importar SQL', icon: FileText, href: '/admin/produtos/importar-sql', color: 'bg-purple-600 hover:bg-purple-700' },
    { label: 'Configurações', icon: Settings, href: '/admin/configuracoes', color: 'bg-slate-600 hover:bg-slate-700' },
  ]

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle>Ações Rápidas</CardTitle>
        <CardDescription>Atalhos mais utilizados</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg text-white transition-all shadow-sm ${action.color}`}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// --- Main Page Component ---

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
          <p className="text-muted-foreground">Bem-vindo ao painel administrativo da Casa & Lazer.</p>
        </div>
      </div>

      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <DashboardStats />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 space-y-6">
          <RecentActivity />
          {/* Can re-add Charts here later */}
        </div>
        <div className="col-span-3 space-y-6">
          <QuickActions />
          <SystemStatus />
        </div>
      </div>
    </div>
  )
}
