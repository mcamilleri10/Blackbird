class Api::CompaniesController < ApplicationController

  def show
    companySymbol = params[:id].upcase
    @company = Company.find_by(symbol: companySymbol)
    if @company
      render :show
    else
      render json: ['Company not found'], status: 404
    end
  end

  def create
    @company = Company.new(company_params)
    if Company.find_by(symbol: @company.symbol)
      # debugger
      return nil;
    elsif @company.save
      render :create
    else
      return nil;
    end
    return nil;
  end

  private

  def company_params
    params
      .require(:company)
      .transform_keys(&:underscore)
      .permit(:symbol)
  end

end