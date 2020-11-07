# Taken from:
# https://github.com/avillafiorita/jekyll-rakefile
#
# Nothin fancy here

def jekyll(directives = '')
  sh 'bundle exec jekyll ' + directives
end

desc "Serve Jekyll site for development"
task :serve do
  # ENV['JEKYLL_ENV'] = 'development'

  puts 'Serving...'
  jekyll('serve --config _config.yml,_config_development.yml')
end

desc 'Build site for deployment'
task :build do
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
  Rake::Task['pingpubsubhubbub'].invoke
  Rake::Task['pingomatic'].invoke
end

desc "Ping Google"
task :pinggoogle do
  sh 'curl "http://www.google.com/ping?sitemap=https://akhyar.js.org/sitemap.xml"'
end

desc "Ping Bing"
task :pingbing do
  sh 'curl "http://www.bing.com/webmaster/ping.aspx?siteMap=https://akhyar.js.org/sitemap.xml"'
end

desc "Ping pubsubhubbub"
task :pingpubsubhubbub do
  begin
    require 'cgi'
    require 'net/http'
    data = 'hub.mode=publish&hub.url=' + CGI::escape("https://akhyar.js.org/feed.xml")
    http = Net::HTTP.new('pubsubhubbub.appspot.com', 80)
    resp, data = http.post('http://pubsubhubbub.appspot.com/publish',
                           data,
                           {'Content-Type' => 'application/x-www-form-urlencoded'})
    puts "Ping error: #{resp}, #{data}" unless resp.code == "204"
  end
end

desc "Ping pingomatic"
task :pingomatic do
  sh 'curl "http://pingomatic.com/ping/?title=AkhyarRH&blogurl=https://akhyar.js.org&rssurl=https://akhyar.js.org/feed.xml&chk_blogs=on&chk_feedburner=on&chk_tailrank=on&chk_superfeedr=on"'
end
