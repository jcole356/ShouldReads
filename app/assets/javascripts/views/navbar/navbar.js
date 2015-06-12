ShouldReads.Views.NavBar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  events: {
    "click .sign-out": "signOut"
  },

  render: function () {
    var content = this.template({
      router: this.router,
      user: this.user
    });
    this.$el.html(content);

    return this;
  },

  signOut: function(event) {
    $.ajax({
      url: "session",
      type: "DELETE",
      success: function() {
        window.location = "/";
      }
    });
  }
});
