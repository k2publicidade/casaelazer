'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Save, Globe, Mail, Phone, Facebook, Instagram, Youtube, Palette } from 'lucide-react'

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

const settingsSchema = z.object({
    siteName: z.string().min(2, { message: 'Nome do site muito curto' }),
    siteDescription: z.string().optional(),
    contactEmail: z.string().email({ message: 'E-mail inválido' }),
    contactPhone: z.string().min(10, { message: 'Telefone inválido' }),
    instagram: z.string().url().optional().or(z.literal('')),
    facebook: z.string().url().optional().or(z.literal('')),
    youtube: z.string().url().optional().or(z.literal('')),
    maintenanceMode: z.boolean(),
})

type SettingsFormValues = z.infer<typeof settingsSchema>

export default function AdminSettingsPage() {
    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(settingsSchema),
        defaultValues: {
            siteName: 'Casa e Lazer',
            siteDescription: 'Tudo para sua casa e momentos de lazer',
            contactEmail: 'contato@casaelazer.com.br',
            contactPhone: '(21) 4004-1234',
            instagram: 'https://instagram.com/casaelazer',
            facebook: 'https://facebook.com/casaelazer',
            youtube: '',
            maintenanceMode: false,
        },
    })

    function onSubmit(data: SettingsFormValues) {
        console.log(data)
        alert('Configurações salvas (mock): ' + JSON.stringify(data, null, 2))
    }

    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Configurações</h2>
                    <p className="text-muted-foreground">
                        Gerencie as informações gerais do site e preferências.
                    </p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Tabs defaultValue="general" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-slate-200">
                            <TabsTrigger value="general">Geral & Contato</TabsTrigger>
                            <TabsTrigger value="social">Redes Sociais</TabsTrigger>
                            <TabsTrigger value="advanced">Avançado</TabsTrigger>
                        </TabsList>

                        <TabsContent value="general">
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                                            <Globe className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <CardTitle>Informações Básicas</CardTitle>
                                    <CardDescription>
                                        Dados exibidos no rodapé e cabeçalho do site.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="siteName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Nome do Site</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="siteDescription"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Descrição (SEO)</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} value={field.value || ''} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Separator className="bg-slate-100" />
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="contactEmail"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400" /> E-mail de Contato</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="contactPhone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-400" /> Telefone / WhatsApp</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} className="bg-slate-50 border-slate-200" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="social">
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-2 rounded-lg bg-pink-100 text-pink-600">
                                            <Instagram className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <CardTitle>Redes Sociais</CardTitle>
                                    <CardDescription>
                                        Links para os perfis oficiais nas redes.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="instagram"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2"><Instagram className="h-4 w-4 text-slate-400" /> Instagram URL</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="https://instagram.com/..." {...field} value={field.value || ''} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="facebook"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2"><Facebook className="h-4 w-4 text-slate-400" /> Facebook URL</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="https://facebook.com/..." {...field} value={field.value || ''} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="youtube"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2"><Youtube className="h-4 w-4 text-slate-400" /> YouTube URL</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="https://youtube.com/..." {...field} value={field.value || ''} className="bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="advanced">
                            <Card className="border-red-100 shadow-sm bg-red-50/30">
                                <CardHeader>
                                    <CardTitle className="text-red-700">Zona de Perigo</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <FormField
                                        control={form.control}
                                        name="maintenanceMode"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border border-red-200 bg-white p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base font-medium text-red-900">
                                                        Modo de Manutenção
                                                    </FormLabel>
                                                    <FormDescription className="text-red-500">
                                                        Ativar isso impedirá o acesso público ao site temporariamente.
                                                    </FormDescription>
                                                </div>
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="flex justify-end">
                        <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 min-w-[200px] shadow-sm">
                            <Save className="mr-2 h-4 w-4" />
                            Salvar Alterações
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
