# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Watchlist < ApplicationRecord

  validates :name, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
