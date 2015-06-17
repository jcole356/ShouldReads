ShouldReads.Models.SearchBook = Backbone.Model.extend({
  // This needs to be set up as a giant conditional to accommodate
  // results with no image
  parse: function(response) {
    if (response.volumeInfo) {
      this.set({
      title: response.volumeInfo.title,
      author: response.volumeInfo.authors[0],
      cover_image_url: response.volumeInfo.imageLinks.thumbnail,
      number_of_pages: response.volumeInfo.pageCount,
      description: response.volumeInfo.description
      });

      return this;
    }
  }
});
