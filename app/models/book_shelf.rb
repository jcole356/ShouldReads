class BookShelf < ActiveRecord::Base
  validates :title, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :book_shelvings, foreign_key: :shelf_id

  has_many(
    :books,
    through: :book_shelvings,
    source: :book
  )
end
