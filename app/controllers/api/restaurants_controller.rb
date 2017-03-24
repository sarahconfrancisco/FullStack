FEATURES =
  {
    'delivery' => 'Delivery',
    'pick_up' => 'Take Out',
    'parking' => 'Parking',
    'reservations' => 'Takes Reservations',
    'outdoor' => 'Outdoor Seating',
    'credit' => 'Accepts Credit Cards',
    'bar' => 'Serves Alcohol',
    'byob' => 'BYOB'
  }.freeze

class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user_id ||= current_user.id
    if @restaurant.save!
      names = params[:types].split(', ').join(',').split(',')
      names.each do |name|
        type = Type.find_by(name: name) || Type.new(name: name)
        @restaurant.types.push(type) if type.save!
      end
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.show_page(params[:id])
    @features = []
    @restaurant.attributes.keys.each do |atr|
      @features.push(FEATURES[atr])  if @restaurant.attributes[atr] == true
    end
    @hours = JSON.parse(@restaurant.hours)
  end

  def update; end

  def index
    @features = params[:features]
    @types = params[:types]
    @location = params[:zip]
    relation = query_against(@types, @features, @location)
    @restaurants = Restaurant.end_query(relation) if relation
    @restaurants = Restaurant.highest_rated if !relation || @restaurants.empty?
    @lat = @restaurants.map(&:latitude).inject(:+) / @restaurants.length
    @lng = @restaurants.map(&:longitude).inject(:+) / @restaurants.length
  end

  def destroy; end

  private

  def type?(types)
    types && !types.empty?
  end

  def feature?(features)
    features && !features.empty?
  end

  def location?(location)
    location && !location.empty?
  end

  def query_against(type, feature, location)
    return nil unless type?(type) || feature?(feature) || location?(location)
    relation = Restaurant.search
    if type?(type)
      res_ids = RestaurantType.get_res_ids_from_types(type)
      relation = Restaurant.with_types(res_ids, relation)
    end
    relation = Restaurant.with_features(feature, relation) if feature?(feature)
    relation = Restaurant.with_location(location, relation) if location?(location)
    relation
  end

  def restaurant_params
    params.require(:restaurant).permit!
  end
end
