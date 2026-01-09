"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export function ProductTabs() {
    return (
        <Tabs defaultValue="description" className="w-full">
            <TabsList className="h-auto w-full justify-start gap-2 rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                    value="description"
                    className="rounded-t-lg border-b-2 border-transparent px-6 py-3 data-[state=active]:border-blue-600 data-[state=active]:bg-slate-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none"
                >
                    Descrição
                </TabsTrigger>
                <TabsTrigger
                    value="specifications"
                    className="rounded-t-lg border-b-2 border-transparent px-6 py-3 data-[state=active]:border-blue-600 data-[state=active]:bg-slate-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none"
                >
                    Especificações
                </TabsTrigger>

            </TabsList>

            <TabsContent value="description" className="py-6">
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="leading-relaxed">
                        Experimente o máximo conforto e durabilidade com este produto premium. Desenvolvido com materiais de alta qualidade,
                        ele se adapta perfeitamente ao seu estilo de vida, proporcionando resistência e elegância em cada detalhe.
                    </p>
                    <p className="leading-relaxed mt-4">
                        Ideal para quem busca sofisticação sem abrir mão da praticidade, este item foi projetado para elevar a estética
                        do seu ambiente enquanto oferece funcionalidade superior. A combinação de design moderno e ergonomia garante
                        uma experiência de uso incomparável.
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Acabamento premium resistente a riscos.</li>
                        <li>Design ergonômico para maior conforto.</li>
                        <li>Fácil de limpar e manter.</li>
                        <li>Disponível em diversas cores modernas.</li>
                    </ul>
                </div>
            </TabsContent>

            <TabsContent value="specifications" className="py-6">
                <div className="rounded-lg border">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="bg-slate-50 font-medium text-slate-700 w-1/3">Material</TableCell>
                                <TableCell>Aço Inoxidável, Polímero de Alta Resistência</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="bg-slate-50 font-medium text-slate-700">Dimensões</TableCell>
                                <TableCell>45cm x 30cm x 15cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="bg-slate-50 font-medium text-slate-700">Peso</TableCell>
                                <TableCell>1.2 kg</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="bg-slate-50 font-medium text-slate-700">Cor</TableCell>
                                <TableCell>Variável (Azul, Preto, Branco)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="bg-slate-50 font-medium text-slate-700">Origem</TableCell>
                                <TableCell>Nacional</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </TabsContent>


        </Tabs>
    )
}
