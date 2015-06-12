ShouldReads.Views.BookShelvesLibrary = Backbone.CompositeView.extend({

  template: JST['book_shelves/library'],

  events: {
    "click .book-title": "selectShelf"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, "add", this.addBook);
  },

  addBook: function(book) {

  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);

    return this;
  },

  selectShelf: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(id);
    debugger;
  }

});
