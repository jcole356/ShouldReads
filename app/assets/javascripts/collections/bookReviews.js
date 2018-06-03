ShouldReads.Collections.BookReviews = Backbone.Collection.extend({
  model: ShouldReads.Models.Review,

  url: this.url,

  initialize: function (bookId) {
    this.url = 'api/book/' + bookId + '/reviews';
  },
});
