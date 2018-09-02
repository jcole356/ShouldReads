ShouldReads.Collections.BookShelves = Backbone.Collection.extend({
  model: ShouldReads.Models.Bookshelf,

  url: "api/book_shelves",

  comparator: function (book_shelf) {
    var dateString = book_shelf.get('created_at');
    var date = new Date(dateString);

    return date.getTime();
  },

  getOrFetch: function (id) {
    var bookshelf = this.get(id);
    var collection = this;
    if (bookshelf) {
      bookshelf.fetch();
    } else {
      bookshelf = new ShouldReads.Models.Bookshelf({ id: id });
      bookshelf.fetch({
        success: function () {
          collection.add(bookshelf);
        }
      });
    }

    return bookshelf;
  },
});
