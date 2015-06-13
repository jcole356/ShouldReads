ShouldReads.Collections.BookShelves = Backbone.Collection.extend({

  model: ShouldReads.Models.BookShelf,

  url: "api/book_shelves",

  getOrFetch: function(id) {
    var book_shelf = this.get(id);
    var collection = this;

    if (book) {
      book_shelf.fetch();
    } else {
      book_shelf = new ShouldReads.Models.BookShelf({ id: id});
      book_shelf.fetch({
        success: function() {
          collection.add(book_shelf);
        }
      });
    }

    return book_shelf;
  }
});
