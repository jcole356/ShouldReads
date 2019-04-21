class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :reviews
  has_many :book_shelvings

  # Use this for seeding
  def self.get_book_from_api(title)
    query_string = title.scan(/\w+/).join('+')
    query_url = "https://www.googleapis.com/books/v1/volumes?q="\
      "#{query_string}&key=#{ENV['seed_api_key']}"
    response = RestClient.get "#{query_url}"
    self.parse_response(response)
  end

  # Parses data from API, why no validations of defaults here only in js?
  # Not user facing, only used for seeding. todo
  def self.parse_response(response)
    volume_info = JSON.parse(response)['items'][0]['volumeInfo']
    title = volume_info['title']
    author = volume_info['authors'][0]
    synopsis = volume_info['description']
    number_of_pages = volume_info['pageCount']
    cover_image_url = volume_info['imageLinks']['thumbnail']
    # Need to add ISBN.  Should we check 10 vs 13?
    identifier = volume_info['industryIdentifiers'].select { |id| id.type === "ISBN_13" }
    isbn = isbn.empty? ? volume_info['industryIdentifiers'][0].identifier : isbn
    debugger
    book_params = {
      "title" => title, "author" => author, "synopsis" => synopsis,
      "number_of_pages" => number_of_pages,
      "cover_image_url" => cover_image_url,
      "isbn" => isbn
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
    reviews = self.reviews
    reviews.each { |review| ratings << review.rating }
    sum = ratings.inject(:+)

    return 0 if ratings.empty?
    sum / ratings.count
  end

  # Using this for the review query.
  def book_title
    self.title
  end
end
