# Migration from Cloudflare Pages to Cloudflare Workers

This document outlines the steps taken to migrate this Jekyll site from Cloudflare Pages to Cloudflare Workers.

## Why Migrate?

Cloudflare Workers provides more flexibility and control over how the site is served, including:

- Custom caching strategies
- Advanced routing capabilities
- Ability to modify responses on-the-fly
- Global distribution with low latency

## Migration Steps

1. **Created Workers Site Configuration**
   - Added `workers-site/index.js` with the Worker script
   - Added `workers-site/package.json` with dependencies

2. **Added Wrangler Configuration**
   - Created `wrangler.toml` to configure the Worker deployment
   - Set up the site bucket to point to Jekyll's `_site` directory

3. **Updated Package.json**
   - Added scripts for building and deploying
   - Added Wrangler as a development dependency

4. **Added GitHub Actions Workflow**
   - Created a workflow to automatically deploy to Cloudflare Workers
   - Set up the necessary secrets for authentication

5. **Updated Documentation**
   - Added deployment instructions to README.md
   - Created this migration document

## How to Deploy

1. Install Wrangler CLI: `npm install -g @cloudflare/wrangler`
2. Authenticate with Cloudflare: `wrangler login`
3. Update `wrangler.toml` with your Cloudflare account ID and zone ID
4. Build the site: `npm run build`
5. Deploy to Cloudflare Workers: `npm run publish`

## DNS Configuration

To point your domain to the Cloudflare Worker:

1. Log in to your Cloudflare dashboard
2. Select your domain
3. Go to the DNS tab
4. Add or update an A record:
   - Name: `@` (or your subdomain)
   - IPv4 address: `192.0.2.1` (this is a placeholder, Cloudflare will handle the routing)
   - Proxy status: Proxied (orange cloud)
5. Add or update a CNAME record for www:
   - Name: `www`
   - Target: `your-domain.com`
   - Proxy status: Proxied (orange cloud)
6. Go to the Workers tab
7. Add a route:
   - Route: `your-domain.com/*`
   - Worker: `akhyarrh-blog` (or whatever you named your worker)
8. Add another route for www:
   - Route: `www.your-domain.com/*`
   - Worker: `akhyarrh-blog`

## GitHub Actions Deployment

The site is automatically deployed to Cloudflare Workers when changes are pushed to the main or source branch. The GitHub Actions workflow handles:

1. Setting up Ruby and Node.js
2. Installing dependencies
3. Building the Jekyll site
4. Publishing to Cloudflare Workers

## Required Secrets

For GitHub Actions to deploy successfully, the following secrets need to be set in the repository:

- `CF_API_TOKEN`: Cloudflare API token with Workers permissions
- `CF_ACCOUNT_ID`: Your Cloudflare account ID

## Third-Party Integrations

### Staticman Comments

The Staticman integration is preserved by proxying requests from the Cloudflare Worker to the existing Netlify function. The Worker script includes a handler for `/staticman/` paths that forwards requests to:

```
https://staticman-akhyarrh.netlify.app/.netlify/functions/staticman
```

### Contact Form

The contact form using Formspree continues to work as before, as it submits directly to Formspree's servers.

## Testing

After deployment, verify that:

1. The site loads correctly
2. All pages are accessible
3. The service worker functions properly
4. Forms and comments work as expected
5. Staticman integration works correctly

## Rollback Procedure

If you need to roll back to Cloudflare Pages:

1. In your Cloudflare dashboard, go to Pages
2. Reconnect your GitHub repository if needed
3. Deploy the site to Cloudflare Pages
4. Update your DNS settings to point to the Pages deployment instead of the Worker