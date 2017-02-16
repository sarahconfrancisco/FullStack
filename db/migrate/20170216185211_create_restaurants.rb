class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :phone, null: false
      t.string :website
      t.boolean :delivery, default: false
      t.boolean :pick_up, default: false
      t.boolean :reservations, default: false
      t.boolean :parking, default: false
      t.boolean :outdoor, default: false
      t.boolean :credit, default: false
      t.boolean :bar, default: false
      t.boolean :byob, default: false
      t.text :hours, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps null: false
    end
    add_index :restaurants, :name
    add_index :restaurants, :zip
    add_index :restaurants, :hours
    add_index :restaurants, :latitude
    add_index :restaurants, :longitude
    add_index :restaurants, :user_id
    add_index :restaurants, :delivery
    add_index :restaurants, :pick_up
    add_index :restaurants, :reservations
    add_index :restaurants, :parking
    add_index :restaurants, :outdoor
    add_index :restaurants, :credit
    add_index :restaurants, :bar
    add_index :restaurants, :byob
  end
end
