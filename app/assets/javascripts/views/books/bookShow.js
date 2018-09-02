ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container row",

  events: {
    "click .add-review": "openReviewModal",
    "click .delete-review": "deleteReview",
    "click .edit-review": "openReviewModal",
  },

  initialize: function (options) {
    this.reviews = new ShouldReads.Collections.BookReviews(this.model.get('id'));
    this.bookShelves = options.bookShelves;
    this.addInfo();
    this.addReviews();
  },

  addInfo: function () {
    var view = new ShouldReads.Views.BookInfo({
      bookShelves: this.bookShelves,
      model: this.model,
    });
    this.addSubview('.book-info', view);
  },

  addReviews: function () {
    this.reviews.fetch();
    var view = new ShouldReads.Views.BookReviews({
      collection: this.reviews,
      model: this.model
    });
    this.addSubview('.book-reviews', view);
  },

  deleteReview: function (event) {
    var reviewID = $(event.currentTarget).attr('data-id');
    var review = this.reviews.get(reviewID);
    review.destroy({
      success: function () { this.model.fetch() }.bind(this)
    });
  },

  openReviewModal: function (event) {
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
    view.didInsertElement();
  },

  render: function () {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
    });
    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  },
});
