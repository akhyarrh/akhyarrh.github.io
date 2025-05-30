/**
 * Cloudflare Worker for serving static Jekyll site
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with static assets or handle special routes
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Serve static assets from the site
  try {
    // Use Cloudflare's built-in static assets handler
    return await getAssetFromKV(event, {
      // Add caching options as needed
      cacheControl: {
        browserTTL: 60 * 60 * 24 * 7, // 7 days
        edgeTTL: 60 * 60 * 24 * 30, // 30 days
      },
    })
  } catch (e) {
    // If the asset is not found or there's an error, try to serve a 404 page
    if (e.status === 404) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })
        
        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        })
      } catch (e) {
        // If 404.html is not found, return a simple 404 message
        return new Response('Not Found', { status: 404 })
      }
    }
    
    // For other errors, return a generic error response
    return new Response('Error serving content', { status: 500 })
  }
}

// Import the KV asset handler from Cloudflare Workers
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'