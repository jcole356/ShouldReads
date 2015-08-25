ShouldReads.Collections.BookShelvings = Backbone.Collection.extend({
  url: "/api/book_shelvings",

  model: ShouldReads.Models.BookShelving,

  // This should be working now.
  comparator: function(shelving) {
    var dateString = shelving.get('created_at');
    var date = new Date(dateString);
    return date.getTime();
  }
});
