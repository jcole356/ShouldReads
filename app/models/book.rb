class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :reviews
  has_many :book_shelvings

  scope :with_shelving_id,
    lambda { select("books.*, book_shelvings.id AS shelving_id") }

  # Use this for seeding
  def self.get_book_from_api(title)
    query_string = title.scan(/\w+/).join('+')
    query_url = "https://www.googleapis.com/books/v1/volumes?q="\
      "#{query_string}&key=#{ENV['seed_api_key']}"
    response = RestClient.get "#{query_url}"
    self.parse_response(response)
  end

  # Parses data from API
  def self.parse_response(response)
    volume_info = JSON.parse(response)['items'][0]['volumeInfo']
    title = volume_info['title']
    author = volume_info['authors'][0]
    synopsis = volume_info['description']
    number_of_pages = volume_info['pageCount']
    cover_image_url = volume_info['imageLinks']['thumbnail']
    book_params = {
      "title" => title, "author" => author, "synopsis" => synopsis,
      "number_of_pages" => number_of_pages,
      "cover_image_url" => cover_image_url
      }

    book_params
  end

  # For generating seed data
  def self.create_book_by_title!(title)
    book_params = self.get_book_from_api(title)
    @book = Book.create(book_params)
  end

  def average_rating
    ratings = []
    self.reviews.each { |review| ratings << review.rating }
    sum = ratings.inject(:+)

    return 0 if ratings.empty?
    sum / ratings.count
  end
end
