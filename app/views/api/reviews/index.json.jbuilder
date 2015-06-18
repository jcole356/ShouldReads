json.array! @reviews do |review|
  json.extract! review, :author_id, :book_id, :rating, :title, :body
  json.extract! review.user, :username
  # json.already_reviewed? already_reviewed?(review)
end
