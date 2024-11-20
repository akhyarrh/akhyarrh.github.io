export const onRequest = () => {
  // Load environment variables
  if (!process.env.BEARER_TOKEN) {
    throw new Error("BEARER_TOKEN environment variable is required");
  }

  // Configuration object for API authentication
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  // Cache configuration
  const CACHE_KEY = "latest_tweet_cache";
  const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes in milliseconds

  // Function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  // Function to get cached data
  function getCachedTweet() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const now = new Date().getTime();

      // Check if cache is still valid
      if (now - timestamp > CACHE_DURATION) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }

      return data;
    } catch (error) {
      console.error("Error reading cache:", error);
      return null;
    }
  }

  // Function to set cache data
  function setCachedTweet(data) {
    try {
      const cacheData = {
        data,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error("Error setting cache:", error);
    }
  }

  // Function to update the DOM with tweet data
  function displayTweet(tweetData, username) {
    const tweetElement = document.getElementById("latest-tweet");
    const citeElement = document.getElementById("latest-tweet-meta");

    tweetElement.textContent = tweetData.text;

    const tweetUrl = `https://x.com/${username}/status/${tweetData.id}`;
    citeElement.innerHTML = `<a href="${tweetUrl}">@${username}, ${formatDate(
      tweetData.created_at
    )}</a>`;
  }

  // Function to fetch and display the latest tweet
  async function fetchLatestTweet(username) {
    try {
      // Check cache first
      const cachedTweet = getCachedTweet();
      if (cachedTweet) {
        console.log("Using cached tweet data");
        displayTweet(cachedTweet, username);
        return;
      }

      // If no cache, fetch from API
      const userResponse = await fetch(
        `https://api.twitter.com/2/users/by/username/${username}`,
        config
      );
      const userData = await userResponse.json();

      if (!userData.data?.id) {
        throw new Error("User not found");
      }

      const tweetsResponse = await fetch(
        `https://api.twitter.com/2/users/${userData.data.id}/tweets?` +
          "max_results=1&tweet.fields=created_at",
        config
      );
      const tweetsData = await tweetsResponse.json();

      if (!tweetsData.data?.[0]) {
        throw new Error("No tweets found");
      }

      const tweet = tweetsData.data[0];

      // Cache the new tweet data
      setCachedTweet(tweet);

      // Display the tweet
      displayTweet(tweet, username);
    } catch (error) {
      console.error("Error fetching tweet:", error);
      const tweetElement = document.getElementById("latest-tweet");
      tweetElement.textContent = "Failed to load tweet";

      // Try to display cached data if available
      const cachedTweet = getCachedTweet();
      if (cachedTweet) {
        console.log("Falling back to cached tweet data");
        displayTweet(cachedTweet, username);
      }
    }
  }

  // Function to clear cache (useful for testing)
  function clearTweetCache() {
    localStorage.removeItem(CACHE_KEY);
  }
};
