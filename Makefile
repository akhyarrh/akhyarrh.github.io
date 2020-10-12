all: ; make build make test

build: ; JEKYLL_ENV=production bundle exec jekyll build --profile

test: ; bundle exec htmlproofer ./_site --allow-hash-href --assume-extension --check-favicon --check-html --check-opengraph

serve: ; bundle exec jekyll serve --config _config.yml,_config_development.yml

preview: ; JEKYLL_ENV=production bundle exec jekyll serve

ping-google: ; curl "http://www.google.com/webmasters/sitemaps/ping?sitemap=https://akhyar.js.org/sitemap.xml"

ping-bing: ; curl "http://www.bing.com/webmaster/ping.aspx?siteMap=https://akhyar.js.org/sitemap.xml"

ping-pubsubhubbub: ; curl -X POST "https://pubsubhubbub.appspot.com/" -d"hub.mode=publish" -d"hub.url=https://akhyar.js.org/feed.xml"

ping: ;ping-google ping-bing ping-pubsubhubbub
