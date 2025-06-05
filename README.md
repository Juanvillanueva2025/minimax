# Aplicación Linktree para Hugo Herrera 🚀

Aplicación Linktree personalizada para Hugo Herrera, entrenador de ventas especializado. Construida con Next.js 14, TypeScript y Tailwind CSS, esta plataforma centraliza todos los enlaces importantes de Hugo, facilita la captura de leads y la comunicación directa.

<!-- Placeholder: ![Captura de pantalla de la aplicación Linktree de Hugo Herrera](user_input_files/Captura.PNG) -->
<!-- Descomenta la línea anterior y asegúrate que la ruta `user_input_files/Captura.PNG` sea accesible o reemplázala con una URL de imagen si la subes a un hosting. -->

## ✨ Características Principales

-   **Framework Moderno**: Desarrollado con **Next.js 14** y su potente **App Router**.
-   **Tipado Estricto**: Código robusto y mantenible gracias a **TypeScript**.
-   **Diseño Atractivo y Responsivo**: Interfaz estilizada con **Tailwind CSS**, adaptable a cualquier dispositivo.
-   **Sistema de Captura de Leads**: Modal de contacto integrado para recoger información de clientes potenciales.
-   **Notificaciones por Email**: Envío automático de emails de contacto utilizando **Resend**.
-   **Componentes Reutilizables**: Arquitectura modular para fácil mantenimiento y escalabilidad.
-   **Optimización SEO**: Configuración de metadatos para mejorar la visibilidad en buscadores.
-   **Validación de Formularios**: Seguridad y fiabilidad con React Hook Form y Zod.
-   **Iconografía Moderna**: Uso de Lucide React para iconos SVG.

## 🛠️ Tecnologías Utilizadas

-   **Framework Principal**: Next.js 14
-   **Lenguaje**: TypeScript
-   **Estilos**: Tailwind CSS
-   **Componentes UI**: React
-   **Gestión de Formularios**: React Hook Form
-   **Validación de Esquemas**: Zod
-   **Servicio de Email**: Resend
-   **Iconos**: Lucide React
-   **Node.js**: Entorno de ejecución
-   **npm/yarn/pnpm**: Gestor de paquetes

## 📁 Estructura del Proyecto

Una visión general de cómo está organizado el código fuente:

```
/
├── app/                    # Rutas y lógica principal con App Router
│   ├── layout.tsx         # Layout global de la aplicación
│   ├── page.tsx           # Página principal (Linktree)
│   ├── globals.css        # Estilos globales y variables de Tailwind
│   └── api/
│       └── send-email/
│           └── route.ts   # Endpoint de API para el envío de emails
├── components/             # Componentes React reutilizables
│   ├── LinkTree.tsx       # Componente que renderiza la lista de enlaces y perfil
│   ├── LeadModal.tsx      # Modal para la captura de leads
│   └── LinkButton.tsx     # Botón de enlace individual
├── lib/                    # Librerías y utilidades auxiliares
│   └── resend.ts          # Configuración del cliente Resend
├── public/                 # Archivos estáticos (imágenes, fuentes, etc.)
│   └── hugo-avatar.jpg    # Avatar de Hugo Herrera
├── .env.local              # Variables de entorno (local, no versionado)
├── .env.example            # Ejemplo de variables de entorno
├── next.config.js          # Configuración de Next.js
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
├── postcss.config.js       # Configuración de PostCSS
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

## ⚙️ Instalación Paso a Paso

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### 1. Requisitos Previos

-   **Node.js**: Versión 18.x o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
-   **npm**, **yarn** o **pnpm**: Gestor de paquetes de Node.js (npm viene incluido con Node.js).

### 2. Clonación del Repositorio

```bash
git clone <URL_DEL_REPOSITORIO_GIT>
cd nombre-del-directorio-del-proyecto
```

### 3. Instalación de Dependencias

Utiliza tu gestor de paquetes preferido:

```bash
npm install
# o
yarn install
# o
pnpm install
```

### 4. Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto, copiando el contenido de `.env.example`:

```bash
cp .env.example .env.local
```

Abre `.env.local` y configura las siguientes variables:

```env
# Clave API de Resend para el envío de emails
# Reemplaza con tu clave API real de Resend
RESEND_API_KEY="re_RsfTHE9W_4k7iYGTZFo5vYLAQmNuiFwtV"

# Email de destino para los leads capturados
# Este es el email donde recibirás las notificaciones de nuevos contactos
CONTACT_EMAIL="juanvillanueva0198@gmail.com"

# URL base de la aplicación (para desarrollo y producción)
# En desarrollo, usualmente es http://localhost:3000
# En producción, será tu dominio personalizado (ej: https://hugoherrera.com)
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

