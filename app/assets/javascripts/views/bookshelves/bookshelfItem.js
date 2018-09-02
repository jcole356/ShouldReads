ShouldReads.Views.ShelfItem = Backbone.View.extend({
  template: JST['bookshelves/shelf_item'],

  tagName: 'div',

  className: "book-shelf-row row",

  initialize: function (options) {
    this.all = options.all;
    this.listenTo(this.model, 'add', this.render);
  },

  initializeRateYo: function () {
    var $rateYo = this.$('.rateYo');
    if (!$rateYo.length) {
      return;
    }
    var rating;
    if (this.all) {
      rating = this.model._book.get('average_rating');
    } else {
      rating = this.model.get('average_rating');
    }
    $rateYo.rateYo({
      fullStar: true,
      rating: rating,
      readOnly: true,
      starWidth: '15px',
    });
  },

  render: function () {
    var content = this.template({
      book: this.all ? this.model._book : this.model,
      title: this.all ? this.model.get('title') : false,
    });
    this.$el.html(content);
    this.initializeRateYo();
    
    return this;
  },
});
