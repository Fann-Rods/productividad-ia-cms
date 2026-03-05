import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'website'],
  },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Nombre', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'bio', label: 'Bio corta', type: 'textarea' },
    { name: 'avatar', label: 'Avatar', type: 'upload', relationTo: 'media' },
    { name: 'website', label: 'Sitio web', type: 'text' },
    {
      name: 'socials',
      label: 'Redes sociales',
      type: 'array',
      fields: [
        { name: 'platform', label: 'Plataforma', type: 'text' },
        { name: 'url', label: 'URL', type: 'text' },
      ],
    },
  ],
}