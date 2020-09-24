# == Schema Information
#
# Table name: watchlist_companies
#
#  id           :bigint           not null, primary key
#  watchlist_id :integer          not null
#  company_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class WatchlistCompany < ApplicationRecord

  validates :watchlist_id, :company_id, presence: true

  belongs_to :watchlist,
    foreign_key: :watchlist_id,
    class_name: :Watchlist
  
  belongs_to :company,
    foreign_key: :company_id,
    class_name: :Company


end
