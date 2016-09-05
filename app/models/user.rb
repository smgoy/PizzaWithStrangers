# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  f_name          :string           not null
#  l_name          :string
#  description     :text
#  pofile_image    :string
#  host            :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  city_id         :integer
#

class User < ActiveRecord::Base
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  validates :f_name, :city_id, presence: true
  validates :host, inclusion: { in: [true, false] }

  attr_reader :password

  has_many :hosted_events,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Event

  has_many :attendances

  has_many :events, through: :attendances

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
