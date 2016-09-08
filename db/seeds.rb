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

City.create!(name: "San Francisco", image: 'https://postimg.org/image/r25a3pgwv/')
City.create!(name: "DC", image: 'https://s21.postimg.org/53yihdn6v/image.jpg')
City.create!(name: "Rio", image: 'https://postimg.org/image/l27iattup/')
City.create!(name: "Hong Kong", image: 'https://postimg.org/image/5wjp42vv7/')
City.create!(name: "New York", image: 'https://postimg.org/image/8kidtsg81/')
City.create!(name: "Los Angeles", image: 'https://postimg.org/image/hg8hvoclf/')
City.create!(name: "Rome", image: 'https://postimg.org/image/c5rzueex1/')
City.create!(name: "Paris", image: 'https://postimg.org/image/6sk69gxux/')
City.create!(name: "Seattle", image: 'https://postimg.org/image/6u908rqv9/')

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
