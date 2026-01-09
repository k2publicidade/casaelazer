'use client'

import React, { useState } from 'react'
import { Upload, Database, AlertCircle, CheckCircle, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'

export default function AdminImportSqlPage() {
    const [isUploading, setIsUploading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    const handleUpload = () => {
        setIsUploading(true)
        setProgress(0)

        // Simulate upload
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setIsUploading(false)
                    setIsComplete(true)
                    return 100
                }
                return prev + 10
            })
        }, 500)
    }

    return (
        <div className="flex-1 space-y-6 p-8 pt-8 bg-slate-50/50 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Importação de Dados</h2>
                    <p className="text-muted-foreground">
                        Atualize o catálogo de produtos via script SQL ou CSV.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto mt-4">
                <Alert variant="destructive" className="bg-red-50 border-red-200">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-700">Atenção</AlertTitle>
                    <AlertDescription className="text-red-600">
                        Esta ação pode sobrescrever dados existentes. Certifique-se de ter um backup antes de prosseguir.
                    </AlertDescription>
                </Alert>

                <Card className="border-slate-200 shadow-sm">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                                <Database className="h-5 w-5" />
                            </div>
                        </div>
                        <CardTitle>Upload de Arquivo</CardTitle>
                        <CardDescription>
                            Arraste seu arquivo .sql ou .csv aqui ou clique para selecionar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div
                            className="border-2 border-dashed border-slate-300 rounded-lg p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group"
                            onClick={handleUpload}
                        >
                            <div className="p-4 rounded-full bg-purple-50 text-purple-500 mb-4 group-hover:bg-purple-100 transition-colors">
                                <Upload className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900">Clique para upload</h3>
                            <p className="text-sm text-slate-500 mt-1">Suporta arquivos até 50MB</p>
                        </div>

                        {isUploading && (
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-600 font-medium">
                                    <span>Processando arquivo...</span>
                                    <span>{progress}%</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                            </div>
                        )}

                        {isComplete && (
                            <Alert className="bg-green-50 border-green-200 text-green-800">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <AlertTitle>Sucesso!</AlertTitle>
                                <AlertDescription>
                                    O arquivo foi importado e o banco de dados atualizado.
                                </AlertDescription>
                            </Alert>
                        )}

                        <div className="flex justify-end">
                            <Button disabled={isUploading || isComplete} className="bg-purple-600 hover:bg-purple-700 shadow-sm min-w-[200px]">
                                <Save className="mr-2 h-4 w-4" />
                                Iniciar Importação
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
