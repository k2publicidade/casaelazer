'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, FileText, Image as ImageIcon } from 'lucide-react'
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

const postSchema = z.object({
    title: z.string().min(5, { message: 'O título deve ter pelo menos 5 caracteres' }),
    slug: z.string().optional(),
    category: z.string().min(1, { message: 'Selecione uma categoria' }),
    excerpt: z.string().max(200, { message: 'Resumo muito longo (máx 200 caracteres)' }).optional(),
    content: z.string().min(20, { message: 'O conteúdo é muito curto' }),
    status: z.enum(['published', 'draft']),
})

type PostFormValues = z.infer<typeof postSchema>

export default function NewPostPage() {
    const form = useForm<PostFormValues>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: '',
            slug: '',
            category: '',
            excerpt: '',
            content: '',
            status: 'draft',
        },
    })

    function onSubmit(data: PostFormValues) {
        console.log(data)
        alert('Post criado (mock): ' + JSON.stringify(data, null, 2))
    }

    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center gap-4">
                <Link href="/admin/blog">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Novo Post</h2>
                    <p className="text-muted-foreground">
                        Escreva um novo artigo para o blog.
                    </p>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                        <div className="space-y-6">
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-2 rounded-lg bg-pink-100 text-pink-600">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <CardTitle>Conteúdo</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Título do Artigo</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Dicas para Volta às Aulas" {...field} className="text-lg font-medium bg-slate-50 border-slate-200" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="content"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Conteúdo (Markdown)</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Escreva seu artigo aqui..." className="min-h-[400px] font-mono bg-slate-50 border-slate-200" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg">Publicação</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Status</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-slate-200">
                                                            <SelectValue placeholder="Selecione" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="draft">Rascunho</SelectItem>
                                                        <SelectItem value="published">Publicado</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Categoria</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-50 border-slate-200">
                                                            <SelectValue placeholder="Selecione" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="dicas">Dicas</SelectItem>
                                                        <SelectItem value="produtos">Produtos</SelectItem>
                                                        <SelectItem value="novidades">Novidades</SelectItem>
                                                        <SelectItem value="eventos">Eventos</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>

                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg">SEO & Mídia</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="excerpt"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Resumo (Meta Description)</FormLabel>
                                                <FormControl>
                                                    <Textarea className="resize-none bg-slate-50 border-slate-200" rows={4} placeholder="Breve descrição para o Google..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="rounded-md border border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-muted-foreground gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                                        <div className="p-3 bg-slate-100 rounded-full mb-2">
                                            <ImageIcon className="h-6 w-6 text-slate-400" />
                                        </div>
                                        <span className="text-sm font-medium">Capa do Post</span>
                                        <span className="text-xs text-slate-400">Clique para upload</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 shadow-sm h-11">
                                <Save className="mr-2 h-4 w-4" />
                                Salvar e Publicar
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
