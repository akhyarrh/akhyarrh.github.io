all:
	make build
	make test

build:
	bundle exec jekyll build --profile

test:
	bundle exec htmlproofer ./_site --allow-hash-href --assume-extension \
	--check-favicon --check-html --check-opengraph --check-sri --only-4xx

serve:
	bundle exec jekyll serve --drafts --future --unpublished

preview:
	bundle exec jekyll serve
