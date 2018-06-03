ShouldReads.Views.BookReviews = Backbone.View.extend({
  template: JST["reviews/show"],

  className: "book-review-content",

  initialize: function() {
    this.listenTo(this.collection, 'add sync remove', this.render);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      reviews: this.collection,
    });
    this.$el.html(content);

    return this;
  },
});
