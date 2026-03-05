import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json()
  const slug = body?.slug
  const category = body?.category

  revalidatePath('/')
  revalidatePath('/blog')

  if (slug) revalidatePath(`/blog/${slug}`)
  if (category) revalidatePath(`/categoria/${category}`)

  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() })
}