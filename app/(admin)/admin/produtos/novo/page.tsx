import { ProductForm } from '@/components/admin/product-form'

export default function NewProductPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Novo Produto</h2>
        <p className="text-muted-foreground">Adicione um novo produto ao catálogo</p>
      </div>

      <ProductForm />
    </div>
  )
}
