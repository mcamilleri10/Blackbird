# == Schema Information
#
# Table name: companies
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Company < ApplicationRecord

  validates :name, :symbol, presence: true

  has_many :shares,
    foreign_key: :company_id,
    class_name: :Share
  
  has_many :watchlists,
    foreign_key: :company_id,
    class_name: :Watchlist


end
