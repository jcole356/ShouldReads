json.array! @reviews do |review|
  json.extract! review, :author_id, :book_id, :rating, :title, :body,
    :id, :updated_at, :book_title
  json.extract! review.user, :username
  json.extract! review.book, :cover_image_url
end
