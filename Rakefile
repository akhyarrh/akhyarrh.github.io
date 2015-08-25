require "rake"

# rake optim
desc "Optimize images"
task :optim do
  system "bundle exec image_optim assets/img -r"
end

# rake serve
desc "Serve site with drafts and watch changes"
task :serve do
  system "JEKYLL_ENV=local bundle exec jekyll serve --trace --drafts --config _config.yml,_config-local.yml"
end

# rake preview
desc "Preview site without drafts, useful when writing post"
task :preview do
  system "JEKYLL_ENV=local bundle exec jekyll serve --trace --config _config.yml,_config-local.yml"
end

# rake build
desc "Build site"
task :build do
  system "bundle exec jekyll build --trace"
end

# rake check_html
desc "Run html-proofer on _site to check build result"
task :check_html do
  system "bundle exec htmlproof _site --only-4xx --check-favicon --check-html"
end

# rake test
desc "Build site and check destination folder"
task :test do
  Rake::Task[:build].invoke
  Rake::Task[:check_html].invoke
end
