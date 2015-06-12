ShouldReads.Views.BookShelvesIndex = Backbone.View.extend({

  template: JST['book_shelves/index'],

  events: {
    "click .book-title": "selectShelf"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);

    return this;
  },

  // selectShelf: function(event) {
  //   var id = $(event.currentTarget).attr('data-id');
  //   var shelf = this.collection.get(id);
  //
  //   // Not sure this is where this happens or not.
  //   var view = new Backbone.Views.bookShelfBooks({
  //     collection: shelf.books
  //   });
  // }

});
