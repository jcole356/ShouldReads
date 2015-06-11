json.array! @book_shelves do |book_shelf|
  if book_shelf.owner_id == current_user.id
    json.extract! book_shelf, :title
  end
end
