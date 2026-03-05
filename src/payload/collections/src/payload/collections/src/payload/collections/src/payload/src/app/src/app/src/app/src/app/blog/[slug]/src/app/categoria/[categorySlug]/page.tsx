import { getPosts } from '@/lib/cms/getPosts'
import Link from 'next/link'
import type { Metadata } from 'next'

const CATEGORY_LABELS: Record<string, string> = {
  'ia-profesiones': 'IA para Profesiones',
  'automatizacion-workflows': 'Automatizacion de Workflows',
  'libreria-prompts': 'Libreria de Prompts',
  'resenas-herramientas': 'Resenas de Herramientas',
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ categorySlug: slug }))
}

export async function generateMetadata({ params }: { params: { categorySlug: string } }): Promise<Metadata> {
  const label = CATEGORY_LABELS[params.categorySlug] || params.categorySlug
  return { title: label }
}

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const label = CATEGORY_LABELS[params.categorySlug] || params.categorySlug
  const posts = await getPosts({ category: params.categorySlug, limit: 50 })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{label}</h1>
      {posts.length === 0 && <p className="text-gray-500">No hay articulos en esta categoria todavia.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article key={post.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            {post.featuredImage && (
              <img src={post.featuredImage.url} alt={post.featuredImage.alt} className="w-full h-48 object-cover" />
            )}
            <div className="p-5">
              <h2 className="text-lg font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 text-xs text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString('es-ES')}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}