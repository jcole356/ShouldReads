ShouldReads.Views.BookShelvesIndex = Backbone.View.extend({

  template: JST['book_shelves/index'],

  initialize: function() {
    // This is my original listener
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
