# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

City.create!(name: "San Francisco", image: 'assets/cities/sf.jpeg')
City.create!(name: "Boston", image: 'assets/cities/boston.jpeg')
City.create!(name: "DC", image: 'assets/cities/dc.jpeg')
City.create!(name: "New York", image: 'assets/cities/nyc.jpg')
City.create!(name: "Los Angeles", image: 'assets/cities/la.jpeg')
City.create!(name: "Baltimore", image: 'assets/cities/baltimore.jpg')
City.create!(name: "Denver", image: 'assets/cities/denver.jpg')
City.create!(name: "Austin", image: 'assets/cities/austin.jpg')
