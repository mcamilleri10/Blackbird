class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:shares, :watchlists).find_by(id: params[:id])

    # @symbols = []
    # @user.watchlists.each do |watchlist|
    #   watchlist.companies.each do |company|
    #     @symbols << company.symbol
    #   end
    # end
    # debugger
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :create
    else
      render json: @user.errors.full_messages, status: 422 
    end
  end

  def update
    # debugger
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params
      .require(:user)
      .transform_keys(&:underscore)
      .permit(:username, :email, :password, :first_name, :last_name, 
        :available_funds)
  end
end