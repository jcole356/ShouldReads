ShouldReads.Views.ShelfBooks = Backbone.View.extend({

  template: JST['book_shelves/books'],

  initialize: function(options) {
    this.title = options.title;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      bookShelfBooks: this.collection,
      title: this.title
    });
    this.$el.html(content);

    return this;
  }
});
