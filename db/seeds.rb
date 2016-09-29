# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#guest account:
profile_image = HTTParty.get('http://uifaces.com/api/v1/random')["image_urls"]["normal"]
User.create!(email: "sam.gyory@gmail.com", password: "guestPassword", pofile_image: profile_image,
             f_name: "Sam", l_name: "Gyory", city_id: 1, host: true)

puts "about to add users"

100.times do
  f_name = Faker::Name.first_name
  l_name = Faker::Name.last_name
  email = Faker::Internet.email(f_name)
  password = Faker::Internet.password(8)
  city_id = [1,2,3,4,5,6,7,8,9].sample

  profile_image = HTTParty.get('http://uifaces.com/api/v1/random')["image_urls"]["normal"]

  User.create!(email: email, password: password, pofile_image: profile_image,
               f_name: f_name, l_name: l_name, city_id: city_id, host: true)
end

puts 'added users'

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376844/sf_etkp9p.jpg')
City.create!(name: "DC", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376813/dc_ea8lgf.jpg')
City.create!(name: "Rio", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376884/rio_s8b6bi.jpg')
City.create!(name: "Hong Kong", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473378225/hong_kong_geir0i.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376829/nyc_p6yrwa.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376772/la_zn5xoj.jpg')
City.create!(name: "Rome", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376863/rome_qywlqe.jpg')
City.create!(name: "Paris", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376743/paris_ehxmt2.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376731/seattle_ccrwtz.jpg')

party_names = ['My Cheesey Extravaganza', 'Pepperoni Heavan', 'Veggie Pizza Bash', 'Pizza Hut Party', '711 Pizza Party',
               'Pizza and Beer', 'Pizza and Sports', 'Fake Veagan', 'No Tomatoe Sauce Please', 'Thin Crust Party',
               'Deep Dish Only', 'New York Style', 'Pizza and Wine', 'Cheesy Cheese Lovers', 'Extra Roni',
               'BYOP', 'Wine and Some Pizza', 'Pepperoni Party', 'Pizza Taste Testing', 'Gluton Free Party',
               'Dominos Delivery', 'Fancy Pizza Night', 'Cooking the Largest Pizza', '100lbs of Pizza',
               'Douse me in Cheese', 'Bathe me in Peperoni', 'Pizza and Chill', 'Chill Out and Eat Pizza',
               'A Friend of Pizza is a Friend of Mine', 'Be my Pizza']

1.upto(60) do |i|
  city = [1,2,3,4,5,6,7,8,9].sample
  if i == 5
    host_id = 1
    city = 1
  elsif city == 1
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
  time = Faker::Time.between(date, date, :evening)
  seats = [*5..10].sample
  name = party_names.sample

  if [1,2,3,4].include?(i)
    case i
    when 1
      seats = 0
      city = 1
      date = Faker::Date.between(Date.today, 1.week.from_now)
      time = Faker::Time.between(date, date, :evening)
    when 2
      city = 1
      host_id = 1
      date = Faker::Date.between(Date.today, 1.week.from_now)
      time = Faker::Time.between(date, date, :evening)
    when 3
      city = 1
      date = Faker::Date.between(Date.today, 1.week.from_now)
      time = Faker::Time.between(date, date, :evening)
    when 4
      city = 1
      date = Faker::Date.between(Date.today, 1.week.from_now)
      time = Faker::Time.between(date, date, :evening)
    end
  end

  Event.create!(host_id: host_id,
                city_id: city,
                address: address,
                time: time,
                seats: seats,
                image: "null",
                name: name)
end

City.find(1).events.each_with_index do |event, i|
  if i % 2 == 0 && event.host_id != 1 && event.id != 1
    Attendance.create!(user_id: 1, event_id: event.id)
  end
end

puts "creating attendances"

Event.all.each do |event|
  [*10..15].sample.times do
    user_id = [*2..101].sample
    Attendance.create!(user_id: user_id, event_id: event.id)
  end
end

puts "finished"
