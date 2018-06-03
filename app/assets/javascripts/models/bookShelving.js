ShouldReads.Models.BookShelving = Backbone.Model.extend({
  urlRoot: "api/book_shelvings",

  book: function () {
    if (!this._book) {
      this._book = new ShouldReads.Models.Book([], { bookShelf: this });
    }

    return this._book;
  },

  parse: function(response) {
    if (response.book) {
      this.book().set(response.book);
      delete response.book;
    }

    return response;
  },
});
