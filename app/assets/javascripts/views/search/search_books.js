ShouldReads.Views.SearchIndex = Backbone.View.extend({
  template: JST['search/results'],

  className: "book-index",

  events: {
    "click .index-book-info": "addOrRetrieve"
  },

  initialize: function() {
    this.listenTo(this.collection, "add", this.render);
  },

  render: function() {
    var content = this.template({
      searchBooks: this.collection
    });
    this.$el.html(content);
    return this;
  },

  addOrRetrieve: function(event) {
    var target = $(event.currentTarget);
    debugger;
  }
});
