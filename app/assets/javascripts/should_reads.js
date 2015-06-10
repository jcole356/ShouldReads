window.ShouldReads = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new ShouldReads.Routers.Router({
      $rootEl: $('#content')
    });

    Backbone.history.start();
  }
};


// Need to determine exactly where this is going to go.
// $(document).ready(function(){
//   ShouldReads.initialize();
// });
