json.array! @reviews do |review|
  json.extract! review, :author_id, :book_id, :rating, :title, :body
end
