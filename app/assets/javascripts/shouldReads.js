window.ShouldReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new ShouldReads.Routers.Router({
      $rootEl: $('#content'),
      books: new ShouldReads.Collections.Books(),
      bookShelves: new ShouldReads.Collections.BookShelves(),
      reviews: new ShouldReads.Collections.Reviews(),
      shelvings: new ShouldReads.Collections.BookShelvings()
    });
    var user = new ShouldReads.Models.User({ id: CURRENT_USER_ID });
    user.fetch();
    // add a user on the app namespace
    this.user = user;
    var $el = $('nav');
    // TODO: I don't like this
    var navbar = new ShouldReads.Views.NavBar({
      el: $el,
      router: router,
      user: user
    });

    $el.html(navbar.render().$el);

    Backbone.history.start();
  }
};
