class CreateRestaurantTypes < ActiveRecord::Migration
  def change
    create_table :restaurant_types do |t|
      t.integer :restaurant_id, null: false
      t.integer :type_id, null: false
      t.timestamps null: false
    end
    add_index :restaurant_types, [:restaurant_id, :type_id], unique: true
  end
end
