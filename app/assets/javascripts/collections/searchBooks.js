ShouldReads.Collections.SearchBooks = Backbone.Collection.extend({
  url: this.url,

  model: ShouldReads.Models.SearchBook,

  initialize: function (options) {
    this.url = options.url;
  },

  parse: function (response) {
    return response.items;
  },
});
