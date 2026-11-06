# One-Hour Rails

I want to see what I can build in Rails in one-hour.  I want to perform this same task over and over until I'm great at it.  

## Where's The Beef?

* The scope of and build notes for my current iteration [is right here](you_can_get_with_this.md).  This work will likely be unfinished.
* My previous hour's (completed) work is in the cleverly named [previous/](_previous/) folder.  If you want to goof around with the last completed thing that I built, that would be the place to do it.
* All previous hours have been zipped up into discreet files and tossed into the hellscape that is the [multiverse/](_multiverse/)

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

## Directives

The rules that AI helpers follow are in [directives.md](directives.md).  