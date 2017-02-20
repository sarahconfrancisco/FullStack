class Restaurant < ActiveRecord::Base
  belongs_to :user
  after_initialize :geocode, :ensure_hours
  geocoded_by :full_address
  has_many :restaurant_types
  has_many :types, through: :restaurant_types
  has_many :reviews
  

  validates_uniqueness_of :name, scope: [:latitude, :longitude]
  after_validation :geocode, :if => lambda{ |obj| obj.address_changed? || obj.city_changed? || obj.zip_changed? }

  validates :name, :price, :address, :city, :state, :zip, :phone, :hours, :user, presence: true

  def full_address
    [address, city, state, zip].compact.join(", ")
  end

  private

  def ensure_hours
    self.hours ||= "none"
  end


end
