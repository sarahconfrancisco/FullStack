json.extract! @restaurant, :id, :name, :address, :city, :state, :zip, :phone, :website, :price, :hours, :rating, :num_reviews
json.features do
  json.array! @features
end
json.types do
  json.array! @types
end
json.hours JSON.parse(@restaurant.hours)
