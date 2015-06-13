class Book < ActiveRecord::Base
  validates :title, :author, presence: true

  has_many :reviews
  has_many :book_shelvings
end
