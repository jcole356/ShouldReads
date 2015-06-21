ShouldReads.Views.Newsfeed = Backbone.CompositeView.extend({
  template: JST['newsfeed/index'],

  initialize:function() {
    this.listenTo(this.collection, "add", this.addFeedItem);
  },

  addFeedItem: function(review) {
    var view = new ShouldReads.Views.FeedItem({
      model: review
    });

    this.addSubview('.feed-items', view)
  },

  render: function() {
    var content = this.template({
      reviews: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
