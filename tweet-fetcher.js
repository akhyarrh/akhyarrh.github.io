async function fetchLatestTweet(username) {
  try {
    const response = await fetch(`/api/latest-tweet?username=${username}`);
    const tweet = await response.json();

    if (!tweet) {
      document.getElementById("latest-tweet").innerText = "No tweet found";
      document.getElementById("latest-tweet-meta").innerText = "";
      return;
    }

    const tweetId = tweet.id;
    const tweetText = tweet.text;
    const tweetUser = tweet.author_id;
    const tweetDate = new Date(tweet.created_at).toLocaleString();

    const tweetUrl = `https://twitter.com/${username}/status/${tweetId}`;

    document.getElementById("latest-tweet").innerText = tweetText;

    const metaElement = document.getElementById("latest-tweet-meta");
    metaElement.innerHTML = `<a href="${tweetUrl}" target="_blank">@${tweetUser}, ${tweetDate}</a>`;
  } catch (error) {
    console.error("Error fetching tweet:", error);
    document.getElementById("latest-tweet").innerText = "Error fetching tweet";
    document.getElementById("latest-tweet-meta").innerText = "";
  }
}

// Replace 'your-username' with the actual Twitter username
fetchLatestTweet("akhyarrh");
