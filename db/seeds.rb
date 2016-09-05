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

City.create!(name: "San Francisco", image: 'assets/cities/sf.jpeg')
City.create!(name: "Boston", image: 'assets/cities/boston.jpeg')
City.create!(name: "DC", image: 'assets/cities/dc.jpeg')
City.create!(name: "New York", image: 'assets/cities/nyc.jpg')
City.create!(name: "Los Angeles", image: 'assets/cities/la.jpeg')
City.create!(name: "Baltimore", image: 'assets/cities/baltimore.jpg')
City.create!(name: "Denver", image: 'assets/cities/denver.jpg')
City.create!(name: "Austin", image: 'assets/cities/austin.jpg')

1.upto(100) do
  city = [1,2,3,4,5,6,7,8].sample
  address = Faker::Address.street_address
  date = Faker::Date.between(Date.today, 1.year.from_now)
  time = Faker::Time.between(date, date, :all)
  seats = [*5..10].sample
  name = Faker::Superhero.name

  Event.create!(host_id: 1,
                city_id: city,
                date: date,
                address: address,
                time: time,
                seats: seats,
                image: "assets/pizza_event.jpg",
                name: name)
end
