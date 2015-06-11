ShouldReads.Views.BookShelvesIndex = Backbone.CompositeView.extend({

  template: JST['book_shelves/index'],

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
