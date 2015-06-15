class BookShelf < ActiveRecord::Base
  validates :title, :owner_id, presence: true
  validates :title, length: { maximum: 20 }
  validates :title, uniqueness: { scope: :owner_id }

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :book_shelvings, foreign_key: :shelf_id
  has_many :books, through: :book_shelvings, source: :book
end
