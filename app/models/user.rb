class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :teams
  has_many :project_users
  has_many :projects, through: :project_users
  has_many :tasks, through: :projects

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.password_is?(password) ? @user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def self.find_or_create_from_auth_hash(auth_hash)
    @user = User.find_by(twitter_uid: auth_hash[:uid])

    if @user.nil?
      @user = User.create!(
        twitter_uid: auth_hash[:uid],
        username: auth_hash[:info][:nickname],
        password: SecureRandom.base64
      )
    end

    @user
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end
