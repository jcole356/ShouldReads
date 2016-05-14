ShouldReads.Views.BookShelvesIndex = Backbone.View.extend({
  template: JST['book_shelves/index'],

  className: "shelf-list",

  events: {
    "click .new-shelf": "addShelf",
    "click .shelf-delete": "destroyShelf",
    "keyup .add-shelf .form-control": "validate",
    "blur .add-shelf .form-control": "removeMessage"
  },

  initialize: function (options) {
    this.shelvings = options.shelvings;
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function () {
    var content = this.template({
      bookShelves: this.collection
    });
    this.$el.html(content);

    return this;
  },

  addShelf: function (event) {
    event.preventDefault();
    var shelfName = this.$el.find('form').serializeJSON().book_shelf.title;
    var self = this;
    var bookShelf = new ShouldReads.Models.BookShelf({
      title: shelfName,
      owner_id: CURRENT_USER_ID
    });
    bookShelf.save({}, {
      success: function (model) {
        self.collection.add(model);
      }
    });
  },

  destroyShelf: function (event) {
    var shelfID = $(event.currentTarget).attr('data-id');
    var shelf = this.collection.get(shelfID);
    // Remove the shelvings from the collection first
    shelf.books().each(function (book) {
      var shelving = this.shelvings.get(book.get('shelving_id'));
      shelving.destroy();
    }.bind(this));
    shelf.destroy();
  },

  removeMessage: function() {
    $('.shelf-validation').text('');
  },

  validate: function() {
    var $input = $('.add-shelf .form-control');
    var $messageField = $('.shelf-validation');
    var _charCount = $input.val().length;
    if (_charCount < 15  && _charCount > 0) {
      $input.removeClass('yellow red').addClass('green');
      $messageField.removeClass('yellow red');
    } else if (_charCount >= 15 && _charCount < 20){
      $input.removeClass('green red').addClass('yellow');
      $messageField.removeClass('red').addClass('yellow');
    } else if (_charCount == 20) {
      $input.removeClass('green yellow').addClass('red');
      $messageField.removeClass('yellow').addClass('red');
    } else {
      $input.removeClass('green yellow red');
      $messageField.removeClass('yellow red');
      $messageField.text();
    }
    $messageField.text((20 - _charCount) + ' chars remaining');
  }
});
