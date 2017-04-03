class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @image.user_id ||= current_user.id
    @image.restaurant_id ||= params[:id]
    if @image.save!
      @restaurant = Restaurant.show_page(@image.restaurant.id)
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
    @images = Images.find_by(restaurant_id: params[:restaurant_id])
  end

  def destroy; end

  private

  def image_params
    params.require(:image).permit!
  end
end
