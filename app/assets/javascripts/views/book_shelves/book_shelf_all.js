ShouldReads.Views.AllShelf = Backbone.View.extend({

  template: JST['book_shelves/all'],

  className: "shelf-books-list",

  events: {
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      shelvings: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
