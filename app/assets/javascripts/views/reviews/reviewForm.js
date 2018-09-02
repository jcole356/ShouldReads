ShouldReads.Views.ReviewForm = Backbone.View.extend({
  template: JST["reviews/form"],

  className: "m-backdrop",

  events: {
    "click .close": "remove",
    "click .submit-review": "submitReview",
  },

  initialize: function (options) {
    this.book = options.book;
    this.listenTo(this.model, 'sync', this.render);
  },

  initializeRateYo: function () {
    var self = this;
    var $rateYo = $('#rateYo');
    if (!$rateYo.length) {
      return;
    }
    $('#rateYo').rateYo({
      fullStar: true,
      rating: self.model.get('rating') || 0,
    });
  },

  didInsertElement: function () {
    this.initializeRateYo();
  },

  render: function () {
    var content = this.template({
      book: this.book,
      review: this.model,
      reviews: this.collection,
    });
    this.$el.html(content);
    this.initializeRateYo();

    return this;
  },

  submitReview: function (e) {
    e.preventDefault();
    var attrs = this.$el.find('form').serializeJSON();
    var rating = $('#rateYo').rateYo('rating');
    var review = this.model;
    review.set({
      author_id: CURRENT_USER_ID,
      body: attrs.review.body,
      book_id: this.book.id,
      id: review.id,
      rating: rating,
      title: attrs.review.title,
    });
    review.save({}, {
      success: function (model) {
        this.collection.add(model, { merge: true });
        this.remove();
      }.bind(this)
    });
  },
});
