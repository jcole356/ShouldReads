# Should Reads
[Live link](http://shouldreads.net)

## Description
ShouldReads is an app inspired by Goodreads built on Rails and Backbone.
Users can search for books and book information.  Book information
includes title, author, number of pages, and a summary.  Users can also
rate and review books.  The review information is then available to all
users globally on the newsfeed or on the specific books show page.

Users are allowed to create bookshelves and add or remove books from
bookshelves in order to sort them by categories such as read, to read,
or currently reading.

## Main Functionality

* Custom authentication using BCrypt to store hashed passwords
* Search for books by accessing the Google Books API
* Rate and Review books
* Edit and delete your own book reviews
* Create and destroy bookshelves used for organizing books
* Add and remove books to bookshelves to sort by category
* View newsfeed to see what other users are saying about books

By accessing the Google Books API, users can access a huge library of
books for use on the site.

## Deployment

Push code to trigger deploy

`git push heroku master`

### Setting up a new app instance on a new remote also requires

Set env vars from [Figaro](https://github.com/laserlemon/figaro):

`figaro heroku:set -e production`

Setup and seed the db:

`heroku run rake db:setup`
