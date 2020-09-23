class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
    # debugger
    if @user
      # debugger
      login!(@user)
      render :create
    else
      # debugger
      render json: ['Unable to login with provided credentials.'], status: 422
    end
  end

  def destroy     # ANY ERRORS?
    logout! if current_user
  end

end