**Importante**: La `RESEND_API_KEY` y `CONTACT_EMAIL` proporcionadas son para fines de ejemplo y configuración inicial. Asegúrate de gestionar la API Key de Resend de forma segura.

## 🔧 Configuración Adicional

### Configuración de Resend API

1.  Visita [Resend.com](https://resend.com) y crea una cuenta si aún no la tienes.
2.  Genera una nueva API Key en tu dashboard de Resend.
3.  Asegúrate de que el dominio desde el cual enviarás emails (si aplica, para producción) esté verificado en Resend.
4.  Copia la API Key y pégala en la variable `RESEND_API_KEY` de tu archivo `.env.local`.

### Personalización de Enlaces y Datos del Perfil

Los datos del perfil y los enlaces se gestionan directamente en el componente `LinkTree.tsx`.

-   **Perfil**: Modifica el objeto `profileData` en `components/LinkTree.tsx`.
-   **Enlaces**: Edita el array `linksData` en `components/LinkTree.tsx`.

```typescript
// Ejemplo en components/LinkTree.tsx

const profileData = {
  name: 'Hugo Herrera',
  bio: 'Entrenador de Ventas Especializado | Ayudando a equipos a alcanzar su máximo potencial.',
  avatar: '/hugo-avatar.jpg', // Asegúrate que la imagen esté en public/
};

const linksData = [
  {
    title: 'Agendar Sesión Gratuita',
    url: 'https://calendly.com/hugoherrera/sesion',
    icon: CalendarDays, // Icono de Lucide React
    description: 'Reserva una consultoría de ventas gratuita de 30 minutos.',
  },
  // ... más enlaces
];
```

## 💻 Desarrollo

### Comandos para Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación. La página se recargará automáticamente al realizar cambios.

### Estructura de Archivos Explicada

-   `app/`: Contiene las rutas principales (páginas y APIs) usando el App Router de Next.js.
    -   `layout.tsx`: Define la estructura HTML base para todas las páginas.
    -   `page.tsx`: Es la página de inicio que muestra el Linktree.
    -   `globals.css`: Estilos globales y configuraciones de Tailwind CSS.
    -   `api/send-email/route.ts`: El endpoint que maneja la lógica del envío de correos con Resend.
-   `components/`: Almacena los componentes de React reutilizables.
    -   `LinkTree.tsx`: Orquesta la visualización del perfil y los enlaces.
    -   `LeadModal.tsx`: El modal de contacto y su formulario.
    -   `LinkButton.tsx`: Componente para cada botón de enlace.
-   `lib/`: Módulos auxiliares, como la configuración de `resend.ts`.
-   `public/`: Archivos estáticos como imágenes (`hugo-avatar.jpg`) y fuentes.

### Cómo Personalizar Componentes

-   **Modificar Estilos**: Utiliza clases de Tailwind CSS directamente en los archivos JSX/TSX de los componentes.
-   **Ajustar Lógica**: Edita los archivos `.tsx` dentro de `components/` o `app/` para cambiar el comportamiento.
-   **Nuevos Componentes**: Crea nuevos archivos `.tsx` en `components/` y úsalos donde sea necesario.

## 🚀 Deploy

Se recomienda Vercel para el despliegue por su integración nativa con Next.js.

### Instrucciones para Vercel

1.  **Regístrate/Inicia Sesión**: Ve a [vercel.com](https://vercel.com).
2.  **Importa tu Proyecto**: Conecta tu cuenta de GitHub, GitLab o Bitbucket y selecciona el repositorio de este proyecto.
3.  **Configura el Proyecto**:
    -   Vercel detectará automáticamente que es un proyecto Next.js.
    -   **Framework Preset**: Debería ser `Next.js`.
    -   **Build Command**: `npm run build` (o `yarn build` / `pnpm build`).
    -   **Output Directory**: `.next`.
    -   **Install Command**: `npm install` (o `yarn install` / `pnpm install`).
4.  **Variables de Entorno en Producción**:
    -   En el dashboard de tu proyecto en Vercel, ve a `Settings` > `Environment Variables`.
    -   Añade las mismas variables que tienes en tu `.env.local` (especialmente `RESEND_API_KEY` y `CONTACT_EMAIL`).
    -   Para `NEXT_PUBLIC_BASE_URL`, usa la URL de producción de tu aplicación (ej: `https://tu-dominio.vercel.app` o tu dominio personalizado).
5.  **Despliega**: Haz clic en el botón "Deploy".

<!-- Placeholder: ![Configuración de variables de entorno en Vercel](ruta/a/captura_vercel_env.png) -->

### Dominios Personalizados

Una vez desplegado, puedes asignar un dominio personalizado a tu aplicación desde el dashboard de Vercel (`Settings` > `Domains`).

## 🎨 Personalización Adicional

### Cómo Cambiar Enlaces

Modifica el array `linksData` en `components/LinkTree.tsx`. Cada objeto en el array representa un enlace. Puedes añadir, eliminar o editar las propiedades `title`, `url`, `icon` y `description`.

### Modificar Información del Perfil

Actualiza el objeto `profileData` en `components/LinkTree.tsx` con el nombre, biografía y ruta al avatar deseados.

### Personalizar Estilos y Colores

-   **Tailwind CSS**: Edita `tailwind.config.js` para extender la paleta de colores, fuentes, espaciados, etc.
    ```javascript
    // Ejemplo en tailwind.config.js
    module.exports = {
      theme: {
        extend: {
          colors: {
            'custom-blue': '#007bff',
          },
        },
      },
      // ...
    };
    ```
-   **Estilos Globales**: Añade o modifica estilos en `app/globals.css`.
-   **Componentes Específicos**: Aplica clases de Tailwind directamente en los archivos `.tsx`.

## 💡 Funcionalidades Clave Detalladas

### Sistema de Captura de Leads

-   Se activa mediante un botón "Contacto" o "Solicitar Información".
-   Abre un modal (`LeadModal.tsx`) con un formulario.
-   Campos típicos: Nombre, Email, Mensaje.

### Envío de Emails Automático con Resend

-   La lógica se encuentra en `app/api/send-email/route.ts`.
-   Al enviar el formulario del modal, se hace una petición a este endpoint.
-   El endpoint utiliza la SDK de Resend (`lib/resend.ts`) para enviar el email al `CONTACT_EMAIL` configurado.
-   Incluye un template de email básico que puede ser personalizado.

### Validación de Formularios

-   **React Hook Form**: Gestiona el estado y la validación del formulario en `LeadModal.tsx`.
-   **Zod**: Define el esquema de validación para los datos del formulario, asegurando que la información enviada sea correcta y completa. El esquema se define y utiliza tanto en el frontend (para feedback al usuario) como en el backend (API endpoint) para una doble capa de seguridad.

## 🔍 Troubleshooting (Solución de Problemas Comunes)

-   **Error "API Key invalid" de Resend**:
    -   Verifica que `RESEND_API_KEY` en `.env.local` (o en Vercel) sea correcta y no tenga espacios extra.
    -   Asegúrate de que el dominio desde el que intentas enviar (si es relevante para tu plan Resend) esté verificado en tu cuenta de Resend.
-   **Los emails no llegan**:
    -   Comprueba la carpeta de spam en la cuenta de `CONTACT_EMAIL`.
    -   Revisa los logs de Resend en su dashboard para ver si hay errores en el envío.
    -   Confirma que `CONTACT_EMAIL` esté correctamente escrito.
-   **La imagen del avatar no se muestra**:
    -   Asegúrate de que la ruta en `profileData.avatar` (en `components/LinkTree.tsx`) sea correcta (ej: `/hugo-avatar.jpg`) y que el archivo exista en la carpeta `public/`.
-   **Errores de Build en Vercel**:
    -   Revisa los logs de build en Vercel para identificar el error específico.
    -   Asegúrate de que todas las dependencias estén listadas en `package.json`.
    -   Comprueba que las variables de entorno necesarias estén configuradas en Vercel.
-   **Problemas de Estilos (Tailwind CSS)**:
    -   Si los estilos no se aplican, asegúrate de que el proceso de build de Tailwind se esté ejecutando. En Next.js, esto suele ser automático.
    -   Verifica que las clases de Tailwind que usas sean correctas y no tengan errores tipográficos.
    -   Si has modificado `tailwind.config.js`, reinicia el servidor de desarrollo.

## 📜 Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts que puedes ejecutar con `npm run <script>`, `yarn <script>` o `pnpm <script>`:

-   `dev`: Inicia el servidor de desarrollo en `http://localhost:3000`.
    ```bash
    npm run dev
    ```
-   `build`: Crea una compilación optimizada de la aplicación para producción.
    ```bash
    npm run build
    ```
-   `start`: Inicia un servidor de producción después de haber ejecutado `build`.
    ```bash
    npm run start
    ```
-   `lint`: Ejecuta ESLint para analizar el código en busca de problemas y errores de estilo.
    ```bash
    npm run lint
    ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` (si existe en el repositorio, de lo contrario, puedes añadir uno estándar de MIT) para más detalles.

## 📬 Contacto

Para cualquier consulta sobre el desarrollo de esta aplicación, puedes contactar a los responsables del proyecto.

Si eres Hugo Herrera y necesitas soporte o modificaciones, por favor contacta al desarrollador.

---

Este README proporciona una guía completa para entender, instalar, configurar y desplegar la aplicación Linktree.
¡Esperamos que sea de gran utilidad para Hugo Herrera!
