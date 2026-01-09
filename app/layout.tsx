import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";

// Configuração das fontes - Design System Casa e Lazer
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Casa e Lazer | O Melhor Pra Você",
    template: "%s | Casa e Lazer"
  },
  description: "Tradição de 76 anos em materiais escolares, escritório e lazer. Envie sua lista escolar e receba orçamento completo em minutos. Qualidade e tecnologia em Guaratinguetá e região.",
  keywords: ["papelaria", "materiais escolares", "lista escolar", "orçamento escolar", "guaratinguetá", "casa e lazer"],
  authors: [{ name: "Casa e Lazer" }],
  creator: "Casa e Lazer",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://casaelazer.com.br",
    title: "Casa e Lazer | O Melhor Pra Você",
    description: "Tradição de 76 anos em materiais escolares. Envie sua lista e receba orçamento em minutos!",
    siteName: "Casa e Lazer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
