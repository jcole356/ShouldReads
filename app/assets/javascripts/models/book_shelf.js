ShouldReads.Models.BookShelf = Backbone.Model.extend({
  urlRoot: "api/book_shelves",

  books: function() {
    if (!this._books) {
      this._books = new ShouldReads.Collections.Books([], { bookShelf: this });
    }

    return this._books;
  },

  parse: function(response) {
    if (response.books) {
      this.books().set(response.books, { parse: true });
      delete response.books;
    }

    return response;
  }
});
