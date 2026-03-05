import type { CollectionConfig } from 'payload'

const CATEGORY_OPTIONS = [
  { label: 'IA para Profesiones', value: 'ia-profesiones' },
  { label: 'Automatizacion de Workflows', value: 'automatizacion-workflows' },
  { label: 'Libreria de Prompts', value: 'libreria-prompts' },
  { label: 'Resenas de Herramientas', value: 'resenas-herramientas' },
]

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Titulo', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', label: 'Extracto', type: 'textarea', required: true },
    { name: 'featuredImage', label: 'Imagen destacada', type: 'upload', relationTo: 'media' },
    { name: 'author', label: 'Autor', type: 'relationship', relationTo: 'authors', required: true },
    {
      name: 'category',
      label: 'Categoria (pilar)',
      type: 'select',
      hasMany: false,
      options: CATEGORY_OPTIONS,
      required: true,
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      fields: [{ name: 'tag', label: 'Tag', type: 'text' }],
    },
    {
      name: 'publishedAt',
      label: 'Fecha de publicacion',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayAndTime' } },
      required: true,
    },
    { name: 'readingTime', label: 'Tiempo de lectura (min)', type: 'number' },
    { name: 'body', label: 'Contenido', type: 'richText', required: true },
    { name: 'relatedPosts', label: 'Posts relacionados', type: 'relationship', relationTo: 'posts', hasMany: true },
    { name: 'metaTitle', label: 'Meta title', type: 'text' },
    { name: 'metaDescription', label: 'Meta description', type: 'textarea' },
    {
      name: 'status',
      label: 'Estado',
      type: 'select',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
}