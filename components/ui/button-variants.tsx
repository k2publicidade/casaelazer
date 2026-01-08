import React from 'react'
import { cn } from '@/lib/utils'

// Tipos para os botões
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}

// Botão Primário - Azul (CTA principal)
export function ButtonPrimary({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
        "font-heading font-semibold text-base",
        "bg-brand-blue-500 text-white",
        "hover:bg-brand-blue-600 active:bg-brand-blue-700",
        "focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2",
        "transition-all duration-normal",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-blue-500",
        "shadow-blue-sm hover:shadow-blue-md",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : children}
    </button>
  )
}

// Botão Secundário - Outline azul
export function ButtonSecondary({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
        "font-heading font-semibold text-base",
        "bg-white text-brand-blue-500 border-2 border-brand-blue-500",
        "hover:bg-brand-blue-50 active:bg-brand-blue-100",
        "focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2",
        "transition-all duration-normal",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : children}
    </button>
  )
}

// Botão Accent - Vermelho (destaques e promoções)
export function ButtonAccent({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
        "font-heading font-semibold text-base",
        "bg-brand-red-500 text-white",
        "hover:bg-brand-red-600 active:bg-brand-red-700",
        "focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:ring-offset-2",
        "transition-all duration-normal",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "shadow-red-sm hover:shadow-red-md",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </>
      ) : children}
    </button>
  )
}

// Botão Ghost - Transparente
export function ButtonGhost({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg",
        "font-heading font-medium text-base",
        "text-gray-700 bg-transparent",
        "hover:bg-gray-100 active:bg-gray-200",
        "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
        "transition-all duration-normal",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
