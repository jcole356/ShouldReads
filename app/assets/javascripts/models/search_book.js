ShouldReads.Models.SearchBook = Backbone.Model.extend({
  // This needs to be set up as a giant conditional to accommodate
  // results with no image

  initialize: function() {
  },

  parseAuthor: function(){

  },

  parseImage: function(){

  },

  // I think I may need to actually write a unique conditional for
  // each of these because they are nested differently.
  parse: function(response) {
      // var attrs = ['title', 'authors', 'imageLinks', 'pageCount', 'description'];
      // var attrs = [title, authors, imageLinks, pageCount, description];
    if (response.volumeInfo) {
        if (response.volumeInfo.authors) {
          var author = response.volumeInfo.authors[0];
        } else {
          var author = "Unknown";
        }
        if (response.volumeInfo.imageLinks) {
          var coverImage = response.volumeInfo.thumbnail;
        } else {
          var coverImage = "No Image Available";
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
