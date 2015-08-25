ShouldReads.Collections.BookShelvings = Backbone.Collection.extend({
  url: "/api/book_shelvings",

  model: ShouldReads.Models.BookShelving
});
