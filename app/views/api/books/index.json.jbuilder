json.array! @books do |book|
  json.extract! book, :id, :title, :author, :number_of_pages, :synopsis,
    :cover_image_url
end
