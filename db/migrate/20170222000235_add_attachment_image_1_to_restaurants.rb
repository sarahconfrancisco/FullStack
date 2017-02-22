class AddAttachmentImage1ToRestaurants < ActiveRecord::Migration
  def self.up
    change_table :restaurants do |t|
      t.attachment :image_1
    end
  end

  def self.down
    remove_attachment :restaurants, :image_1
  end
end
