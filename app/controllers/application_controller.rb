class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_token!
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_token(session[:session_token])
  end

  def logout
    current_user.reset_token! if logged_in?
		@current_user = nil
    session[:session_token] = nil
  end

  def require_login
    return nil if current_user
    render json: { base: ['You need to log in first'] }, status: 401
  end
end
