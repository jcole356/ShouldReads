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
      reviews: new ShouldReads.Collections.Reviews(),
      shelvings: new ShouldReads.Collections.BookShelvings()
    });
    var user = new ShouldReads.Models.User({ id: CURRENT_USER_ID});
    user.fetch({
        success: function(model, response, options) {
          // add joyride here
          if (model.get('login_count') === 1 || model.get('username') === 'guest') {
            $(window).load(function() {
              $("#joyRideTipContent").joyride({
                autoStart : true,
                modal: true,
                expose : true,
              });
            });
          }
        }
    });
    // add a user on the app namespace
    this.user = user;
    var navbar = new ShouldReads.Views.NavBar({
      router: router,
      user: user
    });

    // Add scrollbar to keep navbar from jumping
    $('body').addClass('scroll');
    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};
