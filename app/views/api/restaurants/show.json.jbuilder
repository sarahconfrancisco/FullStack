json.extract! @restaurant, :id, :name, :address, :city, :state, :zip, :phone, :website, :price, :hours, :rating, :num_reviews
json.features do
  json.array! @features
end
json.types do
  json.array! @types
end
json.hours JSON.parse(@restaurant.hours)
json.image_1_url asset_path(@restaurant.image_1.url)
json.image_2_url asset_path(@restaurant.image_2.url)
json.image_3_url asset_path(@restaurant.image_3.url)
