ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    "click .add-review": "addReview",
    "click .edit-review": "editReview",
    "click .delete-review": "deleteReview"
  },

  initialize: function(options) {
    this.reviews = options.reviews;
    this.bookShelves = options.bookShelves;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addInfo);
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
  addReview: function() {
    // Should probably get or fetch a review here and pass that in
    // as a model
    var view = new ShouldReads.Views.ReviewForm({
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

  // Not sure why this is not returning a valid id.
  deleteReview: function(event) {
    var reviewID = $(event.currentTarget).attr('data-id')
    var review = this.reviews.get(reviewID);
    review.destroy();
  },

  render: function() {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
      // user: this.user
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
