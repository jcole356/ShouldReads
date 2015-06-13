ShouldReads.Views.BookReviews = Backbone.View.extend({
  template: JST["reviews/show"],

  className: "book-review-content",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      reviews: this.collection,
      review: this.model
    });
    this.$el.html(content);

    return this;
  }
});
