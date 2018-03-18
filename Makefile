all:
	make build
	make test

build:
	bundle exec jekyll build --profile

test:
	htmlproofer ./_site --allow-hash-href --assume-extension --check-favicon \
	  --check-html --check-opengraph --check-sri --only-4xx \
	  --storage-dir ./_tmp/html-proofer

serve:
	bundle exec jekyll serve --drafts --future --unpublished

preview:
	bundle exec jekyll serve
