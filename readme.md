# Why? 

to see what I can build in Rails in a one-hour timebox

## First Attempt: Articles 

code at one-hour-rails-app-2026-10-29.zip

### Summary

I spent just over two hours on this.  I was (using a bit of help from Claude) able to create a working app, make it not look ugly, make rubocop happy, author some tests and integrate Playwright with a few tests there.


<details>
<summary>Build Notes - 2026-10-29 and 2026-10-30</summary>

> #### 2026-10-30 @ 530p
>
> ```
> addressing some of the nine items mentioned in yesterday's 630p notes
>
> app looks good
>
> bin/rubocop
>
> of the 9 from yesterday these two are the last two that are worth addressing
>
>     Item 5, browser check: I can't test this from here. Submit the new and edit forms in the running app and confirm the saves and redirects work.
>
>     FIXED  
>         Item 6, index view: Still open. app/views/articles/index.html.erb line 6 has the stray < at the end of the list item, and it still prints article.published as true/false. A one-line fix with a clearer label, such as "Published" or "Draft", would clean both up.
>
> this extends the project a bit, but I'm going to to the Playwright route
>
> cd "/Users/Christopher.Vigliotti/Library/Mobile Documents/com~apple~CloudDocs/Chris/Documents/Code/Ruby/Rails/one hour rails/one-hour-rails-app-2026-10-29/e2e"
> npm run test:e2e
>
> npm install
> npx playwright install chromium
>
> headed
> npx playwright test --headed
>
> run a single test
> npx playwright test -g "create article"
>
> added "slow mode" that can be called via terminal...
> npm run test:e2e -- --slow=1500 --keep-open -g "create article"
>
> thats rad!
>
> ok we are done here
>
> ```
>
> #### 2026-10-29 @ 630p
>
> ```
> a bit more tinkering...
> would like to get the show view rocking
> ok we are square on all views and actions
>
> lets' make it look nicer but not too much effort bc "1 hour app"
> pico.css
> nice
> let's add a header and footer then shift focus over to testing
> but first header and footer
>
> and rubocop
> 5 offenses, let's not 'autocorrect' the 4 that it's offering to fix
>
> fixed
> whitespace mostly
>
> bin/rails test
>     returns
>         E
>
>         Error:
>         ArticlesControllerTest#test_should_get_index:
>         NoMethodError: undefined method 'articles_index_url' for an instance of ArticlesControllerTest
>             test/controllers/articles_controller_test.rb:5:in 'block in <class:ArticlesControllerTest>'
>
>
>         bin/rails test test/controllers/articles_controller_test.rb:4
>
>         E
>
>         Error:
>         ArticlesControllerTest#test_should_get_show:
>         NameError: undefined local variable or method 'articles_show_url' for an instance of ArticlesControllerTest
>             test/controllers/articles_controller_test.rb:10:in 'block in <class:ArticlesControllerTest>'
>
>
>         bin/rails test test/controllers/articles_controller_test.rb:9
>
>         E
>
>         Error:
>         ArticlesControllerTest#test_should_get_create:
>         NameError: undefined local variable or method 'articles_create_url' for an instance of ArticlesControllerTest
>             test/controllers/articles_controller_test.rb:20:in 'block in <class:ArticlesControllerTest>'
>
>
>         bin/rails test test/controllers/articles_controller_test.rb:19
>
>         E
>
>         Error:
>         ArticlesControllerTest#test_should_get_new:
>         NameError: undefined local variable or method 'articles_new_url' for an instance of ArticlesControllerTest
>             test/controllers/articles_controller_test.rb:15:in 'block in <class:ArticlesControllerTest>'
>
>
>         bin/rails test test/controllers/articles_controller_test.rb:14
>
>
>
>         Finished in 0.075600s, 52.9101 runs/s, 0.0000 assertions/s.
>         4 runs, 0 assertions, 0 failures, 4 errors, 0 skips
>
> articles_url is defined by convention
> as is article_url and new_article_url
>
> everything is working great, but there would be some good learning value if I spent the next hour block focusing on some of these items...
>
>     1. The new-article form is missing published. Task 2 asks for title, body, and published, but app/views/articles/new.html.erb only has title and body. The edit form has the checkbox, so the two forms don't match.
>
>     2. Failed saves don't explain themselves. Task 3 asks for error handling when validation fails. The controller re-renders new on failure, but there are no validations on Article and the form has no error messages. Adding validates :title, presence: true plus an error list in the form would cover it.
>
>     Tests
>
>     3. Replace the four scaffold tests. They're all broken on the route helper names. Rewrite them to cover index, show, new, create, edit, and update against the real routes, with fixtures.
>
>     4. Add tests for the write paths. Create and update should be checked with valid data (saves and redirects) and invalid data (re-renders the form). Those are the behaviors you just fixed.
>
>     Manual checks
>
>     5. Edit and create in a browser. The update route is fixed, but I only confirmed it through the log and routes, not by submitting the form.
>
>     6. Check the index list. app/views/articles/index.html.erb has a stray < on the list item and shows true/false for published. Both are easy to clean up.
>
>     Housekeeping
>
>     7. Rerun RuboCop. You noted 5 offenses; run bin/rubocop again after the recent edits.
>
>     8. Commit the work. Several files are modified and uncommitted (routes, layout, views, controller), so a commit now keeps the one-hour state recoverable.
>
>     9. Update the readme. It ends at "time is up!" and still says the show view is blank, which is no longer true.
>
> ```
>
> #### 2026-10-29 @ 2p ish
>
> ```
> rails new one-hour-rails-app-2026-10-29 --database=postgresql
> cd into the dir
> bin/rails db:create
> bin/dev
>
> add rubocop
>     already in my Gemfile!
>         gem "rubocop-rails-omakase", require: false
>
> bundle exec rubocop
>     gtg
>
> gemini
>     issue me some 101 challanges. ideally touching on the key points of the rails basics section of https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails. 
>
> bin/rails g model Article title:string body:text published:boolean
> bin/rails db:migrate
>
> before we continue
> rm -rf "one-hour-rails-app-2026-10-29/.git"
> git add .
> git commit -m "Initial commit"
> gh repo create one-hour-rails --private --source=. --push
>
> brew upgrade gh
>
> ok back to it
> add a route 
> root "articles#index"
>
> generate an articles controller
> bin/rails g controller Articles index show new create
>
> mod articles-controller > index
>
> Goal: Render data and handle user input with Rails form helpers and strong parameters.
>
>     Tasks:
>
>     1. Build your app/views/articles/index.html.erb to loop through @articles and display their titles and bodies. Add a link pointing to the new article page (new_article_path).
>
>     2. Build a form in app/views/articles/new.html.erb using form_with(model: @article) for title, body, and published.
>
>     3. Implement the create action in your controller to instantiate a new article using Strong Parameters (params.require(:article).permit(:title, :body, :published)), save it, and redirect to the show or index page (with basic error handling/re-rendering if validation fails).
>
> done (ty to inline AI for quickies)
>
> bin/rubocop 
>     no offenses
>
> bin/dev
>     shows default rails page grrr
>
> changes to routes, controller and views
>     defined root route 
>     added resources: line
>     moved params.require to a private method article_params
>     edit controller actions show and new to get an article
>     checked my views
>     bin/rails db:migrate (missed that)
>     re-running the app now...
>         works
>         
> the show view is blank
>
> time is up!
> ```

</details>



# Misc Whammies

kill all running rails apps

```
APP="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Chris/Documents/Code/Ruby/Rails/one hour rails/one-hour-rails-app-2026-10-29"; PIDFILE="$APP/tmp/pids/server.pid"; [ -f "$PIDFILE" ] && kill "$(cat "$PIDFILE")" 2>/dev/null; pkill -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild"; sleep 2; pkill -9 -f "bin/dev|foreman|puma|rails server|bin/rails|tailwindcss|esbuild" 2>/dev/null; rm -f "$PIDFILE"; pgrep -fl "bin/dev|foreman|puma|rails|tailwindcss|esbuild" || echo "No Rails processes running"
```
