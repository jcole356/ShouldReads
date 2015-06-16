class BookShelving < ActiveRecord::Base
  belongs_to :book
  belongs_to :book_shelf, foreign_key: :shelf_id, dependent: :destroy
end
