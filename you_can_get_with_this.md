# This Iteration

## Goals N' Notes

Going to try to do less than I did with the previous iteration, focusing on doing more of it manually

1. generate a model for article and author

```
DONE 
    uncomment the bcrypt gem and run bundle install
    rails g model Author username:string password_digest:string  
    rails db:migrate
    rails g model Article title:string content:text published:boolean 
TOMORROW
    add has_secure_password to Author model
    define that an author has many articles (add has_many :articles to app/models/author.rb as a manual step.)
    in bin/rails console, create an author, create an article for them, and confirm author.articles returns it."
```