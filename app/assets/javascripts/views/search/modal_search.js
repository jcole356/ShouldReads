ShouldReads.Views.ModalSearch = Backbone.View.extend({
  template: JST["search/modal_search"],

  className: "m-backdrop",

  events: {
    "keydown": "clearModal"
    // "click .search-request": "expandSearch",
    // "click .close": "condenseSearch"
  },

  initialize: function(options) {
    window.setTimeout(function() {
      this.clearModal();
    }, 4000);
  },

  clearModal: function(event) {
    window.clearTimeout();
    if (event && event.keyCode === 13) {
      var submit = true;
    }
    var searchStr = $('.search_field').text();
    // Need this to be cleared if the search has been submitted
    $('.search_request').val(submit ? "" : searchStr);
    this.remove();
  },

  render: function() {
    var content = this.template({
    });
    this.$el.html(content);

    return this;
  },

  toggleSearchSize: function(event) {

  },
});
