class BookShelf < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :user, foreign_key: :owner_id
end
