class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      json: ["Invalid email/password combination"], status: 401
    end
  end

  def destrory
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      json: ["Nobody is signed in"],
      status: 404
  end
end