ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    "click .add-review": "addReview",
    // Seems to be working fine without this.
    // "click .submit-review": "addReviews"
  },

  initialize: function(options) {
    // Do I need this first listener?
    // this.user = options.user;
    // this.listenTo(this.user, "sync", this.render);
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

  addReview: function() {
    var view = new ShouldReads.Views.ReviewForm({
      collection: this.reviews,
      book: this.model
    });

    $('body').prepend(view.render().$el);
    // I don't think this is necessary
    // this.addSubview('.form-modal', view);
  },

  addReviews: function() {
    // var reviews = new ShouldReads.Collections.Reviews();
    this.reviews.fetch();
    var view = new ShouldReads.Views.BookReviews({
      collection: this.reviews,
      model: this.model
    });

    this.addSubview('.book-reviews', view);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
      // user: this.user
    });
    this.$el.html(content);

    return this;
  },

});
