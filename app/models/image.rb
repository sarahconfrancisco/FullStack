class Image < ActiveRecord::Base
  belongs_to :user
  belongs_to :restaurant
  validates :user, :restaurant, presence: true
	has_attached_file :photo, default_url: 'lunch.jpg'
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
