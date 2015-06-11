window.ShouldReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new ShouldReads.Routers.Router({
      $rootEl: $('#content'),
      books: new ShouldReads.Collections.Books(),
      book_shelves: new ShouldReads.Collections.BookShelves()
    });

    var navbar = new ShouldReads.Views.NavBar({
      router: router,
    });

    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};
