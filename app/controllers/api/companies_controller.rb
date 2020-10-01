class Api::CompaniesController < ApplicationController

  def show
    companySymbol = params[:id].upcase
    @company = Company.find_by(symbol: companySymbol)
    # debugger
    if @company
      render :show
    else
      render json: ['Company not found'], status: 404
    end
  end

  def create
    @company = Company.find_by(symbol: params[:company][:symbol])
    if @company
      render :show
    else 
      @company = Company.new(company_params)
      if @company.save
        render :create
      else
        render json: @company.errors.full_messages, status: 422
      end
    end
  end

  private

  def company_params
    params
      .require(:company)
      .transform_keys(&:underscore)
      .permit(:symbol)
  end

end