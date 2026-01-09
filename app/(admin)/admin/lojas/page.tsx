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
import { Plus, MapPin, Phone, Search, MoreHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock Data until Backend is ready
const mockStores = [
    {
        id: 1,
        name: 'Casa e Lazer - Méier',
        address: 'Rua Dias da Cruz, 255',
        region: 'Zona Norte',
        phone: '(21) 2222-3333',
        status: 'active',
    },
    {
        id: 2,
        name: 'Casa e Lazer - Copacabana',
        address: 'Av. Nossa Senhora de Copacabana, 800',
        region: 'Zona Sul',
        phone: '(21) 2548-9999',
        status: 'active',
    },
    {
        id: 3,
        name: 'Casa e Lazer - Barra',
        address: 'Barra Shopping, Nível Lagoa',
        region: 'Zona Oeste',
        phone: '(21) 3344-5555',
        status: 'maintenance',
    },
    {
        id: 4,
        name: 'Casa e Lazer - Tijuca',
        address: 'Rua Conde de Bonfim, 300',
        region: 'Zona Norte',
        phone: '(21) 2200-1111',
        status: 'active',
    },
    {
        id: 5,
        name: 'Casa e Lazer - Centro',
        address: 'Rua da Alfândega, 100',
        region: 'Centro',
        phone: '(21) 2500-0000',
        status: 'closed',
    },
]

export default function AdminStoresPage() {
    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Lojas Físicas</h2>
                    <p className="text-muted-foreground">
                        Gerencie as unidades físicas e seus endereços.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/admin/lojas/nova">
                        <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm">
                            <Plus className="mr-2 h-4 w-4" /> Nova Loja
                        </Button>
                    </Link>
                </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-lg font-medium text-slate-900">Unidades Cadastradas</CardTitle>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <Input placeholder="Buscar loja..." className="pl-9 h-9 border-slate-200 bg-slate-50" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>Nome da Unidade</TableHead>
                                <TableHead>Região</TableHead>
                                <TableHead>Contato</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockStores.map((store) => (
                                <TableRow key={store.id} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-lg bg-blue-100/50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                                                <MapPin className="h-4 w-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-slate-900">{store.name}</span>
                                                <span className="text-xs text-muted-foreground">{store.address}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-normal bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">
                                            {store.region}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Phone className="h-3.5 w-3.5 text-slate-400" />
                                            {store.phone}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            store.status === 'active' ? 'default' :
                                                store.status === 'maintenance' ? 'secondary' : 'destructive'
                                        } className={`
                                            capitalize shadow-none px-2.5 py-0.5 font-medium
                                            ${store.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}
                                            ${store.status === 'maintenance' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : ''}
                                            ${store.status === 'closed' ? 'bg-red-100 text-red-700 hover:bg-red-200' : ''}
                                        `}>
                                            {store.status === 'active' ? 'Ativa' :
                                                store.status === 'maintenance' ? 'Manutenção' : 'Fechada'}
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
                                                <DropdownMenuItem>Editar Unidade</DropdownMenuItem>
                                                <DropdownMenuItem>Ver no Mapa</DropdownMenuItem>
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
