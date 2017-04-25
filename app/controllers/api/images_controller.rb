class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    if @image.save!
      @restaurant = Restaurant.show_page(@image.restaurant_id)
      render 'api/restaurants/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def update
    @image = Image.find(params[:id])
    if @image.update!(image_params)
      @restaurant = Restaurant.show_page(@image.restaurant.id)
      render 'api/restaurants/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def show; end

  def index
    @images = Image.find(:all, conditions: ["restaurant_id = ?", params[:restaurant_id]]).to_a
  end

  def destroy; end

  private

  def image_params
    params.require(:image).permit!
  end
end
