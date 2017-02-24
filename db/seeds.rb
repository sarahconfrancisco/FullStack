# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# guest = User.create!({fname: "guest", lname: "guest", email: "guest@gmail.com", zip: "10001", password: "password"})
# sarah = User.create!(fname: "Sarah", lname: "Confrancisco", email: "sarah@gmail.com", zip: "07481", password: "confrancisco")
# adam = User.create!(fname: "Adam", lname: "App", email: "adam@gmail.com", zip: "10005", password: "password")
#
# dd = Restaurant.create!({
#  user_id: guest.id,
#  name: "Dunkin Donuts",
#  address: "152 W 31st St",
#  city: "New York",
#  state: "NY",
#  zip: "10001",
#  phone: "55555555555",
#  website: nil,
#  delivery: false,
#  pick_up: false,
#  reservations: false,
#  parking: true,
#  outdoor: true,
#  credit: true,
#  bar: false,
#  byob: false,
#  hours:
#   "{\"Mon\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Tue\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Wed\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Thu\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Fri\":{\"start\":\"8 am\",\"end\":\"5 pm\"}}",
#  price: 1
#   })
RestaurantType.delete_all
Review.delete_all
Restaurant.delete_all
User.delete_all
Type.delete_all
sarah = User.create!({fname: "Sarah", lname: "Confrancisco", email: "sarah@gmail.com", password: "confrancisco", zip: "07481"})
guest = User.create!({fname: "guest", lname: "guest", email: "guest@gmail.com", password: "password", zip: "10001"})
images = ["coffee.jpg", "donuts.png", "empty_restaurant.jpg", "fries.jpg", "full-bar.jpg", "hydrating-food.jpg", "images-1.jpg", "images-2.jpg", "images-3.jpg", "images-4.jpg", "images-5.jpg", "images.jpg", "macncheesejpg.jpg", "pairings-savory1-food.jpg", "peas.jpg", "sidedishes.jpg", "chicken-parmesan.jpg"]
latitudes = (40738771..40768058).to_a
longitudes = (-74002462..-73966031).to_a
hours = ["{\"start\":\"8 am\",\"end\":\"5 pm\"}", "{\"start\":\"5 am\",\"end\":\"12 pm\"}", "{\"start\":\"11 am\",\"end\":\"11 pm\"}", "{\"start\":\"12 am\",\"end\":\"12 pm\"}"]
ZIP_CODES = ["10001", "10011", "10018", "10019", "10020", "10036", "10029", "10035", "10010", "10016", "10017", "10022", "10012", "10013", "10014"]
food_types = %w(Afghan African American Arabian Argentine Armenian Australian Austrian Bangladeshi Barbeque Basque Belgian Brasseries Brazilian Breakfast Brunch British Buffets Burgers Burmese Cafes Cafeteria Cajun/Creole Cambodian Caribbean Catalan Cheesesteaks Chicken Chinese Comfort Creperies Cuban Czech Delis Diners Dinner Ethiopian Fast-Food Filipino Fish&Chips Fondue Food-Court Food-Stand French Gastropubs German Gluten-Free Greek Guamanian Halal Hawaiian Himalayan/Nepalese Honduran Hungarian Iberian Indian Indonesian Irish Italian Japanese Kebab Korean Kosher Laotian Live/Raw Malaysian Mediterranean Mexican Mongolian Moroccan Nicaraguan Noodles Pakistani Pan-Asian Persian/Iranian Peruvian Pizza Polish Pop-Up Portuguese Poutineries Russian Salad Sandwiches Scandinavian Scottish Seafood Singaporean Slovakian Soul Soup Southern Spanish Steakhouses Supper Sushi Syrian Taiwanese Tapas Tex-Mex Thai Turkish Ukrainian Uzbek Vegan Vegetarian Vietnamese Waffles Wraps)
types = []
restaurants = []
users = []

20.times do
  user = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.safe_email, zip: ZIP_CODES.sample, password: "password"})
  users.push(user)
end

50.times do
  res = Restaurant.new(
  {
   user_id: users.sample.id,
   name: Faker::Book.title,
   latitude: (latitudes.sample / 1000000.0),
   longitude: (longitudes.sample / 1000000.0),
   phone: Faker::PhoneNumber.cell_phone,
   website: Faker::Internet.url,
   delivery: Faker::Boolean.boolean(0.5),
   pick_up: Faker::Boolean.boolean(0.6),
   reservations: Faker::Boolean.boolean(0.4),
   parking: Faker::Boolean.boolean(0.2),
   outdoor: Faker::Boolean.boolean(0.5),
   credit: Faker::Boolean.boolean(0.8),
   bar: Faker::Boolean.boolean(0.2),
   byob: Faker::Boolean.boolean(0.3),
   price: [1,2,3,4].sample,
   hours: "{\"Sun\": #{hours.sample}, \"Mon\": #{hours.sample}, \"Tue\": #{hours.sample}, \"Wed\": #{hours.sample}, \"Thu\": #{hours.sample}, \"Fri\": #{hours.sample}, \"Sat\": #{hours.sample}}"
    }
  )
  res.image_1 = File.open("app/assets/images/#{images.sample}")
  res.image_2 = File.open("app/assets/images/#{images.sample}")
  res.image_3 = File.open("app/assets/images/#{images.sample}")

  address_array = res.location.split(",")
  res.address = address_array[0]
  res.city = address_array[1]
  res.state, res.zip = address_array[2].split(" ")
  res.save!
  restaurants.push(res)

end

food_types.each do |type|
  ty = Type.create!({name: type})
  types.push(ty)
end

Type.all.each do |type|
  res_ids = [restaurants.sample.id, restaurants.sample.id, restaurants.sample.id, restaurants.sample.id].uniq
  res_ids.each { |res_id| RestaurantType.create!({restaurant_id: res_id, type_id: type.id}) }
end

Restaurant.all.each do |res|
  user_ids = [users.sample.id, users.sample.id, users.sample.id, users.sample.id, users.sample.id].uniq
  user_ids.each { |user_id| review = Review.create!({user_id: user_id, restaurant_id: res.id, body: Faker::Lorem.paragraph, date: "#{(1..12).to_a.sample}/#{(1..29).to_a.sample}/2016", rating: [1,2,3,4,5].sample}) }
end
