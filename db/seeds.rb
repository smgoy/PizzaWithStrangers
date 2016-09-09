# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#guest account:
User.create!(email: "guest_user@example.com", password: "guestPassword",
             f_name: "Thanks for Visiting", city_id: 1, host: true)

1.upto(20) do
  f_name = Faker::Name.first_name
  email = Faker::Internet.email(f_name)
  password = Faker::Internet.password(8)
  city_id = [1,2,3,4,5,6,7,8,9].sample

  User.create!(email: email, password: password,
               f_name: f_name, city_id: city_id, host: true)
end

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376844/sf_etkp9p.jpg')
City.create!(name: "DC", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376813/dc_ea8lgf.jpg')
City.create!(name: "Rio", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376884/rio_s8b6bi.jpg')
City.create!(name: "Hong Kong", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473378225/hong_kong_geir0i.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376829/nyc_p6yrwa.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376772/la_zn5xoj.jpg')
City.create!(name: "Rome", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376863/rome_qywlqe.jpg')
City.create!(name: "Paris", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376743/paris_ehxmt2.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376731/seattle_ccrwtz.jpg')

party_names = ['My Cheesey Extravaganza', 'Peperoni Heavan', 'Veggie Pizza Bash', 'Pizza Hut Party', '711 Pizza Party',
               'Pizza and Beer', 'Pizza and Sports', 'Fake Veagan', 'No Tomatoe Sauce Please', 'Thin Crust Party',
               'Deep Dish Only', 'New York Style', 'Pizza and Wine', 'Cheesy Cheese Lovers', 'Extra Roni',
               'BYOP', 'Wine and Some Pizza', 'Peperoni Party', 'Pizza Taste Testing', 'Guton Free Party',
               'Dominos Delivery', 'Fancy Pizza Night', 'Cooking the Largest Pizza', '100lbs of Pizza',
               'Douse me in Cheese', 'Bathe me in Peperoni', 'Pizza and Chill', 'Chill Out and Eat Pizza',
               'A Friend of Pizza is a Friend of Mine', 'Be my Pizza']

1.upto(60) do |i|
  city = [1,2,3,4,5,6,7,8,9].sample
  if city == 1
    host_id = [*1..20].sample
  else
    host_id = [*2..20].sample
  end
  address = Faker::Address.street_address
  if i % 4 == 0
    date = Faker::Date.between(Date.today, 1.month.from_now)
  else
    date = Faker::Date.between(Date.today, 1.year.from_now)
  end
  time = Faker::Time.between(date, date, :morning)
  seats = [*5..10].sample
  name = party_names.sample

  Event.create!(host_id: host_id,
                city_id: city,
                address: address,
                time: time,
                seats: seats,
                image: "null",
                name: name)
end

City.find(1).events.each_with_index do |event, i|
  if i % 2 == 0
    Attendance.create!(user_id: 1, event_id: event.id)
  end
end
