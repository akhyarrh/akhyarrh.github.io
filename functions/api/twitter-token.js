export async function onRequest(context) {
  // CORS and method handling
  if (context.request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const token = context.env.BEARER_TOKEN;
  
  if (!token) {
    return new Response('Token not configured', { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Fetch user ID and latest tweet in one function
  const username = context.request.url.searchParams.get('username') || 'akhyarrh';

  try {
    // User lookup
    const userResponse = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}`,
      { 
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' 
        }
      }
    );
    const userData = await userResponse.json();

    if (!userData.data?.id) {
      return new Response(JSON.stringify({ error: 'User not found' }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Latest tweet
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userData.data.id}/tweets?` +
      'max_results=1&tweet.fields=created_at',
      { 
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' 
        }
      }
    );
    const tweetsData = await tweetsResponse.json();

    return new Response(JSON.stringify({
      tweet: tweetsData.data?.[0] || null,
      username: username
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=900' // 15 minute cache
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}