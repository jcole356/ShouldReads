ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({

  template: JST['book_shelves/library'],

  initialize: function() {
    // This is my original listener
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "add", this.addBook);
  },

  addBook: function(book) {

  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);
    return this;
  }

});
