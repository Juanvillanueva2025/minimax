# 🚀 Instrucciones para Deploy en Vercel

## 📦 Archivo Comprimido
Has recibido: `hugo-linktree-vercel.zip` con todos los archivos necesarios.

## 📋 Pasos para Deploy en Vercel

### 1. Preparar el Código
```bash
# Descomprimir el archivo
unzip hugo-linktree-vercel.zip

# Entrar al directorio
cd hugo-linktree-vercel
```

### 2. Subir a GitHub
```bash
# Inicializar git (si no existe)
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Initial commit: Hugo Linktree Next.js app"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir código
git push -u origin main
```

### 3. Deploy en Vercel

#### Opción A: Desde la Web de Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es Next.js
6. **ANTES de hacer deploy**, configura las variables de entorno

#### Opción B: Desde CLI de Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Seguir las instrucciones del CLI
```

### 4. ⚠️ CRÍTICO: Configurar Variables de Entorno

En Vercel, ve a tu proyecto → Settings → Environment Variables y añade:

```
RESEND_API_KEY = re_RsfTHE9W_4k7iYGTZFo5vYLAQmNuiFwtV
CONTACT_EMAIL = juanvillanueva0198@gmail.com
NEXT_PUBLIC_BASE_URL = https://tu-dominio.vercel.app
```

### 5. Verificar Funcionamiento

Después del deploy:
1. ✅ La página se carga correctamente
2. ✅ Los enlaces funcionan
3. ✅ El modal se abre al hacer clic en "Mapa de Objeciones"
4. ✅ El formulario envía emails correctamente

## 🔧 Configuración Adicional

### Dominio Personalizado (Opcional)
1. En Vercel → Settings → Domains
2. Añadir tu dominio personalizado
3. Configurar DNS según las instrucciones

### Analítica
Vercel incluye analítica básica automáticamente.

## 🐛 Troubleshooting

### Error: "RESEND_API_KEY is not defined"
- Verifica que añadiste las variables de entorno en Vercel
- Redeploy después de añadir las variables

### Error 500 en formulario
- Verifica que RESEND_API_KEY es correcta
- Verifica que CONTACT_EMAIL está configurado

### Imágenes no cargan
- Verifica que `hugo-avatar.jpg` está en la carpeta `public/`

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Verifica las variables de entorno
3. Asegúrate de que el repositorio está actualizado

## ✅ Checklist Final

- [ ] Código subido a GitHub
- [ ] Proyecto creado en Vercel
- [ ] Variables de entorno configuradas
- [ ] Deploy exitoso
- [ ] Formulario funcionando
- [ ] Todos los enlaces funcionan

¡Tu Linktree estará listo para usar! 🎉
