/**
 * Casa e Lazer - Exemplos de Componentes UI
 * Design System baseado em Tailwind CSS + shadcn/ui
 *
 * Este arquivo contém exemplos de implementação dos componentes
 * documentados no homepage-design.md
 */

import React from 'react'
import { CheckCircle2, Upload, AlertTriangle, XCircle } from 'lucide-react'

// ============================================================================
// BUTTONS
// ============================================================================

/**
 * Primary Button - CTA Principal
 * Uso: Ações principais como "Enviar Lista", "Criar Conta"
 */
export const ButtonPrimary = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="
        bg-brand-blue-500 text-white
        px-8 py-3.5 rounded-lg
        font-heading font-semibold text-base
        transition-all duration-normal
        shadow-blue-sm hover:shadow-blue-md
        hover:bg-brand-blue-600 hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        active:scale-95
      "
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Secondary Button - CTA Secundário
 * Uso: Ações secundárias como "Ver Mais", "Cancelar"
 */
export const ButtonSecondary = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="
        bg-white text-brand-blue-500
        border-2 border-brand-blue-500
        px-8 py-3 rounded-lg
        font-heading font-semibold text-base
        transition-all duration-normal
        hover:bg-brand-blue-50 hover:border-brand-blue-600 hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        active:scale-95
      "
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Accent Button - Vermelho
 * Uso: CTAs de destaque como "Seja Parceiro", ações urgentes
 */
export const ButtonAccent = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="
        bg-brand-red-500 text-white
        px-8 py-3.5 rounded-lg
        font-heading font-semibold text-base
        transition-all duration-normal
        shadow-red-sm hover:shadow-red-md
        hover:bg-brand-red-600 hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        active:scale-95
      "
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Ghost Button - Sutil
 * Uso: Links, ações terciárias
 */
export const ButtonGhost = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="
        bg-transparent text-gray-700
        px-6 py-3 rounded-lg
        font-body font-medium text-base
        transition-all duration-normal
        hover:bg-gray-100 hover:text-gray-900
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      {...props}
    >
      {children}
    </button>
  )
}

// ============================================================================
// CARDS
// ============================================================================

/**
 * Product Card
 * Uso: Grid de produtos em destaque
 */
interface ProductCardProps {
  name: string
  price: number
  image: string
  available?: boolean
}

