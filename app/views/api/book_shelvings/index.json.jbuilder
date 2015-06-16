json.array! @book_shelvings do |book_shelving|
  json.extract! book_shelving, :id, :shelf_id, :book_id
  json.extract! book_shelving.book_shelf, :title
  json.book book_shelving.book, :id, :title, :author, :average_rating, :cover_image_url, :number_of_pages
end
