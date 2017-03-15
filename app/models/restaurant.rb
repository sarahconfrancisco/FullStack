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

  attr_accessor :location

  validates_uniqueness_of :name, scope: [:latitude, :longitude]
  after_validation :geocode, :if => lambda{ |obj| obj.address_changed? || obj.city_changed? || obj.zip_changed? }

  validates :name, :price, :address, :city, :state, :zip, :phone, :hours, :user, presence: true

  def self.search
    Restaurant.select("restaurants.*, COUNT( DISTINCT reviews.id) AS num_reviews, AVG(reviews.rating) AS avg_rating, array_agg(type_names.name) AS tys")
    .from('restaurants').joins(:types).joins(:reviews).joins("LEFT OUTER JOIN
              restaurant_types AS res_types
            ON
              res_types.restaurant_id = restaurants.id
            LEFT OUTER JOIN
              types AS type_names
            ON
              res_types.type_id = type_names.id")
  end

  def self.has_types_location_features(types, location, features)
    type_q_marks, type_names = sanitize_types(types)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    self.search.where("(restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?)
      AND types.name IN (#{type_q_marks}) AND #{features}",location, location, location, type_names)
      .group('restaurants.id', 'reviews.restaurant_id')
  end

  def self.has_types_location(types, location)
    type_q_marks, type_names = sanitize_types(types)
    self.search.where("(restaurants.city = ? OR restaurants.state = ? OR restaurants.zip = ?)
      AND types.name IN (#{type_q_marks})",location, location, location, type_names)
      .group('restaurants.id', 'reviews.restaurant_id')

  end

  def self.has_types_features(types, features)
    type_q_marks, type_names = sanitize_types(types)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    query = self.search.where("types.name IN (#{type_q_marks}) AND #{features}",type_names)
      .group('restaurants.id', 'reviews.restaurant_id')
  end

  def self.has_types(types)
    type_q_marks, type_names = sanitize_types(types)
    self.search.where("types.name IN (#{type_q_marks})",type_names)
      .group('restaurants.id', 'reviews.restaurant_id')

  end

  def self.has_features(features)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    self.search.where("#{features}")
      .group('restaurants.id', 'reviews.restaurant_id')

  end

  def self.has_features_location(features, location)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    self.search.where("(restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?) AND #{features}",location, location, location)
      .group('restaurants.id', 'reviews.restaurant_id')

  end


  def self.has_location(location)
    self.search.where("(restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?)",location, location, location)
      .group('restaurants.id', 'reviews.restaurant_id')

  end

  def self.highest_rated
    self.search.group("restaurants.id").order('AVG(reviews.rating) DESC').limit(10)
  end

  def self.show_page(id)
    self.search.where("restaurants.id = ?", id).group("restaurants.id")
  end

  def type_names
    self.tys.uniq
  end

  def full_address
    [address, city, state, zip].compact.join(", ")
  end

  def rating
    return nil if self.num_reviews < 1
    self.avg_rating.round
  end

  def self.sanitize_types(types)
    q_marks = []
    vals = []
    types.each do |ty|
      q_marks << "?"
      vals << ty
    end
    [q_marks.join(", "), vals]
  end
  private


  def ensure_hours
    self.hours ||= "{\"Mon\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Tue\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Wed\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Thu\":{\"start\":\"8 am\",\"end\":\"5 pm\"},\"Fri\":{\"start\":\"8 am\",\"end\":\"5 pm\"}}"
  end
end
