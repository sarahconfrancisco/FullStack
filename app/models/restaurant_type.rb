class RestaurantType < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :type
  validates_uniqueness_of :type_id, scope: :restaurant_id
  validates :type, :restaurant, presence: true
end
