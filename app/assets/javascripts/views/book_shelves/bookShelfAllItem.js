ShouldReads.Views.AllItem = Backbone.View.extend({
  template: JST['bookShelves/all_item'],

  tagName: 'tr',

  className: "book-shelf-row",

  initialize: function () {
    this.listenTo(this.model, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      shelving: this.model
    });
    this.$el.html(content);

    return this;
  },
});
