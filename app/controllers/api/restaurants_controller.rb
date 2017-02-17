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
    @features = @restaurant.attributes.keys.select { |atr| @restaurant.attributes[atr] == true }
    @types = @restaurant.types.map { |type| type.name }
  end

  private

  def restaurant_params
    params.require(:restaurant).permit!
  end

end
