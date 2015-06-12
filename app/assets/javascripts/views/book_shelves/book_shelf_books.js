ShouldReads.Views.ShelfBooks = Backbone.View.extend({

  template: JST['book_shelves/books'],

  initialize: function() {


  },

  render: function() {
    var content = this.template({
      
    });
  }
});
