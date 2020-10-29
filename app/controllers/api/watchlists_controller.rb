class Api::WatchlistsController < ApplicationController

  def show
    @watchlist = Watchlist.includes(:companies).find_by(id: params[:id])
    @symbols = []
    @watchlist.companies.each do |company|
      @symbols << company.symbol
    end
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
    @watchlist = Watchlist.includes(:companies).find_by(id: params[:id])
    debugger
    if params[:companyId]
      @company = Company.find_by(symbol: params[:companyId])
      @watchlist_company = WatchlistCompany.find_by(watchlist_id: params[:id], company_id: @company.id)
      if @watchlist_company
        @watchlist_company.destroy
        @symbols = []
        @watchlist.companies.each do |company|
          @symbols << company.symbol
        end
      else
        WatchlistCompany.create(watchlist_id: params[:id], company_id: @company.id)
      end
    elsif params[:name]
      if @watchlist.name != params[:name]
        if @watchlist.update(watchlist_params)
          debugger
          render :show
        end
      end
    end
    # if @watchlist.update(watchlist_params)
    #   render :show
    # else
    #   render json: @watchlist.errors.full_messages, status: 422 
    # end
  end

  def destroy
    @watchlist = Watchlist.find_by(id: params[:id])
    @watchlist.destroy
  end

  private

  def watchlist_params
    params
      .require(:watchlist)
      .transform_keys(&:underscore)
      .permit(:name, :user_id)
  end
    
end