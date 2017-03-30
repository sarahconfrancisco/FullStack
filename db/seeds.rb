# Type.delete_all
# RestaurantType.delete_all
# breakfast = Type.new(name: 'breakfast')
# breakfast.save!
# lunch = Type.new(name: 'lunch')
# lunch.save!
# dinner = Type.new(name: 'dinner')
# dinner.save!
# burgers = Type.new(name: 'burgers')
# burgers.save!
# fries = Type.new(name: 'fries')
# fries.save!
# sandwiches = Type.new(name: 'sandwiches')
# sandwiches.save!
# soups = Type.new(name: 'soups')
# soups.save!
# coffee = Type.new(name: 'coffee')
# coffee.save!
# donuts = Type.new(name: 'donuts')
# donuts.save!
# tacos = Type.new(name: 'tacos')
# tacos.save!
# pizza = Type.new(name: 'pizza')
# pizza.save!
# salads = Type.new(name: 'salads')
# salads.save!
# chicken = Type.new(name: 'chicken')
# chicken.save!
# eggs = Type.new(name: 'eggs')
# eggs.save!
# rice = Type.new(name: 'rice')
# rice.save!
# restaurants = Restaurant.all
# res_and_types = {
# 						'McDonald' => [burgers, fries, eggs, lunch, dinner, breakfast],
# 						'Subway' => [sandwiches, soups, salads, lunch, dinner],
# 						'Starbucks' => [breakfast, donuts, coffee, eggs],
# 						'Burger King' => [burgers, fries, eggs, lunch, dinner, breakfast],
# 						"Wendy's" => [burgers, fries, eggs, lunch, dinner, breakfast],
# 						'Taco Bell'=> [tacos, lunch, dinner],
# 						"Dunkin' Donuts" => [donuts, coffee, eggs, breakfast],
# 						'Pizza Hut' => [pizza, lunch, dinner],
# 						'KFC' => [chicken, lunch, dinner],
# 						"Applebee's" => [soups, salads, pizza, tacos, dinner, lunch],
# 						"Chick-fil-A" => [chicken, dinner, lunch],
# 						"Sonic" => [burgers, fries, lunch, dinner],
# 						'Olive Garden' => [soups, salads, dinner],
# 						"Chili's" => [soups, salads, dinner],
# 						"Domino's Pizza" => [pizza, lunch, dinner],
# 						"Panera Bread" => [soups, salads, donuts, coffee, dinner, lunch, breakfast],
# 						"Jack in the Box" => [burgers, fries, lunch, dinner],
# 						"Arby's" => [sandwiches, lunch, dinner],
# 						'Red Lobster' => [soups, salads, lunch, dinner],
# 						'IHOP' => [donuts, coffee, eggs, breakfast],
# 						"Denny's" => [donuts, coffee, eggs, breakfast],
# 						'Outback Steakhouse' => [fries, soups, salads, lunch, dinner],
# 						'Chipotle' => [lunch, dinner, tacos],
# 						"Papa John's Pizza" => [pizza, lunch, dinner],
# 						'Buffalo Wild Wings' => [lunch, dinner, chicken],
# 						'Cracker Barrel' => [eggs, burgers, fries, lunch, dinner, breakfast],
# 						"Hardee's" => [burgers, fries, lunch, dinner],
# 						"T.G.I. Friday's" => [soups, salads, sandwiches, lunch, dinner],
# 						'7-Eleven' => [sandwiches, donuts, coffee],
# 						'Popeyes' => [chicken, soups, salads, lunch, dinner],
# 						'Golden Corral' => [chicken, soups, salads, lunch, dinner],
# 						'The Cheesecake Factory' => [soups, salads, tacos, lunch, dinner],
# 						'Panda Express' => [soups, salads, rice, dinner, lunch],
# 						'Little Caesars Pizza' => [pizza, salads, dinner, lunch],
# 						'Ruby Tuesday' => [soups, salads, sandwiches, lunch, dinner],
# 						'Texas Roadhouse' => [burgers, fries, soups, lunch, dinner],
# 						'Whataburger' => [burgers, fries, lunch, dinner],
# 						'Red Robin' => [burgers, fries, soups, salads, lunch, dinner],
# 						"Jimmy John's" => [lunch, dinner, sandwiches],
# 						'Waffle House' => [chicken, eggs, coffee, breakfast, lunch],
# 						'Bob Evans' => [burgers, fries, soups, salads, lunch, dinner],
# 						'Five Guys' => [burgers, fries, lunch, dinner],
# 						"P.F. Chang's" => [soups, rice, dinner, tacos, lunch],
# 						"Church's" => [chicken, lunch, dinner],
# 						'Quiznos' => [sandwiches, soups, fries, lunch, dinner],
# 						'Steak n Shake' => [burgers, fries, sandwiches, lunch, dinner],
# 						"Friendly's" => [burgers, fries, soups, salads, lunch, dinner],
# 						'Boston Market' => [chicken, soups, rice, lunch, dinner],
# 						'Wawa' => [coffee, donuts, sandwiches, breakfast, lunch],
# 						"Cheddar's" => [burgers, fries, soups, salads, lunch, dinner]
# 					}
# res_names = res_and_types.keys
# restaurants.each_with_index do |res, i|
# 	image_names = []
# 	types = res_and_types[res_names[i]]
#   res.name = res_names[i]
#   types.each_with_index do |ty, i|
# 		res.types << ty
# 		image_names << ty.name if i < 3
# 	end
# 	res.image_1 = File.open("app/assets/images/#{image_names[0]}.jpg")
# 	res.image_2 = File.open("app/assets/images/#{image_names[1]}.jpg")
# 	res.image_3 = File.open("app/assets/images/#{image_names[2]}.jpg")
# 	res.save!
# end
# my_id = User.find_by(email: 'sarah@gmail.com').id
# guest_id = User.find_by(email: 'guest@gmail.com').id
# reviews_by_me = Review.where("user_id = #{my_id} OR user_id = #{guest_id}")
# reviews_by_me.each { |rev| rev.delete }
# rating_1 = ['waited an hour and our food never came!',
# 						'I got food poisoning!',
# 						'The food was undercooked']
# rating_2 = ['the only good thing was the breadsticks',
# 						'Everyone was super nice but the food was super bad',
# 						'The food was cold']
# rating_3 = ["Came for brunch with a group of 5. The food that we ordered and the
# 						 service was average at best, hence the rating.",
# 					 	'Very crowded and noisy. A long wait for so-so food.',
# 						"I'm going to hold off on more stars until i come again. Very friendly service.
# 						Great soundtrack! Energetic crowd. More extensive review after next visit."]
# rating_4 = [ "it's fine. Had a sample of different things and thought it was all decent.
# 							Service was pretty minimalistic. this is a doable option.",
# 							"Give me some more immediately! The atmosphere may not be branded
# 							on par with the soul healing goodness of the food - but maybe that
# 							is the brand? Genius.",
# 							"I was here on the 'Soft' opening day the menu was extremely limited
# 							but the staff accommodating and nice. The foods I tried were hot
# 							and fresh as well as delicious. I wish these guys well" ]
# rating_5 = [
# 	"this place is amazing! we happened to stumble upon this place.
# 	everything I ordered was perfect. portion size is considerably big for such a
# 	great price. all the servers were kind and continued to check on us!",
# 	"Food is perfect and the service is really good. Welcoming and friendly staff.
# 	 Definitely highly recommend this place.",
# 	 "This has to be the best place in NYC and beyond. Food was great, service was great.
# 	 Some dishes are better than others. The problem now is that I crave everything."
# ]
#
# Review.all.each do |rev|
# 	rev.body = rating_1.sample if rev.rating == 1
# 	rev.body = rating_2.sample if rev.rating == 2
# 	rev.body = rating_3.sample if rev.rating == 3
# 	rev.body = rating_4.sample if rev.rating == 4
# 	rev.body = rating_5.sample if rev.rating == 5
# 	rev.save!
# end
