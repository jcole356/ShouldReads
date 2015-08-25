ShouldReads.Collections.BookShelvings = Backbone.Collection.extend({
  url: "/api/book_shelvings",

  model: ShouldReads.Models.BookShelving,

  // Not sure if this is really doing anything or not.  The All shelf is
  // working the way I would like it to, but not the others.
  // The others aren't working correctly because I haven't refactored
  // the views yet.
  comparator: function(review) {
    debugger
    var dateString = review.get('created_at');
    var date = new Date(dateString);
    return -date.getTime();
  }
});
