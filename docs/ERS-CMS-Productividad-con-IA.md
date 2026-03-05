# ERS - CMS Productividad con IA (Next.js + Sanity/Payload)

## 1. Vision general

El sistema sera una aplicacion web tipo blog/CMS sobre productividad con IA, centrada en cuatro pilares:

1. IA para Profesiones
2. Automatizacion de Workflows
3. Libreria de Prompts
4. Resenas de Herramientas

La app se compone de:
- Frontend en Next.js desplegado en Vercel.
- CMS headless (Sanity o Payload) como backend de contenidos.
- Integraciones futuras con herramientas de automatizacion (n8n / Make) y modelos de IA (Gemini) para generacion semi-automatica de articulos.

---

## 2. Usuarios y roles

### 2.1. Tipos de usuario

- **Administrador**: Configura el proyecto, categorias, SEO global. Gestiona usuarios del CMS.
- **Editor**: Crea, edita y publica articulos. Gestiona autores, categorias y tags.
- **Lector (publico)**: Consume el contenido del blog. Navega por categorias y posts relacionados.

---

## 3. Estructura de contenido (modelo de datos)

### 3.1. Coleccion: Post

**Nombre interno**
- Sanity: `_type = "post"`
- Payload: `slug = "posts"`

**Campos**
- `title` (string, requerido)
- `slug` (slug/string, requerido, unico)
- `excerpt` (text, requerido)
- `featuredImage` (image)
- `author` (reference a `author`, requerido)
- `category` (string/enum, requerido - 4 pilares)
- `tags` (array<string>)
- `publishedAt` (datetime, requerido)
- `readingTime` (number, opcional)
- `body` (rich text / blocks, requerido)
- `relatedPosts` (array<reference post>)
- `metaTitle` (string, opcional)
- `metaDescription` (string, opcional)
- `status` (string enum: `draft` | `published`, requerido)

**Enumeracion `category` (cuatro pilares obligatorios)**
- `ia-profesiones` - IA para Profesiones: Guias especificas por profesion (abogados, arquitectos, copywriters).
- `automatizacion-workflows` - Automatizacion de Workflows: Como conectar herramientas (Zapier + Gemini, Make + Notion).
- `libreria-prompts` - Libreria de Prompts: Listas curadas de prompts probados para productividad.
- `resenas-herramientas` - Resenas de Herramientas: Comparativas y reviews (Claude vs Gemini vs ChatGPT para programar).

**Requisitos funcionales**
- RF-P1: El editor podra crear, editar y eliminar posts.
- RF-P2: El editor podra asignar exactamente una categoria de las cuatro definidas.
- RF-P3: El sistema debera permitir multiples tags por post.
- RF-P4: El sistema debera mostrar en el frontend la lista de posts filtrable por categoria.
- RF-P5: El sistema debera mostrar posts relacionados basados en referencias manuales y/o categoria comun.

### 3.2. Coleccion: Author

**Campos**
- `name` (string, requerido)
- `slug` (slug/string, requerido, unico)
- `bio` (text, opcional)
- `avatar` (image, opcional)
- `website` (url, opcional)
- `socials` (array de objetos: `platform`, `url`)

**Requisitos funcionales**
- RF-A1: Cada post debera estar asociado a un autor.
- RF-A2: El frontend debera mostrar los datos basicos del autor en la vista de post (nombre, avatar, bio corta).

### 3.3. Global: Settings (SEO / Configuracion)

**Campos**
- `siteTitle` (string, requerido)
- `siteDescription` (string, requerido)
- `baseUrl` (string, requerido)
- `defaultMetaImage` (image, opcional)

**Requisitos funcionales**
- RF-S1: Next.js debera consumir estos datos para meta tags y Open Graph.

---

## 4. Frontend - Next.js (estructura de rutas)

### 4.1. Rutas principales

- `/` - Lista de ultimos posts. Filtro por categoria (tabs o select).
- `/blog` - Indice completo de articulos (paginado).
- `/blog/[slug]` - Vista de articulo individual.
- `/categoria/[categorySlug]` - Listado de posts filtrados por categoria.

### 4.2. Requisitos funcionales de frontend

- RF-F1: El sistema debera generar paginas estaticas o ISR para todos los posts publicados.
- RF-F2: La home debera mostrar: titulo, excerpt, categoria, fecha, readingTime, imagen destacada.
- RF-F3: La pagina de post debera mostrar: contenido completo, autor, fecha, categoria, tags y posts relacionados.
- RF-F4: El frontend debera estar preparado para integrarse con un endpoint de revalidacion (`/api/revalidate`).

---

## 5. Integraciones con CMS

### 5.1. Sanity
- Se usara Sanity Studio como interfaz de edicion.
- Esquemas: `post`, `author`, `settings`.
- Next.js consumira Sanity mediante GROQ.

### 5.2. Payload
- Colecciones: `posts`, `authors`, `media`.
- Global: `settings`.
- Next.js consumira la REST API o GraphQL de Payload.

**Requisitos funcionales**
- RF-C1: El CMS debera exponer API para listar posts filtrados por `status = published`.
- RF-C2: El CMS debera exponer API para obtener un post por `slug`.
- RF-C3: El CMS debera permitir filtrar posts por `category`.

---

## 6. Automatizacion (fase 2)

### 6.1. Flujo base de generacion de contenido

**Trigger:** Nuevo registro en Notion/Sheet con campos: `idea`, `keyword`, `category`, `estado`.

**Pasos automaticos:**
1. Llamada a Gemini para generar: titulo, esquema (H2/H3), borrador en markdown, metaTitle, metaDescription, excerpt, tags sugeridos.
2. Conversion del markdown al formato de `body` del CMS (blocks).
3. Creacion del post en el CMS con `status = draft`.

**Requisitos:**
- RF-AUTO1: El flujo debera respetar siempre el campo `category` definido por el usuario (una de las 4).
- RF-AUTO2: El resultado debera quedar como borrador para revision manual (opcion futura `autoPublish = true`).

---

## 7. Requisitos no funcionales

- RNF-1: El sitio debera cargarse en menos de 2s en conexiones estandar (Core Web Vitals aceptables).
- RNF-2: La arquitectura debera ser SEO-friendly (rutas limpias, meta tags correctos, sitemap).
- RNF-3: El CMS debera soportar al menos 10k posts sin degradacion notable de rendimiento.

---

## 8. Aceptacion

Este ERS se considerara cumplido cuando:

1. Se pueda crear, editar y publicar posts desde el CMS con las 4 categorias definidas.
2. El frontend en Vercel liste y muestre correctamente los posts, filtrables por categoria.
3. El modelo de datos sea compatible tanto con Sanity como con Payload sin cambios conceptuales.