ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    // "click .add-review": "addReview",
    // "click .submit-review": "addReviews"
  },

  initialize: function(options) {
    // Do I need this first listener?
    // this.user = options.user;
    this.reviews = options.reviews;
    // this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addInfo);
    // this.listenTo(this.collection, "sync", this.addReviews);
  },

  addInfo: function() {
    var view = new ShouldReads.Views.BookInfo({
      model: this.model,
      collection: this.collection
    });

    this.addSubview('.book-info', view);
  },

  addReview: function() {
    var view = new ShouldReads.Views.ReviewForm({
      collection: this.reviews,
      book: this.model
    });

    this.addSubview('.form-modal', view);
  },

  addReviews: function() {
    var reviews = new ShouldReads.Collections.Reviews();
    reviews.fetch();
    var view = new ShouldReads.Views.BookReviews({
      collection: reviews,
      model: this.model
    });

    this.addSubview('.book-reviews', view);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      book_shelves: this.collection,
      // user: this.user
    });
    this.$el.html(content);

    return this;
  },

});
