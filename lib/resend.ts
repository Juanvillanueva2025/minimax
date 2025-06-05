/**
 * Configuración de Resend
 * 
 * Este archivo configura la instancia de Resend para el envío de emails.
 * Utiliza la API key desde las variables de entorno.
 */

import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY no está configurada en las variables de entorno')
}

export const resend = new Resend(process.env.RESEND_API_KEY)
