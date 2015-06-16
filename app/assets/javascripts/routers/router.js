ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
    this.bookShelves = options.bookShelves;
    this.reviews = options.reviews;
    // For the all shelf
    this.shelvings = options.shelvings;
  },

  routes: {
    "": "bookShelvesLibrary",
    "books": "index",
    "books/:id": "show",
  },

  bookShelvesLibrary: function() {
    this.bookShelves.fetch();
    var view = new ShouldReads.Views.BookShelvesLibrary({
      collection: this.bookShelves,
      shelvings: this.shelvings
    });

    this._swapView(view);
  },


  index: function() {
    var books = new ShouldReads.Collections.Books();
    books.fetch();
    var view = new ShouldReads.Views.BooksIndex({
      collection: books
    });

    this._swapView(view);
  },

  show: function(id) {
    var book = this.books.getOrFetch(id);
    // var user = new ShouldReads.Models.User({ id: CURRENT_USER_ID});
    // user.fetch();
    this.bookShelves.fetch();
    var view = new ShouldReads.Views.BookShow({
      // user: user,
      model: book,
      collection: this.books,
      bookShelves: this.bookShelves,
      reviews: this.reviews
    });

    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
