ShouldReads.Views.SearchBook = Backbone.View.extend({
  template: JST['search/result'],

  className: 'search-book-info',

  events: {
    "click .index-book-info": "addOrRetrieve"
  },

  render: function() {
    var content = this.template({
      searchBook: this.model
    });
    this.$el.html(content);

    return this;
  },

  addOrRetrieve: function(event) {
    var attrs = this.model.attributes;
    var book = new ShouldReads.Models.Book({
      title: attrs.title,
      author: attrs.author,
      cover_image_url: attrs.cover_image_url,
      number_of_pages: attrs.number_of_pages,
      synopsis: attrs.description
    });
    book.save({}, {
      success: function() {
        Backbone.history.navigate("books/" + book.id, { trigger: true });
      }
    });
  }

});
