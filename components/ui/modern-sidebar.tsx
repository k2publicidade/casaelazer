"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    User,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    BarChart3,
    FileText,
    Bell,
    Search,
    HelpCircle,
    Package,
    School,
    ListChecks,
    Newspaper,
    Store,
    ChevronDown
} from 'lucide-react';
import { useUser } from '@/hooks/use-user';
import { signOut } from '@/lib/auth/actions';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface NavigationItem {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    href?: string;
    badge?: string;
    items?: { title: string; href: string }[];
}

interface SidebarProps {
    className?: string;
}

// Updated navigation items to match casaelazer routes
const navigationItems: NavigationItem[] = [
    { id: "dashboard", name: "Dashboard", icon: Home, href: "/admin" },
    {
        id: "produtos",
        name: "Produtos",
        icon: Package,
        items: [
            { title: 'Listar', href: '/admin/produtos' },
            { title: 'Novo Produto', href: '/admin/produtos/novo' },
            { title: 'Importar SQL', href: '/admin/produtos/importar-sql' },
            { title: 'Categorias', href: '/admin/produtos/categorias' },
        ]
    },
    { id: "listas", name: "Listas de Materiais", icon: ListChecks, href: "/admin/listas" },
    {
        id: "escolas",
        name: "Escolas",
        icon: School,
        items: [
            { title: 'Listar', href: '/admin/escolas' },
            { title: 'Nova Escola', href: '/admin/escolas/nova' },
        ]
    },
    {
        id: "blog",
        name: "Blog",
        icon: Newspaper,
        items: [
            { title: 'Posts', href: '/admin/blog' },
            { title: 'Novo Post', href: '/admin/blog/novo' },
        ]
    },
    {
        id: "lojas",
        name: "Lojas",
        icon: Store,
        items: [
            { title: 'Listar Lojas', href: '/admin/lojas' },
            { title: 'Nova Loja', href: '/admin/lojas/nova' },
        ]
    },
    { id: "paginas", name: "Páginas", icon: FileText, href: "/admin/paginas" },
    { id: "configuracoes", name: "Configurações", icon: Settings, href: "/admin/configuracoes" },
];

