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

  addReview: function(event) {
    var reviewID = $(event.currentTarget).attr('data-id');
    var review = new ShouldReads.Models.Review();
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

  editReview: function(event) {
    var reviewID = $(event.currentTarget).attr('data-id');
    var review = this.reviews.getOrFetch(reviewID);
    var view = new ShouldReads.Views.ReviewForm({
      model: review,
      collection: this.reviews,
      book: this.model
    });

    $('body').prepend(view.render().$el);
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
