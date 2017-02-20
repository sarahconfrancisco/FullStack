class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.string :date, null: false
      t.timestamps null: false
    end
    add_index :reviews, :restaurant_id
    add_index :reviews, :user_id
    add_index :reviews, [:user_id, :restaurant_id], unique: true
  end
end
