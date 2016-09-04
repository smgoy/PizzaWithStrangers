# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#guest account:
User.create!(email: "guest_user@example.com", password: "guestPassword",
             f_name: "Guest", city: "San Francisco", host: true)

City.create!(name: "San Francisco", image: 'assets/cities/sf.jpeg')
City.create!(name: "Boston", image: 'assets/cities/boston.jpeg')
City.create!(name: "DC", image: 'assets/cities/dc.jpeg')
City.create!(name: "New York", image: 'assets/cities/nyc.jpg')
City.create!(name: "Los Angeles", image: 'assets/cities/la.jpeg')
City.create!(name: "Baltimore", image: 'assets/cities/baltimore.jpg')
City.create!(name: "Denver", image: 'assets/cities/denver.jpg')
City.create!(name: "Austin", image: 'assets/cities/austin.jpg')

Event.create!(host_id: 1, city_id: 1, date: Time.now,
              address: 'here', time: Time.now, seats: 5)

Event.create!(host_id: 1, city_id: 1, date: Time.now,
              address: 'here', time: Time.now, seats: 5)

Event.create!(host_id: 1, city_id: 3, date: Time.now,
              address: 'here', time: Time.now, seats: 5)

Event.create!(host_id: 1, city_id: 1, date: Time.now,
              address: 'here', time: Time.now, seats: 5)

Event.create!(host_id: 1, city_id: 4, date: Time.now,
              address: 'here', time: Time.now, seats: 5)

Event.create!(host_id: 1, city_id: 4, date: Time.now,
              address: 'here', time: Time.now, seats: 5)
