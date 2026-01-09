"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, ListPlus, User, Store } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
    const pathname = usePathname()

    const items = [
        {
            name: "Início",
            href: "/",
            icon: Home,
        },
        {
            name: "Catálogo",
            href: "/produtos",
            icon: Search,
        },
        {
            name: "Lista",
            href: "/listas/nova",
            icon: ListPlus,
        },
        {
            name: "Lojas",
            href: "/lojas",
            icon: Store,
        },
        {
            name: "Conta",
            href: "/login", // Redirects to admin or login
            icon: User,
        },
    ]

    // Hide on admin routes if they are somehow rendered with this component
    if (pathname.startsWith("/admin")) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden print:hidden">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-t border-white/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]" />

            <nav className="relative flex justify-between items-center px-6 pb-[env(safe-area-inset-bottom)] pt-3 h-[calc(60px+env(safe-area-inset-bottom))]">
                {items.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 w-12 transition-all duration-300",
                                isActive ? "text-blue-600 -translate-y-1" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            <div
                                className={cn(
                                    "p-1.5 rounded-full transition-all duration-300",
                                    isActive ? "bg-blue-100" : "bg-transparent"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "w-6 h-6 transition-all duration-300",
                                        isActive && "stroke-[2.5px]"
                                    )}
                                />
                            </div>
                            <span className={cn(
                                "text-[10px] font-medium transition-all duration-300",
                                isActive ? "opacity-100 font-bold" : "opacity-0 h-0 w-0 overflow-hidden"
                            )}>
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
