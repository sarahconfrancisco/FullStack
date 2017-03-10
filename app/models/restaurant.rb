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

  def self.has_types_location_features(types, location, features)
    type_q_marks, type_names = sanitize_types(types)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    search = Restaurant.find_by_sql([<<-SQL, location, location, location, *type_names])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          restaurant_types
          ON
          restaurant_types.restaurant_id = restaurants.id
        LEFT JOIN
          types
          ON
          types.id = restaurant_types.type_id
      WHERE
        (restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?)
        AND types.name IN (#{type_q_marks}) AND #{features}

    SQL

  end

  def self.has_types_location(types, location)
    type_q_marks, type_names = sanitize_types(types)
    search = Restaurant.find_by_sql([<<-SQL, location, location, location, *type_names])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          restaurant_types
          ON
          restaurant_types.restaurant_id = restaurants.id
        LEFT JOIN
          types
          ON
          types.id = restaurant_types.type_id
      WHERE
        (restaurants.city = ? OR restaurants.state = ? OR restaurants.zip = ?)
        AND types.name IN (#{type_q_marks})

    SQL
  end

  def self.has_types_features(types, features)
    type_q_marks, type_names = sanitize_types(types)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    search = Restaurant.find_by_sql([<<-SQL, *type_names])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          restaurant_types
          ON
          restaurant_types.restaurant_id = restaurants.id
        LEFT JOIN
          types
          ON
          types.id = restaurant_types.type_id
      WHERE
         types.name IN (#{type_q_marks}) AND #{features}

    SQL
  end

  def self.has_types(types)
    type_q_marks, type_names = sanitize_types(types)
    search = Restaurant.find_by_sql([<<-SQL, *type_names])
      SELECT
        restaurants.*
      FROM
          reviews
        LEFT JOIN
          restaurants
        ON
            reviews.restaurant_id = restaurants.id
        LEFT JOIN
          restaurant_types
        ON
          restaurant_types.restaurant_id = restaurants.id
        LEFT JOIN
          types
        ON
          types.id = restaurant_types.type_id
      WHERE
        types.name IN (#{type_q_marks})
      GROUP BY
        restaurants.id
      ORDER BY
        AVG(reviews.rating) DESC
      LIMIT
        10

    SQL
  end

  def self.has_features(features)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    search = Restaurant.find_by_sql([<<-SQL])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          reviews
        ON
          reviews.restaurant_id = restaurants.id
      WHERE
        #{features}
      GROUP BY
        restaurants.id
      ORDER BY
        AVG(reviews.rating) DESC
      LIMIT
        10

    SQL
  end

  def self.has_features_location(features, location)
    features = features.map { |feat| 'restaurants.' + feat + ' = true' }.join(" AND ")
    search = Restaurant.find_by_sql([<<-SQL, location, location, location])
      SELECT
        restaurants.*
      FROM
        restaurants
      WHERE
        (restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?) AND #{features}


    SQL
  end


  def self.has_location(location)
    search = Restaurant.find_by_sql([<<-SQL, location, location, location])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          reviews
        ON
          reviews.restaurant_id = restaurants.id
      WHERE
        (restaurants.city LIKE ? OR restaurants.state LIKE ? OR restaurants.zip LIKE ?)
      GROUP BY
        restaurants.id
      ORDER BY
        AVG(reviews.rating) DESC
      LIMIT
        10
    SQL
  end

  def self.highest_rated
    Restaurant.find_by_sql([<<-SQL])
      SELECT
        restaurants.*
      FROM
        restaurants
        LEFT JOIN
          reviews
        ON
          reviews.restaurant_id = restaurants.id
      GROUP BY
        restaurants.id
      ORDER BY
        AVG(reviews.rating) DESC
      LIMIT
        10
    SQL
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
