// tweet-fetcher.js
export class TweetFetcher {
  constructor(username, bearerToken) {
    this.username = username;
    this.config = {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      }
    };
    this.CACHE_KEY = `tweet_cache_${username}`;
    this.CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  getCachedTweet() {
    try {
      const cached = localStorage.getItem(this.CACHE_KEY);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const now = new Date().getTime();

      if (now - timestamp > this.CACHE_DURATION) {
        localStorage.removeItem(this.CACHE_KEY);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error reading cache:', error);
      return null;
    }
  }

  setCachedTweet(data) {
    try {
      const cacheData = {
        data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  }

  displayTweet(tweetData) {
    const tweetElement = document.getElementById('latest-tweet');
    const citeElement = document.getElementById('latest-tweet-meta');
    
    if (!tweetElement || !citeElement) return;
    
    tweetElement.textContent = tweetData.text;
    
    const tweetUrl = `https://x.com/${this.username}/status/${tweetData.id}`;
    citeElement.innerHTML = `<a href="${tweetUrl}">@${this.username}, ${this.formatDate(tweetData.created_at)}</a>`;
  }

  async fetchLatestTweet() {
    try {
      const cachedTweet = this.getCachedTweet();
      if (cachedTweet) {
        console.log('Using cached tweet data');
        this.displayTweet(cachedTweet);
        return;
      }

      const userResponse = await fetch(
        `https://api.twitter.com/2/users/by/username/${this.username}`,
        this.config
      );
      const userData = await userResponse.json();
      
      if (!userData.data?.id) {
        throw new Error('User not found');
      }

      const tweetsResponse = await fetch(
        `https://api.twitter.com/2/users/${userData.data.id}/tweets?` +
        'max_results=1&tweet.fields=created_at',
        this.config
      );
      const tweetsData = await tweetsResponse.json();

      if (!tweetsData.data?.[0]) {
        throw new Error('No tweets found');
      }

      const tweet = tweetsData.data[0];
      this.setCachedTweet(tweet);
      this.displayTweet(tweet);

    } catch (error) {
      console.error('Error fetching tweet:', error);
      const tweetElement = document.getElementById('latest-tweet');
      if (tweetElement) {
        tweetElement.textContent = 'Failed to load tweet';
      }
      
      const cachedTweet = this.getCachedTweet();
      if (cachedTweet) {
        console.log('Falling back to cached tweet data');
        this.displayTweet(cachedTweet);
      }
    }
  }

  clearCache() {
    localStorage.removeItem(this.CACHE_KEY);
  }
}