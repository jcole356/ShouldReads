ShouldReads.Views.NavBar = Backbone.View.extend({
  template: JST['navbar/navbar'],

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
  },

  events: {
    "click .sign-out": "signOut",
    "click .search-request": "openModal"
  },

  openModal: function () {
    var modal = new ShouldReads.Views.ModalSearch();
    $('body').prepend(modal.render().$el);
    $('.search_field')[0].focus();
  },

  render: function () {
    var content = this.template({
      router: this.router,
      user: this.user
    });
    this.$el.html(content);
    if (this.user.get('loginCount') === 1 || this.user.get('username') === 'guest') {
      $("#joyRideTipContent").joyride({
        autoStart : true,
        modal: true,
        expose : true,
      });
    }

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
