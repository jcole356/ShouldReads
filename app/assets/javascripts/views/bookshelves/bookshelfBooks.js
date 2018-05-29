ShouldReads.Views.ShelfBooks = Backbone.CompositeView.extend({
  template: JST['bookshelves/books'],

  className: "shelf-books-list",

  events: {
    "click .shelving-delete": "removeBook",
  },

  initialize: function (options) {
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "add", this.addBookshelvingView);
    this.collection.each(this.addBookshelvingView.bind(this));
    this.listenTo(this.collection, "remove", this.removeBookshelvingView);
  },

  addBookshelvingView: function (book) {
    var view = new ShouldReads.Views.ShelfItem({
      model: book
    });
    this.addSubview('.shelf-book-info-container', view);
  },

  removeBookshelvingView: function (book) {
    this.removeModelSubview('.shelf-book-info-container', book);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  removeBook: function (event) {
    var shelvingID = $(event.currentTarget).attr('data-shelving-id');
    var shelving = this.shelvings.get({id: shelvingID});
    shelving.destroy();

    var bookId = $(event.currentTarget).attr('data-book-id');
    var book = this.collection.get(bookId);
    this.collection.remove(book);
  },
});
