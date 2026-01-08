'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Upload, FileText, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { createClient } from '@/lib/supabase/client'

export default function NewListPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setFile(acceptedFiles[0])
        if (!title) {
          setTitle(acceptedFiles[0].name.replace(/\.[^/.]+$/, ''))
        }
      }
    },
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!file) {
      toast.error('Por favor, selecione um arquivo')
      return
    }

    if (!title) {
      toast.error('Por favor, digite um título para a lista')
      return
    }

    setUploading(true)
    setProgress(10)

    const supabase = createClient()

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        toast.error('Você precisa estar logado para criar uma lista')
        router.push('/login')
        return
      }

      setProgress(20)

      // Create list record
      const { data: list, error: listError } = await supabase
        .from('material_lists')
        .insert([{
          title,
          user_id: user.id,
          status: 'processing',
        }])
        .select()
        .single()

      if (listError) throw listError

      setProgress(30)

      // Upload file to Supabase Storage
      const filePath = `${user.id}/${list.id}/${file.name}`
      const { error: uploadError } = await supabase.storage
        .from('material-lists')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('material-lists')
        .getPublicUrl(filePath)

      setProgress(50)

      // Update list with file URL
      await supabase
        .from('material_lists')
        .update({ original_file_url: publicUrl })
        .eq('id', list.id)

      setUploading(false)
      setProcessing(true)
      setProgress(60)

      // Extract items from file
      const extractResponse = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listId: list.id,
          fileUrl: publicUrl,
          fileName: file.name,
        }),
      })

      if (!extractResponse.ok) {
        throw new Error('Erro ao processar arquivo')
      }

      setProgress(80)

      // Match items with products
      const matchResponse = await fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listId: list.id }),
      })

      if (!matchResponse.ok) {
        throw new Error('Erro ao fazer matching de produtos')
      }

      setProgress(100)

      // Update list status
      await supabase
        .from('material_lists')
        .update({ status: 'completed' })
        .eq('id', list.id)

      toast.success('Lista processada com sucesso!')
      router.push(`/listas/${list.id}`)
    } catch (error: any) {
      console.error('Error:', error)
      toast.error(error.message || 'Erro ao processar lista')
      setUploading(false)
      setProcessing(false)
    }
  }

  return (
    <div className="container max-w-2xl py-12 px-4">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Nova Lista de Materiais</h1>
          <p className="text-muted-foreground">
            Faça upload da lista da escola e encontre os produtos disponíveis
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Lista</CardTitle>
              <CardDescription>
                Dê um nome para identificar sua lista
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="title">Título da Lista</Label>
                <Input
                  id="title"
                  placeholder="Ex: 1º ano - Ensino Fundamental"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={uploading || processing}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload do Arquivo</CardTitle>
              <CardDescription>
                Aceita PDF, Excel ou Word (máximo 10MB)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-primary bg-primary/5'
                    : 'border-muted-foreground/25 hover:border-primary'
                } ${uploading || processing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input {...getInputProps()} disabled={uploading || processing} />
                {file ? (
                  <div className="space-y-2">
                    <FileText className="h-12 w-12 mx-auto text-primary" />
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {!uploading && !processing && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setFile(null)
                        }}
                      >
                        Remover
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="font-medium">
                      Arraste e solte ou clique para selecionar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF, Excel ou Word (até 10MB)
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {(uploading || processing) && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">
                      {uploading ? 'Fazendo upload...' : 'Processando lista...'}
                    </span>
                    <span className="text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} />
                  {processing && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Nossa IA está identificando os produtos...
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!file || !title || uploading || processing}
          >
            {uploading
              ? 'Enviando...'
              : processing
              ? 'Processando...'
              : 'Processar Lista'}
          </Button>
        </form>
      </div>
    </div>
  )
}
