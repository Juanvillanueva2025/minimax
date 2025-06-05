/**
 * Página principal de la aplicación Linktree
 * 
 * Esta es la página de inicio que renderiza el componente LinkTree principal.
 * Aquí se mostrará el perfil de Hugo con todos sus enlaces.
 */

import LinkTree from '@/components/LinkTree'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <LinkTree />
    </main>
  )
}
