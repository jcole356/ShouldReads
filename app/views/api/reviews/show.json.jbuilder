json.extract! @review, :author_id, :book_id, :rating, :title, :body
json.extract! @review.user, :username