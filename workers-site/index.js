import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things:
 * 1. we will skip caching on the edge, which makes it easier to debug
 * 2. we will return an error message on exception in your Response rather than the default 404.html page
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    
    // Handle Staticman API requests - pass through to the Netlify function
    if (url.pathname.includes('/staticman/')) {
      const staticmanUrl = 'https://staticman-akhyarrh.netlify.app/.netlify/functions/staticman';
      const proxyRequest = new Request(staticmanUrl, event.request);
      return fetch(proxyRequest);
    }
    
    // Check if the URL is for the admin panel
    if (url.pathname.startsWith('/admin')) {
      return await getAssetFromKV(event, options)
    }

    // Handle root path or directory paths by appending index.html
    if (url.pathname.endsWith('/')) {
      options.mapRequestToAsset = req => {
        const url = new URL(req.url)
        url.pathname = url.pathname.concat('index.html')
        return new Request(url.toString(), req)
      }
    }

    // Handle clean URLs (without .html extension)
    if (!url.pathname.includes('.')) {
      options.mapRequestToAsset = req => {
        const url = new URL(req.url)
        url.pathname = url.pathname.concat('.html')
        return new Request(url.toString(), req)
      }
    }

    const page = await getAssetFromKV(event, options)

    // Allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'unsafe-url')
    response.headers.set('Feature-Policy', 'none')

    return response
  } catch (e) {
    // If an error is thrown try to serve the 404.html page
    if (!DEBUG) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}