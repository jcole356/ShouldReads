ShouldReads.Views.ShelfBooks = Backbone.CompositeView.extend({
  template: JST['bookshelves/books'],

  className: "shelf-books-list",

  events: {
    "click .shelving-delete": "removeBook",
  },

  initialize: function (options) {
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "add", this.addBookshelvingView);
    this.listenTo(this.collection, "remove", this.removeBookshelvingView);
    this.collection.each(this.addBookshelvingView.bind(this));
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

  removeBook: function (e) {
    e.preventDefault();
    var shelvingID = $(e.currentTarget).attr('data-shelving-id');
    var shelving = this.shelvings.get({ id: shelvingID });
    shelving.destroy();
    var bookId = $(e.currentTarget).attr('data-book-id');
    var book = this.collection.get(bookId);
    this.collection.remove(book);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },
});
