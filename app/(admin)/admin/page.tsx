import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, School, FileText, TrendingUp } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

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

async function DashboardStats() {
  const stats = await getStats()

  const cards = [
    {
      title: 'Produtos Totais',
      value: stats.totalProducts,
      description: `${stats.activeProducts} ativos`,
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Escolas Cadastradas',
      value: stats.totalSchools,
      description: 'Escolas ativas',
      icon: School,
      color: 'text-green-600',
    },
    {
      title: 'Listas Criadas',
      value: stats.totalLists,
      description: 'Total de listas',
      icon: FileText,
      color: 'text-purple-600',
    },
    {
      title: 'Taxa de Match',
      value: '75%',
      description: 'Média de sucesso',
      icon: TrendingUp,
      color: 'text-orange-600',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

async function RecentLists() {
  const lists = await getRecentLists()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Listas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lists.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhuma lista criada ainda</p>
          ) : (
            lists.map((list) => (
              <div key={list.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium">{list.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {/* @ts-ignore */}
                    {list.school?.name || 'Lista pessoal'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium capitalize">{list.status}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(list.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function StatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16 mb-2" />
            <Skeleton className="h-3 w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <Suspense fallback={<StatsSkeleton />}>
        <DashboardStats />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Suspense fallback={<Skeleton className="h-96" />}>
            <RecentLists />
          </Suspense>
        </div>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <a
              href="/admin/produtos/novo"
              className="flex items-center gap-2 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Package className="h-4 w-4" />
              <span className="text-sm">Adicionar Produto</span>
            </a>
            <a
              href="/admin/escolas/nova"
              className="flex items-center gap-2 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <School className="h-4 w-4" />
              <span className="text-sm">Cadastrar Escola</span>
            </a>
            <a
              href="/admin/produtos/importar-sql"
              className="flex items-center gap-2 rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span className="text-sm">Importar Produtos (SQL)</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
