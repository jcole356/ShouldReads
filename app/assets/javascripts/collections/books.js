ShouldReads.Collections.Books = Backbone.Collection.extend({

  model: ShouldReads.Models.Book,

  url: "api/books",

  initialize: function(models, options) {
    if (options) {
      this.book_shelf = options.book_shelf;
    }
  },

  getOrFetch: function(id) {
    var book = this.get(id);
    var collection = this;

    if (book) {
      book.fetch();
    } else {
      book = new ShouldReads.Models.Book({ id: id});
      book.fetch({
        success: function() {
          collection.add(book);
        }
      });
    }

    return book;
  }

});
