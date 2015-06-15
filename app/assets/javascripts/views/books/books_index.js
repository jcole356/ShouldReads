ShouldReads.Views.BooksIndex = Backbone.View.extend({

  template: JST['books/index'],

  className: "book-index",

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
  },

  render: function () {
    debugger;
    var content = this.template({
      books: this.collection
    });
    this.$el.html(content);
    return this;
  }

});
