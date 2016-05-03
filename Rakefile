require 'rake'

# rake optim
desc 'Optimise images using image_optim'
task :optim do
  system 'bundle exec image_optim assets/img -r --threads 8'
end

# rake serve
desc 'Serve site with drafts and watch changes'
task :serve do
  system 'JEKYLL_ENV=local bundle exec jekyll serve --trace --drafts'
end

# rake preview
desc 'Preview site before deploy'
task :preview do
  system 'JEKYLL_ENV=local bundle exec jekyll serve --trace'
end

# rake build
desc 'Build site'
task :build do
  system 'bundle exec jekyll build --trace'
end

# rake health_check
desc 'Run github-pages health-check'
task :health_check do
  system 'bundle exec github-pages health-check'
end

# rake check_html
desc 'Run html-proofer on _site folder'
task :check_html do
  system 'bundle exec htmlproofer _site --only-4xx --check-favicon --check-html'
end

# rake test
desc 'Build site and check compiled files'
task :test do
  Rake::Task[:health_check].invoke
  Rake::Task[:build].invoke
  Rake::Task[:check_html].invoke
end
