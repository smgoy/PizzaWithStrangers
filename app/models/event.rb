# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  city_id    :integer          not null
#  address    :string           not null
#  time       :datetime         not null
#  image      :string
#  seats      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Event < ActiveRecord::Base
  validates :host_id, :city_id, :address,
            :time, :seats, :name, presence: true
  validate :start_date

  def start_date
    #custom validation here...
    #date can only be in the future and within a year
  end

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city

  has_many :attendances

  has_many :attendees,
    through: :attendances,
    source: :user

end
