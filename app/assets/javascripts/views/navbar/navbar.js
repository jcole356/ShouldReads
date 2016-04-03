ShouldReads.Views.NavBar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  events: {
    "click .sign-out": "signOut",
    "click .search-btn": "search",
    "click .search-request": "openModal",
    "submit": "search"
  },

  openModal: function () {
    var modal = new ShouldReads.Views.ModalSearch();

    $('body').prepend(modal.render().$el);
  },

  render: function () {
    var content = this.template({
      router: this.router,
      user: this.user
    });
    this.$el.html(content);

    return this;
  },

  search: function (event) {
    var query = $('.search-request').val();
    Backbone.history.navigate("search/" + query, { trigger: true });
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
