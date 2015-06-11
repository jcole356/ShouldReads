ShouldReads.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      books: this.collection
    });

    this.$el.html(content);
    return this;
  }

});
