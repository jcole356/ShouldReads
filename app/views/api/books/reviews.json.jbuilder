json.array! @book.reviews do |review|
  json.extract! review, :author_id, :body, :book_id, :id, :rating, :title
  json.extract! review.user, :username
end
