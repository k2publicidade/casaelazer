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
import { Plus, Search, MoreHorizontal, FileText, Calendar } from 'lucide-react'
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
const mockPosts = [
    {
        id: 1,
        title: 'Volta às Aulas 2026: Tudo o que você precisa saber',
        category: 'Dicas',
        author: 'Equipe Casa & Lazer',
        status: 'published',
        date: '2026-01-05',
    },
    {
        id: 2,
        title: 'Melhores opções de lancheiras térmicas',
        category: 'Produtos',
        author: 'Maria Silva',
        status: 'published',
        date: '2026-01-02',
    },
    {
        id: 3,
        title: 'Como organizar o material escolar',
        category: 'Organização',
        author: 'Equipe Casa & Lazer',
        status: 'draft',
        date: '2026-01-08',
    },
]

export default function AdminBlogPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Blog e Notícias</h2>
                    <p className="text-muted-foreground">
                        Gerencie as publicações do blog da loja.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/admin/blog/novo">
                        <Button className="bg-pink-600 hover:bg-pink-700 shadow-sm">
                            <Plus className="mr-2 h-4 w-4" /> Novo Post
                        </Button>
                    </Link>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Artigos Publicados</CardTitle>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar post..." className="pl-9 h-9 border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Título</TableHead>
                                <TableHead>Categoria</TableHead>
                                <TableHead>Autor</TableHead>
                                <TableHead>Data</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockPosts.map((post) => (
                                <TableRow key={post.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-pink-100/50 text-pink-600 group-hover:bg-pink-100 transition-colors">
                                                <FileText className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">{post.title}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-normal bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">
                                            {post.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">
                                        {post.author}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                            {new Date(post.date).toLocaleDateString('pt-BR')}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            post.status === 'published' ? 'default' : 'secondary'
                                        } className={`
                                            capitalize shadow-none px-2.5 py-0.5 font-medium
                                            ${post.status === 'published' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}
                                            ${post.status === 'draft' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : ''}
                                        `}>
                                            {post.status === 'published' ? 'Publicado' : 'Rascunho'}
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
                                                <DropdownMenuItem>Editar Post</DropdownMenuItem>
                                                <DropdownMenuItem>Ver no Site</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50">
                                                    Excluir
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
