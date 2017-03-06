class Restaurant < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:city, :state, :zip]
  pg_search_scope :by_type, :associated_against => {
    :types => [:name]
  }
  belongs_to :user
  after_initialize :geocode, :reverse_geocode, :ensure_hours
  geocoded_by :full_address
  reverse_geocoded_by :latitude, :longitude, :address => :location
  has_many :restaurant_types
  has_many :types, through: :restaurant_types
  has_many :reviews
  has_attached_file :image_1, default_url: "empty_restaurant.jpg"
  validates_attachment_content_type :image_1, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_2, default_url: "full-bar.jpg"
  validates_attachment_content_type :image_2, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_3, default_url: "pasta.jpg"
  validates_attachment_content_type :image_3, content_type: /\Aimage\/.*\Z/

  attr_accessor :rating, :num_reviews, :location

  validates_uniqueness_of :name, scope: [:latitude, :longitude]
  after_validation :geocode, :if => lambda{ |obj| obj.address_changed? || obj.city_changed? || obj.zip_changed? }

  validates :name, :price, :address, :city, :state, :zip, :phone, :hours, :user, presence: true

  def self.has_types(types, location)
    PgSearch.multisearch("#{location}").includes(:searchable).map { |rec| rec.searchable}.select { |res| (res.type_names & types).any? }

  end

  def type_names
    self.types.map {|type| type.name }
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
    self.hours ||= "{\"Mon\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Tue\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Wed\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Thu\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Fri\":{\"start\":\"8 am\",\"end\":\"5 pm\"}}"
  end
end
