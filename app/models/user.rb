class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :book_shelves,
    class_name: "BookShelf",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :reviews, foreign_key: :author_id
  has_many :book_shelvings, through: :book_shelves, source: :book_shelvings

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def increment_login_count
    login_count = self.login_count_b
    if login_count.nil?
      login_count = 0;
    else
      login_count += 1
    end
    self.update(login_count_b: login_count)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
