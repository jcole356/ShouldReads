ShouldReads.Views.FeedItem = Backbone.View.extend({
  template: JST['newsfeed/item'],

  className: "feed-item row",

  initializeRateYo: function () {
    var $rateYo = this.$('.rateYo');
    if (!$rateYo.length) {
      return;
    }
    $rateYo.rateYo({
      fullStar: true,
      rating: this.model.get('rating'),
      readOnly: true,
      starWidth: '25px',
    });
  },

  render: function () {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    this.initializeRateYo();

    return this;
  },
});
