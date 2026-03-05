import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Productividad con IA',
  description: 'Blog sobre productividad e inteligencia artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
