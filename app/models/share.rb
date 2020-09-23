# == Schema Information
#
# Table name: shares
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  company_id       :integer          not null
#  num_shares_owned :integer          not null
#  total_cost       :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Share < ApplicationRecord

  validates :user_id, :company_id, :num_shares_owned, :total_cost, presence :true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :company,
    foreign_key :company_id,
    class_name: :Company


end
