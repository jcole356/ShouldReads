ShouldReads.Collections.BookReviews = Backbone.Collection.extend({
  model: ShouldReads.Models.Review,

  url: this.url,

  initialize: function (bookId) {
    this.url = 'api/book/' + bookId + '/reviews';
  },

  getOrFetch: function (id) {
    var review = this.get(id);
    var collection = this;
    if (review) {
      review.fetch();
    } else {
      review = new ShouldReads.Models.Review({ id: id });
      review.fetch({
        success: function () {
          collection.add(review);
        }
      });
    }

    return review;
  },
});
