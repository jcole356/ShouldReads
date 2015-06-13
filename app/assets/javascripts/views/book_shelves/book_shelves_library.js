ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({
  template: JST['book_shelves/library'],

  className: "library-content",

  // This is confusing, this should be shelf title... change this later.
  events: {
    "click .book-title": "selectShelf"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addIndex);
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
    this.addSubview('.shelf-books', view);
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);
    return this;
  },

  selectShelf: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(id);
    var shelfBooks = shelf.books();
    var view = new ShouldReads.Views.ShelfBooks({
      id: id, // Probably don't need this anymore either.
      title: shelf.get('title'),
      collection: shelfBooks
    });

    this.addShelfBooks(view);
  }

});
