# Why? 

to see what I can build in Rails in a one-hour timebox

## 2026-10-29

```
rails new one-hour-rails-app-2026-10-29 --database=postgresql
cd into the dir
bin/rails db:create
bin/dev

add rubocop
    already in my Gemfile!
        gem "rubocop-rails-omakase", require: false

bundle exec rubocop
    gtg

gemini
    issue me some 101 challanges. ideally touching on the key points of the rails basics section of https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails. 

bin/rails g model Article title:string body:text published:boolean



```



## Misc

kill all running rails apps

```
APP="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Chris/Documents/Code/Ruby/Rails/one hour rails/one-hour-rails-app-2026-10-29"; PIDFILE="$APP/tmp/pids/server.pid"; [ -f "$PIDFILE" ] && kill "$(cat "$PIDFILE")" 2>/dev/null; pkill -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild"; sleep 2; pkill -9 -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild" 2>/dev/null; rm -f "$PIDFILE"; pgrep -fl "bin/dev|foreman|puma|rails|tailwindcss|esbuild" || echo "No Rails processes running"
```