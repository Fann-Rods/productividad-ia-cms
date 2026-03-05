const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000'

interface GetPostsOptions {
  limit?: number
  category?: string
  page?: number
}

export async function getPosts({ limit = 10, category, page = 1 }: GetPostsOptions = {}) {
  const params = new URLSearchParams()
  params.set('limit', String(limit))
  params.set('page', String(page))
  params.set('where[status][equals]', 'published')
  params.set('sort', '-publishedAt')
  if (category) params.set('where[category][equals]', category)
  const res = await fetch(`${PAYLOAD_URL}/api/posts?${params.toString()}`, { next: { revalidate: 60 } })
  if (!res.ok) return []
  const data = await res.json()
  return data.docs || []
}