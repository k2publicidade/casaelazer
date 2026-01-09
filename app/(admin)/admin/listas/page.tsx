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
import { Plus, Search, MoreHorizontal, FileText, School, Calendar } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

// Mock Data
const mockLists = [
    {
        id: 1,
        title: 'Lista 6º Ano - 2026',
        school: 'Colégio Santo Agostinho',
        grade: '6º Ano Fundamental',
        year: '2026',
        items: 45,
        status: 'active',
        updatedAt: '2026-01-05',
    },
    {
        id: 2,
        title: 'Material Pré-Escola II',
        school: 'Escola Parque',
        grade: 'Pré-II',
        year: '2026',
        items: 28,
        status: 'pending',
        updatedAt: '2026-01-08',
    },
    {
        id: 3,
        title: 'Ensino Médio - 1º Ano',
        school: 'Colégio Cruzeiro',
        grade: '1º Ano Médio',
        year: '2026',
        items: 52,
        status: 'active',
        updatedAt: '2025-12-20',
    },
    {
        id: 4,
        title: 'Lista 3º Ano Fundamental',
        school: 'Escola Americana',
        grade: '3º Ano',
        year: '2026',
        items: 35,
        status: 'draft',
        updatedAt: '2026-01-09',
    },
]

export default function AdminListsPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Listas de Material</h2>
                    <p className="text-muted-foreground">
                        Gerencie as listas escolares enviadas ou criadas.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/admin/listas/nova">
                        <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-sm">
                            <Plus className="mr-2 h-4 w-4" /> Nova Lista
                        </Button>
                    </Link>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Listas Cadastradas</CardTitle>
                    <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                            <Select defaultValue="2026">
                                <SelectTrigger className="w-[100px] border-slate-200 bg-slate-50">
                                    <SelectValue placeholder="Ano" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2026">2026</SelectItem>
                                    <SelectItem value="2025">2025</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[150px] border-slate-200 bg-slate-50">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="active">Ativas</SelectItem>
                                    <SelectItem value="pending">Pendentes</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar lista..." className="pl-9 h-9 w-full sm:w-[250px] border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Título</TableHead>
                                <TableHead>Escola / Série</TableHead>
                                <TableHead>Itens</TableHead>
                                <TableHead>Atualização</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockLists.map((list) => (
                                <TableRow key={list.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-indigo-100/50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                                                <FileText className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">{list.title}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-sm text-slate-600">
                                            <span className="flex items-center gap-1 font-medium text-slate-700">
                                                <School className="h-3.5 w-3.5 text-slate-400" /> {list.school}
                                            </span>
                                            <span className="text-xs text-muted-foreground pl-5">{list.grade}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-normal bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">
                                            {list.items} produtos
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                            {new Date(list.updatedAt).toLocaleDateString('pt-BR')}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            list.status === 'active' ? 'default' : 'outline'
                                        } className={`
                                            capitalize shadow-none px-2.5 py-0.5 font-medium
                                            ${list.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200 border-none' : ''}
                                            ${list.status === 'pending' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-none' : ''}
                                            ${list.status === 'draft' ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-none' : ''}
                                        `}>
                                            {list.status === 'active' ? 'Publicada' :
                                                list.status === 'pending' ? 'Em Análise' : 'Rascunho'}
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
                                                <DropdownMenuItem>Editar Lista</DropdownMenuItem>
                                                <DropdownMenuItem>Baixar PDF</DropdownMenuItem>
                                                <DropdownMenuItem>Duplicar</DropdownMenuItem>
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
