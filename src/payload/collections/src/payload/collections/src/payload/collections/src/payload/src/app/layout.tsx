import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Productividad con IA',
    default: 'Productividad con IA',
  },
  description: 'Blog sobre productividad con inteligencia artificial: guias, prompts, herramientas y automatizacion de workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="border-b px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">Productividad con IA</a>
          <nav className="flex gap-6 text-sm">
            <a href="/categoria/ia-profesiones">IA para Profesiones</a>
            <a href="/categoria/automatizacion-workflows">Automatizacion</a>
            <a href="/categoria/libreria-prompts">Prompts</a>
            <a href="/categoria/resenas-herramientas">Resenas</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <footer className="border-t px-6 py-6 text-center text-sm text-gray-500">
          © 2026 Productividad con IA
        </footer>
      </body>
    </html>
  )
}