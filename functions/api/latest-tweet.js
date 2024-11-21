// functions/latest-tweet.js
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (!username) {
    return new Response('Username parameter is required', { status: 400 });
  }

  const BEARER_TOKEN = context.env.BEARER_TOKEN;

  try {
    // Fetch user ID from username
    const userResponse = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    });

    if (!userResponse.ok) {
      return new Response(`Error fetching user: ${userResponse.statusText}`, { status: userResponse.status });
    }

    const userData = await userResponse.json();
    const userId = userData.data.id;

    // Fetch latest tweet from user ID
    const tweetsResponse = await fetch(`https://api.twitter.com/2/users/${userId}/tweets?max_results=5`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    });

    if (!tweetsResponse.ok) {
      return new Response(`Error fetching tweets: ${tweetsResponse.statusText}`, { status: tweetsResponse.status });
    }

    const tweetsData = await tweetsResponse.json();
    const latestTweet = tweetsData.data[0];

    return new Response(JSON.stringify(latestTweet), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(`Error fetching tweet: ${error.message}`, { status: 500 });
  }
}