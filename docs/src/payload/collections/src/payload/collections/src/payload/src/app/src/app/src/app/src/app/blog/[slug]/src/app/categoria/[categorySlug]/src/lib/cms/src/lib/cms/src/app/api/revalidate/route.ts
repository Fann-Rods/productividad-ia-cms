import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }
  const body = await req.json()
  revalidatePath('/')
  revalidatePath('/blog')
  if (body?.slug) revalidatePath(`/blog/${body.slug}`)
  if (body?.category) revalidatePath(`/categoria/${body.category}`)
  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() })
}