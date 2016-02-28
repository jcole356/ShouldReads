class Review < ActiveRecord::Base
  validates :author_id, :book_id, :rating, :title, presence: true
  validates :author_id, uniqueness: { scope: :book_id }

  belongs_to :user, foreign_key: :author_id
  belongs_to :book

  # Would like to play around with optimizing this some more.  Should be
  # much more efficient to query all of the books.
  def book_title
    self.book.title
  end
  # May not do this here.  See if you can use includes in jbuilder views
  # def user
  #   self
  # end
end
