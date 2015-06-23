ShouldReads.Collections.Reviews = Backbone.Collection.extend({
  url: "/api/reviews",

  model: ShouldReads.Models.Review,

  comparator: function(review) {
    var dateString = review.get('updated_at');
    var date = new Date(dateString);
    return -date.getTime();
  },

  getOrFetch: function(id) {
    var review = this.get(id);
    var collection = this;

    if (review) {
      review.fetch();
    } else {
      review = new ShouldReads.Models.Review({ id: id});
      review.fetch({
        success: function() {
          collection.add(review);
        }
      });
    }

    return review;
  }
});
