ShouldReads.Views.FeedItem = Backbone.View.extend({
  template: JST['newsfeed/item'],

  className: "feed-item row",

  render: function () {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);

    return this;
  },
});
