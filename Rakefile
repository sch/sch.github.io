require 'rubygems'
require 'rake'
require 'fileutils'
require 'jekyll'
require 'tmpdir'


GITHUB_REPONAME = "sch/sch.github.io"

posts_dir = "stock/_posts"    # directory for blog files
new_post_ext = "markdown"  # default new post file extension when using the new_post task

# usage rake new
desc "Wizard for a new post in #{posts_dir}"
task :new do
  puts "What should we call this post for now?"
  title = STDIN.gets.chomp

  mkdir_p "#{posts_dir}"
  date = Time.now.strftime('%Y-%m-%d')
  filename = "#{posts_dir}/#{date}-#{title.to_url}.#{new_post_ext}"
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    system "mkdir -p #{posts_dir}/";
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "comments: true"
    post.puts "categories: "
    post.puts "---"
  end
end

desc "Generate HTML files once"
task :default => :generate

desc "Start a server for local development"
task :develop do
  sh "jekyll server --incremental"
end

task :generate do
  ENV["JEKYLL_ENV"] = "production"
  Jekyll::Site.new(Jekyll.configuration).process
end
