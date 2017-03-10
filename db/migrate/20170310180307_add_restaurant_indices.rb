class AddRestaurantIndices < ActiveRecord::Migration
  def change
    add_index :restaurants, :address
    add_index :restaurants, :city
    add_index :restaurants, :state
    add_index :restaurants, :price
  end
end
