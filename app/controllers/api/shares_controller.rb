class Api::SharesController < ApplicationController


  def show
    @share = Share.includes(:company).find_by(id: params[:id])
    if @share
      render :show
    else
      render json: @share.errors.full_messages, status: 404
    end
  end

  def create
    symbol = params[:share][:companyId]
    @company = Company.find_by(symbol: symbol)

    if @company
      params[:share][:companyId] = @company.id
    else
      @company = Company.create(symbol: symbol)
      params[:share][:companyId] = @company.id
    end
    @share = Share.new(share_params)
    if @share.save
      render :create
    else
      render json: @share.errors.full_messages, status: 422
    end
  end

  def update
    symbol = params[:share][:companyId]
    @company = Company.find_by(symbol: symbol)

    @share = Share.find_by(id: params[:id])
    params[:share][:companyId] = @company.id
    if @share.update(share_params)
      render :show
    else
      render json: @share.errors.full_messages, status: 422
    end
  end

  def destroy
    @share = Share.find_by(id: params[:id])
    @share.destroy
    render :destroy
  end

  private

  def share_params
    params
      .require(:share)
      .transform_keys(&:underscore)
      .permit(:user_id, :company_id, :num_shares_owned, :total_cost)
  end

end