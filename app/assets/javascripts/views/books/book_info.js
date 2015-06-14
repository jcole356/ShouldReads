ShouldReads.Views.BookInfo = Backbone.View.extend({
  template: JST['books/info'],

  className: "show-book-info",

  events: {
    "click .add-book": "addBookToShelf"
  },

  initialize: function(options) {
    // this.listenTo(this.user, "sync", this.render);
    // this.user = options.user;
    this.bookShelves = options.bookShelves;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.bookShelves, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
      // user: this.user
    });
    this.$el.html(content);
    return this;
  },

  // Need to figure out a way to keep this value for destroying
  // Bookshelvings.
  addBookToShelf: function(event) {
    var shelfID = $('#shelf_choice').val();
    // This only works for this user because of the id's of his shelves.
    // var shelfTitle = $($('#shelf_choice').find('option')[shelfID - 1]).attr('data-title');
    var shelving = new ShouldReads.Models.BookShelving();
    var that = this;
    shelving.set({
      shelf_id: shelfID,
      book_id: this.model.id
    });
    shelving.save({}, {
      success: function() {
        var response = that.model.escape('title') + " has been added to your shelf";
        $('.show-info').append($('<div class="bg-success">').html(response));
      }
    });
  }

});
