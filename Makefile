all:
	make build
	make test

build:
	bundle exec jekyll build --profile

test:
	bundle exec htmlproofer ./_site --allow-hash-href --assume-extension \
	--check-favicon --check-html --check-opengraph --timeframe 4w

serve:
	bundle exec jekyll serve --drafts --future --unpublished

preview:
	bundle exec jekyll serve

ping-google:
	curl "http://www.google.com/webmasters/sitemaps/ping?sitemap=https://akhyarrh.github.io/sitemap.xml"

ping-bing:
	curl "http://www.bing.com/webmaster/ping.aspx?siteMap=https://akhyarrh.github.io/sitemap.xml"

ping-pubsubhubbub:
	curl -X POST "https://pubsubhubbub.appspot.com/" -d"hub.mode=publish" -d"hub.url=https://akhyarrh.github.io/feed.xml"

ping: ping-google ping-bing ping-pubsubhubbub
