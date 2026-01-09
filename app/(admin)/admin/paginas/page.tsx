import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, MoreHorizontal, File, Eye } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock Data
const mockPages = [
    {
        id: 1,
        title: 'Sobre a Casa & Lazer',
        slug: '/sobre',
        lastModified: '2026-01-08',
        status: 'published',
    },
    {
        id: 2,
        title: 'Política de Privacidade',
        slug: '/privacidade',
        lastModified: '2025-12-15',
        status: 'published',
    },
    {
        id: 3,
        title: 'Termos de Uso',
        slug: '/termos',
        lastModified: '2025-12-15',
        status: 'published',
    },
    {
        id: 4,
        title: 'Trabalhe Conosco',
        slug: '/trabalhe-conosco',
        lastModified: '2026-01-05',
        status: 'draft',
    },
]

export default function AdminPagesPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Páginas Institucionais</h2>
                    <p className="text-muted-foreground">
                        Gerencie o conteúdo das páginas estáticas do site.
                    </p>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Páginas do Site</CardTitle>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar página..." className="pl-9 h-9 border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Título</TableHead>
                                <TableHead>URL (Slug)</TableHead>
                                <TableHead>Última Edição</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockPages.map((page) => (
                                <TableRow key={page.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-slate-100/50 text-slate-600 group-hover:bg-slate-100 transition-colors">
                                                <File className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">{page.title}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <code className="bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-xs text-slate-600 font-mono">
                                            {page.slug}
                                        </code>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">
                                        {new Date(page.lastModified).toLocaleDateString('pt-BR')}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            page.status === 'published' ? 'default' : 'secondary'
                                        } className={`
                                            capitalize shadow-none px-2.5 py-0.5 font-medium
                                            ${page.status === 'published' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}
                                            ${page.status === 'draft' ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : ''}
                                        `}>
                                            {page.status === 'published' ? 'Publicada' : 'Rascunho'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-600">
                                                    <span className="sr-only">Abrir menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="border-slate-200 shadow-md">
                                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                                <DropdownMenuItem>Editar Conteúdo</DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Eye className="mr-2 h-4 w-4" /> Ver Página
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
