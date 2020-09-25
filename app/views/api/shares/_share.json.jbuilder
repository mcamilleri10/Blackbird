json.key_format! camelize: :lower

json.extract! share, :id, :user_id, :num_shares_owned, :total_cost
json.companyId share.company.symbol



