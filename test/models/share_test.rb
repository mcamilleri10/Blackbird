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
require 'test_helper'

class ShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
