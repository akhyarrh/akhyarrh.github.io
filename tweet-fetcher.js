class TweetFetcher {
  constructor(username = 'akhyarrh') {
    this.username = username;
    this.CACHE_KEY = `tweet_cache_${username}`;
    this.CACHE_DURATION = 1000 * 60 * 15; // 15 minutes
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
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
    } catch {
      return null;
    }
  }

  setCachedTweet(data) {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify({
        data,
        timestamp: new Date().getTime()
      }));
    } catch {}
  }

  async fetchLatestTweet() {
    const cachedTweet = this.getCachedTweet();
    if (cachedTweet) {
      this.displayTweet(cachedTweet);
      return;
    }

    try {
      const response = await fetch(`/api/twitter-token?username=${this.username}`);
      const data = await response.json();

      if (data.tweet) {
        this.setCachedTweet(data.tweet);
        this.displayTweet(data.tweet);
      }
    } catch (error) {
      console.error('Tweet fetch failed:', error);
      const tweetElement = document.getElementById('latest-tweet');
      const citeElement = document.getElementById('latest-tweet-meta');
      
      if (tweetElement) tweetElement.textContent = 'Failed to load tweet';
      if (citeElement) citeElement.textContent = '';
    }
  }

  displayTweet(tweet) {
    const tweetElement = document.getElementById('latest-tweet');
    const citeElement = document.getElementById('latest-tweet-meta');
    
    if (tweetElement) tweetElement.textContent = tweet.text;
    
    if (citeElement) {
      const tweetUrl = `https://x.com/${this.username}/status/${tweet.id}`;
      citeElement.innerHTML = `<a href="${tweetUrl}">@${this.username}, ${this.formatDate(tweet.created_at)}</a>`;
    }
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.fetchLatestTweet());
    } else {
      this.fetchLatestTweet();
    }
  }
}

// Auto-initialize
new TweetFetcher().init();