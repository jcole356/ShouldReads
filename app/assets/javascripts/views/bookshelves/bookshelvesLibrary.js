ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({
  template: JST['bookshelves/library'],

  className: "library-content row",

  events: {
    "click .shelf": "selectShelf",
  },

  initialize: function (options) {
    this.shelvings = options.shelvings;
    this.addShelfIndex();
    this.addAllBookshelf();
  },

  addAllBookshelf: function () {
    var oldView = this.subviews('.shelf-books').first();
    if (oldView) {
      this.removeSubview('.shelf-books', oldView);
    }
    var view = new ShouldReads.Views.AllShelf({
      collection: this.shelvings,
    });
    this.addSubview('.shelf-books', view);
  },

  addShelfBooks: function (view) {
    var oldView = this.subviews('.shelf-books').first();
    if (oldView) {
      this.removeSubview('.shelf-books', oldView);
    }
    this.addSubview('.shelf-books', view);
  },

  addShelfIndex: function () {
    var view = new ShouldReads.Views.BookshelvesIndex({
      collection: this.collection,
      shelvings: this.shelvings,
    });

    this.addSubview('.shelf-index', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  selectShelf: function (event) {
    var id = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(id);
    var shelfTitle = shelf.escape('title');
    $('.shelf-title-header').html(': ' + shelfTitle);
    if (shelfTitle === "All") {
      this.addAllBookshelf();
    } else {
      var shelfBooks = shelf.books();
      var view = new ShouldReads.Views.ShelfBooks({
        title: shelf.get('title'),
        collection: shelfBooks,
        shelvings: this.shelvings
      });
      this.addShelfBooks(view);
    }
  },
});
