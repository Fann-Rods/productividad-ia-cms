import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Productividad con IA | Blog Especializado',
    template: '%s | Productividad con IA',
  },
  description: 'El blog de referencia sobre productividad e inteligencia artificial. Herramientas, automatizacion, gestion del conocimiento y habitos de alto rendimiento con IA.',
  keywords: ['inteligencia artificial', 'productividad', 'automatizacion', 'IA', 'ChatGPT', 'herramientas IA'],
  authors: [{ name: 'Productividad con IA' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://productividad-ia-cms.vercel.app',
    siteName: 'Productividad con IA',
    title: 'Productividad con IA | Blog Especializado',
    description: 'El blog de referencia sobre productividad e inteligencia artificial.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productividad con IA',
    description: 'El blog de referencia sobre productividad e inteligencia artificial.',
  },
  themeColor: '#050811',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
