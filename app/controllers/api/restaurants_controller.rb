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
    @restaurant = Restaurant.show_page(params[:id]).first
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

  def update; end

  def index
    features = params[:features]
    types = params[:types].downcase.delete(' ').split(',')
    location = params[:zip]

    if (!features || features.empty?) && (!types || types.empty?) && (!location || location.empty?)
      @restaurants = Restaurant.highest_rated
    else
      relation = Restaurant.search

      if features && !features.empty?
        relation = Restaurant.has_features(features, relation)
      end

      if types && !types.empty?
        res_ids = RestaurantType.get_res_ids_from_types(types)
        relation = Restaurant.has_types(res_ids, relation)
      end

      if location && !location.empty?
        relation = Restaurant.has_location(location, relation)
      end
      @restaurants = Restaurant.end_query(relation)
    end
    @restaurants = Restaurant.highest_rated if @restaurants.empty?
    @types = params[:types]
    @location = params[:zip]
    @lat = @restaurants.map(&:latitude).inject(:+) / @restaurants.length
    @lng = @restaurants.map(&:longitude).inject(:+) / @restaurants.length
    @features = params[:features]
  end

  def destroy; end

  private

  def restaurant_params
    params.require(:restaurant).permit!
  end
end
