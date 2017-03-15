class Api::RestaurantsController < ApplicationController

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user_id ||= current_user.id
    if @restaurant.save!
      names = params[:types].split(", ").join(",").split(",")
      names.each do |name|

        type = Type.find_by(name: name) || Type.new({name: name})

        if type.save!
          @restaurant.types.push(type)
        end

      end
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end

  end

  def show
    @restaurant = Restaurant.select("restaurants.*, COUNT( DISTINCT reviews.id) AS num_reviews, AVG(reviews.rating) AS avg_rating, array_agg(types.name) AS tys")
    .from('restaurants').joins(:types).joins(:reviews).where(id: params[:id]).group('restaurants.id').first
    @features = []
    @restaurant.attributes.keys.each do |atr|
      if @restaurant.attributes[atr] == true
        @features.push("Delivery") if atr == "delivery"
        @features.push("Take Out") if atr == "pick_up"
        @features.push("Parking") if atr == "parking"
        @features.push("Takes Reservations") if atr == 'reservations'
        @features.push("Outdoor Seating") if atr == 'outdoor'
        @features.push("Accepts Credit Cards") if atr == 'credit'
        @features.push("Serves Alcohol") if atr == 'bar'
        @features.push("BYOB") if atr == 'byob'
      end
    end
    @hours = JSON.parse(@restaurant.hours)
  end

  def update
  end

  def index
    features = params[:features]
    types = params[:types].downcase.delete(" ").split(",")
    location = params[:zip]
    @restaurants = []
    if features && types.length > 0 && location && location.length > 0
      @restaurants = Restaurant.has_types_location_features(types, location, features)
    elsif types.length > 0 && location && location.length > 0
      @restaurants = Restaurant.has_types_location(types, location)
    elsif types.length > 0 && features
      @restaurants = Restaurant.has_types_features(types, features)
    elsif features && location && location.length > 0
      @restaurants = Restaurant.has_features_location(features, location)
    elsif types.length > 0
      @restaurants = Restaurant.has_types(types)
    elsif features
      @restaurants = Restaurant.has_features(features)
    elsif location && location.length > 0
      @restaurants = Restaurant.has_location(location)
    end


    if !@restaurants || @restaurants.length < 1
      @restaurants = Restaurant.highest_rated.to_a
    end
    @types = params[:types]
    @location = params[:zip]
    if(@restaurants.length > 0)
      @lat = @restaurants.map {|res| res.latitude }.sum / @restaurants.length
      @lng = @restaurants.map {|res| res.longitude }.sum / @restaurants.length
    end
    @features = params[:features]
  end

  def destroy
  end

  private

  def restaurant_params
    params.require(:restaurant).permit!
  end

end
