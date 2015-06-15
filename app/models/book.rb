class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :reviews
  has_many :book_shelvings

  scope :with_shelving_id, lambda { select("books.*, book_shelvings.id AS shelving_id") }

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
