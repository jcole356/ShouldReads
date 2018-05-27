ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    "click .add-review": "openReviewModal",
    "click .edit-review": "openReviewModal",
    "click .delete-review": "deleteReview",
  },

  initialize: function(options) {
    this.reviews = options.reviews;
    this.bookShelves = options.bookShelves;
    this.listenTo(this.collection, "add", this.render);
    this.addInfo();
    this.addReviews();
  },

  addInfo: function() {
    var view = new ShouldReads.Views.BookInfo({
      model: this.model,
      bookShelves: this.bookShelves
    });

    this.addSubview('.book-info', view);
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
    var reviewID = $(event.currentTarget).attr('data-id');
    var review = this.reviews.get(reviewID);
    review.destroy({
      success: function () { this.model.fetch() }.bind(this)
    });
  },

  openReviewModal: function(event) {
    var reviewId = $(event.currentTarget).attr('data-id');
    var review;
    if (reviewId) {
      review = this.reviews.getOrFetch(reviewId);
    } else {
      review = new ShouldReads.Models.Review();
    }
    var view = new ShouldReads.Views.ReviewForm({
      book: this.model,
      collection: this.reviews,
      model: review
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
  }
});
