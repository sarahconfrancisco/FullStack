json.partial! "api/restaurants/restaurant", restaurant: @restaurant
json.features do
  json.array! @features
end

json.hours JSON.parse(@restaurant.hours)

json.image_2_url asset_path(@restaurant.image_2.url)
json.image_3_url asset_path(@restaurant.image_3.url)
