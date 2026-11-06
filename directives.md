#  Directives

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
