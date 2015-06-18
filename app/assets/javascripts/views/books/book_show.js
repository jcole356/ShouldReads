ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    "click .add-review": "reviewBook",
    "click .edit-review": "reviewBook",
    "click .delete-review": "deleteReview"
  },

  initialize: function(options) {
    this.reviews = options.reviews;
    this.bookShelves = options.bookShelves;
    // Changed both of these to add events.
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "add", this.addInfo);
    this.listenTo(this.collection, "sync", this.addReviews);
  },

  addInfo: function() {
    this.bookShelves.fetch();
    var view = new ShouldReads.Views.BookInfo({
      model: this.model,
      bookShelves: this.bookShelves
    });

    this.addSubview('.book-info', view);
  },

  // Need to change this to allow for editing reviews as well.
  reviewBook: function(event) {
    // Should probably get or fetch a review here and pass that in
    // as a model
    var reviewID = $(event.currentTarget).attr('data-id');
    var review = this.reviews.getOrFetch(reviewID);
    var view = new ShouldReads.Views.ReviewForm({
      model: review,
      collection: this.reviews,
      book: this.model
    });

    $('body').prepend(view.render().$el);
  },

  addReviews: function() {
    this.reviews.fetch();
    var view = new ShouldReads.Views.BookReviews({
      collection: this.reviews,
      model: this.model
    });

    this.addSubview('.book-reviews', view);
  },

  deleteReview: function(event) {
    var reviewID = $(event.currentTarget).attr('data-id')
    var review = this.reviews.get(reviewID);
    review.destroy();
  },

  render: function() {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
