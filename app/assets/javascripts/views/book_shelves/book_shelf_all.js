ShouldReads.Views.AllShelf = Backbone.CompositeView.extend({
  template: JST['book_shelves/all'],

  className: "shelf-books-list",

  initialize: function(options) {
    this.bookShelves = options.bookShelves;
    this.listenTo(this.collection, "add", this.addBookShelvingView);
    this.collection.each(this.addBookShelvingView.bind(this));
    this.listenTo(this.collection, "remove", this.removeBookShelvingView);
  },

  addBookShelvingView: function (shelving) {
    var view = new ShouldReads.Views.AllItem({
      model: shelving
    });
    this.addSubview('.shelf-book-info-container', view);
  },

  removeBookShelvingView: function (shelving) {
    this.removeModelSubview('.shelf-book-info-container', shelving);
  },

  render: function() {
    var content = this.template({
      // shelvings: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
