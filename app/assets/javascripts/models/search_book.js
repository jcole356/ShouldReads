ShouldReads.Models.SearchBook = Backbone.Model.extend({
  initialize: function() {
  },

  parse: function(response) {
    if (response.volumeInfo) {
        if (response.volumeInfo.authors) {
          var author = response.volumeInfo.authors[0];
        } else {
          var author = "Unknown";
        }
        if (response.volumeInfo.imageLinks) {
          var coverImage = response.volumeInfo.imageLinks.thumbnail;
        } else {
          var coverImage = "/assets/old_bible.jpg";
        }
        if (response.volumeInfo.pageCount) {
          var numberOfPages = response.volumeInfo.pageCount;
        } else {
          var numberOfPages = "N/A";
        }
        if (response.volumeInfo.description) {
          var synopsis = response.volumeInfo.description;
        } else {
          var synopsis = "No Description Available";
        }

      this.set({
        title: response.volumeInfo.title,
        author: author,
        cover_image_url: coverImage,
        number_of_pages: numberOfPages,
        description: synopsis
      });

      return this;
    }
  }
});
