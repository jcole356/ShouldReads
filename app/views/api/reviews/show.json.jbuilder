json.extract! @review, :author_id, :body, :book_id, :id, :rating, :title
json.extract! @review.user, :username