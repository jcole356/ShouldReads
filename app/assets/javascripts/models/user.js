ShouldReads.Models.User = Backbone.Model.extend({
  urlRoot: "users",

  parse: function(user) {
    this.set({
      id: user.id,
      loginCount: user.login_count_b,
      username: user.username,
    });

    return this;
  }
});
