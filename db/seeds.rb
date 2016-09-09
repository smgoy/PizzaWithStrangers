# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#guest account:
User.create!(email: "guest_user@example.com", password: "guestPassword",
             f_name: "Guest", city_id: 1, host: true)

Attendance.create!(user_id: 1, event_id: 1)
Attendance.create!(user_id: 1, event_id: 2)
Attendance.create!(user_id: 1, event_id: 3)
Attendance.create!(user_id: 1, event_id: 4)
Attendance.create!(user_id: 1, event_id: 5)
Attendance.create!(user_id: 1, event_id: 6)
Attendance.create!(user_id: 1, event_id: 7)

City.create!(name: "San Francisco", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376844/sf_etkp9p.jpg')
City.create!(name: "DC", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376813/dc_ea8lgf.jpg')
City.create!(name: "Rio", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376884/rio_s8b6bi.jpg')
City.create!(name: "Hong Kong", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473378225/hong_kong_geir0i.jpg')
City.create!(name: "New York", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376829/nyc_p6yrwa.jpg')
City.create!(name: "Los Angeles", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376772/la_zn5xoj.jpg')
City.create!(name: "Rome", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376863/rome_qywlqe.jpg')
City.create!(name: "Paris", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376743/paris_ehxmt2.jpg')
City.create!(name: "Seattle", image: 'http://res.cloudinary.com/dcbqili0f/image/upload/v1473376731/seattle_ccrwtz.jpg')

1.upto(100) do
  city = [1,2,3,4,5,6,7,8].sample
  address = Faker::Address.street_address
  date = Faker::Date.between(Date.today, 1.year.from_now)
  time = Faker::Time.between(date, date, :all)
  seats = [*5..10].sample
  name = Faker::Superhero.name

  Event.create!(host_id: 1,
                city_id: city,
                address: address,
                time: time,
                seats: seats,
                image: "assets/pizza_event.jpg",
                name: name)
end
