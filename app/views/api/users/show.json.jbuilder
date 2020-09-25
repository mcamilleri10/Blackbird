json.partial! '/api/users/user', user: @user


# json.extract! @shares

# @shares.each do |share|
#   # debugger
#   json.extract! share, :id, :user_id, :num_shares_owned, :total_cost
#   json.companyId share.company.symbol
# end