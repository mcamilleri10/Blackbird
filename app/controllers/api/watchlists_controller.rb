class Api::WatchlistsController < ApplicationController

  def show
    @watchlist = Watchlist.includes(:companies).find_by(id: params[:id])
    @symbols = []
    @watchlist.companies.each { |company| @symbols << company.symbol }
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
    if @watchlist.update(watchlist_params)
      if @watchlist.companies.length > params[:watchlist][:companyIds].length
        # remove company from watchlist
        companies = []
        @watchlist.companies.each { |company| companies << company.symbol }
        companies.reject!{ |company| params[:watchlist][:companyIds].include?(company) }
        symbol = Company.find_by(symbol: companies.first)
        @watchlist_company = WatchlistCompany.find_by(watchlist_id: @watchlist.id, company_id: symbol)
        @watchlist_company.destroy
      elsif @watchlist.companies.length < params[:watchlist][:companyIds].length
        # add company to watchlist
        company = Company.find_by(symbol: params[:watchlist][:companyIds].last)
        WatchlistCompany.create(watchlist_id: @watchlist.id, company_id: company.id)
      end
      @symbols = []
      params[:watchlist][:companyIds].each { |company| @symbols << company }
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
      .transform_keys(&:underscore)
      .permit(:name, :user_id)
  end
    
end