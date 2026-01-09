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
import { Plus, School, Search, MoreHorizontal, Mail, MapPin } from 'lucide-react'
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
const mockSchools = [
    {
        id: 1,
        name: 'Colégio Santo Agostinho',
        email: 'contato@santoagostinho.com.br',
        phone: '(21) 3333-4444',
        students: 1200,
        status: 'active',
        lists: 12,
    },
    {
        id: 2,
        name: 'Escola Americana do Rio de Janeiro',
        email: 'admissions@earj.com.br',
        phone: '(21) 2125-9000',
        students: 850,
        status: 'active',
        lists: 8,
    },
    {
        id: 3,
        name: 'Escola Parque',
        email: 'contato@escolaparque.g12.br',
        phone: '(21) 2512-8888',
        students: 1100,
        status: 'pending',
        lists: 0,
    },
    {
        id: 4,
        name: 'Colégio Cruzeiro',
        email: 'secretaria@colegiocruzeiro.com.br',
        phone: '(21) 3030-4040',
        students: 1500,
        status: 'active',
        lists: 15,
    },
]

export default function AdminSchoolsPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Escolas Parceiras</h2>
                    <p className="text-muted-foreground">
                        Gerencie as instituições de ensino cadastradas.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/admin/escolas/nova">
                        <Button className="bg-green-600 hover:bg-green-700 shadow-sm">
                            <Plus className="mr-2 h-4 w-4" /> Cadastrar Escola
                        </Button>
                    </Link>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Instituições</CardTitle>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar escola..." className="pl-9 h-9 border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Instituição</TableHead>
                                <TableHead>Contato</TableHead>
                                <TableHead>Alunos</TableHead>
                                <TableHead>Listas</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockSchools.map((school) => (
                                <TableRow key={school.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-green-100/50 text-green-600 group-hover:bg-green-100 transition-colors">
                                                <School className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900">{school.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-sm text-slate-600">
                                            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-slate-400" /> {school.email}</span>
                                            <span className="text-xs text-muted-foreground mt-0.5">{school.phone}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-normal bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">
                                            {school.students} alunos
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="text-slate-600 border-slate-300">
                                            {school.lists} listas
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            school.status === 'active' ? 'default' : 'secondary'
                                        } className={`
                                            capitalize shadow-none px-2.5 py-0.5 font-medium
                                            ${school.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}
                                            ${school.status === 'pending' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : ''}
                                        `}>
                                            {school.status === 'active' ? 'Ativa' : 'Pendente'}
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
                                                <DropdownMenuItem>Editar Dados</DropdownMenuItem>
                                                <DropdownMenuItem>Ver Listas</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50">
                                                    Desativar
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