export function Sidebar({ className = "" }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const pathname = usePathname();
    const { user, profile } = useUser();

    // Auto-open sidebar on desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize expanded items based on active route
    useEffect(() => {
        const activeParents = navigationItems
            .filter(item => item.items?.some(sub => pathname.startsWith(sub.href)))
            .map(item => item.id);

        setExpandedItems(prev => Array.from(new Set([...prev, ...activeParents])));
    }, [pathname]);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const toggleSubmenu = (itemId: string) => {
        if (isCollapsed) return;
        setExpandedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const isItemActive = (item: NavigationItem) => {
        if (item.href) return pathname === item.href || pathname.startsWith(item.href + '/');
        if (item.items) return item.items.some(sub => pathname.startsWith(sub.href));
        return false;
    };

    return (
        <>
            {/* Mobile hamburger button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-slate-100 md:hidden hover:bg-slate-50 transition-all duration-200"
                aria-label="Toggle sidebar"
            >
                {isOpen ?
                    <X className="h-5 w-5 text-slate-600" /> :
                    <Menu className="h-5 w-5 text-slate-600" />
                }
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
                    onClick={toggleSidebar}
                />
            )}

            {/* Spacer for fixed sidebar */}
            <div
                className={cn(
                    "hidden md:block transition-all duration-300 ease-in-out flex-shrink-0",
                    isCollapsed ? "w-20" : "w-72"
                )}
            />

            {/* Sidebar */}
            <div
                className={cn(
                    "fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-40 transition-all duration-300 ease-in-out flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    isCollapsed ? "w-20" : "w-72",
                    "md:translate-x-0",
                    className
                )}
            >
                {/* Header with logo and collapse button */}
                <div className={cn("flex items-center p-5 border-b border-slate-200 bg-slate-50/60 h-20", isCollapsed ? "justify-center" : "justify-between")}>
                    {!isCollapsed && (
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                                <span className="text-white font-bold text-lg">CL</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="font-bold text-slate-800 text-sm truncate">Casa e Lazer</span>
                                <span className="text-xs text-slate-500 truncate">Admin Panel</span>
                            </div>
                        </div>
                    )}

                    {isCollapsed && (
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">CL</span>
                        </div>
                    )}

                    {/* Desktop collapse button */}
                    {!isCollapsed && (
                        <button
                            onClick={toggleCollapse}
                            className="hidden md:flex p-1.5 rounded-md hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-all duration-200"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Collapsed expand button (centered) */}
                {isCollapsed && (
                    <button
                        onClick={toggleCollapse}
                        className="hidden md:flex w-full justify-center py-2 hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all duration-200 border-b border-slate-100"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                )}

                {/* Search Bar */}
                {!isCollapsed && (
                    <div className="px-5 py-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                            />
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav className="flex-1 px-3 py-2 overflow-y-auto no-scrollbar">
                    <ul className="space-y-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = isItemActive(item);
                            const isExpanded = expandedItems.includes(item.id);
                            const hasSubmenu = !!item.items?.length;

                            return (
                                <li key={item.id}>
                                    {/* Main Item */}
                                    {item.href ? (
                                        <Link href={item.href}>
                                            <div
                                                className={cn(
                                                    "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative",
                                                    isActive
                                                        ? "bg-blue-50 text-blue-700 font-medium shadow-sm ring-1 ring-blue-100"
                                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                                                    isCollapsed ? "justify-center px-2" : ""
                                                )}
                                                title={isCollapsed ? item.name : undefined}
                                            >
                                                <div className="flex items-center justify-center min-w-[24px]">
                                                    <Icon
                                                        className={cn(
                                                            "h-5 w-5 flex-shrink-0 transition-colors",
                                                            isActive
                                                                ? "text-blue-600"
                                                                : "text-slate-400 group-hover:text-slate-600"
                                                        )}
                                                    />
                                                </div>

                                                {!isCollapsed && (
                                                    <div className="flex items-center justify-between w-full min-w-0">
                                                        <span className="truncate">{item.name}</span>
                                                        {item.badge && (
                                                            <span className={cn(
                                                                "px-2 py-0.5 text-[10px] font-bold uppercase rounded-full tracking-wide",
                                                                isActive
                                                                    ? "bg-blue-100 text-blue-700"
                                                                    : "bg-slate-100 text-slate-500"
                                                            )}>
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Tooltip/Badge for collapsed */}
                                                {isCollapsed && (
                                                    <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl font-medium">
                                                        {item.name}
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    ) : (
                                        // Submenu Trigger
                                        <button
                                            onClick={() => toggleSubmenu(item.id)}
                                            className={cn(
                                                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative",
                                                isActive
                                                    ? "bg-blue-50/50 text-blue-700 font-medium"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                                                isCollapsed ? "justify-center px-2" : ""
                                            )}
                                        >
                                            <div className="flex items-center justify-center min-w-[24px]">
                                                <Icon
                                                    className={cn(
                                                        "h-5 w-5 flex-shrink-0 transition-colors",
                                                        isActive
                                                            ? "text-blue-600"
                                                            : "text-slate-400 group-hover:text-slate-600"
                                                    )}
                                                />
                                            </div>

                                            {!isCollapsed && (
                                                <div className="flex items-center justify-between w-full min-w-0">
                                                    <span className="truncate">{item.name}</span>
                                                    <ChevronDown className={cn(
                                                        "h-4 w-4 text-slate-400 transition-transform duration-200",
                                                        isExpanded ? "transform rotate-180" : ""
                                                    )} />
                                                </div>
                                            )}
                                            {/* Tooltip for collapsed */}
                                            {isCollapsed && (
                                                <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl font-medium">
                                                    {item.name}
                                                </div>
                                            )}
                                        </button>
                                    )}

                                    {/* Submenu Items */}
                                    {!isCollapsed && hasSubmenu && isExpanded && (
                                        <div className="ml-10 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                                            {item.items?.map((subItem) => {
                                                const isSubActive = pathname === subItem.href;
                                                return (
                                                    <Link key={subItem.href} href={subItem.href}>
                                                        <div className={cn(
                                                            "py-2 text-sm transition-colors duration-200 rounded-md px-2 block truncate",
                                                            isSubActive
                                                                ? "text-blue-600 font-medium bg-blue-50/30"
                                                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                                        )}>
                                                            {subItem.title}
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom section with profile and logout */}
                <div className="mt-auto border-t border-slate-200 bg-white z-20">
                    {/* Profile Section */}
                    <div className={cn("border-b border-slate-200 bg-slate-50/30", isCollapsed ? 'py-3 px-2' : 'p-3')}>
                        {!isCollapsed ? (
                            <div className="flex items-center px-3 py-2 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer">
                                <Avatar className="h-9 w-9 border-2 border-white shadow-sm">
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium">
                                        {profile?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0 ml-3">
                                    <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-700 transition-colors">{profile?.full_name || 'Usuário'}</p>
                                    <p className="text-xs text-slate-500 truncate">{profile?.role === 'admin' ? 'Administrador' : 'Usuário'}</p>
                                </div>
                                <div className="w-2 h-2 bg-green-500 rounded-full ml-2 ring-2 ring-white" title="Online" />
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <div className="relative group cursor-pointer">
                                    <Avatar className="h-9 w-9 border-2 border-white shadow-sm ring-2 ring-slate-100 group-hover:ring-blue-100 transition-all">
                                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium">
                                            {profile?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Logout Button */}
                    <div className="p-3">
                        <form action={signOut}>
                            <button
                                className={cn(
                                    "w-full flex items-center rounded-lg text-left transition-all duration-200 group text-red-600 hover:bg-red-50 hover:text-red-700 hover:shadow-sm",
                                    isCollapsed ? "justify-center p-3" : "space-x-3 px-3 py-3"
                                )}
                                title={isCollapsed ? "Sair" : undefined}
                            >
                                <div className="flex items-center justify-center min-w-[24px]">
                                    <LogOut className="h-5 w-5 flex-shrink-0 text-red-400 group-hover:text-red-600" />
                                </div>

                                {!isCollapsed && (
                                    <span className="text-sm font-medium">Sair da Conta</span>
                                )}

                                {/* Tooltip for collapsed state */}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
                                        Sair
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
