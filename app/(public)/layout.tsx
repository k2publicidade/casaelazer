import { PublicHeader } from '@/components/public/header'
import { PublicFooter } from '@/components/public/footer'
import { MobileNav } from '@/components/public/mobile-nav'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />
      <MobileNav />
    </div>
  )
}
