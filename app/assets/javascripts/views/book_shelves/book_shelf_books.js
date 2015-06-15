ShouldReads.Views.ShelfBooks = Backbone.View.extend({

  template: JST['book_shelves/books'],

  className: "shelf-books-list",

  // Not sure how to do this
  // events: {
  //   "click .remove-book": "removeBook"
  // },

  initialize: function(options) {
    this.id = options.id;  // Probably won't need this either
    this.title = options.title;
    this.listenTo(this.collection, "sync", this.render);
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

  // Need to revisit this on Monday.
  // removeBook: function(event) {
  //   var book_id = $(event.currentTarget).attr('data-id');
  //   var shelf_id = $(event.currentTarget).attr('data-shelf');
  //   $.ajax({
  //     url: "api/book_shelvings",
  //     type: "DELETE",
  //     data: { shelf_id: shelf_id, book_id: book_id },
  //     success: function() {
  //       console.log("something good");
  //     }
  //   });
  // }
});
