class Api::WatchlistCompaniesController < ApplicationController

  def create
  end

  def destroy
  end

  private

  def watchlist_company_params
    params
      .require(:watchlist_company)
      .transform_keys(&:underscore)
      .permit(:watchlist_id, :company_id)
  end

end