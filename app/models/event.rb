# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  city_id    :integer          not null
#  date       :datetime         not null
#  address    :string           not null
#  time       :datetime         not null
#  image      :string
#  seats      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ActiveRecord::Base
  validates :host_id, :city_id, :date, :address,
            :time, :seats, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :city
  
end
