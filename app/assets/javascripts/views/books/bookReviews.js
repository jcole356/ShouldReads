ShouldReads.Views.BookReviews = Backbone.View.extend({
  template: JST["reviews/show"],

  className: "book-review-content",

  initialize: function () {
    this.listenTo(this.collection, 'add sync remove', this.render);
  },

  initializeRateYos: function () {
    var $rateYos = this.$('.rateYo');
    if (!$rateYos.length) {
      return;
    }
    $rateYos.each(function (idx, rateYo) {
      $rateYo = $(rateYo);
      rating = $rateYo.data('rating');
      $rateYo.rateYo({
        fullStar: true,
        rating: rating,
        readOnly: true,
        starWidth: '25px',
      });
    });
  },

  render: function () {
    var content = this.template({
      book: this.model,
      reviews: this.collection,
    });
    this.$el.html(content);
    this.initializeRateYos();

    return this;
  },
});
