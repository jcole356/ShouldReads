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

    // This is breaking everything at this point.
    var navbar = new ShouldReads.Views.NavBar({
      router: router,
      // collection: this.collection
    });

    $('#nav').html(navbar.render().$el);

    Backbone.history.start();
  }
};


// Need to determine exactly where this is going to go.
// $(document).ready(function(){
//   ShouldReads.initialize();
// });
