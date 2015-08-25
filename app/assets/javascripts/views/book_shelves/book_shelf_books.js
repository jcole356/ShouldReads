ShouldReads.Views.ShelfBooks = Backbone.CompositeView.extend({
  template: JST['book_shelves/books'],

  className: "shelf-books-list",

  events: {
    "click .shelving-delete": "removeBook"
  },

  initialize: function(options) {
    // this.title = options.title;
    // this.listenTo(this.collection, "remove", this.render);
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "add", this.addBookShelvingView);
    this.collection.each(this.addBookShelvingView.bind(this));
    this.listenTo(this.collection, "remove", this.removeBookShelvingView);
  },

  addBookShelvingView: function (book) {
    debugger
    var view = new ShouldReads.Views.ShelfItem({
      model: book
    });
    this.addSubview('.shelf-book-info-container', view);
  },

  removeBookShelvingView: function (book) {
    this.removeModelSubview('.shelf-book-info-container', book);
  },

  render: function() {
    var content = this.template({
      // bookShelfBooks: this.collection,
      // title: this.title,
      // shelvings: this.shelvings
    });
    this.$el.html(content);
    return this;
  },

  // This shouldn't change much...
  removeBook: function(event) {
    var shelvingID = $(event.currentTarget).attr('data-shelving-id');
    var shelving = this.shelvings.get({id: shelvingID});
    shelving.destroy();

    var bookId = $(event.currentTarget).attr('data-book-id');
    var book = this.collection.get(bookId);
    this.collection.remove(book);
  }
});
