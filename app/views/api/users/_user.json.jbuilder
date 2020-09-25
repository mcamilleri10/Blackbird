json.key_format! camelize: :lower

json.extract! user, :id, :username, :email, :first_name, :last_name, 
  :available_funds

json.watchlistIds do
  json.array! user.watchlist_ids
end

json.sharesOwned do
  json.array! user.share_ids
end


json.shares do
  user.shares.each do |share|
    json.set! share.id do
      json.extract! share, :id, :user_id, :num_shares_owned, :total_cost
      json.companyId share.company.symbol
    end
  end
end


# json.companies do
#   user.companies.each do |company|
#     json.set! company.symbol do
#       json.extract! company, :id, :name, :symbol
#     end
#   end
# end


# json.watchlists do
#   user.watchlists.each do |watchlist|
#     json.set! watchlist.id do
#       json.extract! watchlist, :id, :name, :user_id
#       json.companyIds do
#         json.array! watchlist.companies do |company|
#           company.symbol
#         end
#       end
#     end
#   end
# end


#  1: {
#         id: 1,
#         name: 'Really Cool Watchlist',
#         userId: 1,
#         companyIds: ['TTD', 'SNE', 'MSFT', 'AMZN']
