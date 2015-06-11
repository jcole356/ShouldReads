ShouldReads.Collections.Books = Backbone.Collection.extend({

  model: ShouldReads.Models.Book,

  url: "api/books",

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
