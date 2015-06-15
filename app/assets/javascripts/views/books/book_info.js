ShouldReads.Views.BookInfo = Backbone.View.extend({
  template: JST['books/info'],

  className: "show-book-info",

  events: {
    "click .add-book": "addBookToShelf"
  },

  initialize: function(options) {
    this.bookShelves = options.bookShelves;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.bookShelves, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
    });
    this.$el.html(content);
    return this;
  },

  addBookToShelf: function(event) {
    var shelfID = $('#shelf_choice').val();
    var shelving = new ShouldReads.Models.BookShelving();
    var that = this;
    shelving.set({
      shelf_id: shelfID,
      book_id: this.model.id
    });
    shelving.save({}, {
      success: function() {
        // Need to keep these from accumulating.
        var response = that.model.escape('title') + " has been added to your shelf";
        $('.show-info').append($('<div class="bg-success">').html(response));
      }
    });

    var allShelf = this.bookShelves.findWhere({ title: "All" });
    var allShelving = new ShouldReads.Models.BookShelving();
    allShelving.save({
      shelf_id: allShelf.id,
      book_id: this.model.id
    });
  }
});
