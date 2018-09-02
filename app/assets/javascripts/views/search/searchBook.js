ShouldReads.Views.SearchBook = Backbone.View.extend({
  template: JST['search/result'],

  className: "search-book-info row",

  events: {
    "click": "addOrRetrieve"
  },

  render: function() {
    var content = this.template({
      searchBook: this.model
    });
    this.$el.html(content);

    return this;
  },

  addOrRetrieve: function(event) {
    var model = this.model;
    var book = new ShouldReads.Models.Book({
      title: model.get('title'),
      author: model.get('author'),
      cover_image_url: model.get('cover_image_url'),
      number_of_pages: model.get('number_of_pages'),
      synopsis: model.get('description'),
      isbn: model.get('isbn')
    });
    book.save({}, {
      success: function() {
        Backbone.history.navigate(
          "books/" + book.id,
          { trigger: true }
        );
      }
    });
  }
});
