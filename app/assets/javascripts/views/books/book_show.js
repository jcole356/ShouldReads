ShouldReads.Views.BookShow = Backbone.CompositeView.extend({
  template: JST['books/show'],

  className: "show-container",

  events: {
    "click .add-book": "addBookToShelf"
  },

  initialize: function(options) {
    // Do I need this first listener?
    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addInfo);
    this.listenTo(this.collection, "sync", this.addReviews);
    this.user = options.user;
  },

  addInfo: function() {
    var view = new ShouldReads.Views.BookInfo({
      model: this.model,
      collection: this.collection
    });

    this.addSubview('.book-info', view);
  },

  addReviews: function() {
    var reviews = new ShouldReads.Collections.Reviews();
    reviews.fetch();
    var view = new ShouldReads.Views.BookReviews({
      collection: reviews
    });

    this.addSubview('.book-reviews', view);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      book_shelves: this.collection,
      user: this.user
    });
    this.$el.html(content);
    return this;
  },

});
