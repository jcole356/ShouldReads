ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
    this.bookShelves = options.bookShelves;
    this.reviews = options.reviews;
    this.shelvings = options.shelvings;
  },

  routes: {
    "mybooks": "bookShelvesLibrary",
    "books/:id": "show",
    "search/:query": "search",
    "": "newsfeed"
  },

  bookShelvesLibrary: function() {
    this.bookShelves.fetch();
    var view = new ShouldReads.Views.BookShelvesLibrary({
      collection: this.bookShelves,
      shelvings: this.shelvings
    });

    this._swapView(view);
  },

  newsfeed: function() {
    this.reviews.fetch();
    var view = new ShouldReads.Views.Newsfeed({
      collection: this.reviews
    });

    this._swapView(view);
  },

  search: function (query) {
    var url = "https://www.googleapis.com/books/v1/volumes?q=" +
      query + "&key=" + window.GOOGLE_API_KEY;
    var searchResults = new ShouldReads.Collections.SearchBooks({
      url: url
    });
    searchResults.fetch();
    var view = new ShouldReads.Views.SearchIndex({
      collection: searchResults
    });

    this._swapView(view);
  },

  show: function(id) {
    var book = this.books.getOrFetch(id);
    this.bookShelves.fetch();
    var view = new ShouldReads.Views.BookShow({
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
