ShouldReads.Views.AllShelf = Backbone.View.extend({

  template: JST['book_shelves/all'],

  className: "shelf-books-list",

  events: {
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  // Attempting to make a default for new users.
  render: function() {
    // debugger;
    if (this.collection.length === 0) {
      var content = $('<h3 class="empty-bookshelf">').html(
        "You don't have any books yet."
        );
      content.append('<br><br>').append(
        "Try searching for books to add to your shelves."
      );
    } else {
      var content = this.template({
        shelvings: this.collection
      });
    }
    this.$el.html(content);

    return this;
  }
});
