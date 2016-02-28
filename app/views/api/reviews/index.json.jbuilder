# Eager load books and reviews
@reviews = @reviews.includes(:user, :book)
json.array! @reviews do |review|
  json.extract! review, :author_id, :book_id, :rating, :title, :body,
    :id, :updated_at
  json.extract! review.user, :username
  json.extract! review.book, :cover_image_url, :author, :book_title
end
