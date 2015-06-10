# Should Reads

[Heroku link][heroku]

[heroku]: https://shouldreads.herokuapp.com/

## Minimum Viable Product
Should Reads is a clone of Good Reads built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] View books and book information
- [ ] Create book shelves
- [ ] Add books to shelves
- [ ] View book shelves
- [ ] Create reviews and rate books
- [ ] Create and respond to friend requests
- [ ] View reviews by friends

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
I will implement user authentication in Rails based on the practices
learned at App Academy. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before
moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Books and Shelves (~2 days)
I will add API routes to serve book information, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to view book information and add books to shelves.

[Details][phase-two]

### Phase 3: Creating and Editing Reviews (~2 days)
I will create forms for adding reviews.  Users will be able to rate
books and write reviews. Reviews will be displayed on each books show page.
Eventually reviews will be accessible by friends.

[Details][phase-three]

### Phase 4: Adding Friends (~2 days)
I will setup a system for handling friends and friend requests. Friends will
be allowed to view  other friends shelves and reviews. Reviews will be
shown as a subview on the friends index page.

[Details][phase-four]

### Bonus Features (TBD)
- [ ] Add comments to reviews
- [ ] User photos and more in depth profiles
- [ ] Newsfeed
- [ ] Typeahead search bar for books
- [ ] Incorporate google book API data

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
