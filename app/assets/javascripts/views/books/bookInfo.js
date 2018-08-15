ShouldReads.Views.BookInfo = Backbone.View.extend({
  template: JST['books/info'],

  className: "show-book-info",

  events: {
    "click .shelf-choice button.dropdown-item": "addBookToShelf",
  },

  initialize: function (options) {
    this.bookShelves = options.bookShelves;
    this.listenTo(this.bookShelves, "sync", this.render);
    this.listenTo(this.model, "sync", this.render);
  },

  addBookToShelf: function (event) {
    var self = this;
    var shelfID = event.target.dataset.id;
    var shelving = new ShouldReads.Models.BookShelving();
    shelving.set({
      book_id: this.model.id,
      shelf_id: shelfID
    });
    shelving.save({}, {
      success: function () {
        self.showAlert({
          text: 'Book has been added to shelf',
          type: 'success',
        });
      },
      error: function () {
        self.showAlert({
          text: 'Book is already on the shelf',
          type: 'danger',
        });
      }
    });
  },

  render: function () {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
    });
    this.$el.html(content);

    return this;
  },

  showAlert: function (message) {
    var $alert = $('.shelf-choice .alert');
    var className = 'alert-' + message.type;
    $alert.addClass(className).text(message.text);
    setTimeout(function() {
      $alert.removeClass(className).text('');
    }, 3500);
  },
});
