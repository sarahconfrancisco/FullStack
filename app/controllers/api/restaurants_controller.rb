class Api::RestaurantsController < ApplicationController

def create
  @restaurant = Restaurant.new(restaurant_params)
  if @restaurant.save!
    names = params[:type][:names].split(", ").join(",").split(",")
    names.each do |name|
      type = Type.new({name: name})
      if type.save!
        @restaurant.types.push(type)
      end
    end
  end
end

def show
  @restaurant = Restaurant.find(params[:id])
  @types = @restaurant.types.map { |type| type.name }
end

  private

  def restaurant_params
    params.require(:restaurant).permit!
  end

  def type_params
    params.require(:type).permit!
  end
end
