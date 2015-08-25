ShouldReads.Collections.Books = Backbone.Collection.extend({
  model: ShouldReads.Models.Book,

  comparator: function (book) {
    return -book.escape('shelving_id');
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
