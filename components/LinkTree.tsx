/**
 * Componente principal LinkTree
 * 
 * Este componente renderiza la página principal del Linktree de Hugo.
 * Incluye:
 * - Avatar y información del perfil
 * - Lista de enlaces importantes
 * - Modal de contacto para generar leads
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, BookOpen, Facebook, Instagram, MessageCircle, FileText } from 'lucide-react'
import LinkButton from './LinkButton'
import LeadModal from './LeadModal'

export default function LinkTree() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Datos del perfil de Hugo Herrera
  const profileData = {
    name: 'Hugo Herrera',
    bio: 'Entrenador de Ventas Especializado',
    avatar: '/hugo-avatar.jpg',
  }

  // Enlaces principales de Hugo Herrera
  const links = [
    {
      title: 'Libro: Cerrador Experto',
      url: 'https://cerradorexperto.hugoherreracoach.com/',
      icon: BookOpen,
      description: 'Aprende las mejores técnicas de cierre',
    },
    {
      title: 'Libro: Líder Experto',
      url: 'https://liderexperto.hugoherreracoach.com/',
      icon: BookOpen,
      description: 'Desarrolla tu liderazgo',
      special: true, // Para darle un color especial como en la imagen
    },
    {
      title: 'Sígueme en Facebook',
      url: 'https://www.facebook.com/hugoherreracoach/',
      icon: Facebook,
      description: 'Conecta conmigo en Facebook',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/hugoherreracoach',
      icon: Instagram,
      description: 'Sígueme en Instagram',
    },
    {
      title: 'TikTok',
      url: 'https://www.tiktok.com/@hugoherreracoach',
      icon: FileText, // TikTok icon (usando FileText como aproximación)
      description: 'Sígueme en TikTok',
    },
    {
      title: 'Conversemos por WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=51900239201&text=¡Hola Hugo! 😃 Mi nombre es...',
      icon: MessageCircle,
      description: 'Chatea conmigo directamente',
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Perfil */}
        <div className="text-center mb-8 fade-in">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={profileData.avatar}
              alt={profileData.name}
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {profileData.name}
          </h1>
          <p className="text-white/80 text-sm leading-relaxed">
            {profileData.bio}
          </p>
        </div>

        {/* Botón especial para Mapa de Objeciones - AL INICIO */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 fade-in"
            style={{ animationDelay: '0ms' }}
          >
            <Download size={20} />
            Descarga el Mapa Definitivo de Objeciones
          </button>

          {/* Enlaces adicionales */}
          {links.map((link, index) => (
            <LinkButton
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
              description={link.description}
              delay={(index + 1) * 100} // +1 para que empiece después del botón del lead magnet
              special={link.special}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>Hecho con ❤️ usando Next.js</p>
        </div>
      </div>

      {/* Modal de contacto */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
