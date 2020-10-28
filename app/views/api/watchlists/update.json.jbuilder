json.key_format! camelize: :lower

json.extract! @watchlist, :id, :name, :user_id


json.companyIds do
  json.array! @symbols
end
