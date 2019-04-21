json.array! @book_shelves do |book_shelf|
  if book_shelf.owner_id == current_user.id
    json.extract! book_shelf, :title, :owner_id, :id, :created_at
    json.books book_shelf.book_shelvings do |book_shelving|
      json.shelving_id book_shelving.id
      json.extract! book_shelving.book, :id, :title, :author, :number_of_pages,
        :synopsis, :cover_image_url, :average_rating
    end
  end
end
