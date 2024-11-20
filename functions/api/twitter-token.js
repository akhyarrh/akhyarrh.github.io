// functions/api/twitter-token.js
export async function onRequest(context) {
  // Only allow GET requests
  if (context.request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Get the token from environment variable
  const token = context.env.BEARER_TOKEN;
  
  if (!token) {
    return new Response('Token not configured', { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Return the token in a secure way
  return new Response(JSON.stringify({ token }), {
    headers: {
      'Content-Type': 'application/json',
      // Adjust CORS as needed for your domain
      'Access-Control-Allow-Origin': context.request.headers.get('Origin') || '*',
      'Access-Control-Allow-Methods': 'GET',
    }
  });
}