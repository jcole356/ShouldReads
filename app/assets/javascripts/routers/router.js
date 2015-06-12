ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
    this.book_shelves = options.book_shelves;
  },

  routes: {
    "": "bookShelvesLibrary",
    "books": "index",
    "books/:id": "show",
  },

  bookShelvesLibrary: function() {
    this.book_shelves.fetch();
    var view = new ShouldReads.Views.BookShelvesLibrary({
      collection: this.book_shelves
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
    var user = new ShouldReads.Models.User({ id: CURRENT_USER_ID});
    user.fetch();
    this.book_shelves.fetch();
    var view = new ShouldReads.Views.BookShow({
      model: book,
      collection: this.book_shelves,
      user: user
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
