ShouldReads.Views.ModalSearch = Backbone.View.extend({
  template: JST["search/modal_search"],

  className: "m-backdrop",

  events: {
    "keydown .search_field": "searchOrClearModal",
    "click .close": "clearModal"
  },

  initialize: function(options) {
  },

  clearModal: function(event) {
    this.remove();
  },

  render: function() {
    var content = this.template({
    });
    this.$el.html(content);

    return this;
  },

  search: function (event) {
    var query = $('.search_field').val();
    Backbone.history.navigate("search/" + query, { trigger: true });
  },

  searchOrClearModal: function(event) {
    if (event.keyCode === 13) {
      this.search();
      this.clearModal(event);
    } else if (event.keyCode === 9 || event.keyCode === 27) {
      this.clearModal(event);
    }
  },
});
