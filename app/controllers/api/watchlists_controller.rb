class Api::WatchlistsController < ApplicationController

  def show
    # debugger
    @watchlist = Watchlist.includes(:companies).find_by(id: params[:id])
    if @watchlist
      render :show
    else
      render json: @watchlist.errors.full_messages, status: 404
    end
  end

  def create
    @watchlist = Watchlist.new(watchlist_params)
    if @watchlist.save
      render :create
    else
      render json: @watchlist.errors.full_messages, status: 422 
    end
  end

  def update
    @watchlist = Watchlist.find_by(id: params[:id])
    if @watchlist.update(watchlist_params)
      render :show
    else
      render json: @watchlist.errors.full_messages, status: 422 
    end
  end

  def destroy
    @watchlist = Watchlist.find_by(id: params[:id])
    @watchlist.destroy
  end

  private

  def watchlist_params
    params
      .require(:watchlist)
      .params.transform_keys(&:underscore)
      .permit(:name, :user_id)
  end

end