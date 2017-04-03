class ImagesTable < ActiveRecord::Migration
  def change
		create_table :images do |t|
			t.integer :user_id, null: false
			t.integer :restaurant_id, null: false
			t.timestamps null: false
		end
		add_index :images, :restaurant_id
		add_index :images, :user_id
		add_index :images, [:user_id, :restaurant_id]
  end
end
