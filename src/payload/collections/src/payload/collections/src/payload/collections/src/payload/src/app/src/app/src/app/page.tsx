import Link from 'next/link'
import { getPosts } from '@/lib/cms/getPosts'

export default async function HomePage() {
  const posts = await getPosts({ limit: 9 })

  return (
    <div>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Productividad con IA</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guias, prompts, herramientas y automatizaciones para trabajar menos y producir mas con inteligencia artificial.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article key={post.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            {post.featuredImage && (
              <img src={post.featuredImage.url} alt={post.featuredImage.alt} className="w-full h-48 object-cover" />
            )}
            <div className="p-5">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
              <h2 className="text-lg font-bold mt-2 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>{new Date(post.publishedAt).toLocaleDateString('es-ES')}</span>
                {post.readingTime && <span>{post.readingTime} min de lectura</span>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}