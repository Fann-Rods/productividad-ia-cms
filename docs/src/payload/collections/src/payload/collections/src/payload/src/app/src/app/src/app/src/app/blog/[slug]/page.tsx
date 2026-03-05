import { getPostBySlug } from '@/lib/cms/getPostBySlug'
import { getPosts } from '@/lib/cms/getPosts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getPosts({ limit: 100 })
  return posts.map((p: any) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()
  return (
    <article className="max-w-3xl mx-auto">
      <Link href={`/categoria/${post.category}`} className="text-blue-600 text-sm font-semibold uppercase">{post.category}</Link>
      <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
      <div className="flex gap-4 text-sm text-gray-500 mb-6">
        <span>{new Date(post.publishedAt).toLocaleDateString('es-ES')}</span>
        {post.readingTime && <span>{post.readingTime} min de lectura</span>}
        {post.author && <span>Por {post.author.name}</span>}
      </div>
      {post.featuredImage && (
        <img src={post.featuredImage.url} alt={post.featuredImage.alt} className="w-full rounded-xl mb-8" />
      )}
      <div className="prose prose-lg max-w-none">
        <p>{post.excerpt}</p>
      </div>
      {post.relatedPosts?.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Posts relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((related: any) => (
              <Link key={related.id} href={`/blog/${related.slug}`} className="border rounded-xl p-4 hover:shadow transition">
                <h3 className="font-semibold">{related.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}