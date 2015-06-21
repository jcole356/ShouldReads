ShouldReads.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search/results'],

  className: "search-index",

  initialize: function() {
    this.listenTo(this.collection, "add", this.addResult);
  },

  render: function() {
    var content = this.template({
      searchBooks: this.collection
    });
    this.$el.html(content);

    return this;
  },

  addResult: function(book) {
    var view = new ShouldReads.Views.SearchBook({
      model: book
    });

    this.addSubview('.search-book', view);
  }
});
