class Review < ActiveRecord::Base
  validates :author_id, :book_id, :rating, :title, presence: true
  validates :author_id, uniqueness: { scope: :book_id }

  belongs_to :user, foreign_key: :author_id
  belongs_to :book

  def book_title
    self.book.title
  end
end
