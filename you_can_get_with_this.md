# This Iteration

## Goals N' Notes

Going to try to do less than I did with the previous iteration, focusing on doing more of it manually

1. generate a model for article and author

```
DONE THU 5 min
    uncomment the bcrypt gem and run bundle install
    rails g model Author username:string password_digest:string  
    rails db:migrate
    rails g model Article title:string content:text published:boolean 
DONE FRI 10 min
    add has_secure_password to Author model
    define that an author has many articles (add has_many :articles to app/models/author.rb as a manual step.)
    also belongs_to in the other direction, bruh
    rails db:migrate again
    in bin/rails console, create an author, create an article for them, and confirm author.articles returns it."
        author = Author.create!(username: "chris", password: "secret", password_confirmation: "secret")
        article = Article.create!(title: "My first article", content: "Hello from the console", published: true, author: author)
        author.articles
NEXT SESSION THOUGHTS
    should I add tests NOW?!
        A spec written before you understand the code tends to get copied from a template instead of teaching you anything. 
            ...so we will wait
NEXT SESSION TASKS
    add to application.html.erb
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.1.1/css/pico.min.css">
    confirm base still works: bin/rails db:migrate, bin/rails server, load home page
    articles index and show
        bin/rails g controller Articles index show
        resources :articles, only: [:index, :show] in config/routes.rb
        index lists titles, show displays title, content, author username
    validations on Article
        validates :title, presence: true
        validates :content, presence: true
        try an invalid create in the console
    quick RuboCop pass: bin/rubocop, fix offenses only in files touched today
    published flag (column already exists as boolean)
        migration to default to false: change_column_default :articles, :published, from: nil, to: false
    basic "you aren't logged in" home page
        root goes to home#index (or articles#index) with heading "You aren't logged in"
        lists only published articles: Article.where(published: true)
    not this session: RSpec, login, forms
    

```