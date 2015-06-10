ShouldReads.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.books = new ShouldReads.Collections.Books();
  },

  routes: {
    "": "index"
  },

  index: function () {
    this.books.fetch();

    var view = new ShouldReads.Views.BooksIndex({
      collection: this.books
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
