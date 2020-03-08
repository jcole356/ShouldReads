ShouldReads.Views.BookInfo = Backbone.View.extend({
  template: JST['books/info'],

  className: "show-book-info",

  events: {
    "click .show-info button.dropdown-item": "addBookToShelf",
  },

  initialize: function (options) {
    this.bookShelves = options.bookShelves;
    this.reviews = options.reviews;
    this.listenTo(this.bookShelves, "sync", this.render);
    this.listenTo(this.model, "change sync", this.render);
  },

  addBookToShelf: function (e) {
    var self = this;
    var shelfID = e.target.dataset.id;
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

  initializeRateYo: function () {
    var $rateYo = this.$('.rateYo');
    if (!$rateYo.length) {
      return;
    }
    $rateYo.rateYo({
      fullStar: true,
      rating: this.model.get('average_rating'),
      readOnly: true,
      starWidth: '25px',
    });
  },


  render: function () {
    var content = this.template({
      book: this.model,
      bookShelves: this.bookShelves,
    });
    this.$el.html(content);
    this.initializeRateYo();

    return this;
  },

  showAlert: function (message) {
    var $alert = $('.alert');
    var className = 'alert-' + message.type;
    $alert.addClass(className).text(message.text).show();
    setTimeout(function() {
      $alert.removeClass(className).text('').hide();
    }, 3500);
  },
});
