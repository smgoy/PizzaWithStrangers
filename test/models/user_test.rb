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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
