ShouldReads.Views.NavBar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  render: function () {
    var content = this.template({
      router: this.router
    });
    this.$el.html(content);

    return this;
  }
});
