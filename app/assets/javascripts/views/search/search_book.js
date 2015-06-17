ShouldReads.Views.SearchBook = Backbone.View.extend({
  template: JST['search/result'],

  className: 'search-book-info',

  events: {
  },

  render: function() {
    var content = this.template({
      searchBook: this.model
    });
    this.$el.html(content);

    return this;
  }



});
