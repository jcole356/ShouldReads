ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.books = options.collection;
  },

  routes: {
    "": "index",
    "books/:id": "show"
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
