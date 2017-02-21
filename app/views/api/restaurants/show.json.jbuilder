json.extract! @restaurant, :name, :address, :city, :state, :zip, :phone, :website, :price, :hours, :rating, :num_reviews
json.features do
  json.array! @features
end
json.types do
  json.array! @types
end
json.hours JSON.parse(@restaurant.hours)

json.reviews do
  json.array! @restaurant.reviews, partial: 'api/reviews/review', as: :review
end
