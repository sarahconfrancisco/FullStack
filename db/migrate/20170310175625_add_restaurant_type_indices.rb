class AddRestaurantTypeIndices < ActiveRecord::Migration
  def change
    add_index :restaurant_types, :type_id
    add_index :restaurant_types, :restaurant_id
  end
end
