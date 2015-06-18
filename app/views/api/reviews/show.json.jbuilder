json.extract! @review, :author_id, :book_id, :rating, :title, :body, :id
json.extract! @review.user, :username
