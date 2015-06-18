ShouldReads.Views.ReviewForm = Backbone.View.extend({
  template: JST["reviews/form"],

  className: "m-backdrop",

  events: {
    "click .submit-review": "addReview",
    "click .close": "removeForm"
  },

  initialize: function(options) {
    this.book = options.book;
    // Does this even make sense here?
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      review: this.model,
      reviews: this.collection,
      book: this.book
    });
    this.$el.html(content);

    return this;
  },

  addReview: function(event) {
    event.preventDefault();
    var attrs = this.$el.find('form').serializeJSON();
    var that = this;
    var review = new ShouldReads.Models.Review();
    review.set({
      title: attrs.review.title,
      body: attrs.review.body,
      rating: attrs.review.rating,
      author_id: CURRENT_USER_ID,
      book_id: this.book.id
    });

    review.save({}, {
      success: function() {
        that.collection.add(review);
        that.collection.fetch();
        that.remove();
      }
    });
  },

  removeForm: function() {
    this.remove();
  }
});
