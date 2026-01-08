import { Metadata } from 'next'
import Link from 'next/link'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Login - Casa e Lazer',
  description: 'Faça login para acessar sua conta',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Casa e Lazer</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com sua conta para continuar
          </p>
        </div>

        {params?.message && (
          <div className="rounded-md bg-blue-50 p-4">
            <p className="text-sm text-blue-800">{params.message}</p>
          </div>
        )}

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{' '}
          <Link
            href="/cadastro"
            className="font-medium text-primary hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}
