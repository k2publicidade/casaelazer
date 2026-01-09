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
import { Plus, Search, MoreHorizontal, Folder, Tag } from 'lucide-react'
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
const mockCategories = [
    {
        id: 1,
        name: 'Papelaria',
        slug: 'papelaria',
        products: 1250,
        subcategories: 12,
        status: 'active',
    },
    {
        id: 2,
        name: 'Escolar',
        slug: 'escolar',
        products: 850,
        subcategories: 8,
        status: 'active',
    },
    {
        id: 3,
        name: 'Cama, Mesa e Banho',
        slug: 'cama-mesa-banho',
        products: 420,
        subcategories: 5,
        status: 'active',
    },
    {
        id: 4,
        name: 'Utilidades Domésticas',
        slug: 'utilidades',
        products: 1100,
        subcategories: 15,
        status: 'active',
    },
    {
        id: 5,
        name: 'Brinquedos',
        slug: 'brinquedos',
        products: 350,
        subcategories: 6,
        status: 'active',
    },
]

export default function AdminCategoriesPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Categorias de Produtos</h2>
                    <p className="text-muted-foreground">
                        Gerencie as categorias e departamentos da loja.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button className="bg-orange-600 hover:bg-orange-700 shadow-sm">
                        <Plus className="mr-2 h-4 w-4" /> Nova Categoria
                    </Button>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Departamentos e Categorias</CardTitle>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar categoria..." className="pl-9 h-9 border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Nome</TableHead>
                                <TableHead>Identificador</TableHead>
                                <TableHead>Subcategorias</TableHead>
                                <TableHead>Produtos</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockCategories.map((cat) => (
                                <TableRow key={cat.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-orange-100/50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                                                <Folder className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">{cat.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded w-fit border border-slate-200/50">
                                            <Tag className="h-3 w-3 text-slate-400" /> {cat.slug}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">{cat.subcategories}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none font-normal">
                                            {cat.products}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-200 border-none shadow-none px-2.5 py-0.5">
                                            Ativa
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
                                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                                <DropdownMenuItem>Ver Subcategorias</DropdownMenuItem>
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
