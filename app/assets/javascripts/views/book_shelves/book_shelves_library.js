ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({
  template: JST['book_shelves/library'],

  className: "library-content",

  events: {
    "click .shelf": "selectShelf"
  },

  initialize: function(options) {
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "reset", this.render);
  },

  addAllBookShelf: function () {
    $(".shelf-title-header").html(": All");
    var oldView = this.subviews(".shelf-books").first();
    if (oldView) {
      this.removeSubview(".shelf-books", oldView);
    }
    // this.shelvings.fetch();
    var view = new ShouldReads.Views.AllShelf({
      collection: this.shelvings,
      bookShelves: this.collection
    });

    this.addSubview('.shelf-books', view);
  },

  addIndex: function() {
    var view = new ShouldReads.Views.BookShelvesIndex({
      collection: this.collection,
      shelvings: this.shelvings
    });

    this.addSubview('.shelf-index', view);
  },

  addShelfBooks: function(view) {
    if (view) {
      var oldView = this.subviews(".shelf-books").first();
      if (oldView) {
        this.removeSubview(".shelf-books", oldView);
      }
      this.addSubview('.shelf-books', view);
    } else {
      var that = this;
      var shelvings = new ShouldReads.Collections.BookShelvings();
      shelvings.fetch();
      this.collection.fetch({
        success: function () {
          var shelf = that.collection.findWhere({ title: "All" })
          var shelfBooks = shelf.books();
          view = new ShouldReads.Views.ShelfBooks({
            title: shelf.get('title'),
            collection: shelfBooks,
            shelvings: shelvings
          });
          that.addSubview('.shelf-books', view);
        }
      });
    }
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);
    this.addAllBookShelf();
    this.addIndex();
    this.attachSubviews();
    return this;
  },

  selectShelf: function(event) {
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
        collection: shelfBooks
      });

      this.addShelfBooks(view);
    }
  }
});
