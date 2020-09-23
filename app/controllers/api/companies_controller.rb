class Api::CompaniesController < ApplicationController

  def create
    # debugger
    @company = Company.new(company_params)
    debugger
    if Company.find_by(name: @company.name)
      return nil;
    end
    if @company.save
      render :create
    else
      render nil;
    end
  end

  private

  def company_params
    params
      .require(:company)
      .permit(:name, :symbol)
  end

end