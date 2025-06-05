/**
 * API Route para el envío de emails de captura de leads
 * 
 * Este endpoint maneja las solicitudes POST para enviar emails cuando
 * alguien solicita el "Mapa Definitivo de Objeciones".
 * 
 * Utiliza Resend para el envío de emails y valida los datos con Zod.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resend } from '@/lib/resend'

// Schema de validación para los datos del lead
const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos').regex(/^[+]?[\d\s-()]+$/, 'Formato de teléfono inválido'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar los datos recibidos
    const { name, email, phone } = leadSchema.parse(body)
    
    // Enviar el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Hugo Herrera Coach <onboarding@resend.dev>',
      to: ['juanvillanueva0198@gmail.com'],
      subject: 'Nuevo lead - Mapa de Objeciones',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">
              🎯 Nuevo Lead - Mapa de Objeciones
            </h1>
            
            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
              <h2 style="color: #1976d2; margin-top: 0;">Datos del Lead</h2>
              <p style="margin: 10px 0;"><strong>👤 Nombre:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>📱 Teléfono:</strong> ${phone}</p>
            </div>
            
            <div style="background: #f1f8e9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4caf50;">
              <h3 style="color: #388e3c; margin-top: 0;">🎁 Recurso Solicitado</h3>
              <p style="margin: 10px 0;">Mapa Definitivo de Objeciones</p>
              <p style="color: #666; font-size: 14px;">
                El lead está interesado en recibir tu mapa de objeciones gratuito.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">
                💼 Este lead fue capturado desde tu Linktree personal<br>
                🕒 Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' })}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error al enviar los datos' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Lead registrado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API de leads:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
