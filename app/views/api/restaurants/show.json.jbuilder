json.extract! @restaurant, :name, :address, :city, :state, :zip, :phone, :website, :price
json.features do
  json.array! @features
end
json.types do
  json.array! @types
end
