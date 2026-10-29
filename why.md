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
bin/rails db:migrate

before we continue
rm -rf "one-hour-rails-app-2026-10-29/.git"
git add .
git commit -m "Initial commit"
gh repo create one-hour-rails --private --source=. --push

brew upgrade gh

ok back to it
add a route 
root "articles#index"

generate an articles controller
bin/rails g controller Articles index show new create

mod articles-controller > index

Goal: Render data and handle user input with Rails form helpers and strong parameters.

    Tasks:

    1. Build your app/views/articles/index.html.erb to loop through @articles and display their titles and bodies. Add a link pointing to the new article page (new_article_path).

    2. Build a form in app/views/articles/new.html.erb using form_with(model: @article) for title, body, and published.

    3. Implement the create action in your controller to instantiate a new article using Strong Parameters (params.require(:article).permit(:title, :body, :published)), save it, and redirect to the show or index page (with basic error handling/re-rendering if validation fails).

done (ty to inline AI for quickies)

bin/rubocop 
    no offenses

bin/dev
    shows default rails page grrr

changes to routes, controller and views
    defined root route 
    added resources: line
    moved params.require to a private method article_params
    edit controller actions show and new to get an article
    checked my views
    bin/rails db:migrate (missed that)
    re-running the app now...
        works
        
the show view is blank

time is up!
```



## Misc

kill all running rails apps

```
APP="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Chris/Documents/Code/Ruby/Rails/one hour rails/one-hour-rails-app-2026-10-29"; PIDFILE="$APP/tmp/pids/server.pid"; [ -f "$PIDFILE" ] && kill "$(cat "$PIDFILE")" 2>/dev/null; pkill -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild"; sleep 2; pkill -9 -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild" 2>/dev/null; rm -f "$PIDFILE"; pgrep -fl "bin/dev|foreman|puma|rails|tailwindcss|esbuild" || echo "No Rails processes running"
```