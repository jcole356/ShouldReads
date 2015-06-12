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
  }
});
