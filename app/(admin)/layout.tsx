import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Sidebar } from '@/components/ui/modern-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check if user is admin or school
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user?.id)
    .single()

  if (!profile || (profile.role !== 'admin' && profile.role !== 'school')) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen w-full bg-slate-50/30">
      <Sidebar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
    </div>
  )
}
