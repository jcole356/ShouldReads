json.extract! @book, :title, :author, :cover_image_url, :synopsis,
                     :number_of_pages, :average_rating, :id
json.already_reviewed? already_reviewed?(@book.reviews)
