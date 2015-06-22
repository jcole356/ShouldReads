json.extract! @book_shelf, :id, :title, :owner_id

json.books @book_shelf.books do |book|
  json.extract! book, :id, :title, :author, :cover_image_url,
    :synopsis, :number_of_pages
end
