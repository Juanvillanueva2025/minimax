/**
 * Componente LinkButton
 * 
 * Botón reutilizable para los enlaces del Linktree.
 * Incluye:
 * - Icono personalizable
 * - Animaciones suaves
 * - Efectos hover
 * - Apertura en nueva pestaña
 */

'use client'

import { LucideIcon } from 'lucide-react'

interface LinkButtonProps {
  title: string
  url: string
  icon: LucideIcon
  description?: string
  delay?: number
  special?: boolean
}

export default function LinkButton({ 
  title, 
  url, 
  icon: Icon, 
  description, 
  delay = 0,
  special = false
}: LinkButtonProps) {
  // Clases base para todos los botones
  const baseClasses = "block w-full p-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 fade-in"
  
  // Clases específicas según el tipo
  const buttonClasses = special 
    ? `${baseClasses} bg-red-600 hover:bg-red-700 text-white`
    : `${baseClasses} bg-gray-700 hover:bg-gray-600 text-white`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center space-x-3">
        <Icon className="w-5 h-5" />
        <span className="text-center">
          {title}
        </span>
      </div>
    </a>
  )
}
