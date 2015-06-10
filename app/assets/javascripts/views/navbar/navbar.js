ShouldReads.Views.NavBar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  events: {
    "click .sign-out": "signOut"
  },

  render: function () {
    var content = this.template({
      router: this.router
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
