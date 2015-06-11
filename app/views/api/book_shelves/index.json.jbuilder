json.array! @book_shelves do |book_shelf|
  json.extract! book_shelf, :title
end
