ShouldReads.Views.FeedItem = Backbone.View.extend({
  template: JST['newsfeed/item'],

  className: "feed-item clear",

  // initialize: function() {
  //   this.listenTo(this.model, "sync", this.render);
  // },

  render: function() {
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);

    return this;
  }
});
