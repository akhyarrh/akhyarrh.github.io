# Taken from:
# https://github.com/avillafiorita/jekyll-rakefile
#
# Nothin fancy here

def jekyll(directives = '')
  sh 'jekyll ' + directives
end

desc "Serve Jekyll site for development"
task :serve do
  # ENV['JEKYLL_ENV'] = 'development'

  puts 'Serving...'
  jekyll('serve --config _config.yml,_config_development.yml')
end

desc 'Clean destination'
task :clean do
  puts 'Cleaning...'
  jekyll('clean')
end

desc 'Build site for deployment'
task :build => [:clean] do
  ENV['JEKYLL_ENV'] = 'production'
  puts 'Building...'
  jekyll('build')
end

desc "Preview before pushing"
task :preview do
  ENV['JEKYLL_ENV'] = 'production'
  puts 'Serving...'
  jekyll('serve')
end

desc "Test compiled site (_site)"
task :test do
  Rake::Task['build'].invoke
  sh ('bundle exec htmlproofer ./_site --allow-hash-href --assume-extension --check-favicon --check-html --check-opengraph --disable-external')
end

desc "Ping search engine"
task :ping do
  Rake::Task['pinggoogle'].invoke
  Rake::Task['pingbing'].invoke
  Rake::Task['pingpubsubhub'].invoke
end

desc "Ping Google"
task :pinggoogle do
  sh 'curl "http://www.google.com/webmasters/sitemaps/ping?sitemap=https://akhyar.js.org/sitemap.xml"'
end

desc "Ping Bing"
task :pingbing do
  sh 'curl "http://www.bing.com/webmaster/ping.aspx?siteMap=https://akhyar.js.org/sitemap.xml"'
end

desc "Ping Pubsubhub"
task :pingpubsubhub do
  sh 'curl -X POST "https://pubsubhubbub.appspot.com/" -d"hub.mode=publish" -d"hub.url=https://akhyar.js.org/feed.xml"'
end
