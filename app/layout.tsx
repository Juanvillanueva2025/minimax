/**
 * Layout principal de la aplicación Next.js
 * 
 * Este archivo define el layout raíz que envuelve todas las páginas de la aplicación.
 * Incluye metadatos SEO, configuración de fuentes y estilos globales.
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hugo - Mi Linktree Personal',
  description: 'Todos mis enlaces importantes en un solo lugar',
  keywords: ['hugo', 'linktree', 'enlaces', 'redes sociales'],
  authors: [{ name: 'Hugo' }],
  openGraph: {
    title: 'Hugo - Mi Linktree Personal',
    description: 'Todos mis enlaces importantes en un solo lugar',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
