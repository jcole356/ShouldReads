ShouldReads.Views.ShelfItem = Backbone.View.extend({
  template: JST['bookshelves/shelf_item'],

  tagName: 'tr',

  className: "book-shelf-row",

  initialize: function (options) {
    this.all = options.all;
    this.listenTo(this.model, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      book: this.all ? this.model._book : this.model,
      title: this.all ? this.model.get('title') : false,
    });
    this.$el.html(content);
    
    return this;
  },
});
