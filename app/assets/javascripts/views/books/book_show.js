ShouldReads.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  className: "book-show",

  events: {
    "click .add-book": "addBookToShelf"
  },

  initialize: function(options) {
    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
    this.user = options.user;
  },

  render: function() {
    var content = this.template({
      book: this.model,
      book_shelves: this.collection,
      user: this.user
    });
    this.$el.html(content);
    return this;
  },

  // Need to figure out a way to keep this value
  addBookToShelf: function(event) {
    var shelf = $('#shelf_choice').val();
    var shelving = new ShouldReads.Models.BookShelving();
    shelving.set({
      shelf_id: shelf,
      book_id: this.model.id
    });
    shelving.save({});
    debugger;
  }

});
