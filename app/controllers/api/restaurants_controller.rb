class Api::RestaurantsController < ApplicationController

  def create
    debugger
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
    @restaurant = Restaurant.find(params[:id])
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
    @types = @restaurant.types.map { |type| type.name }
  end

  private

  def restaurant_params
    params.require(:restaurant).permit!
  end

end
