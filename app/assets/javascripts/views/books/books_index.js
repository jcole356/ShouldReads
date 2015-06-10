ShouldReads.Views.BooksIndex = Backbone.View.extend({

  template: JST['books/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
  },

  render: function () {
    var content = this.template({
      books: this.collection
    });
    this.$el.html(content);
    return this;
  }

});
