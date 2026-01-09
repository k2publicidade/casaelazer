'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, MapPin, Store } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const storeSchema = z.object({
    name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
    region: z.string().min(1, { message: 'Selecione uma região' }),
    address: z.string().min(10, { message: 'Endereço completo é obrigatório' }),
    phone: z.string().min(10, { message: 'Telefone inválido' }),
    mapUrl: z.string().url({ message: 'URL do Google Maps inválida' }).optional().or(z.literal('')),
    status: z.enum(['active', 'maintenance', 'closed']),
})

type StoreFormValues = z.infer<typeof storeSchema>

// Default helper text for regions
const regions = [
    { value: 'Zona Sul', label: 'Zona Sul' },
    { value: 'Zona Norte', label: 'Zona Norte' },
    { value: 'Zona Oeste', label: 'Zona Oeste' },
    { value: 'Centro', label: 'Centro' },
    { value: 'Baixada', label: 'Baixada Fluminense' },
    { value: 'Niterói', label: 'Niterói e Região' },
]

export default function NewStorePage() {
    const form = useForm<StoreFormValues>({
        resolver: zodResolver(storeSchema),
        defaultValues: {
            name: '',
            region: '',
            address: '',
            phone: '',
            mapUrl: '',
            status: 'active',
        },
    })

    function onSubmit(data: StoreFormValues) {
        console.log(data)
        // Add toast notification and backend call here
        alert('Loja criada (mock): ' + JSON.stringify(data, null, 2))
    }

    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center gap-4">
                <Link href="/admin/lojas">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nova Loja</h2>
                    <p className="text-muted-foreground">
                        Cadastre uma nova unidade física da rede.
                    </p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-6">
                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                                        <Store className="h-5 w-5" />
                                    </div>
                                </div>
                                <CardTitle>Informações da Unidade</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nome da Unidade</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Casa e Lazer - Copacabana" {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="region"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Região</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-slate-200">
                                                            <SelectValue placeholder="Selecione a região" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {regions.map((region) => (
                                                            <SelectItem key={region.value} value={region.value}>
                                                                {region.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Status Operacional</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-slate-50 border-slate-200">
                                                        <SelectValue placeholder="Selecione o status" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="active">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                                            <span>Ativa (Aberta ao público)</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="maintenance">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                            <span>Em Manutenção / Reforma</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="closed">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                                            <span>Fechada Permanentemente</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                Unidades "Ativas" aparecerão no mapa do site.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-red-100 text-red-600">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                </div>
                                <CardTitle>Endereço e Contato</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Endereço Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Rua, Número, Bairro, CEP" {...field} className="bg-slate-50 border-slate-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Telefone da Loja</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="(21) 0000-0000" {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="mapUrl"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Link do Google Maps</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="https://maps.google.com/..." {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormDescription>Link para "Ver no mapa"</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <Link href="/admin/lojas">
                            <Button variant="outline" type="button" className="border-slate-200 hover:bg-slate-50">Cancelar</Button>
                        </Link>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 min-w-[150px] shadow-sm">
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Loja
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
