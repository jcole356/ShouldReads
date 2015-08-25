ShouldReads.Collections.Books = Backbone.Collection.extend({
  model: ShouldReads.Models.Book,

  // url: "api/books",

  comparator: function (book) {
    return book.escape('title');
    // var dateString = book.get('');
    // var date = new Date(dateString);
    // return -date.getTime();
  },

  initialize: function (models, options) {
    if (options) {
      this.bookShelf = options.bookShelf;
    }
  },

  getOrFetch: function (id) {
    var book = this.get(id);
    var collection = this;
    if (book) {
      book.fetch();
    } else {
      book = new ShouldReads.Models.Book({ id: id});
      book.fetch({
        success: function () {
          collection.add(book);
        }
      });
    }

    return book;
  }
});
