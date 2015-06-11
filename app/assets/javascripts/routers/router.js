ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
    this.book_shelves = options.book_shelves;
  },

  routes: {
    "": "index",
    "books/:id": "show",
    "book_shelves": "bookShelvesLibrary"
  },

  bookShelvesLibrary: function() {
    this.book_shelves.fetch();
    var view = new ShouldReads.Views.BookShelvesLibrary({
      collection: this.book_shelves
    });

    this._swapView(view);
  },

  index: function() {
    this.books.fetch();
    var view = new ShouldReads.Views.BooksIndex({
      collection: this.books
    });

    this._swapView(view);
  },

  show: function(id) {
    var book = this.books.getOrFetch(id);
    var view = new ShouldReads.Views.BookShow({
      model: book,
      collection: this.books
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
