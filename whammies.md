# Whammies

kill all running rails apps
```
APP="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Chris/Documents/Code/Ruby/Rails/one hour rails/one-hour-rails-app-2026-10-29"; PIDFILE="$APP/tmp/pids/server.pid"; [ -f "$PIDFILE" ] && kill "$(cat "$PIDFILE")" 2>/dev/null; pkill -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild"; sleep 2; pkill -9 -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild" 2>/dev/null; rm -f "$PIDFILE"; pgrep -fl "bin/dev|foreman|puma|rails|tailwindcss|esbuild" || echo "No Rails processes running"
```

# Tidy Code

* `bundle exec rubocop -a` or to review the changes that it makes `bundle exec rubocop -A`