export const ProductCard = ({ name, price, image, available = true }: ProductCardProps) => {
  return (
    <article
      className="
        bg-white border border-gray-200 rounded-xl
        overflow-hidden
        transition-all duration-slow
        hover:shadow-lg hover:-translate-y-1 hover:border-brand-blue-200
        focus-within:ring-2 focus-within:ring-brand-blue-500 focus-within:ring-offset-2
        group
      "
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
        />
        {/* Badge */}
        {available && (
          <span
            className="
              absolute top-3 right-3
              bg-success-50 text-success-700
              px-3 py-1 rounded-full
              text-xs font-semibold uppercase tracking-wide
            "
          >
            Disponível
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-body font-semibold text-base text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="font-heading font-bold text-xl text-brand-blue-600 mb-3">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
        <button
          className="
            w-full py-2 rounded-lg
            bg-transparent text-gray-700
            border border-gray-300
            font-body font-medium text-sm
            transition-all duration-normal
            hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400
            focus:outline-none focus:ring-2 focus:ring-brand-blue-500
          "
        >
          Ver Mais
        </button>
      </div>
    </article>
  )
}

/**
 * Feature Card (Como Funciona, Benefícios)
 * Uso: Grid de features com ícones
 */
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'blue' | 'white'
}

export const FeatureCard = ({ icon, title, description, variant = 'blue' }: FeatureCardProps) => {
  const baseClasses = "rounded-2xl p-8 text-center transition-all duration-slow"
  const variantClasses = variant === 'blue'
    ? "bg-brand-blue-50 border-2 border-brand-blue-100 hover:bg-white hover:border-brand-blue-500 hover:shadow-blue-lg"
    : "bg-white border border-gray-200 hover:shadow-xl"

  return (
    <div className={`${baseClasses} ${variantClasses} hover:-translate-y-1 group`}>
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className="
            w-16 h-16 rounded-full
            bg-brand-blue-500 text-white
            flex items-center justify-center
            transition-transform duration-slow
            group-hover:scale-110
          "
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
        {title}
      </h3>
      <p className="font-body text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

/**
 * Step Card (Como Funciona - com número)
 */
interface StepCardProps {
  step: number
  icon: React.ReactNode
  title: string
  description: string
}

export const StepCard = ({ step, icon, title, description }: StepCardProps) => {
  return (
    <div
      className="
        bg-brand-blue-50 border-2 border-brand-blue-100 rounded-2xl
        p-8 text-center
        transition-all duration-slow
        hover:bg-white hover:border-brand-blue-500 hover:shadow-blue-lg hover:-translate-y-1
        group
      "
    >
      {/* Step Number */}
      <div className="mb-3">
        <span className="font-body font-medium text-sm text-brand-blue-600 uppercase tracking-wider">
          Passo {step}
        </span>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className="
            w-16 h-16 rounded-full
            bg-brand-blue-500 text-white
            flex items-center justify-center
            transition-transform duration-slow
            group-hover:scale-110
          "
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
        {title}
      </h3>
      <p className="font-body text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

/**
 * Blog Post Card
 */
interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  slug: string
}

export const BlogCard = ({ title, excerpt, image, date, slug }: BlogCardProps) => {
  return (
    <article
      className="
        bg-white border border-gray-200 rounded-xl
        overflow-hidden
        transition-all duration-slow
        hover:shadow-xl hover:-translate-y-1
        group
      "
    >
      {/* Featured Image */}
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="
            font-heading font-semibold text-xl text-gray-900
            mb-3 line-clamp-2
            transition-colors duration-normal
            group-hover:text-brand-blue-600
          "
        >
          {title}
        </h3>
        <p className="font-body text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-gray-500">
            {date}
          </span>
          <a
            href={`/blog/${slug}`}
            className="
              font-body font-medium text-sm text-brand-blue-600
              hover:underline focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2
            "
          >
            Ler Mais →
          </a>
        </div>
      </div>
    </article>
  )
}

// ============================================================================
// INPUTS
// ============================================================================

/**
 * Text Input
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export const Input = ({ label, hint, error, id, ...props }: InputProps) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s/g, '-')}`

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block font-body font-medium text-sm text-gray-700 mb-1"
        >
          {label}
          {props.required && <span className="text-error-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}

      {/* Hint */}
      {hint && !error && (
        <p className="font-body text-xs text-gray-500 mb-2">
          {hint}
        </p>
      )}

      {/* Input */}
      <input
        id={inputId}
        className={`
          w-full px-4 py-3 rounded-lg
          border ${error ? 'border-error-500' : 'border-gray-300'}
          font-body text-base text-gray-900
          bg-white
          transition-all duration-normal
          placeholder:text-gray-400
          focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'focus:border-error-500 focus:ring-error-500/20' : ''}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
      />

      {/* Error */}
      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="font-body text-sm text-error-600 mt-1 flex items-center gap-1"
        >
          <XCircle className="w-4 h-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Upload Zone (Drag & Drop)
 */
interface UploadZoneProps {
  onFileSelect: (file: File) => void
  accept?: string
  maxSize?: number // em MB
}

export const UploadZone = ({ onFileSelect, accept, maxSize = 10 }: UploadZoneProps) => {
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) onFileSelect(file)
  }

  return (
    <div
      className={`
        border-2 border-dashed rounded-xl
        p-12 text-center
        transition-all duration-normal
        cursor-pointer
        ${isDragging
          ? 'border-brand-blue-500 bg-brand-blue-50 border-solid'
          : 'border-gray-300 bg-gray-50 hover:border-brand-blue-500 hover:bg-brand-blue-50'
        }
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center">
          <Upload className="w-8 h-8" />
        </div>
      </div>

      {/* Text */}
      <p className="font-heading font-semibold text-lg text-gray-900 mb-2">
        Arraste seu arquivo aqui
      </p>
      <p className="font-body text-sm text-gray-600 mb-4">
        ou clique para selecionar
      </p>
      <p className="font-body text-xs text-gray-500">
        {accept || 'PDF, Excel ou Word'} • Máximo {maxSize}MB
      </p>
    </div>
  )
}

// ============================================================================
// BADGES
// ============================================================================

type BadgeVariant = 'success' | 'warning' | 'error' | 'info'

interface BadgeProps {
  children: React.ReactNode
  variant: BadgeVariant
  icon?: React.ReactNode
}

export const Badge = ({ children, variant, icon }: BadgeProps) => {
  const variants = {
    success: 'bg-success-50 text-success-700',
    warning: 'bg-warning-50 text-warning-700',
    error: 'bg-error-50 text-error-700',
    info: 'bg-info-50 text-info-700',
  }

  const iconMap = {
    success: <CheckCircle2 className="w-3 h-3" aria-hidden="true" />,
    warning: <AlertTriangle className="w-3 h-3" aria-hidden="true" />,
    error: <XCircle className="w-3 h-3" aria-hidden="true" />,
    info: <CheckCircle2 className="w-3 h-3" aria-hidden="true" />,
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-3 py-1 rounded-full
        font-body font-semibold text-xs uppercase tracking-wide
        ${variants[variant]}
      `}
    >
      {icon || iconMap[variant]}
      {children}
    </span>
  )
}

// ============================================================================
// SECTION HEADERS
// ============================================================================

interface SectionHeaderProps {
  title: string
  subtitle?: string
  alignment?: 'left' | 'center'
}

export const SectionHeader = ({ title, subtitle, alignment = 'center' }: SectionHeaderProps) => {
  const alignmentClasses = alignment === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignmentClasses}`}>
      <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

export const ComponentShowcase = () => {
  return (
    <div className="p-8 space-y-16 bg-gray-50">
      {/* Buttons */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <ButtonPrimary>Enviar Minha Lista</ButtonPrimary>
          <ButtonSecondary>Ver Como Funciona</ButtonSecondary>
          <ButtonAccent>Seja uma Escola Parceira</ButtonAccent>
          <ButtonGhost>Cancelar</ButtonGhost>
        </div>
      </section>

      {/* Product Cards */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Product Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Caderno Espiral Universitário 200 Folhas"
            price={15.90}
            image="/placeholder-product.jpg"
            available={true}
          />
          <ProductCard
            name="Mochila Escolar Grande Azul"
            price={89.90}
            image="/placeholder-product.jpg"
          />
        </div>
      </section>

      {/* Feature Cards */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            step={1}
            icon={<Upload className="w-8 h-8" />}
            title="Envie Sua Lista"
            description="Faça upload do PDF ou Excel da escola em segundos"
          />
          <StepCard
            step={2}
            icon={<CheckCircle2 className="w-8 h-8" />}
            title="Matching Automático"
            description="Nossa IA encontra os produtos correspondentes"
          />
          <StepCard
            step={3}
            icon={<CheckCircle2 className="w-8 h-8" />}
            title="Receba Orçamento"
            description="Baixe em PDF ou Excel completo"
          />
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Form Inputs</h2>
        <div className="max-w-md space-y-4">
          <Input
            label="E-mail"
            placeholder="seu@email.com"
            type="email"
            hint="Usaremos para enviar seu orçamento"
            required
          />
          <Input
            label="Nome Completo"
            placeholder="Digite seu nome"
            error="Por favor, preencha seu nome completo"
          />
        </div>
      </section>

      {/* Upload Zone */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Upload Zone</h2>
        <UploadZone onFileSelect={(file) => console.log(file)} />
      </section>

      {/* Badges */}
      <section>
        <h2 className="font-heading font-bold text-2xl mb-6">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">Encontrado</Badge>
          <Badge variant="warning">Revisar</Badge>
          <Badge variant="error">Não Encontrado</Badge>
          <Badge variant="info">Disponível</Badge>
        </div>
      </section>
    </div>
  )
}
