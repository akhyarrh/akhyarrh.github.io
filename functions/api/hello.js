/**
 * A simple API endpoint that returns a greeting
 * This demonstrates Cloudflare Workers' serverless capabilities
 */
export async function onRequest(context) {
  return new Response(JSON.stringify({
    message: "Hello from Cloudflare Workers!",
    timestamp: new Date().toISOString()
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}