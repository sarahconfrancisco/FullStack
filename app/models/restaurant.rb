# == Schema Information
#
# Table name: restaurants
#
#  id                   :integer          not null, primary key
#  user_id              :integer          not null
#  name                 :string           not null
#  address              :string           not null
#  city                 :string           not null
#  state                :string           not null
#  zip                  :string           not null
#  phone                :string           not null
#  website              :string
#  delivery             :boolean          default("false")
#  pick_up              :boolean          default("false")
#  reservations         :boolean          default("false")
#  parking              :boolean          default("false")
#  outdoor              :boolean          default("false")
#  credit               :boolean          default("false")
#  bar                  :boolean          default("false")
#  byob                 :boolean          default("false")
#  hours                :text             not null
#  latitude             :float            not null
#  longitude            :float            not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  price                :integer
#  image_1_file_name    :string
#  image_1_content_type :string
#  image_1_file_size    :integer
#  image_1_updated_at   :datetime
#  image_2_file_name    :string
#  image_2_content_type :string
#  image_2_file_size    :integer
#  image_2_updated_at   :datetime
#  image_3_file_name    :string
#  image_3_content_type :string
#  image_3_file_size    :integer
#  image_3_updated_at   :datetime
#

class Restaurant < ActiveRecord::Base
  belongs_to :user
  has_many :restaurant_types
  has_many :types, through: :restaurant_types
  has_many :reviews
  has_many :images
  has_attached_file :image_1, default_url: 'breakfast.jpg'
  validates_attachment_content_type :image_1, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_2, default_url: 'lunch.jpg'
  validates_attachment_content_type :image_2, content_type: /\Aimage\/.*\Z/
  has_attached_file :image_3, default_url: 'dinner.jpg'
  validates_attachment_content_type :image_3, content_type: /\Aimage\/.*\Z/
  # after_initialize :geocode, :reverse_geocode, :ensure_hours
  # geocoded_by :full_address
  # reverse_geocoded_by :latitude, :longitude, :address => :location
  # attr_accessor :location
  # after_validation :geocode,
  # :if => lambda{ |obj| obj.address_changed? ||
  # obj.city_changed? || obj.zip_changed? }
  validates_uniqueness_of :name, scope: [:latitude, :longitude]
  validates :name, :price, :address, :city, :state, :zip,
            :phone, :hours, :user, presence: true

  def self.search
    Restaurant.select('restaurants.*,
                       COUNT( DISTINCT reviews.id) AS num_reviews,
                       AVG(reviews.rating) AS avg_rating,
                       array_agg(types.name) AS tys').from('restaurants')
              .joins('INNER JOIN reviews
                      ON reviews.restaurant_id = restaurants.id')
              .joins('INNER JOIN restaurant_types
                      ON restaurant_types.restaurant_id = restaurants.id
                      INNER JOIN types
                      ON restaurant_types.type_id = types.id')
  end

  def self.with_types(res_ids, relation)
    id_q_marks, ids = sanitize_array(res_ids)
    relation.where("restaurants.id IN (#{id_q_marks})", *ids)
  end

  def self.with_features(features, relation)
    features = features.map { |feat| 'restaurants.' + feat }
                       .join(' AND ').to_s
    relation.where("#{features}")
  end

  def self.with_location(location, relation)
    relation.where('(restaurants.city LIKE ? OR
                    restaurants.state LIKE ? OR
                    restaurants.zip LIKE ?)',
                   location, location, location)
  end

  def self.end_query(relation)
    relation.group('restaurants.id').limit(15).to_a
  end

  def self.highest_rated
    search.order('AVG(reviews.rating) DESC')
          .group('restaurants.id')
          .limit(10).to_a
  end

  def self.show_page(id)
    search.where('restaurants.id = ?', id).group('restaurants.id').to_a.first
  end

  def type_names
    tys.uniq
  end

  def full_address
    [address, city, state, zip].compact.join(', ')
  end

  def rating
    return nil if num_reviews < 1
    avg_rating.round
  end

  def self.sanitize_array(arr)
    q_marks = []
    vals = []
    arr.each do |el|
      q_marks << '?'
      vals << el
    end
    [q_marks.join(', '), vals]
  end
end
