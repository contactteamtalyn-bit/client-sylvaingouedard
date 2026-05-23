import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { DemoModalProvider } from '@/components/DemoModal'
import { Navigation } from '@/components/Navigation'

const display = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Maison Sylvain Gouedard — Coiffeur Visagiste · Paris 2e · Un salon sans miroirs',
  description:
    "Élu meilleur coiffeur visagiste de Paris. Coupe visagisme, relooking complet, colorimétrie. Un salon sans miroirs — vous vous découvrez à la fin. 30 rue Feydeau, Paris 2e. 4,7★ · 659 avis.",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: 'Maison Sylvain Gouedard — Un salon sans miroirs · Paris',
    description: 'Hair Couture. Coiffure visagisme & relooking. Ici, pas de miroir — juste vous. 30 rue Feydeau, Paris 2e.',
    type: 'website',
    locale: 'fr_FR',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%231E1A17'/%3E%3Ctext x='50%25' y='56%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='38' fill='%23C4A882'%3ES%3C/text%3E%3C/svg%3E",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#1E1A17',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
