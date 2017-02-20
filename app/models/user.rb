class User < ActiveRecord::Base
  has_many :restaurants
  has_many :reviews
  attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  after_initialize :ensure_token
  validates :session_token, :password_digest, :fname, :lname, :email, :zip, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :zip, length: {minimum: 5, maximum: 5}


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.find_by_token(token)
    User.find_by(session_token: token)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_token!
    self.session_token = generate_token
    self.save
    self.session_token
  end

  private
  def ensure_token
    self.session_token ||= generate_token
  end
end
