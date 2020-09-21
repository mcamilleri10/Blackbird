class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
    if @user
      login!(@user)
      render :create
    else
      render json: ['Username or Password is Incorrect'], status: 422
    end
  end

  def destroy     # ANY ERRORS?
    logout! if current_user
  end

end