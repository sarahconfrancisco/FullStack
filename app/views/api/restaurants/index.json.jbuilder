json.set! :results do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    end
  end
end

json.set! :params do
  json.types @types
  json.features do
    json.array! @features
  end
  json.location @location
end
json.set! :latlng do
  json.lat @lat
  json.lng @lng
end
