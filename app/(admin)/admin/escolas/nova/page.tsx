'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, School, Mail, Phone, MapPin } from 'lucide-react'
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
import { Textarea } from '@/components/ui/textarea'

const schoolSchema = z.object({
    name: z.string().min(3, { message: 'Nome da escola deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    phone: z.string().min(10, { message: 'Telefone inválido' }),
    address: z.string().min(10, { message: 'Endereço completo é obrigatório' }),
    contactPerson: z.string().optional(),
    status: z.enum(['active', 'pending', 'inactive']),
    notes: z.string().optional(),
})

type SchoolFormValues = z.infer<typeof schoolSchema>

export default function NewSchoolPage() {
    const form = useForm<SchoolFormValues>({
        resolver: zodResolver(schoolSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            contactPerson: '',
            status: 'active',
            notes: '',
        },
    })

    function onSubmit(data: SchoolFormValues) {
        console.log(data)
        alert('Escola cadastrada (mock): ' + JSON.stringify(data, null, 2))
    }

    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center gap-4">
                <Link href="/admin/escolas">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nova Escola</h2>
                    <p className="text-muted-foreground">
                        Cadastre uma nova instituição de ensino parceira.
                    </p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-6">
                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-green-100 text-green-600">
                                        <School className="h-5 w-5" />
                                    </div>
                                </div>
                                <CardTitle>Dados da Instituição</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nome da Escola</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Colégio Santo Agostinho" {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Status da Parceria</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-slate-200">
                                                            <SelectValue placeholder="Selecione o status" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="active">Ativa</SelectItem>
                                                        <SelectItem value="pending">Pendente (Em negociação)</SelectItem>
                                                        <SelectItem value="inactive">Inativa</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>E-mail Institucional</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="contato@escola.com.br" {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Telefone / Secretaria</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="(21) 0000-0000" {...field} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
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
                                <FormField
                                    control={form.control}
                                    name="contactPerson"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome do Responsável (Opcional)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ex: Maria Silva (Diretora)" {...field} className="bg-slate-50 border-slate-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Observações Internas</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Informações adicionais sobre a parceria..." {...field} className="bg-slate-50 border-slate-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <Link href="/admin/escolas">
                            <Button variant="outline" type="button" className="border-slate-200 hover:bg-slate-50">Cancelar</Button>
                        </Link>
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 min-w-[150px] shadow-sm">
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Escola
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
