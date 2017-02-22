# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Restaurant.delete_all
RestaurantType.delete_all
Type.delete_all
Review.delete_all
guest = User.create!({fname: "guest", lname: "guest", email: "guest@gmail.com", zip: "10001", password: "password"})
sarah = User.create!(fname: "Sarah" lname: "Confrancisco", email: "sarah@gmail.com", zip: "07481", password: "confrancisco")
adam = User.create!(fname: "Adam", lname: "App", email: "adam@gmail.com", zip: "10005", password: "password")

dd = Restaurant.create!({
 user_id: guest.id,
 name: "Dunkin Donuts",
 address: "152 W 31st St",
 city: "New York",
 state: "NY",
 zip: "10001",
 phone: "55555555555",
 website: nil,
 delivery: false,
 pick_up: false,
 reservations: false,
 parking: true,
 outdoor: true,
 credit: true,
 bar: false,
 byob: false,
 hours:
  "{\"Mon\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Tue\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Wed\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Thu\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Fri\":{\"start\":\"8 am\",\"end\":\"5 pm\"}}",
 price: 1
  })
  
donuts = Type.create!(name: "Donuts")
coffee = Type.create!(name: "Coffee")
breakfast = Type.create!(name: "Breakfast")

dd1 = RestaurantType.create!(restaurant_id: dd.id, type_id: donuts.id)
dd2 = RestaurantType.create!(restaurant_id: dd.id, type_id: coffee.id)
dd3 = RestaurantType.create!(restaurant_id: dd.id, type_id: breakfast.id)

dd_review_1 = Review.create!(restaurant_id: dd.id, user_id: guest.id, body: "Donuts are great! Coffee is okay.", rating: 4)
dd_review_2 = Review.create!(restaurant_id: dd.id, user_id: sarah.id, body: "Krisy Kreme is better", rating: 2)
dd_review_3 = Review.create!(restaurant_id: dd.id, user_id: adam.id, body: "Best place ever!!!!", rating: 5)
