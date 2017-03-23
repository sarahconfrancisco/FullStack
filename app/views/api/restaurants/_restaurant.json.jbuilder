json.extract! restaurant, :id, :name, :rating, :city, :state, :zip, :phone,
              :price, :website, :address, :num_reviews, :latitude, :longitude
json.types do
  json.array! restaurant.type_names
end
json.image_1_url asset_path(restaurant.image_1.url)
