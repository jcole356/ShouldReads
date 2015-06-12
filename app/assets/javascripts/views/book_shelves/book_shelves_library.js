ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({

  template: JST['book_shelves/library'],

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
    this.addSubview('.shelf-books', view);
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);
    // render subview 1
    // render subview 2

    return this;
  },

  selectShelf: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(id);
    var books = shelf.books();
    books.fetch();
    var view = new ShouldReads.Views.ShelfBooks({
      title: shelf.get('title'),
      collection: books
    });

    this.addShelfBooks(view);
  }

});
