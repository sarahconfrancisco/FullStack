class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id ||= current_user.id
    @review.restaurant_id ||= params[:id]
    if @review.save!
      restaurant = @review.restaurant
      render json: restaurant, include: [:reviews]
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      restaurant = @review.restaurant
      render json: restaurant, include: [:reviews]
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Review.find_by(restaurant_id: params[:id])
  end

  def destroy
  end

  private
  def review_params
    params.require(:review).permit!
  end
end
