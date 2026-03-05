import { notFound } from 'next/navigation'

interface Post {
  title: string
  content: string
  publishedAt: string
  category: string
}

const posts: Record<string, Post> = {
  'ejemplo-post': {
    title: 'Como usar IA para ser mas productivo',
    content: 'La inteligencia artificial esta transformando la manera en que trabajamos. En este articulo exploramos las mejores practicas para integrar herramientas de IA en tu flujo de trabajo diario.',
    publishedAt: '2025-01-01',
    category: 'herramientas-ia',
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()
  return (
    <article className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString('es-ES')}</p>
      <div className="prose">{post.content}</div>
    </article>
  )
}
