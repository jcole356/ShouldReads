ShouldReads.Views.SearchIndex = Backbone.CompositeView.extend({
  template: JST['search/results'],

  // className: "book-index",

  // events: {
  //   "click .index-book-info": "addOrRetrieve"
  // },

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
  },

  renderResults: function() {
    this.collection.each(this.addResult(book).bind(this));
  }

  // addOrRetrieve: function(event) {
  //   var target = $(event.currentTarget);
  //   debugger;
  // }
});
