ShouldReads.Views.ShelfBooks = Backbone.View.extend({

  template: JST['book_shelves/books'],

  className: "shelf-books-list",

  events: {
    "click .shelving-delete": "removeBook"
  },

  initialize: function(options) {
    this.title = options.title;
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function() {
    var content = this.template({
      bookShelfBooks: this.collection,
      title: this.title
    });
    this.$el.html(content);
    return this;
  },

  removeBook: function(event) {
    var shelvingID = $(event.currentTarget).attr('data-shelving-id');
    var shelving = new ShouldReads.Models.BookShelving({ id: shelvingID });
    shelving.destroy();

    var bookId = $(event.currentTarget).attr('data-book-id');
    var book = this.collection.get(bookId);
    this.collection.remove(book);
  }
});
