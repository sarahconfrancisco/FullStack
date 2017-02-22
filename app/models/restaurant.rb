class Restaurant < ActiveRecord::Base
  belongs_to :user
  after_initialize :geocode, :ensure_hours
  geocoded_by :full_address
  has_many :restaurant_types
  has_many :types, through: :restaurant_types
  has_many :reviews
  has_attached_file :image_1, default_url: "empty_restaurant.jpg"
  validates_attachment_content_type :image_1, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_2, default_url: "full-bar.jpg"
  validates_attachment_content_type :image_2, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_3, default_url: "pasta.jpg"
  validates_attachment_content_type :image_3, content_type: /\Aimage\/.*\Z/

  attr_accessor :rating, :num_reviews

  validates_uniqueness_of :name, scope: [:latitude, :longitude]
  after_validation :geocode, :if => lambda{ |obj| obj.address_changed? || obj.city_changed? || obj.zip_changed? }

  validates :name, :price, :address, :city, :state, :zip, :phone, :hours, :user, presence: true

  def self.has_types(types)
    types = types.map{ |t| "'" + t + "'"}.join(", ")
    self.find_by_sql(<<-SQL)
      SELECT
        DISTINCT(restaurants.*), types.name
      FROM
        restaurants
        JOIN restaurant_types
          ON restaurants.id = restaurant_types.restaurant_id
        JOIN types
          ON types.id = restaurant_types.type_id
        WHERE
          types.name IN (#{types})
    SQL
  end

  def full_address
    [address, city, state, zip].compact.join(", ")
  end

  def rating
    ratings = self.reviews.map { |rev| rev.rating }
    return nil if ratings.count < 1
    (( 0.0 + ratings.sum) / ratings.count).round
  end

  def num_reviews
    self.reviews.count
  end

  private

  def ensure_hours
    self.hours ||= "none"
  end
end
