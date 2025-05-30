# Migration from Cloudflare Pages to Cloudflare Workers

This document outlines the steps taken to migrate this Jekyll-based blog from Cloudflare Pages to Cloudflare Workers.

## Why Migrate?

Cloudflare Workers offers several advantages over Cloudflare Pages:

1. **More Control**: Workers provides more granular control over request handling and caching
2. **Edge Computing**: Execute code at the edge, closer to users
3. **Serverless Functions**: Built-in support for API endpoints and dynamic content
4. **Performance**: Potentially better performance for static sites with dynamic elements

## Migration Steps

### 1. Setup Cloudflare Workers Configuration

Created a `wrangler.toml` file to configure the Cloudflare Workers deployment:

```toml
name = "akhyarrh-blog"
main = "worker.js"
compatibility_date = "2023-10-30"

[site]
bucket = "_site"

[build]
command = "jekyll build && npx jampack _site"

[build.upload]
format = "service-worker"

# Enable the Functions API
[functions]
directory = "functions"
```

### 2. Create Worker Script

Created a `worker.js` file that handles requests and serves static content:

```js
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
```

### 3. Add Serverless Functions

Created a `functions` directory with API endpoints:

- `functions/api/hello.js`: A simple API endpoint that returns a greeting

### 4. Update Dependencies

Updated `package.json` to include Cloudflare Workers dependencies:

```json
{
  "dependencies": {
    "@divriots/jampack": "^0.30.0",
    "@cloudflare/kv-asset-handler": "^0.3.0"
  },
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

### 5. Update Configuration

Updated the following configuration files:

- `staticman.yml`: Updated allowed origins to include the new Cloudflare Workers URL
- `_config.yml`: Updated the staticman_url to point to the new Cloudflare Workers endpoint

### 6. Setup GitHub Actions

Created a GitHub Actions workflow to automate deployment:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.0'
          bundler-cache: true

      - name: Install Jekyll
        run: gem install jekyll bundler

      - name: Build Jekyll site
        run: bundle exec jekyll build

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Deploy to Cloudflare Workers
        if: github.ref == 'refs/heads/main'
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        run: npm run deploy
```

## Deployment Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Build the Jekyll site:
   ```
   npm run build
   ```

3. Deploy to Cloudflare Workers:
   ```
   npm run deploy
   ```

For local development:
```
npm run dev
```

## Required Secrets

The following secrets need to be added to your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Workers permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)