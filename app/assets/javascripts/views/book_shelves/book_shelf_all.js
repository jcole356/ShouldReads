ShouldReads.Views.AllShelf = Backbone.CompositeView.extend({
  template: JST['book_shelves/all'],

  className: "shelf-books-list",

  initialize: function(options) {
    this.bookShelves = options.bookShelves;
    this.listenTo(this.collection, "sync", this.render);
  },

  addBookShelvings: function () {
    debugger;
    this.collection.each(function(shelving) {
      var view = new ShouldReads.Views.AllItem({
        model: shelving
      });

      this.addSubview('.shelf-book-info-container', view);
    }.bind(this));
  },

  render: function() {
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
    this.addBookShelvings();
    this.attachSubviews();
    return this;
  }
});
