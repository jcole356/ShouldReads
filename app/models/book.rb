class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :reviews
  has_many :book_shelvings

  scope :with_shelving_id, lambda { select("books.*, book_shelvings.id AS shelving_id") }

  def self.get_from_api(title)
    # don't need to join on + or -.  Seems to work ok either way. Not with  RestClient
    query_string = title.scan(/\w+/).join('+')
    query_url = "https://www.googleapis.com/books/v1/volumes?q=#{query_string}"
    response = RestClient.get "#{query_url}"
    self.parse_response(response)
  end

  def self.parse_response(response)
    volume_info = JSON.parse(response)['items'][0]['volumeInfo']
    title = volume_info['title']
    author = volume_info['authors'][0]
    synopsis = volume_info['description']
    number_of_pages = volume_info['pageCount']
    cover_image_url = volume_info['imageLinks']['thumbnail']
    book_params = {
      "title" => title, "author" => author, "synopsis" => synopsis,
      "number_of_pages" => number_of_pages, "cover_image_url" => cover_image_url
      }
    return book_params
  end

  def self.create_book!(book_params)
    Book.create(book_params)
  end

  def average_rating
    reviews = self.reviews
    count = reviews.count
    ratings = []
    reviews.each { |review| ratings << review.rating }
    sum = ratings.inject(0) { |sum, rating| sum + rating }
    return 0 if count < 1
    return sum / count
  end
end
