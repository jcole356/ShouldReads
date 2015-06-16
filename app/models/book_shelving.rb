class BookShelving < ActiveRecord::Base
  validates :shelf_id, uniqueness: { scope: :book_id }

  belongs_to :book
  belongs_to :book_shelf, foreign_key: :shelf_id
end
