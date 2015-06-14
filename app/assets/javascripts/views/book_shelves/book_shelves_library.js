ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({
  template: JST['book_shelves/library'],

  className: "library-content",

  // This is confusing, this should be shelf title... change this later.
  events: {
    "click .shelf-title": "selectShelf"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addIndex);
    // This may not work quite right...
    this.listenTo(this.collection, "sync", this.addShelfBooks());
  },

  addIndex: function() {
    var view = new ShouldReads.Views.BookShelvesIndex({
      collection: this.collection
    });

    this.addSubview('.shelf-index', view);
  },

  addShelfBooks: function(view) {
    var oldView = this.subviews(".shelf-books").first();
    if (oldView) {
      this.removeSubview(".shelf-books", oldView);
    }

    // Not sure why this doesn't work??  Looks like once the view
    // finally gets rendered it never gets appended to the composite.
    if (!view) {
      var that = this;
      this.collection.fetch({
        success: function() {
          var shelf = that.collection.at(0);
          var shelfBooks = shelf.books();
          view = new ShouldReads.Views.ShelfBooks({
            title: shelf.get('title'),
            collection: shelfBooks,
          });
          that.addSubview('.shelf-books', view);
        }
      });
    } else {
      this.addSubview('.shelf-books', view);
    }
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);
    // this.attchSubviews();
    return this;
  },

  selectShelf: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(id);
    var shelfBooks = shelf.books();
    var view = new ShouldReads.Views.ShelfBooks({
      // Probably don't need this anymore either.
      // id: id,
      title: shelf.get('title'),
      collection: shelfBooks
    });

    this.addShelfBooks(view);
  }

});
