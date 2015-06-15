ShouldReads.Views.ShelfBooks = Backbone.View.extend({

  template: JST['book_shelves/books'],

  className: "shelf-books-list",

  // Have the shelving ID in this veiw now.  Should be able to make this
  // work now.
  events: {
    "click .shelving-delete": "removeBook"
  },

  initialize: function(options) {
    this.id = options.id;  // Probably won't need this either
    this.title = options.title;
    // Suspecting this does nothing.
    // this.listenTo(this.collection, "sync remove", this.render);
  },

  render: function() {
    var content = this.template({
      bookShelfBooks: this.collection,
      title: this.title
     // Probably not doing any good.
    //  id: this.id
    });
    this.$el.html(content);
    return this;
  },

  // Seems to be working.  Now I should re-render the view.
  removeBook: function(event) {
    var shelvingID = $(event.currentTarget).attr('data-id');
    var shelving = new ShouldReads.Models.BookShelving({ id: shelvingID });
    var that = this;
    shelving.destroy({
      success: function() {
        that.render();
      }
    });
  }
});
