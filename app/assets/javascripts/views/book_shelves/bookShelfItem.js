ShouldReads.Views.ShelfItem = Backbone.View.extend({
  template: JST['book_shelves/shelf_item'],

  tagName: 'tr',

  className: "book-shelf-row",

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
