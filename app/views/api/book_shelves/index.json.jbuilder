json.array! @book_shelves do |book_shelf|
  if book_shelf.owner_id == current_user.id
    json.extract! book_shelf, :title, :owner_id, :id
    # should be fetched through the show jbuilder
    json.books book_shelf.books.with_shelving_id do |book|
      json.extract! book, :id, :title, :author, :number_of_pages,
        :synopsis, :cover_image_url, :average_rating, :shelving_id
    end
  end
end
