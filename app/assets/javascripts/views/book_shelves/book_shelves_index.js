ShouldReads.Views.BookShelvesIndex = Backbone.View.extend({

  template: JST['book_shelves/index'],

  events: {
    "click .new-shelf": "addShelf"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
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
  }
});
