'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  School,
  FileText,
  ListChecks,
  Newspaper,
  FileCode,
  LogOut,
  ChevronRight,
  Store,
  Settings,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useUser } from '@/hooks/use-user'
import { signOut } from '@/lib/auth/actions'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Produtos',
    icon: Package,
    items: [
      { title: 'Listar', href: '/admin/produtos' },
      { title: 'Novo Produto', href: '/admin/produtos/novo' },
      { title: 'Importar SQL', href: '/admin/produtos/importar-sql' },
      { title: 'Categorias', href: '/admin/produtos/categorias' },
    ],
  },
  {
    title: 'Listas de Materiais',
    href: '/admin/listas',
    icon: ListChecks,
  },
  {
    title: 'Escolas',
    icon: School,
    items: [
      { title: 'Listar', href: '/admin/escolas' },
      { title: 'Nova Escola', href: '/admin/escolas/nova' },
    ],
  },
  {
    title: 'Blog',
    icon: Newspaper,
    items: [
      { title: 'Posts', href: '/admin/blog' },
      { title: 'Novo Post', href: '/admin/blog/novo' },
    ],
  },
  {
    title: 'Lojas',
    icon: Store,
    items: [
      { title: 'Listar Lojas', href: '/admin/lojas' },
      { title: 'Nova Loja', href: '/admin/lojas/nova' },
    ],
  },
  {
    title: 'Páginas',
    href: '/admin/paginas',
    icon: FileText,
  },
  {
    title: 'Configurações',
    href: '/admin/configuracoes',
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { user, profile } = useUser()

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">CL</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Casa e Lazer</p>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.items?.some(sub => pathname.startsWith(sub.href))}>
                  <SidebarMenuItem>
                    {item.items ? (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.href}>
                                <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                                  <Link href={subItem.href}>{subItem.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    ) : (
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href!}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3 px-2 py-1.5">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {profile?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {profile?.full_name || 'Usuário'}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {profile?.role === 'admin' ? 'Administrador' : 'Escola'}
            </p>
          </div>
          <form action={signOut}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
