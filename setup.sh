#!/bin/bash

# Script de configuración inicial para Linktree Next.js
# Este script automatiza la instalación y configuración del proyecto

echo "🚀 Configurando Linktree Next.js..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo primero."
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instálalo primero."
    exit 1
fi

echo "✅ npm encontrado: $(npm --version)"

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error instalando dependencias"
    exit 1
fi

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
    echo ""
    echo "⚠️  No se encontró .env.local"
    echo "📋 Copiando .env.example a .env.local..."
    cp .env.example .env.local
    echo "✅ Archivo .env.local creado"
    echo ""
    echo "🔧 IMPORTANTE: Edita .env.local y configura las siguientes variables:"
    echo "   - RESEND_API_KEY (obtén una en https://resend.com)"
    echo "   - CONTACT_EMAIL (tu email para recibir mensajes)"
else
    echo "✅ Archivo .env.local encontrado"
fi

echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "Para ejecutar el proyecto en desarrollo:"
echo "   npm run dev"
echo ""
echo "Luego abre http://localhost:3000 en tu navegador"
echo ""
echo "📚 Lee el README.md para más información sobre personalización"
