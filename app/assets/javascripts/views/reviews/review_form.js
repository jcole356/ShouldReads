ShouldReads.Views.ReviewForm = Backbone.View.extend({
  template: JST["reviews/form"],

  className: "m-backdrop",

  events: {
    "click .close": "remove",
    "click .submit-review": "submitReview",
  },

  initialize: function(options) {
    this.book = options.book;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      book: this.book,
      review: this.model,
      reviews: this.collection,
    });
    this.$el.html(content);
    $('#rateYo').rateYo({
      rating: this.model.get('rating') || 0
    }).bind(this);

    return this;
  },

  submitReview: function(event) {
    event.preventDefault();
    var attrs = this.$el.find('form').serializeJSON();
    var review = this.model;
    review.set({
      author_id: CURRENT_USER_ID,
      body: attrs.review.body,
      book_id: this.book.id,
      id: review.id,
      rating: attrs.review.rating,
      title: attrs.review.title,
    });
    review.save({}, {
      success: function() {
        this.collection.add(review, { merge: true });
        this.remove();
      }.bind(this)
    });
  },
});
