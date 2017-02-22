class AddAttachmentImage3ToRestaurants < ActiveRecord::Migration
  def self.up
    change_table :restaurants do |t|
      t.attachment :image_3
    end
  end

  def self.down
    remove_attachment :restaurants, :image_3
  end
end
