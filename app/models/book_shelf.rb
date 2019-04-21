class BookShelf < ActiveRecord::Base
  validates :title, :owner_id, presence: true
  validates :title, length: { maximum: 20 }
  validates :title, uniqueness: { scope: :owner_id }

  belongs_to :user, foreign_key: :owner_id

  has_many :book_shelvings, foreign_key: :shelf_id, dependent: :destroy
  has_many :books, through: :book_shelvings, source: :book
end
