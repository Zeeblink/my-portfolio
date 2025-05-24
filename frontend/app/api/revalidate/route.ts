// ./src/app/api/revalidate-path/route.ts

import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = { paths?: string[] }

export async function POST(req: NextRequest) {
  try {
    // Ensure the SANITY_REVALIDATE_SECRET is available
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response('Missing environment variable SANITY_REVALIDATE_SECRET', { status: 500 })
    }

    // Parse the request body to validate the signature and extract the paths
    // The parseBody function checks the signature and returns the body if valid
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    
    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    } else if (!body?.paths) {
      return new Response('Bad Request', { status: 400 })
    }

    // If the signature is valid and the paths are provided, revalidate each path
    for (const path of body.paths) {
      revalidatePath(path)
    }
    return NextResponse.json({ body })
  } catch (err) {
    console.error(err)
    return new Response((err as Error).message, { status: 500 })

  }
}
