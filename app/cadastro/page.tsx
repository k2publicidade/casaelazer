import { Metadata } from 'next'
import Link from 'next/link'
import { SignUpForm } from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: 'Cadastro - Casa e Lazer',
  description: 'Crie sua conta na Casa e Lazer',
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Criar Conta</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Cadastre-se para começar a usar o sistema
          </p>
        </div>

        <SignUpForm />

        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{' '}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}
