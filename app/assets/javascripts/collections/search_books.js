ShouldReads.Collections.SearchBooks = Backbone.Collection.extend({
  initialize: function(options) {
    this.url = options.url;
  },

  url: this.url,
  model: ShouldReads.Models.SearchBook
});
