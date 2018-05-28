ShouldReads.Views.AllItem = Backbone.View.extend({
  template: JST['bookshelves/shelf_item'],

  tagName: 'tr',

  className: "book-shelf-row",

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model._book,
      title: this.model.get('title'),
    });
    this.$el.html(content);

    return this;
  },
});
