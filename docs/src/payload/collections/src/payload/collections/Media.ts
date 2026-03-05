import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300 },
      { name: 'card', width: 800, height: 533 },
      { name: 'large', width: 1200, height: 800 },
    ],
    adminThumbnail: 'thumbnail',
  },
  access: { read: () => true },
  fields: [
    { name: 'alt', type: 'text', label: 'Texto alternativo' },
  ],
}