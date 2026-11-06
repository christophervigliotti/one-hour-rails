# One-Hour Rails

I want to see what I can build in Rails in one-hour.  I want to perform this same task over and over until I'm great at it.  

## Where's The Beef?

* The scope of and build notes for my current iteration [is right here](you_can_get_with_this.md).  This work will likely always appear to be unfinished.
* My previous hour's (completed) work is in the cleverly named (_previous/) folder
* All previous hours have been zipped up into discreet files and tossed into the hellscape that is the (_multiverse/)

[Previous iteration](_previous/one-hour-rails-app-2026-10-29/)
[Multiverse archives](_multiverse/)


## And Now For Some Concise Instructions For First Use

```sh
# set it this beef on your machine
brew install rbenv ruby-build
eval "$(rbenv init - zsh)"   # add this line to ~/.zshrc; use only one Ruby manager
rbenv install 4.0.6       # version pinned in .ruby-version
cd "one hour rails"
gem install bundler
bin/setup --skip-server   # installs gems, prepares the SQLite db
```

### Start The Beef

```sh
bin/dev                   # http://localhost:3000
```

## Claude Directives

* Ignore task lists, to-dos and "next steps" from previous iterations (`_previous`, older `build-notes`, `_multiverse`). Only the current request and the current repo root define the work.
* Treat `_previous` and `_multiverse` as read-only reference. Don't edit them, and don't unzip `_multiverse` unless asked.  Don't be a Thanos.
* The repo root is the only place to build. Don't run `rails new` or destructive generators in the root without asking first.
* This is a learning drill. Give hints, the next step, and the reasoning before full solutions. Write complete code only when asked or when stuck after a hint.
* Stay inside the one-hour scope. Name the hour's goal at the start, and prefer small steps that can be checked by running the app or tests.
* Ruby is pinned in `.ruby-version` (4.0.6). The database is SQLite. Lint with `bin/rubocop` (rubocop-rails-omakase); don't autocorrect offenses without asking.
* Don't install or run the Playwright suite (`e2e/`) unless asked. It lives only in `_previous`.
* Keep this iteration's goals and build notes in `you_can_get_with_this.md`. The readme is for introduction and setup only.
* Don't commit, push, or re-initialize git unless asked.
* Keep the user's own words in build notes. Don't add Claude's commentary to them unless asked.