class AddAttachmentImage2ToRestaurants < ActiveRecord::Migration
  def self.up
    change_table :restaurants do |t|
      t.attachment :image_2
    end
  end

  def self.down
    remove_attachment :restaurants, :image_2
  end
end
