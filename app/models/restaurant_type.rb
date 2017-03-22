class RestaurantType < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :type
  validates_uniqueness_of :type_id, scope: :restaurant_id
  validates :type, :restaurant, presence: true

  def self.get_res_ids_from_types(types)
    type_q_marks, type_names = sanitize_array(types)
    RestaurantType.select('restaurant_id').from('restaurant_types')
                  .joins(' JOIN types ON restaurant_types.type_id = types.id')
                  .where("types.name IN (#{type_q_marks})", *type_names)
                  .group('restaurant_id').to_a
                  .map(&:restaurant_id)
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
