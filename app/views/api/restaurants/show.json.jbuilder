json.extract! @restaurant, :name, :address, :city, :state, :zip, :phone, :website
json.types do
  json.array! @types
end
