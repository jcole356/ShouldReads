ShouldReads.Views.BookShelvesIndex = Backbone.View.extend({
  template: JST['book_shelves/index'],

  className: "shelf-list",

  events: {
    "click .new-shelf": "addShelf",
    "click .shelf-delete": "destroyShelf"
  },

  initialize: function(options) {
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function() {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);

    return this;
  },

  addShelf: function(event) {
    event.preventDefault();
    var shelfName = this.$el.find('form').serializeJSON();
    var that = this;
    var bookShelf = new ShouldReads.Models.BookShelf();
    bookShelf.set({
      title: shelfName.book_shelf.title,
      owner_id: CURRENT_USER_ID
    });
    bookShelf.save({}, {
      success: function() {
        that.collection.add(bookShelf);
        that.collection.fetch();
      }
    });
  },

  destroyShelf: function (event) {
    var shelfID = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(shelfID);
    // Remove the shelvings from the collection first
    shelf.books().each(function(book) {
      var shelving = this.shelvings.get(book.attributes.shelving_id);
      shelving.destroy();
    }.bind(this));
    shelf.destroy();
  }
});
