class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id ||= current_user.id
    @review.restaurant_id ||= params[:id]
    if @review.save!
      @restaurant = Restaurant.show_page(@review.restaurant.id).first
      render 'api/restaurants/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update!(review_params)
      @restaurant = Restaurant.show_page(@review.restaurant.id).first
      render 'api/restaurants/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by({user_id: params[:user_id], restaurant_id: params[:restaurant_id]}) || Review.new()
    @user = @review.user || {id: nil, fname: "", lname: "", zip: ""}
  end

  def index
    @reviews = Restaurant.show_page(params[:res_id]).first.reviews.includes(:user)
  end

  def destroy
  end

  private
  def review_params
    params.require(:review).permit!
  end
end
