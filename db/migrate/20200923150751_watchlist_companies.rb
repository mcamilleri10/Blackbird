class WatchlistCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_companies do |t|
      t.integer :watchlist_id, null: false
      t.integer :company_id, null: false

      t.timestamps
    end
    add_index :watchlist_companies, :watchlist_id
    add_index :watchlist_companies, :company_id
    add_index :watchlist_companies, [:watchlist_id, :company_id], unique: true
  end
end
