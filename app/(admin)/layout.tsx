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
        {/* Mobile Sidebar Trigger */}
        <div className="md:hidden p-4 border-b bg-white flex items-center justify-between sticky top-0 z-20">
          <span className="font-semibold text-slate-900">Casa e Lazer Admin</span>
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </div>
  )
}

function SidebarTrigger() {
  return (
    <label htmlFor="sidebar-mobile-toggle" className="p-2 rounded-md hover:bg-slate-100 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    </label>
  )
}
