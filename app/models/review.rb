class Review < ActiveRecord::Base
  validates :author_id, :book_id, :rating, :title, presence: true

  belongs_to :user, foreign_key: :author_id
  belongs_to :book
end
