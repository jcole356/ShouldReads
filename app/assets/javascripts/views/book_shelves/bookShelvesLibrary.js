ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({
  template: JST['bookShelves/library'],

  className: "library-content",

  events: {
    "click .shelf": "selectShelf"
  },

  initialize: function(options) {
    this.shelvings = options.shelvings;
    this.addIndex();
    this.addAllBookShelf();
  },

  // TODO: this should use the BookShelfIndex Class
  addAllBookShelf: function () {
    var oldView = this.subviews(".shelf-books").first();
    if (oldView) {
      this.removeSubview(".shelf-books", oldView);
    }
    var view = new ShouldReads.Views.AllShelf({
      collection: this.shelvings,
    });

    this.addSubview('.shelf-books', view);
  },

  addIndex: function () {
    var view = new ShouldReads.Views.BookShelvesIndex({
      collection: this.collection,
      shelvings: this.shelvings,
    });

    this.addSubview('.shelf-index', view);
  },

  addShelfBooks: function (view) {
    if (view) {
      var oldView = this.subviews(".shelf-books").first();
      if (oldView) {
        this.removeSubview(".shelf-books", oldView);
      }
      this.addSubview('.shelf-books', view);
    } else {
      // TODO: where are shelvings and shelfBooks coming from?
      view = new ShouldReads.Views.ShelfBooks({
        title: shelf.get('title'),
        collection: shelfBooks,
        shelvings: shelvings
      });
      this.addSubview('.shelf-books', view);
    }
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
    $(".shelf-title-header").html(": " + shelfTitle);
    if (shelfTitle === "All") {
      this.addAllBookShelf();
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
