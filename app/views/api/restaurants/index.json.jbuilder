@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! "api/restaurants/restaurant", restaurant: restaurant, types: restaurant.types
  end
end
