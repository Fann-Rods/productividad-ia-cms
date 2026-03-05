const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000'

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&where[status][equals]=published&depth=2`,
    { next: { revalidate: 60 } }
  )
  if (!res.ok) return null
  const data = await res.json()
  return data.docs?.[0] || null
}