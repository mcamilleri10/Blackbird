json.key_format! camelize: :lower

json.extract! user, :id, :username, :email, :first_name, :last_name, 
  :available_funds

json.watchlistIds do
  json.array! user.watchlist_ids
end

json.sharesOwned do
  json.array! user.share_ids
end