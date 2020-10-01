# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

WatchlistCompany.destroy_all
Watchlist.destroy_all
Share.destroy_all
User.destroy_all
Company.destroy_all



# companies
aapl = Company.create(symbol: "AAPL")
nflx = Company.create(symbol: "NFLX")
amzn = Company.create(symbol: "AMZN")
fb = Company.create(symbol: "FB")
goog = Company.create(symbol: "GOOG")

uber = Company.create(symbol: "UBER")
ttd = Company.create(symbol: "TTD")
amd = Company.create(symbol: "AMD")
msft = Company.create(symbol: "MSFT")
tsla = Company.create(symbol: "TSLA")
pton = Company.create(symbol: "PTON")
ba = Company.create(symbol: "BA")
dis = Company.create(symbol: "DIS")

aal = Company.create(symbol: "AAL")
dal = Company.create(symbol: "DAL")
ual = Company.create(symbol: "UAL")
luv = Company.create(symbol: "LUV")

# users
demo = User.create(username: "demo_username", email: "demo@blackbird.com", 
  first_name: "Demo", last_name: "User", password: "hunter12")

 # shares
share1 = Share.create(user_id: demo.id, company_id: aapl.id, num_shares_owned: 2, total_cost: 300)
share2 = Share.create(user_id: demo.id, company_id: msft.id, num_shares_owned: 3, total_cost: 600)
# share3 = Share.create(user_id: demo.id, company_id: ba.id, num_shares_owned: 10, total_cost: 800)
# share4 = Share.create(user_id: demo.id, company_id: amd.id, num_shares_owned: 4, total_cost: 200)


# watchlists
list1 = Watchlist.create(name: "FAANG", user_id: demo.id)
list2 = Watchlist.create(name: "Really Cool Watchlist", user_id: demo.id)
list3 = Watchlist.create(name: "Whoa Another Watchlist", user_id: demo.id)


# watchlist_companies
join1 = WatchlistCompany.create(watchlist_id: list1.id, company_id: aapl.id)
join2 = WatchlistCompany.create(watchlist_id: list1.id, company_id: nflx.id)
join3 = WatchlistCompany.create(watchlist_id: list1.id, company_id: amzn.id)
join4 = WatchlistCompany.create(watchlist_id: list1.id, company_id: fb.id)
join5 = WatchlistCompany.create(watchlist_id: list1.id, company_id: goog.id)

join6 = WatchlistCompany.create(watchlist_id: list2.id, company_id: uber.id)
join7 = WatchlistCompany.create(watchlist_id: list2.id, company_id: ttd.id)
join8 = WatchlistCompany.create(watchlist_id: list2.id, company_id: amd.id)
join9 = WatchlistCompany.create(watchlist_id: list2.id, company_id: msft.id)
join10 = WatchlistCompany.create(watchlist_id: list2.id, company_id: pton.id)
join11 = WatchlistCompany.create(watchlist_id: list2.id, company_id: tsla.id)

join12 = WatchlistCompany.create(watchlist_id: list3.id, company_id: aal.id)
join13 = WatchlistCompany.create(watchlist_id: list3.id, company_id: dal.id)
join14 = WatchlistCompany.create(watchlist_id: list3.id, company_id: ual.id)
join15 = WatchlistCompany.create(watchlist_id: list3.id, company_id: luv.id)