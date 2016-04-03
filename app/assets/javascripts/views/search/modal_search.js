ShouldReads.Views.ModalSearch = Backbone.View.extend({
  template: JST["search/modal_search"],

  className: "m-backdrop",

  events: {
    "keydown .search_field": "typeOrClearModal"
    // "click": "clearModal"
  },

  clearModal: function(event, searchStr, searchRequest) {
    window.clearTimeout();
    searchRequest.val(searchStr);
    // Also need to submit the search
    // Need to trigger submit on the navbar.
    this.remove();
  },

  render: function() {
    var content = this.template({
    });
    this.$el.html(content);

    return this;
  },

  typeOrClearModal: function(event) {
    if (event && event.keyCode === 13) {
      var searchStr = $('.search_field').val();
      var searchRequest = $('.search-request');
      this.clearModal(event, searchStr, searchRequest);

      return;
    }
  },
});
