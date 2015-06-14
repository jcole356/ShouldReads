window.ShouldReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new ShouldReads.Routers.Router({
      $rootEl: $('#content'),
      books: new ShouldReads.Collections.Books(),
      bookShelves: new ShouldReads.Collections.BookShelves(),
      reviews: new ShouldReads.Collections.Reviews()
    });

    var user = new ShouldReads.Models.User({ id: CURRENT_USER_ID});
    user.fetch();
    var navbar = new ShouldReads.Views.NavBar({
      router: router,
      user: user
    });

    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};
