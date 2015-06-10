window.ShouldReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new ShouldReads.Routers.Router({
      $rootEl: $('#content'),
      collection: new ShouldReads.Collections.Books()
    });

    var navbar = new ShouldReads.Views.NavBar({
      router: router,
    });

    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};
