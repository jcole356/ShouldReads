ShouldReads.Views.ShelfItem = Backbone.View.extend({
  template: JST['bookShelves/shelf_item'],

  tagName: 'tr',

  className: "book-shelf-row",

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model,
      title: false,
    });
    this.$el.html(content);
    
    return this;
  },
});
