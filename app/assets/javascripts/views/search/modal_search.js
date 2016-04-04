ShouldReads.Views.ModalSearch = Backbone.View.extend({
  template: JST["search/modal_search"],

  className: "m-backdrop",

  events: {
    "keydown .search_field": "typeOrClearModal"
  },

  initialize: function(options) {
    this.searchValue = options.searchValue;
  },

  clearModal: function(event, searchStr, searchRequest) {
    searchRequest.val(searchStr);
    // Don't make a call if the search is empty
    if (searchStr) {
      $('.search-btn').click();
    }

    this.remove();
  },

  render: function() {
    var content = this.template({
    });
    this.$el.html(content);
    this.$el.find('.search_field').val(this.searchValue);

    return this;
  },

  typeOrClearModal: function(event) {
    var searchRequest = $('.search-request');
    if (event.keyCode === 13) {
      var searchStr = $('.search_field').val();
      this.clearModal(event, searchStr, searchRequest);
    } else if (event.keyCode === 9 || event.keyCode === 27) {
      this.clearModal(event, "", searchRequest);
    }

    return;
  },
});
